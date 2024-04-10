import Image from "next/image";

async function getSolversList(){
    const res = await fetch('https://127.0.0.1:8090/api/collections/solvers?page=1&perPage=30');
    const data = await res.json();
    return data?.items as any[];
}

export default function SolverPage() {
    return (
        <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-solver-Hostname">
                        Solver Hostname
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-solver-name" type="text" placeholder=""/>
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-solver-location">
                        Solver Location
                    </label>
                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-solver-location">
                        <option>San Diego</option>
                        <option>Virginia</option>
                        <option>Seattle</option>
                    </select>
                </div>
            </div>
        </form>
    );
}