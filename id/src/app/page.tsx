// src/app/page.tsx

async function getMessage() {
  const res = await fetch("http://localhost:3000/api/hello", {
    cache: "no-store", // important in dev
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export default async function Home() {
  const data = await getMessage();

  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        Frontend talking to backend 👋
      </h1>

      <p>{data.message}</p>
    </main>
  );
}