// Megan Boyer - CSC256 Final Project: 'Scatterbrain' memory game - 5/23/2023

//////////////// FUNCTIONS FOR WELCOME PAGE //////////////////////////////////

// Function to change the color of the play button when the user hovers over it.
function changeWelcomeButton(){
        document.getElementById('toGameButton').style.color='purple';
}

// Function to revert the color of the button back to the original when user stops hovering.
function revertWelcomeButton(){
    document.getElementById('toGameButton').style.color='black';
}

///////////////// FUNCTIONS FOR GAME PAGE //////////////////////////////////////

// Function to change the color of the play button when the user hovers over it.
function changePlayButton(){
    document.getElementById('startGameButton').style.color='purple';
}

// Function to revert the color of the button back to the original when user stops hovering.
function revertPlayButton(){
document.getElementById('startGameButton').style.color='black';
}

// Function to change the color of the get results button on hover.
function changeGetResultsButton(){
document.getElementById('getResultsButton').style.color='purple';
}

// Function to revert the color of the button back to the original when user stops hovering.
function revertGetResultsButton(){
    document.getElementById('getResultsButton').style.color='black';
}

////////////// CODE FOR WRITING THE ARRAY/PHRASE ////////////////////////////////////

// Array to hold othe words to guess for level one.
let levelOne = ['My fat grey tabby cat is laying on the brown leather couch to the right of the window.'];

// Function to execute onclick and write the array to the page when user clicks play button.
function displayPhrase1(){
    // Create a new paragraph element and assign it to a variable 'thePhrase'.
    let thePhrase = document.createElement('p');
    // Make this new paragraph a child element/specify where it goes.
    document.getElementById("Instructions").appendChild(thePhrase);
    // Insert the array into the 'thePhrase' variable.
    document.getElementById('Instructions').innerHTML = levelOne;
    // Change the style of the p element to display it.
    document.getElementById("Instructions").style.display='block';
    // Show the header that says 'remember the following:'
    document.getElementById('Header').style.display='block';
    // Hide the notes about the game.
    document.getElementById('Note').style.display='none';
    // Hide the play button.
    document.getElementById('startGameButton').style.display='none';
    // Display the image of a cat.
    document.getElementById('Cat').style.display='block';
}

////////////////// CODE FOR TIMER //////////////////////////////////////

// Function for timer code.
function runTimer(){
    // Declare variable 'givenTime' to represent the initial time given to player.
    let timeLeft = 30;
    // Declare a new variable to hold space for the timer.
    let timer = document.getElementById('timer');
    // Declare variable to hold the delay and countdown function.
    let timerID = setInterval(function Countdown(){
        // If there is no time left or time left = 0.
        if(timeLeft == 0){
            // Clear the timer.
            clearTimeout(timerID);
            // Hide the paragraph element with ID 'instructions'.
            document.getElementById("Instructions").style.display='none';
            // Hide the timer.
            document.getElementById('timer').style.display='none';
            // Hide the h3 tag that says 'remember the following:'
            document.getElementById('Header').style.display='none';
            // Display the quiz form.
            document.getElementById('quiz').style.display='block';
            // Display the 'Get Results!' button.
            document.getElementById('getResultsButton').style.display='block';
            // Hide the image of the cat.
            document.getElementById('Cat').style.display='none';
        }
        // If the timer has not reached 0: 
         else{
            // Display the seconds remaining
            document.getElementById('timer').innerHTML = 'Seconds Remaining: ' + timeLeft;
            // Decrement time left.
            timeLeft--;
        } 
        // wait one second.
    }, 1000);
}
    
//////////////////// CODE FOR RESULTS PAGE /////////////////////////////////////////

// Function that displays form results in HTML file.
function displayResults(){
    // Hide the 'Get Results' button.
    document.getElementById('getResultsButton').style.display='none';
    // Display the results paragraph element.
    document.getElementById('results').style.display='block';
    // Hide the form.
    document.getElementById('quiz').style.display='none';

    // Assign variables to functions.
    let resultOne = validateOne();
    let resultTwo = validateTwo();
    let resultThree = validateThree();

    //Create variable to hold the returned values of each function that validates the form responses as an array.
    let percentageCorrect = [resultOne, resultTwo, resultThree];

// Functions to validate form responses.
 // Validate reponse one.
 function validateOne(){
    if(document.quiz.catColors.value == "Grey"){
        return 'Correct!';
    }
    else if(document.quiz.catColors.value != "Grey"){
        return 'Incorrect';
    }
 }

// Validate response two.
 function validateTwo(){
     if(document.quiz.couchColors.value == "Brown"){
        return 'Correct!';
     }
     else if(document.quiz.couchColors.value != "Brown"){
         return 'Incorrect';
     }
 }
        
 // Validate response three.
function validateThree(){
    if (document.quiz.surroundingAreas.value == "Window"){
        return 'Correct!';
    }
    else if(document.quiz.surroundingAreas.value != "Window"){
        return 'Incorrect';
    }   
}

// Function to count the number of correct answers.
function countCorrect(){
    // Declare variable to hold the number of correct answers counted.
    let count = 0;
    // For loop to iterate over the length of the percentageCorrect array.
    for(let i = 0; i < percentageCorrect.length; ++i){
        // If the value of the index is 'Correct!', increment the 'count' variable.
        if(percentageCorrect[i] == 'Correct!'){
            count++;
        }
    }
    return count;
}

// Variable to hold the result of the countCorrect function.
let numberCorrect = countCorrect();

// Insert the array into the html p element to display results.
document.getElementById('results').innerHTML = 'How Did You Do? <br><br>Answer One: ' + percentageCorrect[0] + '<br>Answer Two: '
 + percentageCorrect[1] + '<br>Answer Three: ' + percentageCorrect[2] + '<br><br>' + 'You scored ' + numberCorrect + ' of 3 answers correct.';

}

// Function to create animation for results border - called on button click.
function animateBorder(){
    // Declare new variable to hold time left on timer.
    let timeLeft = 50;
    // Create new variable to hold the countdown.
    let timerID = setInterval(function animationCountdown(){
        // If timer runs out, set the border color to black.
        if(timeLeft == 0){
            document.getElementById('results').style.borderColor='black';
    }
    // If the time left is an even number.
    else if(timeLeft % 2 == 0){
        // Make the right border purple.
        document.getElementById('results').style.borderRightColor='gold';
        // Make the left border orchid.
        document.getElementById('results').style.borderLeftColor='goldenRod';
        // Make the bottom border indigo.
        document.getElementById('results').style.borderBottomColor='gold';
        // Make the top border violet.
        document.getElementById('results').style.borderTopColor='goldenRod';
        // Increment time left.
        timeLeft++;
    }
    // If the time left is an odd number.
    else {
        // Make the top border purple.
        document.getElementById('results').style.borderTopColor='gold';
        // Make the right border orchid.
        document.getElementById('results').style.borderRightColor='goldenRod';
        // Make the left border indigo.
        document.getElementById('results').style.borderLeftColor='gold';
        // Make the bottom border violet.
        document.getElementById('results').style.borderBottomColor='goldenRod';
        // Increment time left.
        timeLeft++;
    }
        // Wait one second.
        }, 1000);
}