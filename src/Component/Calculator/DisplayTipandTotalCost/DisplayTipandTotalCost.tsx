import React, { Component } from 'react';
import './DisplayTipandTotalCost.css';
import './DisplayTipandTotalCostResponsiveTablet.css';
import './DisplayTipandTotalCostResponsiveMobile.css';

class DisplayTipandTotalCost extends Component {
    render() {
        return (
            <div className='display-tip-total-cost'>
                <div className='container'>
                    <p className='tip-amount'> Tip Amount <span className='person'>/ person</span></p>
                    <h2 className='value'>$0.00</h2>
                </div>
                <div className='container'>
                    <p className='tip-amount' > Tip Amount <span className='person'>/ person</span></p>
                    <h2 className='value'>$0.00</h2>
                </div>
                <button className='reset' type="button">RESET</button>
            </div>
        );
    }
}

export default DisplayTipandTotalCost;