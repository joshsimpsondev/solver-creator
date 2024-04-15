async function getSolverListData() {
    const res = await fetch('http://localhost:3000/api/solvers');
    if (!res.ok) {
        throw new Error("Failed to Fetch Data");
    }
    return res.json();
}

export default async function SolverTable() {
    const data = await getSolverListData();
    return (
        <div>
        </div>
    )
}


