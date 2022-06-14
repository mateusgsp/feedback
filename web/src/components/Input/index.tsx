import { ListPlus } from "phosphor-react";
import { FormEvent } from "react";

interface InputProps {
    theValue: (event: FormEvent) => void;
    onClickToDo: (event: FormEvent) => void;
}

export function Input(props: InputProps) {

    return (
        <div className="w-11/12">
            <h1 className="text-xl leading-6 flex items-center gap-2">Lista de Tarefas</h1>
            <div className="flex gap-2 mt-2">
                <input id="todo" onChange={props.theValue} className="text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none outline-none border p-1 flex-grow" placeholder="Adicione uma tarefa..."></input>
                <button onClick={props.onClickToDo} className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 flex-grow-0 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500" ><ListPlus className="h-6 w-6" /></button>
            </div>
        </div>
    )
}