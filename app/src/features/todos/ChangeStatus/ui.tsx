import type { FC } from "react";
import type { Todo } from "shared/model/Todo";
import { useChangeStatus, type UseChangeStatusParams } from "./api";

type ChangeStatusProps  = Pick<Todo, 'id' | 'status'> & UseChangeStatusParams;

export const ChangeStatus: FC<ChangeStatusProps> = ({id, status, invalidateQueriesKeys}) => {
    const { mutateAsync, isPending } = useChangeStatus({ invalidateQueriesKeys });
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