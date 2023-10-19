import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    onClick?: React.MouseEventHandler;
    isDisabled?: boolean;
    classes?: string;
    children?: React.ReactNode;
};
const Button: React.FC<ButtonProps> = ({onClick, classes, children, isDisabled}) => {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={`${styles.btn} ${classes ? classes : ''}`}
        >
            {children}
        </button>
    );
};

export default Button;