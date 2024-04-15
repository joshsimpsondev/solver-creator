import {getSolversList} from "@/app/solvers/solver-list";

function solversList() {
    return Response.json(getSolversList());
}

export { solversList as GET }