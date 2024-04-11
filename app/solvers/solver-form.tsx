'use client'
import { useFormState, useFormStatus } from "react-dom"
import createSolver from "@/app/solvers/actions";

const initialState = {
    message:  '',
}

export default function SolverForm() {
    const {pending} = useFormStatus();
    const [state, formAction] = useFormState(createSolver, initialState);

    // This prevents the form from being submitted by Enter.
    const handleKeyDown = (event : React.KeyboardEvent)=> {
        if(event.key === 'Enter' || event.key === 'NumpadEnter'){
            event.preventDefault();
        }
    }

    return (
        <form action={formAction} className="w-full max-w-lg">
        <main className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="hostname">
                        Solver Hostname
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="hostname" type="text" placeholder="" onKeyDown={handleKeyDown} name="hostname"/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-solver-location">
                        Solver Location
                    </label>
                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="location" name="location">
                        <option>San Diego</option>
                        <option>Virginia</option>
                        <option>Seattle</option>
                    </select>
                </div>
                <div className="w-full md:w-1/2 px-3 py-4 mb-6 md:mb-0">
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                            type="submit" disabled={pending}>
                            Add Solver
                    </button>
                    <p aria-live="polite" className="py-3">
                        {state?.message}
                    </p>
                </div>

            </div>
        </main>
        </form>
    )
}