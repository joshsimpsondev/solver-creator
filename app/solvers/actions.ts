'use server'
import { z } from 'zod'
import { addSolver, Solver, removeSolverName } from "@/app/solvers/solver-list"


const schema = z.object({
    hostname: z.string({
        invalid_type_error: "Invalid Hostname",
    }).min(1, "Hostname must not be empty"),
    location: z.string({
        invalid_type_error: "Invalid Location",
    }),
})

export default async function createSolver(prevState: any, formData : FormData) {
    const validatedFields = schema.safeParse({
        hostname: formData.get("hostname"),
        location: formData.get("location"),
    })

    if(!validatedFields.success){
        return {
            error: validatedFields.error.flatten().fieldErrors,
        }
    }


    // Attempt to create solver
    const newSolver : Solver = {hostname:validatedFields.data.hostname,location:validatedFields.data.location}
    let returnMessage = addSolver(newSolver);

    // Let User know it was sucessful or not
    return {
        message: returnMessage,
    }
}

export async function removeSolverAction(hostname : string){
    removeSolverName(hostname);
}