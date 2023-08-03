import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable(){

    useEffect(() =>{
        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data))
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
                    <tr>
                        <td className="title">Desenvolvimento</td>
                        <td className="deposit">R$:12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2023</td>
                    </tr>
                    <tr>
                        <td className="title">Aluguel</td>
                        <td className="withdraw">R$:- 1.000,00</td>
                        <td>Desenvolviento</td>
                        <td>20/02/2023</td>
                    </tr>
                    <tr>
                        <td className="title">Desenvolvimento</td>
                        <td>R$:12.000,00</td>
                        <td>Desenvolviento</td>
                        <td>20/02/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>

    )
}