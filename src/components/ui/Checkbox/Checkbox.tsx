import React, {useId} from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
    onClick?: React.MouseEventHandler;
    isChecked?: boolean;
    classes?: string;
    children?: React.ReactNode;
};
const Checkbox: React.FC<CheckboxProps> = ({onClick, classes, children, isChecked}) => {
    const uid = useId();

    return (
        <>
            <input
                className={styles.checkbox}
                type={"checkbox"}
                onClick={onClick}
                defaultChecked={isChecked}
                id={uid}
            />
            <label
                htmlFor={uid}
            />
        </>
    );
};

export default Checkbox;