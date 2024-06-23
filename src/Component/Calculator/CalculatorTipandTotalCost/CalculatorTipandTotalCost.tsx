import React, { Component } from 'react';
import icon_dollar from '../../../images/icon-dollar.svg';
import icon_person from '../../../images/icon-person.svg';

class CalculatorTipandTotalCost extends Component {
    render() {
        const template: number[] = [5, 10, 15, 25, 50]

        const valueTip = (): JSX.Element[] => {
            const valuesTip: JSX.Element[] = [];
            template.forEach((e, i) => {
                valuesTip.push(
                    <button className='value' type="button">{template[i]}%</button>
                )
            });
            return valuesTip;
        }

        return (
            <div className='calculator-Tip-Total-Cost'>
                <label className='bill-title' htmlFor="bill">Bill</label>
                <div className='bill-container'>
                    <img src={icon_dollar} alt="Icon Dollar" />
                    <input className='bill-writer' type="number" id="bill" />
                </div>

                <label className='select-tip-title' htmlFor="select-tip">Select Tip %</label>
                <div className='select-tip-container'>
                    {valueTip()}
                    <input className='value custom' type="number" id="select-tip" />
                </div>

                <label className='number-people-title' htmlFor="number-people">Number of People</label>
                <div className='number-people-container'>
                    <img src={icon_person} alt="Icon Person" />
                    <input className='number-people-writer' type="number" id="number-people" />
                </div>

            </div>
        );
    }
}

export default CalculatorTipandTotalCost;