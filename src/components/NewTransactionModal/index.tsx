import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

  const [type, setType] = useState('deposit')
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="btn-close">
        ✖️
      </button>
      <Container>
        <h2>Cadastrar Transaçõa</h2>

        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox 
            type="button" 
            onClick={() =>{setType('deposit') }}
            isActive = {type === 'deposit'}
            activeColor="green"
            >

            <span className="icon-btn"> 💵⬇️</span>
            <span className="nome-btn">Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button" 
            onClick={() =>{setType('withdraw')}} 
            isActive = {type === 'withdraw'}
            activeColor="red"
            >
              
            <span className="icon-btn">💵⬆️</span>  
            <span className="nome-btn">Saida</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
