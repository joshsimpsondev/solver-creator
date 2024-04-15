import {getFirstSolver, getSolversList, removeSolver} from "@/app/solvers/solver-list";
export const dynamic = 'force-dynamic'

function createNewSolver(){
    const solverToCreate = getFirstSolver();
    console.log(removeSolver(solverToCreate));
    return Response.json(solverToCreate);
}

export {createNewSolver as GET};