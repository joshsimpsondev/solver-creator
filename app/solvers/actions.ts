'use server'
import { z } from 'zod'
import { addSolver, Solver, removeSolver, moveSolverToFirst } from "@/app/solvers/solver-list"
import { revalidatePath } from 'next/cache'


const schema = z.object({
    hostname: z.string({
        invalid_type_error: "Invalid Hostname",
    }).min(1, "Hostname must not be empty"),
    location: z.string({
        invalid_type_error: "Invalid Location",
    }),
})

export default async function createSolverAction(prevState: any, formData : FormData) {
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

export async function removeSolverAction(formData: FormData){
    const validatedFields = schema.safeParse({
        hostname: formData.get("hostname"),
        location: formData.get("location"),
    })

    if(!validatedFields.success){
        return {
            error: validatedFields.error.flatten().fieldErrors,
        }
    }
    // Attempt to remove solver
    const deletedSolver : Solver = {hostname:validatedFields.data.hostname,location:validatedFields.data.location}
    removeSolver(deletedSolver);
    revalidatePath("/")
}

export async function moveUpSolverAction(formData: FormData){
    const validatedFields = schema.safeParse({
        hostname: formData.get("hostname"),
        location: formData.get("location"),
    })
    if(!validatedFields.success){
        return {
            error: validatedFields.error.flatten().fieldErrors,
        }
    }
    // Attempt to move solver
    const movedSolver : Solver = {hostname:validatedFields.data.hostname,location:validatedFields.data.location}
    moveSolverToFirst(movedSolver);
    revalidatePath("/");
}