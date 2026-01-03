const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function submitOrder(payload) {
  const res = await fetch(`${API_BASE}/api/kitchen/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to submit order");
  }

  return res.json();
}
