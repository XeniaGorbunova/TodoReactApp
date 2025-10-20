import { useMutation, useQueryClient, type QueryKey } from '@tanstack/react-query';
import { todosApi } from 'shared/api';

export interface UseChangeStatusParams {
  invalidateQueriesKeys?: QueryKey;
}

export const useChangeStatus = ({ invalidateQueriesKeys }: UseChangeStatusParams) => {
  const queryClient = useQueryClient();

   return useMutation({
     mutationFn: (
       ...params: Parameters<typeof todosApi.queries.changeTodoStatus>
     ) => todosApi.queries.changeTodoStatus(...params),
     onSuccess: () => {
       if (invalidateQueriesKeys?.length) {
         // Use Promise.all to invalidate all queries at once
         Promise.all(
           invalidateQueriesKeys.map((queryKey) =>
             queryClient.invalidateQueries({
               queryKey: queryKey as QueryKey,
               exact: true, // Be more specific
             })
           )
         );
       }
     },
   });
};