import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";


export function CloseButton() {
    return (
        <Popover.Button className="absolute top-5 right-5 text-zinc-600 hover:text-zinc-700 focus:outline-none focus:ring-brand-500 focus:ring-1"
            title="Fechar Formulário de Feedback">
            <X weight="bold" className="h-4 w-4" />
        </Popover.Button>
    )
}