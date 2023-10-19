import React from 'react';
import styles from './TestComponent.module.scss'
import '../ui/Button/Button';
import Button from "../ui/Button/Button";

const TestComponent = () => {
    return (
        <div className={styles.test_component}>

            <div className={styles.container__hor}>
                <div className={styles.avatar}>
                    Avatar mock
                </div>

                <div className={styles.container__vert}>
                    <div>
                        Какой нибудь контент. Какой нибудь контент.Какой нибудь контент.Какой нибудь контент.Какой
                        нибудь
                        контент.Какой нибудь контент.
                    </div>
                    <div className={styles.navbar}>
                        <Button
                            classes={styles.btn__one}
                        >
                            Красная
                        </Button>

                        <Button
                            classes={styles.btn__two}
                        >
                            Синяя
                        </Button>

                        <Button>
                            Дефолтная
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestComponent;