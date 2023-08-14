import React, {useContext} from "react";
import { TransactionContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function Summary(){

    const data = useContext(TransactionContext);
    console.log(data);

    return(
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <p className="icon">💰⬇️</p>
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <p className="icon">💸⬆️</p>
                </header>
                <strong> - R$100,00</strong>
            </div>

            <div className="cor">
                <header>
                    <p>Total</p>
                    <p className="icon">💵 🔁</p>
                </header>
                <strong> - R$900,00</strong>
            </div>
        </Container>
    )
}