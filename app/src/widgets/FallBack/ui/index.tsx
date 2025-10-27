import type { FC } from "react";
// import styles from './styles.module.scss';

export interface FallBackComponentProps {
    error: Error;
}

export const FallBack: FC<FallBackComponentProps> = ({ error }: FallBackComponentProps) => {
    return (
        <div className="alert alert-danger" role="alert">
            Something went wrong {error.message}
        </div>
    );
}