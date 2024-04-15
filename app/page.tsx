import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Solver } from "./solvers/solver-list";
import RemoveButton from "@/components/solvers/remove-solver";
import MoveButton from "@/components/solvers/move-solver";

async function getData() {
  const res = await fetch('http://localhost:3000/api/solvers', {cache: 'no-store'})
  if(!res.ok){
    throw new Error("Failed to Get Solver Data");
  }
  return res.json();
}

export default async function HomePage() {
  const data = await getData();
  return (
    <main>
      <Table>
        <TableCaption>The current list of solvers to be added.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Hostname</TableHead>
            <TableHead>Location</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data.map((x: any) => (<SolverTableRow hostname={x.hostname} location={x.location} key={x.hostname} />))
          }
        </TableBody>
      </Table>
    </main>
  );
}

function SolverTableRow(props: Solver){
  const {hostname, location} = props;
  return (
    <TableRow>
      <TableCell className="font-medium"> {hostname} </TableCell>
      <TableCell className="flex items-center">
          <label className="pr-10 max-w-40 min-w-32">{location}</label>
          <MoveButton hostname={hostname} location={location}></MoveButton>
          <RemoveButton hostname={hostname} location={location}></RemoveButton>
      </TableCell>
    </TableRow>
  )
}
