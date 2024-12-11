import React, { useState } from 'react';
import Card from './Card';

const List = ({ list }) => {
  const [cards, setCards] = useState(list.cards);

  const addCard = () => {
    const newCard = { id: cards.length + 1, text: 'New Card' };
    setCards([...cards, newCard]);
  };

  return (
    <div className="list">
      <h4>{list.name}</h4>
      <button onClick={addCard}>Add Card</button>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default List;
