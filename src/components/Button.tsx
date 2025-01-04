import React from "react";
interface ButtonProps {
    text: string,
    customClass?: string,
    type: string,
    onClick: (type: string) => void
}
const Button: React.FC<ButtonProps> = (button): React.JSX.Element => {
    return (
        <button onClick={() => button.onClick(button.type)} className={`bg-puple hover:bg-puple/25 text-white rounded-xl px-8  py-4 ${button.customClass}`}>{button.text}</button>
    )
}
export default Button