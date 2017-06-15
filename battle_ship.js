$(document).ready(function(){
  // alert($('td').attr('id'));
  for(var i = 0; i <= 9; i++) { //begins for loop for rows
    let row = "<tr id=row" + i +">column</tr>"
    $("#board").append(row)
    for(var j = 0; j <= 9; j++) { //begins for loop for columns
      $("#row"+ i).append("<td id=" +i+j+ "></td>")
    } //ends for loop
  }

  randomizerShip();


  var torpedoUsed = 0
  var hits = 0

  $("td").click(function(){
    var testing = $(this).attr('id')
    console.log((testing).split(""))
      var i = testing[0];
      var j = testing[1];

      if (board[i][j] !== 1) {
        $("#miss").text("Miss!!!!!!!!!!!!");
        $(this).css({"background":"red"})
      } else {
        $("#miss").text("Hit!!!!!!!!!!!")
        $(this).css({"background":"blue"})
        hits++
      }

      torpedoUsed++

      if (hits === 5) {
        $("td").off("click")
        $("#miss").text("Winner!!!!!!!!")
      }


    if (torpedoUsed <= 25) {
      console.log(torpedoUsed);
      $("#torpedos").text("Torpedos Used: " + torpedoUsed)
    } else {
      $("td").off("click")
      $("#torpedos").text("No more torpedos. You Lost!!!!")
      alert(shipCombo)
      // var yellow = "#" + shipOne
      $(shipCombo).css({"background":"yellow"})

    }
  })


})

// jquery ends

//---------------------------------------
var board =      [[0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0] ]


var shipLocation = []

function randomizerShip() {
  for (i = 1; i<=5; i++) {
    var shipRow = Math.floor(Math.random()*10)
    var shipCol = Math.floor(Math.random()*10)
    var ship = '#' + shipRow + "" + shipCol
    shipLocation.push(ship)
    board[shipRow][shipCol] = 1
  }
  shipMaker()
}

var shipCombo
  function shipMaker() {
    shipCombo = shipLocation.join()
}
//--------------------------------------------------
