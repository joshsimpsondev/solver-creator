'use client'
import { removeSolverAction } from "@/app/solvers/actions"
import { Solver } from "@/app/solvers/solver-list"
import { Button } from "@/components/ui/button";

export default function MoveButton(props : Solver){
    const {hostname, location} = props;

    return (
        <form action={removeSolverAction}>
            <input type="hidden" name="hostname" value={hostname}/>
            <input type="hidden" name="location" value={location}/>
            <Button variant='destructive' type='submit'>Delete</Button>
        </form>
    )
}