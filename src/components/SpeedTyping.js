import React, {useState, useEffect, useRef} from "react"

function SpeedTyping() {

    const [time, setTime] = useState(15)
    const [textInput, setTextInput] = useState("")
    const [wordCount, setWordCount] = useState(0)
    const [isGameRunning, setIsGameRunning] = useState(false)
    const startButton = useRef(null)
    const inputArea = useRef(null)


    function handleChange(event) {
        const {value} = event.target
        setTextInput(value)
    }


    function calcWordCount() {
        setWordCount(textInput.trim().split(" ").filter(element => element !== "").length)
    }

    function startGame() {
        if(time <= 0) {
            setTime(15)
            setTextInput("")
            setWordCount(0)
            setIsGameRunning(true)
            inputArea.current.disabled = false
            inputArea.current.focus()
        } else {
        setIsGameRunning(true)
        inputArea.current.disabled = false
        inputArea.current.focus()

        }
    }

    function endGame() {
        calcWordCount()
        setIsGameRunning(false)
        startButton.current.focus()
    }

    function setNextGameLength(event) {
        const {value} = event.target
        setTime(value)
    }
    useEffect(() => 
              {
                if(time > 0 && isGameRunning) {
                    setTimeout(() => {setTime(prevTime => prevTime -1)} ,1000)}
                else if (time <= 0) {
                    endGame()
                }
              }
        ,[time, isGameRunning])


    return(
        <main className="speed-typing-main">
            <h1>What is your typing speed?</h1>
            <textarea disabled={!isGameRunning} ref={inputArea} onChange={handleChange} value={textInput}></textarea>
            <h2>Number of seconds left : {time} </h2>
            <button disabled={isGameRunning} ref={startButton} onClick={startGame}>Start</button>
            <div style={{display : isGameRunning ? "none" : "block"}} className="bottom-area">
            <h2 >Your word count was : {wordCount} </h2>
            <h3>How long do you want the next game to be ? </h3>
                <button disabled={isGameRunning} onClick={setNextGameLength} value={15} >15 secs</button>
                <button disabled={isGameRunning} onClick={setNextGameLength} value={30}>30 secs</button>
                <button disabled={isGameRunning} onClick={setNextGameLength} value={45}>45 secs</button>
                <button disabled={isGameRunning} onClick={setNextGameLength} value={60}>60 secs</button>
            </div>
        </main>
    )
}




export default SpeedTyping