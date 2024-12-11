import React, { useState } from 'react';
import List from './List';

const Board = ({ board }) => {
  const [lists, setLists] = useState(board.lists);

  const addList = () => {
    const newList = { id: lists.length + 1, name: 'New List', cards: [] };
    setLists([...lists, newList]);
  };

  return (
    <div className="board">
      <h3>{board.name}</h3>
      <button onClick={addList}>Add List</button>
      <div className="lists">
        {lists.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default Board;

