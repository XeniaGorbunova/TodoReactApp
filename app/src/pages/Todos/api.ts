import { useQuery } from '@tanstack/react-query';
import { todosApi } from 'shared/api';

export const useTodosApi = () => {
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: todosApi.queryKeys.TODOS_LIST_QUERY_KEY,
        queryFn: () => todosApi.queries.getTodos()
    });

    return {
        todos: data ?? [], isLoading, isError, error, refetch
    };
}