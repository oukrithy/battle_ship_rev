$(document).ready(function(){

  // randomizerShip();
  var hits = 0
  for(var i = 0; i <= 9; i++) {
    let row = "<tr id=row" + i +">column</tr>"
    $("#board").append(row)
    for(var j = 0; j <= 9; j++) {
      $("#row"+ i).append("<td id=" +i+j+ "></td>")
    }
  }

  $("td").click(function() {
    var cellClicked = $(this).attr('id')
    var i = cellClicked[0];
    var j = cellClicked[1];

    if (board[i][j] == 0) {
      $("#result").text("Miss!!!!!!!!!!!!");
      $(this).css({"background":"red"})
      board[i][j] = 9
      torpedoUsed++
    } else if (board[i][j] == 1){
      $("#result").text("Hit!!!!!!!!!!!")
      $(this).css({"background":"blue"})
      hits++
      board[i][j] = 9
      torpedoUsed++
    } else if (board[i][j] == 2){
      $("#result").text("ALMOST!!!!!!!!!!!!");
      $(this).css({"background":"red"})
      board[i][j] = 9
      torpedoUsed++
    } else {
      alert("You already fired there")
    }

    if (hits > 4) {
      $("td").off("click")
      $("#result").text("Winner!!!!!!!!")
    }

    if (torpedoUsed < 1) {
      console.log(torpedoUsed);
      $("#torpedos").text("Torpedos Used: " + torpedoUsed)
    } else {
      $("td").off("click")
      $("#torpedos").text("Torpedos Used: " + torpedoUsed + ". No more torpedos. You Lost!!!!")
      $(shipCombo).css({"background":"yellow"})
    }
    $("#hit").text("Total Hits: " + hits)

  })

})

//---------------------------------------
//---------------------------------------

var board =    [[0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0] ]

var torpedoUsed = 0
var shipLocation = []
var shipCombo = []

//----------------------------------------------
//         CREATING A ONE LENTH SHIP
//----------------------------------------------
function randomizerShip() {
  for (var i = 1; i<=1; i++) {  // changed to only place one ship
  do {
      var shipRow = Math.floor(Math.random()*7 + 1)
      var shipCol = Math.floor(Math.random()*7 + 1)
    } while (board[shipRow][shipCol] === 1 ||
             board[shipRow][shipCol] === 2 );

    board[shipRow][shipCol] = 1

    board[shipRow - 1][shipCol] = 2
    board[shipRow  + 1][shipCol] = 2
    board[shipRow][shipCol - 1 ] = 2
    board[shipRow][shipCol + 1 ] = 2
    board[shipRow - 1][shipCol - 1] = 2
    board[shipRow  - 1][shipCol +1] = 2
    board[shipRow +1][shipCol - 1 ] = 2
    board[shipRow +1][shipCol + 1 ] = 2

    var ship = '#' + shipRow + "" + shipCol
    shipLocation.push(ship)
    }
shipMaker()
}

function shipMaker() {
  shipCombo = shipLocation.join()
}

//----------------------------------------------
//         CREATING A TWO LENTH SHIP
//----------------------------------------------
function randomizerTwoLenthShip() {
  for (var i = 1; i<=1; i++) {  // changed to only place one ship
  do {
      var shipRow = Math.floor(Math.random()*7 + 1)
      var shipCol = Math.floor(Math.random()*6 + 1)
      var shipColAddOne = shipCol + 1;
    } while (board[shipRow][shipCol] === 1 ||
             board[shipRow][shipCol] === 2 );

    board[shipRow][shipCol] = 1
    board[shipRow][shipColAddOne] = 1

    board[shipRow - 1][shipCol] = 2
    board[shipRow  + 1][shipCol] = 2
    board[shipRow][shipCol - 1 ] = 2
    board[shipRow][shipCol + 1 ] = 2
    board[shipRow - 1][shipCol - 1] = 2
    board[shipRow  - 1][shipCol +1] = 2
    board[shipRow +1][shipCol - 1 ] = 2
    board[shipRow +1][shipCol + 1 ] = 2

    var ship = '#' + shipRow + "" + shipCol
    var shipTwo = '#' + shipRow + "" + shipColAddOne
    shipLocation.push(ship)
    shipLocation.push(shipTwo)

    }
shipMaker()
}
//----------------------------------------------
//         CREATING A THREE LENTH SHIP
//----------------------------------------------
function randomizerThreeLenthShip() {
  for (var i = 1; i<=1; i++) {  // changed to only place one ship
  do {
      var shipRow = Math.floor(Math.random()*7 + 1)
      var shipCol = Math.floor(Math.random()*5 + 1)
      var shipColAddOne = shipCol + 1;
      var shipColAddTwo= shipCol + 2;
    } while (board[shipRow][shipCol] === 1 ||
             board[shipRow][shipCol] === 2 );

    board[shipRow][shipCol] = 1
    board[shipRow][shipColAddOne] = 1
    board[shipRow][shipColAddTwo] = 1

    board[shipRow - 1][shipCol] = 2
    board[shipRow  + 1][shipCol] = 2
    board[shipRow][shipCol - 1 ] = 2
    board[shipRow][shipCol + 1 ] = 2
    board[shipRow - 1][shipCol - 1] = 2
    board[shipRow  - 1][shipCol +1] = 2
    board[shipRow +1][shipCol - 1 ] = 2
    board[shipRow +1][shipCol + 1 ] = 2

    var ship = '#' + shipRow + "" + shipCol
    var shipTwo = '#' + shipRow + "" + shipColAddOne
    var shipThree = '#' + shipRow + "" + shipColAddTwo

    shipLocation.push(ship)
    shipLocation.push(shipTwo)
    shipLocation.push(shipThree)

    }
shipMaker()
}
//----------------------------------------------
//         CREATING A FOUR LENTH SHIP
//----------------------------------------------
function randomizerFourLenthShip() {
  for (var i = 1; i<=1; i++) {  // changed to only place one ship
  do {
      var shipRow = Math.floor(Math.random()*7 + 1)
      var shipCol = Math.floor(Math.random()*4 + 1)
      var shipColAddOne = shipCol + 1;
      var shipColAddTwo= shipCol + 2;
      var shipColAddThree= shipCol + 3;
    } while (board[shipRow][shipCol] === 1 ||
             board[shipRow][shipCol] === 2 );

    board[shipRow - 1][shipCol] = 2
    board[shipRow  + 1][shipCol] = 2
    board[shipRow][shipCol - 1 ] = 2
    board[shipRow][shipCol + 1 ] = 2
    board[shipRow - 1][shipCol - 1] = 2
    board[shipRow  - 1][shipCol +1] = 2
    board[shipRow +1][shipCol - 1 ] = 2
    board[shipRow +1][shipCol + 1 ] = 2

    board[shipRow][shipCol] = 1
    board[shipRow][shipColAddOne] = 1
    board[shipRow][shipColAddTwo] = 1
    board[shipRow][shipColAddThree] = 1

    var ship = '#' + shipRow + "" + shipCol
    var shipTwo = '#' + shipRow + "" + shipColAddOne
    var shipThree = '#' + shipRow + "" + shipColAddTwo
    var shipFour = '#' + shipRow + "" + shipColAddThree

    shipLocation.push(ship)
    shipLocation.push(shipTwo)
    shipLocation.push(shipThree)
    shipLocation.push(shipFour)

    }
shipMaker()
}
//----------------------------------------------
//         CREATING A FIVE LENTH SHIP *** NEEDS TO REVISE -- FAILS/BREAKS
//----------------------------------------------
function randomizerFiveLenthShip() {
  for (var i = 1; i<=1; i++) {  // changed to only place one ship
  do {
      var shipRow = Math.floor(Math.random()*7 + 1)
      var shipCol = Math.floor(Math.random()*3 + 1)
      var shipColAddOne = shipCol + 1;
      var shipColAddTwo= shipCol + 2;
      var shipColAddThree= shipCol + 3;
      var shipColAddFour= shipCol + 4;

    } while (board[shipRow][shipCol] === 1          ||
             board[shipRow][shipColAddOne] === 1    ||
             board[shipRow][shipColAddTwo] === 1    ||
             board[shipRow][shipColAddThree] === 1  ||
             board[shipRow][shipColAddFour] === 1   ||
             board[shipRow][shipCol] === 2          ||
             board[shipRow][shipColAddOne] === 2    ||
             board[shipRow][shipColAddTwo] === 2    ||
             board[shipRow][shipColAddThree] === 2  ||
             board[shipRow][shipColAddFour] === 2 );

    board[shipRow][shipCol] = 1
    board[shipRow][shipColAddOne] = 1
    board[shipRow][shipColAddTwo] = 1
    board[shipRow][shipColAddThree] = 1
    board[shipRow][shipColAddFour] = 1

    board[shipRow - 1][shipCol] = 2
    board[shipRow  + 1][shipCol] = 2
    board[shipRow][shipCol - 1 ] = 2
    board[shipRow][shipCol + 1 ] = 2
    board[shipRow - 1][shipCol - 1] = 2
    board[shipRow  - 1][shipCol +1] = 2
    board[shipRow +1][shipCol - 1 ] = 2
    board[shipRow +1][shipCol + 1 ] = 2

    var ship = '#' + shipRow + "" + shipCol
    var shipTwo = '#' + shipRow + "" + shipColAddOne
    var shipThree = '#' + shipRow + "" + shipColAddTwo
    var shipFour = '#' + shipRow + "" + shipColAddThree
    var shipFive = '#' + shipRow + "" + shipColAddFour

    shipLocation.push(ship)
    shipLocation.push(shipTwo)
    shipLocation.push(shipThree)
    shipLocation.push(shipFour)
    shipLocation.push(shipFive)

    }
shipMaker()
}
