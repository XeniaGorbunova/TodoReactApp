import { useMutation, useQueryClient } from '@tanstack/react-query';
import { todosApi } from 'shared/api';
import type { Todo } from 'shared/model/Todo';

export const useChangeStatus = () => {
  const queryClient = useQueryClient();

   return useMutation({
     mutationFn: (
       ...params: Parameters<typeof todosApi.queries.changeTodoStatus>
     ) => todosApi.queries.changeTodoStatus(...params),
     onSuccess: (todo: Todo) => {
        queryClient.setQueryData(todosApi.queryKeys.createTodoDetailQueryKey({ id: todo.id}), todo);
        queryClient.invalidateQueries({queryKey: todosApi.queryKeys.TODOS_LIST_QUERY_KEY});
     },
   });
};