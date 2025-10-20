import type { FC } from "react";
import styles from './styles.module.scss';
import classNames from "classnames";

type LogoSizeTypes = 'S' | 'M' | 'L';
interface LogoProps {
    size: LogoSizeTypes;
}

export const Logo: FC<LogoProps> = ({ size }) => {
    return <div className={classNames(styles['logo-wr'], styles[`size_${size}`])} >let&apos;s do</div>;
}