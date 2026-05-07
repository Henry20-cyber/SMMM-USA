// utils/session.js
export const getSessionId = () => {
  const existing = localStorage.getItem("sessionData");

  if (existing) {
    const parsed = JSON.parse(existing);

    const now = Date.now();
    const THREE_HOURS = 3 * 60 * 60 * 1000;

    if (now - parsed.timestamp < THREE_HOURS) {
      return parsed.sessionId; // ✅ reuse session
    }
  }

  // ❗ create new session
  const newSession = {
    sessionId: crypto.randomUUID(),
    timestamp: Date.now(),
  };

  localStorage.setItem("sessionData", JSON.stringify(newSession));

  return newSession.sessionId;
};