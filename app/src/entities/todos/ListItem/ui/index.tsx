import classNames from 'classnames';
import type { Todo } from "shared/model/Todo";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

interface TodoItemProps extends Todo {
    index: number;
    actions?: ReactNode
}

export const TodoItem: FC<TodoItemProps> = ({
    id, title, status, index, actions
}) => {
    return (
        <Link to={id}>
        <li className={classNames('list-group-item', 'mb-2', styles.wr)}>
            <div className={classNames(styles.info, 'lead')}>
                <span className='text-muted'>{index + 1}.</span>
                <span className={classNames({ [styles.done]: status })}>
                {title}
                </span>
            </div>
            <div>{ actions }</div>
        </li>
        </Link>
    );
}