import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { FC } from 'react';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            throwOnError: true
        }
    }
});

export const TanStackQuery = (WrappedComponent: FC) => () => (
    <QueryClientProvider client={queryClient}>
        <WrappedComponent />
    </QueryClientProvider>
)