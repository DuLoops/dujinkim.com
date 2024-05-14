"use client"
import {useState} from 'react'
import Prepartion from './Preparation';
import Running from './Running';
import Completed from './Completed';

export default function page() {
  const timerStates = ["preparation", "running", "completed"];
  const [currentState, setCurrentState] = useState(timerStates[0]);
  const [setting, setSetting] = useState({
    readyDuration: 5,
    instructionDuration: 3,
    sets: 3,
    breathCycles: 30,
    breathDuration: 3,
    holdingTime: [60, 90, 120, 120, 150],
    inhaleHoldingTime: 15,
  });

  return (
    <div>
      {currentState === "preparation" && (
        <Prepartion
          // setting={setting}
          // setSetting={setSetting}
          // setCurrentState={setCurrentState}
        />
      )}
      {/* {currentState === "running" && (
        <Running setting={setting} setCurrentState={setCurrentState} />
      )}

      {currentState === "finished" && (
        <Completed setting={setting} setCurrentState={setCurrentState} />
      )} */}
    </div>
  )
}
