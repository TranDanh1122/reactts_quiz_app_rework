import React from "react";

import clsx from "clsx";
import { OptionType } from "../partials/config";
interface OptionProps {
    option: Option,
    status: string,
    onSelected: (id: number) => void
}
export default function Option({ option, status, onSelected }: OptionProps): React.JSX.Element {
    return (<>
        <div
            onClick={() => onSelected(option.id)}
            className={clsx("bg-white flex flex-nowrap justify-start items-center gap-8 p-5 rounded-xl w cursor-pointer border-2 border-solid", {
                "border-puple ": status === "select",
                "border-red": status === "false",
                "border-green": status === "true",
                "hover:border-puple border-white": status === "default"
            })}>
            <span className={clsx("py-4 px-5 bg- text-heads bg-gray rounded-md", {
                "bg-puple text-white ": status === "select",
                "bg-red text-white": status === "false",
                "bg-green text-white": status === "true"
            })}>{OptionType[option.id]}</span>
            <span className="text-heads mb:bodym">{option.content}</span>
        </div>

    </>)
}
