import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')

export function App() {


  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTrasactionModalOpen(true)

    }

    function handleCloseNewTransactionModal(){
        setIsNewTrasactionModalOpen(false)

    }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transações</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
