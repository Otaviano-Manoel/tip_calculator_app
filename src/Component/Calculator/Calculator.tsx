import React, { Component } from 'react';
import CalculatorTipandTotalCost from './CalculatorTipandTotalCost';
import DisplayTipandTotalCost from './DisplayTipandTotalCost';

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