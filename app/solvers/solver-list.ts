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
export function addSolver(hostname : string, location : string) : boolean {
    if(!checkSolverDir()){
        return false;
    }
    // Create an empty TS object to add the read data to.
    let solverList : Solver[] = [];
    const newSolver : Solver = {hostname: hostname, location: location};
    try {
        const jsonfile = fs.readFileSync(newSolversPath, "utf-8");
        solverList = JSON.parse(jsonfile);
        solverList.push(newSolver);
        fs.writeFileSync(newSolversPath, JSON.stringify(solverList), 'utf-8');
    } catch (error) {
        //Assume file doesn't exist
        solverList.push(newSolver);
        fs.writeFileSync(newSolversPath, JSON.stringify(solverList), 'utf-8');
    }
    return true;
}

