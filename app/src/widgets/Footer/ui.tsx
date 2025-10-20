import type { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="mt-auto mb-3">
            <hr />
            <div className="text-secondary">
                @Copyright: { (new Date()).getFullYear()}
            </div>
        </footer>
    );
}