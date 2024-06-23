import React, { Component } from 'react';

class DisplayTipandTotalCost extends Component {
    render() {
        return (
            <div className='display-tip-total-cost'>
                <div className='tip-amount-container'>
                    <p className='tip-amount'> Tip Amount <span className='person'>/ person</span></p>
                    <h2 className='value'>$4.27</h2>
                </div>
                <div className='total-container'>
                    <p className='tip-amount' > Tip Amount <span className='person'>/ person</span></p>
                    <h2 className='value'>$32.79</h2>
                </div>
                <button className='reset' type="button">RESET</button>
            </div>
        );
    }
}

export default DisplayTipandTotalCost;