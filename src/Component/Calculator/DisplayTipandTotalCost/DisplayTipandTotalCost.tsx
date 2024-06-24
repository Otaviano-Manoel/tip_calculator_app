import React from 'react';
import './DisplayTipandTotalCost.css';
import './DisplayTipandTotalCostResponsiveTablet.css';
import './DisplayTipandTotalCostResponsiveMobile.css';
import { useClientAccount } from '../../../Context/ClientAccountContext';
import FormatText from '../../../Utils/FormatText';
import { defaultClientAccount } from '../../../Interface/Manager';


function DisplayTipAndTotalCost() {
    const { clientAccount, setClientAccount } = useClientAccount()!;

    const allValuesSet = (
        clientAccount.bill.value !== '' &&
        clientAccount.peoples.value !== '' &&
        clientAccount.percent.value !== ''
    );

    const handleTotalValue = (): string => {
        if (allValuesSet) {
            const total = FormatText.FormatTotalValue(clientAccount);
            return total.toFixed(2);
        }
        return '0.00';
    }

    const handleTipAmountValue = (): string => {
        if (allValuesSet) {
            const tipTotal = FormatText.FormatTipAmountValue(clientAccount);
            return tipTotal.toFixed(2);
        }
        return '0.00';
    }

    const resetValues = () => {
        setClientAccount(defaultClientAccount)
    }

    return (
        <div className='display-tip-total-cost'>
            <div className='container'>
                <p className='tip-amount'> Tip Amount <span className='person'>/ person</span></p>
                <h2 className='value'>${handleTipAmountValue()}</h2>
            </div>
            <div className='container'>
                <p className='tip-amount' > Total <span className='person'>/ person</span></p>
                <h2 className='value'>${handleTotalValue()}</h2>
            </div>
            <button onClick={resetValues} className='reset' type="button">RESET</button>
        </div>
    );
}

export default DisplayTipAndTotalCost;