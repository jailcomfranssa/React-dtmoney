import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    creatdAt: string;
}

export function TransactionsTable(){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() =>{
        api.get('http://localhost:3000/api/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map(transaction =>{
                            return(

                                <tr key={transaction.id}>
                                    <td className="title">{transaction.title}</td>
                                    <td className={transaction.type}> R$:{transaction.amount}</td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.creatdAt}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </Container>

    )
}