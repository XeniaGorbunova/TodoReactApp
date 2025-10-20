import type { QueryKey } from "@tanstack/react-query";
import type { Todo } from "shared/model/Todo";

export const TODOS_LIST_QUERY_KEY: QueryKey = ['TODOS_LIST_QUERY_KEY'] as QueryKey;
export const createTodoDetailQueryKey = ({ id }: Pick<Todo, 'id'>): QueryKey => ['TODO_DETAIL_QUERY_KEY', id];