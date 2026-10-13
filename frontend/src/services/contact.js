// Empty string = same-origin (Vite proxy locally, or a Render /api/* rewrite).
// Set VITE_API_URL (no trailing slash) to call the backend directly instead.
const API = import.meta.env.VITE_API_URL || "";

export const createContact = async (newContact) => {
  let res;
  try {
    res = await fetch(`${API}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    });
  } catch {
    throw new Error("Could not reach the server. Please try again.");
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.success !== true) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }
  return data;
};