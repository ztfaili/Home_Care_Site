export const createService = async (newService) => {
  if(!newService.name || !newService.email || !newService.phone || !newService.address || !newService.serviceType || !newService.relationship || !newService.notes) {
    return { success: false, message: "Please fill in all fields." };
  }
  const res = await fetch("/api/services", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newService)
  });
  return { success: true, message: "Service created successfully!" };
}

export const getServices = async () => {
  const res = await fetch("/api/services");
  const data = await res.json();
  return { success: true, data: data.data } 
}