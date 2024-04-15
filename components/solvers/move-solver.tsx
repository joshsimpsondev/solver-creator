'use client'
import { moveUpSolverAction } from "@/app/solvers/actions"
import { Solver } from "@/app/solvers/solver-list"
import { Button } from "@/components/ui/button";

export default function RemoveButton(props : Solver){
    const {hostname, location} = props;

    return (
        <form className= "pr-2" action={moveUpSolverAction}>
            <input type="hidden" name="hostname" value={hostname}/>
            <input type="hidden" name="location" value={location}/>
            <Button className="px-3" variant="default" type='submit'>Promote</Button>
        </form>
    )
}