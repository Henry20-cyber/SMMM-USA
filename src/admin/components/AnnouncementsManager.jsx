import { useEffect, useState, useCallback } from "react";
import { supabase } from "../../supabase/supabaseClient";
import useAuth from "../../hooks/useAuth";

export default function AnnouncementManager() {
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Wrap fetchAnnouncements in useCallback to prevent unnecessary re-renders
  const fetchAnnouncements = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("announcements")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      if (data) setAnnouncements(data);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  }, []); // No dependencies needed

  useEffect(() => {
    let isMounted = true;
    
    const loadAnnouncements = async () => {
      if (!isMounted) return;
      
      try {
        const { data, error } = await supabase
          .from("announcements")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        if (isMounted && data) setAnnouncements(data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    loadAnnouncements();

    // Cleanup function to prevent state updates on unmounted component
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array - run once on mount

  // CREATE OR UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingId) {
        const { error } = await supabase
          .from("announcements")
          .update({
            title,
            content,
            updated_at: new Date(),
          })
          .eq("id", editingId);

        if (error) throw error;
        setEditingId(null);
      } else {
        const { error } = await supabase
          .from("announcements")
          .insert({
            title,
            content,
            author_email: user.email,
          });

        if (error) throw error;
      }

      setTitle("");
      setContent("");
      
      // Refetch after successful operation
      await fetchAnnouncements();
    } catch (error) {
      console.error("Error saving announcement:", error);
    } finally {
      setLoading(false);
    }
  };

  // DELETE
  const deleteAnnouncement = async (id) => {
    if (!confirm("Are you sure you want to delete this announcement?")) return;
    
    setLoading(true);
    try {
      const { error } = await supabase
        .from("announcements")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      // Refetch after successful deletion
      await fetchAnnouncements();
    } catch (error) {
      console.error("Error deleting announcement:", error);
    } finally {
      setLoading(false);
    }
  };

  // EDIT
  const editAnnouncement = (announcement) => {
    setTitle(announcement.title);
    setContent(announcement.content);
    setEditingId(announcement.id);
    // Scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white rounded-xl border p-6 mt-8">
      <h2 className="text-xl font-bold mb-6">
        Announcement Manager
      </h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Announcement title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg px-4 py-3"
          required
          disabled={loading}
        />

        <textarea
          placeholder="Write announcement..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 h-32"
          required
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 text-white px-5 py-3 rounded-lg disabled:opacity-50"
        >
          {loading 
            ? "Processing..." 
            : editingId 
              ? "Update Announcement" 
              : "Publish Announcement"}
        </button>
        
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setTitle("");
              setContent("");
            }}
            className="ml-2 bg-gray-300 text-gray-700 px-5 py-3 rounded-lg"
          >
            Cancel Edit
          </button>
        )}
      </form>

      {/* ANNOUNCEMENTS */}
      <div className="mt-8 space-y-4">
        {announcements.length === 0 && !loading && (
          <p className="text-gray-500 text-center py-8">No announcements yet.</p>
        )}
        
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="border rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-lg">
                  {announcement.title}
                </h3>

                <p className="text-slate-600 mt-2 whitespace-pre-line">
                  {announcement.content}
                </p>

                <p className="text-xs text-slate-400 mt-3">
                  Posted by: {announcement.author_email}
                </p>
                
                {announcement.updated_at && (
                  <p className="text-xs text-slate-400">
                    Updated: {new Date(announcement.updated_at).toLocaleDateString()}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => editAnnouncement(announcement)}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
                  disabled={loading}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteAnnouncement(announcement.id)}
                  className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition"
                  disabled={loading}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}