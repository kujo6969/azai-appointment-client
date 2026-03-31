"use server";
export async function getGreetings() {
  const res = await fetch(process.env.API_ENDPOINT!, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
