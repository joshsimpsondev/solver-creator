import {getFirstSolver, getSolversList, removeSolver} from "@/app/solvers/solver-list";
export const dynamic = 'force-dynamic'
export const revalidate = 0;

function kickstartNewSolver(){
    const solverToCreate = getFirstSolver();
    console.log(removeSolver(solverToCreate));
    return Response.json(solverToCreate);
}

export {kickstartNewSolver as GET};