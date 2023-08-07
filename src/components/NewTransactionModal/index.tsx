import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
          <button type="button">
            <span className="icon-btn"> 💵⬇️</span>
            <span className="nome-btn">Entrada</span>
          </button>

          <button type="button">
            <span className="icon-btn">💵⬆️</span>  
            <span className="nome-btn">Saida</span>
          </button>

        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
