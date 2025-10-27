import type { FC } from "react";
import type { Todo } from "shared/model/Todo";
import { useChangeStatus } from "./api";

type ChangeStatusProps  = Pick<Todo, 'id' | 'status'>;

export const ChangeStatus: FC<ChangeStatusProps> = ({id, status}) => {
    const { mutateAsync, isPending } = useChangeStatus();
    const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (isPending) return
        
        await mutateAsync({id, status: !status});
    }

    return (
        <button type="button" onClick={clickHandler} className="btn btn-primary mx-1">
            {status ? 'Undone' : 'Done'}
        </button>
    );
}