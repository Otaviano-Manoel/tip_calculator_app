import React, { ChangeEvent, useEffect, useState } from 'react';
import icon_dollar from '../../../images/icon-dollar.svg';
import icon_person from '../../../images/icon-person.svg';
import './CalculatorTipandTotalCost.css';
import './CalculatorTipandTotalCostResponsiveTablet.css';
import './CalculatorTipandTotalCostResponsiveMobile.css';
import { useClientAccount } from '../../../Context/ClientAccountContext';
import FormatText from '../../../Utils/FormatText';
import classNames from 'classnames';

function CalculatorTipAndTotalCost() {
    const { clientAccount, setClientAccount } = useClientAccount()!;
    const [customText, setCustomText] = useState(() => {
        if (clientAccount.percent.value !== '') {
            return clientAccount.percent.value + '%'
        }
        return ''
    });
    const [percentsButtons, setIsPercentsButtons] = useState(Array(5).fill(false));

    useEffect(() => {
        if (clientAccount.percent.value === '') {
            setIsPercentsButtons(Array(9).fill(false));
            setCustomText('');
        }
    }, [clientAccount])

    const getClassNames = () => {
        return {
            bill: {
                messegeError: classNames('error', { active: clientAccount.bill.error }),
                borderError: classNames('container', { 'input-error': clientAccount.bill.error })
            },
            peoples: {
                messegeError: classNames('error', { active: clientAccount.peoples.error }),
                borderError: classNames('container', { 'input-error': clientAccount.peoples.error })
            },
            percent: {
                messegeError: classNames('error', { active: clientAccount.percent.error }),
                borderError: classNames('writer', 'custom', { 'input-error': clientAccount.percent.error })
            }
        }
    }
    const errorClassNames = getClassNames();

    const selectPercentValue = (i: number) => {
        return Array(5).fill('').map((_, idx) => (
            classNames("value", { selected: percentsButtons[idx] })
        ));
    };

    const handleOnClick = (e: HTMLButtonElement, i: number) => {
        handleSetClientAccount('percent', e.value, false);
        let selects = Array(5).fill(false);
        selects[i] = true;
        setIsPercentsButtons(selects);
        setCustomText('');
    }

    const valueTip = (): JSX.Element[] => {
        const percentTemplates = ['5', '10', '15', '25', '50']
        const valuesTip: JSX.Element[] = [];
        percentTemplates.forEach((e, i) => {
            valuesTip.push(
                <button key={i} onClick={(e) => { handleOnClick(e.currentTarget, i) }} className={selectPercentValue(i)[i]} type="button" value={e}>{e}%</button>
            )
        });
        return valuesTip;
    }

    const handleSetClientAccount = (name: 'bill' | 'peoples' | 'percent', value: string, error: boolean | null) => {
        setClientAccount(clientAccountPrevent => {
            return {
                ...clientAccountPrevent,
                [name]: {
                    value: value,
                    error: error !== null ? error : clientAccount[`${name}`].error
                }
            }
        })
    }
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, maxLength, id } = event.currentTarget;
        if (maxLength < value.length) return;

        let error = false;
        let str = FormatText.FormatNumberText(value);

        str = FormatText.AdjustText(str, name);

        error = str === '' || Number.parseInt(str) === 0;
        if (id === 'select-tip') {
            setCustomText(value);
        }

        handleSetClientAccount(name as 'bill' | 'peoples' | 'percent', str, error);
    }

    const handleOnFocus = (event: ChangeEvent<HTMLInputElement>) => {
        let str = customText;
        str = str.replace('%', '');
        let selects = Array(5).fill(false);
        setIsPercentsButtons(selects);
        setCustomText(str);
    }

    const handleOnBlur = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        let str = customText;
        if (value !== '') {
            str = str + "%";
        }
        setCustomText(str)
        handleOnChange(event);
    }

    return (
        <div className='calculator-tip-total-cost'>
            <label className='bill-title' htmlFor="bill">Bill <span className={errorClassNames.bill.messegeError}>Can’t be zero</span></label>
            <div className={errorClassNames.bill.borderError}>
                <img className='icon' src={icon_dollar} alt="Icon Dollar" />
                <input onChange={handleOnChange} className='writer' maxLength={6} name='bill' type='text' id="bill" placeholder='0' value={clientAccount.bill.value} />
            </div>

            <label className='select-tip-title' htmlFor="select-tip">Select Tip % <span className={errorClassNames.percent.messegeError}>Select any value</span></label>
            <div className='select-tip-container'>
                {valueTip()}
                <input onFocus={handleOnFocus} onBlur={handleOnBlur} onChange={handleOnChange} className={errorClassNames.percent.borderError} maxLength={4} type="text" id="select-tip" name='percent' placeholder='Custom' value={customText} />
            </div>

            <label className='number-people-title' htmlFor="number-people">Number of People <span className={errorClassNames.peoples.messegeError}>Can’t be zero</span></label>
            <div className={errorClassNames.peoples.borderError}>
                <img className='icon' src={icon_person} alt="Icon Person" />
                <input onChange={handleOnChange} className='writer' name='peoples' maxLength={3} type="text" id="number-people" placeholder='0' value={clientAccount.peoples.value} />
            </div>

        </div>
    );
}

export default CalculatorTipAndTotalCost;