'use server'
import { z } from 'zod'
import { addSolver, checkSolverDir } from "@/app/solvers/solver-list"

const schema = z.object({
    hostname: z.string({
        invalid_type_error: "Invalid Hostname",
    }),
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

    // Mutate Data
    addSolver(validatedFields.data.hostname, validatedFields.data.location);

    // Let User know it was sucessful
    return {
        message: 'Solver Submitted',
    }
}