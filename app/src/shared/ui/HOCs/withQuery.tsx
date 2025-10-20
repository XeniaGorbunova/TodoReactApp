import type { QueryObserverBaseResult } from '@tanstack/react-query';
import { withCenterLayout } from './withCenterLayout';
import { ShowRequestError } from '../ShowRequestError';
import { Spinner } from '../Spinner';

type WithQueryProps = Pick<QueryObserverBaseResult, 'isError' | 'isLoading' | 'error' | 'refetch'>;

export const withQuery = <P extends object>(WrappedComponent: React.ComponentType<P>) => (props: WithQueryProps & P) => {
    const { isError, isLoading, error, refetch, ...rest } = props;

    if (isError) {
        return withCenterLayout(ShowRequestError)({ error, refetch });
    }

    if (isLoading) {
        return withCenterLayout(Spinner)({});
    }

    return <WrappedComponent {...(rest as P)} />;
}