import React from 'react'
import GameBoard from './components/GameBoard'

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Prime Number Guessing Game</h1>
      </header>
      <main className="app-main">
        <GameBoard />
      </main>
    </div>
  )
}

export default App