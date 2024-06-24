import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { ClientAccount, defaultClientAccount } from '../Interface/Manager';

export const LOCAL_MANAGAR_DATA = 'managerdata';

const clientAccountContext = createContext<{
    clientAccount: ClientAccount,
    setClientAccount: Dispatch<SetStateAction<ClientAccount>>
} | null>(null);

export const useClientAccount = () => useContext(clientAccountContext);


interface ClientAccountProps {
    children: ReactNode
}

export const ClientAccountProvider = ({ children }: ClientAccountProps) => {

    const [clientAccount, setClientAccount] = useState(() => {
        const data = localStorage.getItem(LOCAL_MANAGAR_DATA);
        if (data) {
            return JSON.parse(data);
        }
        return defaultClientAccount;
    });

    const value = { clientAccount, setClientAccount };

    return (
        <clientAccountContext.Provider value={value}>
            {children}
        </clientAccountContext.Provider>
    )
}