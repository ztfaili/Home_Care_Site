export const createContact = async (newContact) => {
  if(!newContact.name || !newContact.email || !newContact.phone || !newContact.message) {
    return { success: false, message: "Please fill in all fields." };
  }
  const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
  });
  return { success: true, message: "Contact created successfully!" };
};