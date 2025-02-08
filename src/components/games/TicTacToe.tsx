"use client";
import { useState, useEffect } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true); // X starts

  useEffect(() => {
    if (!isXNext && !calculateWinner(board)) {
      const timer = setTimeout(() => {
        handleAutoPlay();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isXNext, board]);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const boardCopy = board.slice();
    boardCopy[index] = "X"; // Player is always X
    setBoard(boardCopy);
    setIsXNext(false);
  };

  const handleAutoPlay = () => {
    const emptyIndices = board
      .map((value, index) => (value === null ? index : null))
      .filter((index) => index !== null);
    if (emptyIndices.length === 0) return; // No moves if board is full
    const randomIndex =
      emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const boardCopy = board.slice();
    boardCopy[randomIndex] = "O"; // Auto player is always O
    setBoard(boardCopy);
    setIsXNext(true);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);

  // Conditional status message
  let status;
  if (winner === "X") {
    status = "Congrats! You Won! 😎";
  } else if (winner === "O") {
    status = "You Lost! 🥱";
  } else if (!board.includes(null)) {
    status = "It's a draw! 🤝";
  } else {
    status = isXNext ? "My turn" : "Your turn";
  }

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="grid grid-cols-3 gap-1">
        {board.map((value, index) => (
          <button
            key={index}
            className="w-20 h-20 border-none focus:outline-none bg-card custom-bg text-4xl flex items-center justify-center cursor-pointer text-title"
            onClick={() => handleClick(index)}
            disabled={board[index] || winner}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="mt-9 font-semibold text-title text-sm">{status}</div>
      {(winner || !board.includes(null)) && (
        <div className="mt-4">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-card custom-bg font-medium text-primaryColor"
          >
            Reset
          </button>
        </div>
      )}

      <p className="text-center mt-10 text-sm font-medium text-foreground italic">
        Built with Next.js and Tailwind
      </p>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
