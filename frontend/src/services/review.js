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

export const getReviews = async () => {
  const res = await fetch("/api/reviews");
  const data = await res.json();
  return { success: true, data: data.data } 
}