function gameObject(){
    const gameStats = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players:{
                "Alan Anderson":{
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals":3,
                    "blocks":1,
                    "slamDunks": 1
                },
                "Reggie Evans":{
                    "number":30,
                    "shoe":14,
                    "points":12,
                    "rebounds":12,
                    "assists": 12,
                    "steals":3,
                    "blocks":12,
                    "slamDunks": 7
                },
                "Brook Lopez":{
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee":{
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds":12,
                    "assists": 6,
                    "steals": 3,
                    "blocks":8,
                    "slamDunks": 5
                },
                "Jason Terry":{
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                },
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:["Turquoise", "Purple"],
            players:{
                "Jeff Adrien":{
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo":{
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop":{
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon":{
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood":{
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
    return gameStats;
}

function homeTeamName(){
    return gameObject()[`home`][`teamName`];
}

src/02-advanced-debug.js
function goodPractices() {
    let game = gameObject();
    for (let gameKey in game) {
      // are you ABSOLUTELY SURE what 'gameKey' is?
      // use the debugger to find out!
      debugger;
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {
        // are you ABSOLUTELY SURE what 'teamKey' is?
        // use debugger to find out!
        debugger;
  
        // what is 'data' at each loop through out this block?
        // when will the following line of code work and when will it break?
        let data = teamObj.player;
        for (let key in data) {
          debugger;
        }
      }
    }
  }
  

//Build a function, numPointsScored that takes in an argument 
//of a player's name and returns the number of points scored 
//for that player.
//Think about where in the object you will find a player's points. 
//How can you iterate down into that level? Think about the 
//return value of your function.

function traverseObjectsTest(name){
    let game = gameObject();
    for (let )
    //let gameArray = Object.entries(game);
    //const playerPoints = gameArray.find(gameArray => gameArray.player === name);
    //return playerPoints;
};

function numPointsScored(name){
    let gameStats = gameObject();
    gameStats.find(function(name){
        for (const points in name){
            const pointsScored = name.points;
            console.log(pointsScored);
        }
        return pointsScored;
    });
}

//Build a function, shoeSize, that takes in an argument of 
//a player's name and returns the shoe size for that player.
//Think about how you will find the shoe size of the correct 
//player. How can you check and see if a player's name matches 
//the name that has been passed into the function as an argument?
function shoeSize(){}

//Build a function, teamColors, that takes in an argument of 
//the team name and returns an array of that teams colors
function teamColors(){}

//Build a function, teamNames, that operates on the game object 
//to return an array of the team names.
function teamNames(){}

//Build a function, playerNumbers, that takes in an argument 
//of a team name and returns an array of the jersey number's 
//for that team.
function playerNumbers(){}

//Build a function, playerStats, that takes in an argument 
//of a player's name and returns a object of that player's stats. 
//Check out the following example of the expected return value of 
//the playerStats function:
function playerStats(){}

//Build a function, bigShoeRebounds, that will return the number 
//of rebounds associated with the player that has the largest 
//shoe size. Break this one down into steps:

//First, find the player with the largest shoe size
//Then, return that player's number of rebounds
//Remember to think about return values here. 
//Use debugger to drop into your function and understand 
//what it is returning and why.
function bigShoeRebounds(){}

//**************BONUS QUESTIONS**************

//Which player has the most points? Call the function
function mostPointsScored(){}

//Which team has the most points? Call the function 
function winningTeam(){}

//Which player has the longest name? Call the function
function playerWithLongestName(){}

//************DOUBLE BONUS QUESTIONS***********

//Write a function that returns true if the player 
//with the longest name had the most steals. 
//Call the function
function doesLongNameStealATon(){}