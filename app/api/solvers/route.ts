import {getSolversList} from "@/app/solvers/solver-list";
export const dynamic = 'force-dynamic'
export const revalidate = 0;

function solversList() {
    return Response.json(getSolversList());
}

export { solversList as GET }