import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import type { Todo } from "shared/model/Todo";
import { useDeleteTodo } from "./api";

interface DeleteProps extends Pick<Todo, 'id'> {
    goBack?: boolean
}

export const Delete: FC<DeleteProps> = ({ id, goBack }) => {
    const { mutateAsync, isPending } = useDeleteTodo({id});
    const navigate = useNavigate();
    const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (isPending) return

        await mutateAsync({id});
        if (goBack) {
            navigate('..', {relative: 'path'});
        }
    }
    
    return (
        <button type="button" onClick={clickHandler} className="btn btn-danger mx-1">
            Delete
        </button>
    );
}