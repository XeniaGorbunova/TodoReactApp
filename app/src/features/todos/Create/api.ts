import { useMutation, useQueryClient, type InvalidateQueryFilters } from "@tanstack/react-query";
import { todosApi } from "shared/api";
import type { Todo } from "shared/model/Todo";

export const useTodoCreateMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
    mutationFn: (...params: Parameters<typeof todosApi.queries.createTodo>) =>
      todosApi.queries.createTodo(...params),
    onSuccess() {
        queryClient.invalidateQueries(todosApi.queryKeys.TODOS_LIST_QUERY_KEY as InvalidateQueryFilters)
    }
  })};

export const useTodoEditMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (...params: Parameters<typeof todosApi.queries.editTodo>) =>
      todosApi.queries.editTodo(...params),
    onSuccess(todo: Todo) {
      queryClient.setQueryData(
        todosApi.queryKeys.createTodoDetailQueryKey({id: todo.id}), todo
      );
    },
  });
};  