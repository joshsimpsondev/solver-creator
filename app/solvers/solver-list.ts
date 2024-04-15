import fs from "fs"
import { join } from "node:path";

// Directories to write to 
const solverDirectory : string  = ("data");
const newSolversPath = join(solverDirectory, "newsolvers.json");

export interface Solver {
    hostname: string,
    location: string,
}

// Check if the solver directory exists if not create
export function checkSolverDir() : boolean {
    if(!fs.existsSync(solverDirectory)){
        fs.mkdir(solverDirectory, {recursive: true}, (error) => {
            console.log(error);
            if(error != null){
                return false;
            }
        });
    }
    return true;
}

// Add solver to a json list
export function addSolver(solver : Solver) : String {
    if(!checkSolverDir()){
        return "Could Not Create Directory";
    }
    // Create an empty TS object to add the read data to.
    let solverList : Solver[] = getSolversList();
    if(hostnameExists(solver, solverList)){
        return "The Hostname Already Exists";
    }
    solverList.push(solver);
    writeSolversList(solverList);
    return "Solver Added";
}

// Remove Solver from the list, I don't feel the need to check location since that isn't supposed to happen.
export function removeSolver(solver : Solver) : String {
    let solverList = getSolversList();
    for(let x = 0; x < solverList.length; x++){
        if(solverList[x].hostname == solver.hostname){
            solverList.splice(x,1);
            writeSolversList(solverList);
            return "Solver Removed";
        }
    }
    return "Solver not found";
}

// Remove Solver from the list, I don't feel the need to check location since that isn't supposed to happen.
export function removeSolverName(solverhostname : string) : String {
    let solverList = getSolversList();
    for(let x = 0; x < solverList.length; x++){
        if(solverList[x].hostname == solverhostname){
            solverList.splice(x,1);
            writeSolversList(solverList);
            return "Solver Removed";
        }
    }
    return "Solver not found";
}

// See if a hostname exists in a solverlist. 
export function hostnameExists(solver : Solver, solverList : Solver[]) :  boolean {
    for (const existing of solverList) {
        if (existing.hostname === solver.hostname){
            return true;
        }
    }

    return false;
}

// Read all the solvers in the json file
export function getSolversList() : Solver[] {
    let solverList : Solver [] = [];
    try {
        const jsonfile = fs.readFileSync(newSolversPath, 'utf-8')
        solverList = JSON.parse(jsonfile)
    } catch (error) {
        //Assume the file doesn't exist. Create it
        writeSolversList(solverList);
    }
    return solverList;
}

// Write new solvers to file
export function writeSolversList(solverList : Solver[]) : boolean {
    try {
        fs.writeFileSync(newSolversPath, JSON.stringify(solverList), 'utf-8');
        return true;
    } catch (error) {
        return false;
    }
}

// Get First Solver in list returns an empty solver if there is nothing.
export function getFirstSolver() : Solver {
    const solverList  = getSolversList();
    const firstSolver = solverList.at(0);
    if(firstSolver){
        return firstSolver;
    }
    return {hostname:"NoName",location:""};
}