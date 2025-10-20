import type { FC } from "react";
import type { QueryObserverBaseResult } from '@tanstack/react-query';
import { FiAlertCircle } from 'react-icons/fi';
import { getMessageFromError } from "shared/lib/helpers";
import classNames from "classnames";
import styles from './styles.module.scss';

interface ShowRequestErrorProps extends Pick<QueryObserverBaseResult, 'refetch'> {
    error: unknown;
}

export const ShowRequestError: FC<ShowRequestErrorProps> = ({ error, refetch }) => {
    return (
        <div className={classNames('p-4', styles.wr)}>
            <FiAlertCircle size={48} />
            <p className="mb-2 text-secondary-emphasis">Network error</p>
            <p className="mb-4 h5">{getMessageFromError(error)}</p>
            <button type="button" className="btn btn-primary" onClick={() => refetch()}>
                Try again
            </button>
        </div>
    );
}