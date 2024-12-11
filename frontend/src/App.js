import React, { useState } from 'react';
import Board from './components/Board';
import { fetchBoards, createBoard } from './utils/api';

function App() {
  const [boards, setBoards] = useState([]);

  const loadBoards = async () => {
    const boardsData = await fetchBoards();
    setBoards(boardsData);
  };

  const addBoard = async () => {
    const newBoard = await createBoard({ name: 'New Board', lists: [] });
    setBoards([...boards, newBoard]);
  };

  return (
    <div className="App">
      <button onClick={addBoard}>Add Board</button>
      <div className="boards">
        {boards.map((board) => (
          <Board key={board._id} board={board} />
        ))}
      </div>
    </div>
  );
}

export default App;

