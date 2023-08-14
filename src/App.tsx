import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from 'react'
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionContext } from "./TransactionsContext";

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
    <TransactionContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        />

      <GlobalStyle />
    </TransactionContext.Provider>
  );
}
