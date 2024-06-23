import React, { Component } from 'react';
import icon_dollar from '../../../images/icon-dollar.svg';
import icon_person from '../../../images/icon-person.svg';
import './CalculatorTipandTotalCost.css';
import './CalculatorTipandTotalCostResponsiveTablet.css';
import './CalculatorTipandTotalCostResponsiveMobile.css';

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
            <div className='calculator-tip-total-cost'>
                <label className='bill-title' htmlFor="bill">Bill <span className='error'>Can’t be zero</span></label>
                <div className='container'>
                    <img className='icon' src={icon_dollar} alt="Icon Dollar" />
                    <input className='writer' type="number" id="bill" placeholder='0' />
                </div>

                <label className='select-tip-title' htmlFor="select-tip">Select Tip % <span className='error'>Select any value</span></label>
                <div className='select-tip-container'>
                    {valueTip()}
                    <input className='writer custom' type="number" id="select-tip" placeholder='Custom' />
                </div>

                <label className='number-people-title' htmlFor="number-people">Number of People <span className='error'>Can’t be zero</span></label>
                <div className='container'>
                    <img className='icon' src={icon_person} alt="Icon Person" />
                    <input className='writer' type="number" id="number-people" placeholder='0' />
                </div>

            </div>
        );
    }
}

export default CalculatorTipandTotalCost;