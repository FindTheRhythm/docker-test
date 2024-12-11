const Board = require('../models/boardModel');

const getBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBoard = async (req, res) => {
  const board = new Board({
    name: req.body.name,
    lists: req.body.lists
  });

  try {
    const newBoard = await board.save();
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getBoards, createBoard };
