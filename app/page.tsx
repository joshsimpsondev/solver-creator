async function getData() {
  const res = await fetch('http://localhost:3000/api');

  if(!res.ok){
    throw new Error("Failed to Fetch Data");
  }

  return res.json();
}

export default async function HomePage() {
  const data = await getData();
  return (
    <main>
      <label> {data} </label>
    </main>
  );
}
