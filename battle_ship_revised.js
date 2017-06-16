$(document).ready(function(){

  randomizerShip();
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
      board[i][j] = -1
      torpedoUsed++
    } else if (board[i][j] == 1){
      $("#result").text("Hit!!!!!!!!!!!")
      $(this).css({"background":"blue"})
      hits++
      board[i][j] = 'x'
      torpedoUsed++
    } else
      alert('You're close')
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

function randomizerShip() {
  for (var i = 1; i<=5; i++) {
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
//----------------------------------------------
