import { Eraser } from "phosphor-react";

interface ListItemProps {
    item: string;
    done: boolean;
    toggleToDo: () => void;
    deleteToDo: () => void;
}

export const ListItem = (props: ListItemProps) => {
    return (
        <div className="my-6 w-full flex flex-row gap-2 items-stretch">
            {!props.done ?
                <li onClick={props.toggleToDo} className="flex-grow border-b border-zinc-600">{props.item}</li> :
                <li onClick={props.toggleToDo} className="flex-grow border-b border-zinc-800 text-zinc-800 line-through">{props.item}</li>}
            <button onClick={props.deleteToDo} className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 flex-grow-0 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500" ><Eraser className="h6 " /></button>
        </div>
    )
}