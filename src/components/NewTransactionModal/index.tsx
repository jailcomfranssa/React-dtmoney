import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

  const [title, setTitle] =useState('')
  const [category, setCategory] =useState('')
  const [value, setValue] =useState(0)

  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    const data =({
      title,
      value,
      category,
      type
    })

    api.post('/transactions', data)

  }
  
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

      <Container onSubmit={handleCreateNewTransaction}>

        <h2>Cadastrar Transaçõa</h2>

        <input
          type="text" 
          placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number" 
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

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

        <input 
          type="text" 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
          
          />
        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>
  );
}
