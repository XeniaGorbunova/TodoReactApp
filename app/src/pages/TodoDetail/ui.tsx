import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useTodoDetailApi } from "./api";
import { TodoDetailCard } from "entities/todos/Detail";
import { GoBack } from "features/GoBack";
import { ChangeStatusTodoFeature } from "features/todos/ChangeStatus";
import { DeleteTodoFeature } from "features/todos/Delete";
import { withQuery } from "shared/ui/HOCs/withQuery";
import { todosApi } from "shared/api";

export const TodoDetail: FC = () => {
    const { id } = useParams();
    const { todo, isLoading, isError, error, refetch } = useTodoDetailApi({ id: id! });

    return withQuery(() => (
        <>
            <h2 className="text-center mb-4">Todo page</h2>
            <TodoDetailCard 
                {...todo!}
                actions={
                    <>
                    <GoBack />
                    <ChangeStatusTodoFeature 
                        id={todo!.id} 
                        status={todo!.status} 
                        invalidateQueriesKeys={[todosApi.queryKeys.TODOS_LIST_QUERY_KEY, todosApi.queryKeys.createTodoDetailQueryKey({id: todo!.id})]} />
                    <DeleteTodoFeature id={todo!.id} goBack />
                    </>
                }
            />
        </>
    ))({ isLoading, isError, error, refetch });
}