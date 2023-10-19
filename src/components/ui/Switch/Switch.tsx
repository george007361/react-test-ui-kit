import React, {useId} from 'react';

import styles from './Switch.module.scss';

interface SwitchProps {

}

const Switch: React.FC<SwitchProps> = React.memo(() => {
    const uid = useId();
    return (
        <>
            <label className={styles.switch}>
                <input type={"checkbox"}/>
                <span className={styles.switch__field}>
                    <div className={styles.switch__toggle}></div>
                </span>
            </label>
        </>
    );
});

export default Switch;