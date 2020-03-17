//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  function scoreHandler (teamName, amount){
    if (teamName === "Lions") {
      setHomeScore(homeScore + amount)
    } else if (teamName === "Tigers") {
      setAwayScore(awayScore + amount)
    }
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
      <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter= {quarter} down= "1" />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => scoreHandler("Lions", 7) }
          className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => scoreHandler("Lions", 3)  }
          className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => scoreHandler("Tigers", 7)  } 
          className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => scoreHandler("Tigers", 3)  } 
          className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div>
        <button onClick={() => {
          if (quarter === 4) {
            setQuarter(1)
          } else {
            setQuarter(quarter + 1)
          }
          }}>
          Quarter
        </button>
        </div>
      </section>
    </div>
  );
}

export default App;
