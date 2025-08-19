export const createReview = async (newReview) => {
  if(!newReview.rating || !newReview.name || !newReview.content) {
    return { success: false, message: "Please fill in all fields." };
  }
  const res = await fetch("/api/reviews", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newReview)
  });
  return { success: true, message: "Review created successfully!" };
}