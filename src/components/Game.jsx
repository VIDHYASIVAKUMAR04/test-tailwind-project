import React, { useState } from "react";


const choices = ["Stone", "Paper", "Scissors"];

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return "It's a draw!!";
  if (
    (userChoice === "Stone" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "You win!!!";
  }
  return "You lose!";
};

const Scoreboard = ({ scores }) => {
    return (
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Scoreboard</h2>
        <div className="text-gray-700">
          <p>
            Wins: <strong className="text-green-600">{scores.wins}</strong>
          </p>
          <p>
            Losses: <strong className="text-red-600">{scores.losses}</strong>
          </p>
          <p>
            Draws: <strong className="text-blue-600">{scores.draws}</strong>
          </p>
        </div>
      </div>
    );
  };


export default function Game() {
    const [userChoice, setUserChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [result, setResult] = useState("");
    const [scores, setScores] = useState({ wins: 0, losses: 0, draws: 0 });
  
const handleChoice = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(randomChoice);
    
    const gameResult = getResult(choice, randomChoice);
    setResult(gameResult);

    if (gameResult === "You win!!!") {
      setScores((prev) => ({ ...prev, wins: prev.wins + 1 }));
    } else if (gameResult === "You lose!") {
      setScores((prev) => ({ ...prev, losses: prev.losses + 1 }));
    } else if (gameResult === "It's a draw!!") {
      setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
    }
  };

  const resultStyle = () => {
    if (result === "You win!!!") return "text-green-600 font-bold";
    if (result === "You lose!") return "text-red-600 font-bold";
    if (result === "It's a draw!!") return "text-blue-600 font-bold";
    return "";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-400">
      <h1 className="text-4xl text-gray-700 font-bold mb-6">Stone-Paper-Scissors</h1>

      <div className="p-6 bg-white shadow-xl rounded-2xl w-100 text-center">
        <p className="text-2xl text-purple-900 mb-8">Make your choice!!</p>

        <div className="flex justify-center gap-10 mb-6">
          {choices.map((choice) => (
            <div
              key={choice}
              onClick={() => handleChoice(choice)}
              className="cursor-pointer px-6 py-2 bg-blue-500 text-2xl text-white rounded-lg hover:bg-blue-600 mb-2">
              {choice}
            </div>
          ))}
        </div>

           {userChoice && (
          <div className="text-left">
            <p className="text-gray-800 text-2xl mb-4">
              Your choice: <strong>{userChoice}</strong>
            </p>
            <p className="text-gray-800 text-2xl mb-2">
              Computer's choice: <strong>{computerChoice}</strong>
            </p>
            <p className={`text-xl font-semibold mt-4 ${resultStyle()}`}>{result}</p>
        </div>
        )}
        <Scoreboard scores={scores} />
      </div>
    </div>
  );
};



