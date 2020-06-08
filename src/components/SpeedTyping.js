import React, {useState, useEffect} from "react"

function SpeedTyping() {

    const GAME_START_TIME = 4

    const [time, setTime] = useState(GAME_START_TIME)
    const [textInput, setTextInput] = useState("")
    const [wordCount, setWordCount] = useState(0)


    function handleChange(event) {
        const {value} = event.target
        setTextInput(value)
    }


    function calcWordCount() {
        // console.log(textInput)
        // console.log(textInput.trim().split(" ").filter(element => element !== "").length)

        setWordCount(textInput.trim().split(" ").filter(element => element !== "").length)
    }

    useEffect(() => 
              {
                    if(time > 0) {
                        setTimeout(() => {setTime(prevTime => prevTime -1)}
                    ,1000)}
                    else if (time <= 0) {
                        calcWordCount()
                    }

              }
        ,[time])



    return(
        <main className="speed-typing-main">
            <h1>What is your typing speed?</h1>
            <textarea onChange={handleChange} value={textInput}></textarea>
            <h2>Number of seconds left : {time} </h2>
            <button onClick={calcWordCount}>Start</button>
            <h2>Your word count was : {wordCount} </h2>
        </main>
    )
}




export default SpeedTyping