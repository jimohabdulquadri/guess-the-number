const welcomeMessage = (msg) => alert(msg) //Welcome message as game resumes
const randomNumbers = (n) => Math.floor(Math.random() * n) + 1 // Generates random numbers
    /**
     * @description userGuess prompts the user to make a guess
     * @param {String} msg The message that will be displayed to the user 
     * @return {Number} val 
     * @example 
     *     userGuess("Please , enter a number between 0 and 4")
     */
const userGuess = (msg) => {
        let val = prompt(msg)
        let isValNumber = !isNaN(Number(val)) && val !== "" && val !== null
        val = isValNumber ? val : null
        return val
    }
    /**
     * 
     * @param {String} err The error message to show the user 
     * @example 
     * displayErrorMessage("The number you entered is not a number")
     */
const displayErrorMessage = (err) => alert(err)
    /**
     * @description This displays a message when the user makes a correct guess
     * @param {String} success The message to display
     * @param {Number} num  The number that was guessed correctly 
     * @example 
     * successMessage("You got it right" , 3)
     */
const successMessage = (success, num) => {
        alert(`${success} . The number is ${num}`)
    }
    // Failure message is same as successMessage but is displayed 
    // when the user makes a wrong guess
const failureMessage = (failure, num) => {
        alert(`${failure} . The number is ${num}`)
    }
    /**
     * 
     * @param {String} msg A question asking if the user wish to quit or continue 
     * @return {Number} replayCode A number indicating if to continue or stop 
     * @example 
     * replayMessage("Enter 0 to quit and 2 to continue")
     */
const replayMessage = (msg) => {
    alert(msg)
    let replayCode = Number(prompt(msg))
    return replayCode
}
const replayMessageError = (msg) => alert(msg) // Display an error message during replay input

/**
 * @description checkGuess will compare if the user guess is equal 
 *              to the computer guess
 * @param {Number} computerNum The computer's guess
 * @param {Number} userNum     The user's guess
 * @return {Boolean} result    A value representing if the user is correct  
 * @example 
 *     checkGuess(3 , 4) 
 *         Returns false 
 */
const checkGuess = (computerNum, userNum) => {
    if (userNum) {
        let result = computerNum === userNum ? true : false
        return result
    }
    return false
}

/**
 * initGame initiates the game logic 
 */

const initGame = () => {
        let scores = 0 //The user initial score 
        let trials = 0 // Initial trials is zero 
        let startGame = () => {
            welcomeMessage("Welcome to guess the number written by Jimoh Abdul")
            while (true) {
                let computerGuess = randomNumbers(2) //The computer makes a guess 
                let userPrediction = userGuess("Please, enter a number between 0 and 2") // The user makes a guess
                trials++
                if (computerGuess == userPrediction) { // Now compare the values 
                    successMessage("You made a correct guess", computerGuess)
                    scores++
                    let playAgain = replayMessage("Enter 0 to quit and 1 to continue") //Ask if the user wants to continue
                    if (playAgain === 1) {
                        welcomeMessage("Welcome to guess the number")
                        mp3Player.pause()
                        continue //Continue with game 
                    } else {
                        break // Stop the game and evaluate user performance 
                    }
                } else if (userPrediction > 2) {
                    displayErrorMessage("The number you provided is not allowed")
                } else {
                    failureMessage("You provided a wrong number", computerGuess)
                    let playAgain = replayMessage("Enter 0 to quit and 1 to continue")
                    if (playAgain === 1) {
                        welcomeMessage("Welcome to guess the number written by Jimoh Abdul")
                        continue
                    } else {
                        break
                    }
                }
            }
            let report = `You played ${trials} times  and got ${scores} correctly` //Report the user performance 
            alert(report)

        }
        return startGame()
    }
    //Start the game
    //initGame() 
window.addEventListener("click", initGame)