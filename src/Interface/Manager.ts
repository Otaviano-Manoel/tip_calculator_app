export interface ClientAccount {
  bill: {
    value: string;
    error: boolean;
  };
  peoples: {
    value: string;
    error: boolean;
  };
  percent: {
    value: string;
    error: boolean;
  };
}

export const defaultClientAccount: ClientAccount = {
  bill: {
    value: '',
    error: false,
  },
  peoples: {
    value: '',
    error: false,
  },
  percent: {
    value: '',
    error: false,
  },
};
