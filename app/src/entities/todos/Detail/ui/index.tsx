import type { FC, ReactNode } from "react";
import type { Todo } from "shared/model/Todo";
import styles from './styles.module.scss';
import classNames from "classnames";

interface DeatilProps extends Todo {
    actions?: ReactNode;
}

export const Detail: FC<DeatilProps> = ({ status, title, actions }) => {
    return (
        <div className={styles.wr}>
            <div className={classNames('card', styles.content)}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{status ? 'Done' : 'Not Done'}</p>
                    <div className={styles['actions-wr']}>{actions}</div>
                </div>
            </div>
        </div>        
    );
}