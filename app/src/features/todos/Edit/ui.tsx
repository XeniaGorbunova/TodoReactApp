import type { FC } from "react";

interface EditButtonProps {
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
} 

export const Edit: FC<EditButtonProps> = ({ setIsEditing }) => {
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setIsEditing(true);
    }
    
    return (
        <button type="button" onClick={clickHandler} className="btn btn-light mx-1">
            Edit
        </button>
    );
}