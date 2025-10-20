import type React from "react";
import styles from './styles.module.scss';

export const withCenterLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) => (props: P) => {
    return (
        <div className={styles.wr}>
            <WrappedComponent {...props} />
        </div>
    );
}