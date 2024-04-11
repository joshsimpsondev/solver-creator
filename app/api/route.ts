import { getSolversList, Solver } from "@/app/solvers/solver-list"
export const dynamic = 'force-dynamic';
// Todo: Clean this up so there is room for other kinds of requests. But for now this works.
export async function GET(request: Request) {
    return Response.json(JSON.stringify(getSolversList()));
}