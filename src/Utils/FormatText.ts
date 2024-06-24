import { ClientAccount } from '../Interface/Manager';

class FormatText {
  private constructor() {}

  public static FormatNumberText(text: string): string {
    text = this.SetAllNumber(text);
    return text;
  }

  public static AdjustText(text: string, name: string): string {
    if (name === 'bill') {
      const decimal = /(\d{2})$/;
      const thousands = /(?=(\d{3})+(\D))\B/g;
      text = text.replace(decimal, ',$1');
      text = text.replace(thousands, '.');
    }
    return text;
  }

  private static SetAllNumber(text: string): string {
    const regex = /^[0-9]+$/;
    let newString = '';
    for (let index = 0; index < text.length; index++) {
      const char = text[index];
      if (!regex.test(char)) continue;
      newString += char;
    }
    return newString;
  }

  public static FormatTotalValue(clientAccount: ClientAccount) {
    const bill = Number.parseFloat(clientAccount.bill.value);
    const peoples = Number.parseFloat(clientAccount.peoples.value);
    if (isNaN(bill) || isNaN(peoples) || peoples === 0) {
      return 0;
    }
    return (bill / peoples) * this.CalculatePercent(clientAccount);
  }

  public static FormatTipAmountValue(clientAccount: ClientAccount) {
    const bill = Number.parseFloat(clientAccount.bill.value);
    const peoples = Number.parseFloat(clientAccount.peoples.value);
    if (isNaN(bill) || isNaN(peoples) || peoples === 0) {
      return 0;
    }
    return this.FormatTotalValue(clientAccount) - bill / peoples;
  }

  private static CalculatePercent(clientAccount: ClientAccount) {
    const percent = Number.parseFloat(clientAccount.percent.value);
    if (isNaN(percent)) {
      return 1;
    }
    return percent / 100 + 1;
  }
}

export default FormatText;
