import { useQuery } from '@tanstack/react-query';
import { todosApi } from 'shared/api';

export const useTodoDetailApi = (...params: Parameters<typeof todosApi.queries.getTodoById>) => {
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: todosApi.queryKeys.createTodoDetailQueryKey(...params),
        queryFn: () => todosApi.queries.getTodoById(...params)
    });

    return {
        todo: data,
        isLoading,
        isError,
        error,
        refetch        
    }
};