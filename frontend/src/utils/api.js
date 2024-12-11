const API_URL = 'http://localhost:5000/api/boards';

export const fetchBoards = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createBoard = async (boardData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(boardData)
  });
  return response.json();
};

