import type { FC } from "react";

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