import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If itasd!!",
    "Addisdwer to a late software project makeasd later!",
    "The fxcvxcirst 90 percent of the code accounts for the first 90 percent of the developasde remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Anyxcvxcvxcvan understand.",
    "Premature optimization is the root of all evil.",
    "Dexcvxcvxcvs cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programmxcvxcving without an extremely heavy use of console.log is same as if a doctor wouxcvxcvxcvld refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  // Initialize an array for storing votes for each anecdote
  const initialVotes = new Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(initialVotes);

  const handleNextAnecdote = () => {
    // Generate a random index for the anecdotes array
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  // Find the index of the anecdote with the most votes
  const mostVotedIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <div>
        <h2>Anecdote of the Day</h2>
        {anecdotes[selected]}
      </div>
      <div>
        <p>Votes: {votes[selected]}</p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleNextAnecdote}>Next Anecdote</button>
      </div>
      <div>
        <h2>Most Voted Anecdote</h2>
        {votes[mostVotedIndex] > 0 ? anecdotes[mostVotedIndex] : "No votes yet"}
      </div>
    </div>
  );
};

export default App;
