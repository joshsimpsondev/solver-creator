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
export function addSolver(hostname : string, location : string) : String {
    if(!checkSolverDir()){
        return "Could Not Create Directory";
    }
    // Create an empty TS object to add the read data to.
    let solverList : Solver[] = getSolversList();
    const newSolver : Solver = {hostname: hostname, location: location};
    if(hostnameExists(newSolver, solverList)){
        return "The Hostname Already Exists";
    } else {
        solverList.push(newSolver);
    }
    writeSolversList(solverList);
    return "Solver Added";
}

// Remove Solver from the list, I don't feel the need to check location since that isn't supposed to happen.
export function removeSolver(solver : Solver) : String {
    let solverList : Solver[] = getSolversList();
    let solverIndex = solverList.indexOf(solver);
    if(solverIndex > -1){
        solverList.splice(solverIndex,1);
        return "Solver Removed";
    }
    return "Solver not found";
}

// See if a hostname exists in a solverlist. 
export function hostnameExists(solver : Solver, solverList : Solver[]) :  boolean {
    let found : boolean = false;
    solverList.forEach(solver => {
        if(solver.hostname === solver.hostname)
            found = true;
            return;
    });
    return found;
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