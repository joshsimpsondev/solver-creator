import SolverTable from "./table/solver-table";
async function getSolverListData() {
  const res = await fetch('http://localhost:3000/api?action=solverlist');

  if(!res.ok){
    throw new Error("Failed to Fetch Data");
  }

  return res.json();
}

export default async function HomePage() {
  const data = await getSolverListData();
  return (
    <main>
      <label> {data} </label>
      <SolverTable></SolverTable>
    </main>
  );
}
