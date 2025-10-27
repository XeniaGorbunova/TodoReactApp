import type { FC, ReactNode } from "react";
import type { Todo } from "shared/model/Todo";
import styles from './styles.module.scss';
import classNames from "classnames";

interface DeatilProps extends Todo {
    actions?: ReactNode;
}

export const Detail: FC<DeatilProps> = ({ status, title, actions, description }) => {
    return (
        <div className={styles.wr}>
            <div className={classNames('card', styles.content)}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    {description 
                        ? <p className="card-text">{description}</p>
                        : null
                    }
                    <p className={classNames('card-text', status ? 'text-success' : 'text-warning')}><b>{status ? 'Done' : 'Not Done'}</b></p>
                    <div className={styles['actions-wr']}>{actions}</div>
                </div>
            </div>
        </div>        
    );
}