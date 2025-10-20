import { TodosListItem } from "entities/todos/ListItem";
import type { FC } from "react";
import { useTodosApi } from "./api";
import { ChangeStatusTodoFeature } from "features/todos/ChangeStatus";
import { DeleteTodoFeature } from "features/todos/Delete";
import { withQuery } from "shared/ui/HOCs/withQuery";
import { todosApi } from "shared/api";
import { TodoCreateForm } from "features/todos/Create";

export const Todos: FC = () => {
    const { todos, isLoading, isError, error, refetch } = useTodosApi();

    return withQuery(() => (
        <>
        <h2 className="text-center mb-4">Todos Page</h2>
        <TodoCreateForm />
        <ul className="list-group mb-4">
            {todos.map((todo, index) => 
            <TodosListItem 
            key={todo.id} 
            {...todo} 
            index={index} 
            actions={<>
                <ChangeStatusTodoFeature id={todo.id} status={todo.status} invalidateQueriesKeys={[todosApi.queryKeys.TODOS_LIST_QUERY_KEY]} />
                <DeleteTodoFeature id={todo.id} />
            </>} 
            />)}
        </ul>
        </>
    ))({ isError, isLoading, error, refetch });
}