import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosApi } from "shared/api";
import type { Todo } from "shared/model/Todo";

export const useDeleteTodo = ({ id }: Pick<Todo, 'id'>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      ...params: Parameters<typeof todosApi.queries.deleteTodo>
    ) => todosApi.queries.deleteTodo(...params),
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: todosApi.queryKeys.createTodoDetailQueryKey({
          id,
        }),
      });

      // Invalidate the list to refetch
      queryClient.invalidateQueries({
        queryKey: todosApi.queryKeys.TODOS_LIST_QUERY_KEY,
      });
    },
  });
};
