import { TodosListItem } from "entities/todos/ListItem";
import { useMemo, useState, type FC } from "react";
import { useTodosApi } from "./api";
import { ChangeStatusTodoFeature } from "features/todos/ChangeStatus";
import { DeleteTodoFeature } from "features/todos/Delete";
import { withQuery } from "shared/ui/HOCs/withQuery";
import { TodoCreateForm } from "features/todos/Create";
import { TodosFilter } from "features/todos/Filter";
import { type FilterType } from "features/todos/Filter/ui";
import type { Todo } from "shared/model/Todo";

export const Todos: FC = () => {
    const { todos, isLoading, isError, error, refetch } = useTodosApi();
    const [ filter, setFilter ] = useState<FilterType>('All');

    // Filter todos based on current filter
    const filteredTodos = useMemo<Todo[]>(() => {
        switch (filter) {
            case 'Done':
                return todos.filter(todo => todo.status);
            case 'Not done':
                return todos.filter(todo => !todo.status);
            case 'All':
            default:
                return todos;
        }
    }, [todos, filter]);

    return withQuery(() => (
        <>
        <h2 className="text-center mb-4">Todos Page</h2>
        <TodoCreateForm isEditing={false} />
        <TodosFilter filter={filter} setFilter={setFilter} />
        <ul className="list-group mb-4">
            {filteredTodos.map((todo, index) => 
            <TodosListItem 
            key={todo.id} 
            {...todo} 
            index={index} 
            actions={<>
                <ChangeStatusTodoFeature id={todo.id} status={todo.status} />
                <DeleteTodoFeature id={todo.id} />
            </>} 
            />)}
        </ul>
        </>
    ))({ isError, isLoading, error, refetch });
}