import React from 'react';
import appStyles from './App.module.scss';
import Button from "../ui/Button/Button";
import Checkbox from "../ui/Checkbox/Checkbox";
import Switch from "../ui/Switch/Switch";
import TestComponent from "../TestComponent/TestComponent";

const App: React.FC = () => {
    return (
        <div className={appStyles.app}>
            {/*<Switch/>*/}
            <Checkbox/>
            <Button>
                Test button
            </Button>
            <TestComponent/>
        </div>
    );
};

export default App;