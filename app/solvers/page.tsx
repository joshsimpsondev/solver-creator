import React from "react";

/*
async function getSolversList(){
    const res = await fetch('');
    const data = await res.json();
    return data?.items as any[];
}
*/

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
                <div className="w-full md:w-1/2 px-3 py-4 mb-6 md:mb-0">
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
                        Add Solver to List
                    </button>
                </div>
            </div>
        </form>
    );
}