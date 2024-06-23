import React, { Component } from 'react';
import CalculatorTipandTotalCost from './CalculatorTipandTotalCost';
import DisplayTipandTotalCost from './DisplayTipandTotalCost';
import './calculator.css';
import './calculatorResonsiveTablet.css';
import './calculatorResonsiveMobile.css';

class Calculator extends Component {
    render() {
        return (
            <div className='calculator'>
                <CalculatorTipandTotalCost />
                <DisplayTipandTotalCost />
            </div>
        );
    }
}

export default Calculator;