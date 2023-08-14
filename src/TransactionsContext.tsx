import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    creatdAt: string;
}

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionContext = createContext<Transaction[]>([]);

export function TransactionsProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() =>{
        api.get('http://localhost:3000/api/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <TransactionContext.Provider value={transactions}>
            {children}

        </TransactionContext.Provider>
    )
}