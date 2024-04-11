'use server'
import { z } from 'zod'
import { addSolver, checkSolverDir } from "@/app/solvers/solver-list"
import { error } from 'console'

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

    // Don't allow empty hostnames
    if(validatedFields.data.hostname === ""){
        return {
            message: "Empty hostnames not allowed"
        }
    }

    // Attempt to create solver
    let returnMessage : String = addSolver(validatedFields.data.hostname.trim(), validatedFields.data.location);

    // Let User know it was sucessful or not
    return {
        message: returnMessage,
    }
}