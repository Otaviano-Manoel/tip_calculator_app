import React, { useEffect } from 'react';
import CalculatorTipandTotalCost from './CalculatorTipandTotalCost';
import DisplayTipandTotalCost from './DisplayTipandTotalCost';
import './calculator.css';
import './calculatorResonsiveTablet.css';
import './calculatorResonsiveMobile.css';
import { LOCAL_MANAGAR_DATA, useClientAccount } from '../../Context/ClientAccountContext';

function Calculator() {
    const { clientAccount } = useClientAccount()!;

    useEffect(() => {
        localStorage.setItem(LOCAL_MANAGAR_DATA, JSON.stringify(clientAccount));
    }, [clientAccount])
    return (
        <div className='calculator'>
            <CalculatorTipandTotalCost />
            <DisplayTipandTotalCost />
        </div>
    );
}

export default Calculator;