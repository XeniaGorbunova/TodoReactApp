import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { FC } from 'react';
import toast from 'react-hot-toast';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            notifyOnChangeProps: ['data', 'error']
            // throwOnError: true - we have to switch on to use ErrorBoundary
        }
    },
    // allows us to see a toaster once what a fetch was failed
    queryCache: new QueryCache({
    onError: (error) =>
      toast.error(`Something went wrong: ${error.message}`),
  }),
});

export const TanStackQuery = (WrappedComponent: FC) => () => (
    <QueryClientProvider client={queryClient}>
        <WrappedComponent />
    </QueryClientProvider>
)