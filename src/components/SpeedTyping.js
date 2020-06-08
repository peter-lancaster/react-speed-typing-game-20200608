import React, {useState, useEffect} from "react"

function SpeedTyping() {

    const GAME_START_TIME = 4

    const [time, setTime] = useState(GAME_START_TIME)
    const [wordCount, setWordCount] = useState(0)




    
    useEffect(() => 
              { if(time > 0) {
                  setTimeout(() => {setTime(prevTime => prevTime -1)}
                  ,1000)}
                else if (time >= 0) {
                    // calculate number of words
                }


              }
        ,[time])



    return(
        <main className="speed-typing-main">
            <h1>What is your typing speed?</h1>
            <textarea></textarea>
            <h2>Number of seconds left : {time} </h2>
            <button>Start</button>
            <h2>Your word count was : </h2>
        </main>
    )
}




export default SpeedTyping