'use client'
import { removeSolverAction } from "@/app/solvers/actions";
import { Button } from "@/components/ui/button"
import { useTransition } from "react";

export default function RemoveButton(hostname : string){
    const [isPending, startTransition] = useTransition()

    function removeSolverTransition(){
        startTransition( () => {
            removeSolverAction(hostname)
        })
    }
    return (
        <button id={hostname} action={removeSolverTransition}></button>
    )
}