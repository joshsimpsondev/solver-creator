import { getSolversList, Solver } from "@/app/solvers/solver-list"
import { type NextRequest } from "next/server";

export const dynamic = 'force-dynamic';
// Todo: Clean this up so there is room for other kinds of requests. But for now this works.
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const action = searchParams.get('action');

    if(action == "solverlist"){
        return Response.json(JSON.stringify(getSolversList()));
    }

}