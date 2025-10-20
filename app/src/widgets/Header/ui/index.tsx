import type { FC } from "react";
import classNames from "classnames";
import styles from './styles.module.scss';
import { Link, NavLink } from "react-router-dom";
import { Logo } from "shared/ui/Logo";

export const Header: FC = () => {
    return (
        <>
        <header className={styles.header}>
            <Link to='/'>
                <Logo size="L" />
            </Link>
            <div className="d-flex align-utems-center ms-auto">
                <NavLink className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive})} to="/todos">
                    Todos
                </NavLink>
            </div>
        </header>
        <hr />
        </>
    );
}