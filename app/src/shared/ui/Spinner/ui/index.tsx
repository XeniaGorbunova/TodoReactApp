import type { FC } from "react";
import styles from './styles.module.scss';

export const Spinner: FC = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className={styles['lds-ripple']}>
                <div />
                <div />
            </div>
        </div>
    );
}