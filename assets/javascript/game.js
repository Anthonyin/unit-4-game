$(document).ready(function() {
  var Random = [Math.floor(Math.random() * 120) + 19];
  console.log(Random);
  $('#targetNumber').text('Your target number is: ' + Random);
  var num1 = [Math.floor(math.random() * 12) + 1];
  var num2 = [Math.floor(math.random() * 12) + 1];
  var num3 = [Math.floor(math.random() * 12) + 1];
  var num4 = [Math.floor(math.random() * 12) + 1];

  var wins = 0;
  var losses = 0;
  var score = 0;
  $('#wins').text('Wins: ' + wins);
  $('#losses').text('Loses: ' + losses);
  $('#totalScore').text(score);

  function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    $('#targetNumber').text('Your target number is: ' + Random);
    num1 = [Math.floor(math.random() * 12) + 1];
    num2 = [Math.floor(math.random() * 12) + 1];
    num3 = [Math.floor(math.random() * 12) + 1];
    num4 = [Math.floor(math.random() * 12) + 1];
    score = 0;
    $('#totalScore').text(score);
  }

  function wins() {
    wins++;
    $('#wins').text('Wins: ' + wins);
    reset();
  }

  function losses() {
    losses++;
    $('#losses').text('Loses: ' + losses);
    reset();
  }

  $('#blueOne').on('click', function() {
    score = score + num1;
    console.log(score);
    $('#totalScore').texrt(socre);
    if (score == Random) {
      wins();
    } else if (score > Random) {
      losses();
    }
  });

  $('#greenTwo').on('click', function() {
    score = score + num2;
    console.log(score);
    $('#totalScore').texrt(socre);
    if (score == Random) {
      wins();
    } else if (score > Random) {
      losses();
    }
  });

  $('#redThree').on('click', function() {
    score = score + num3;
    console.log(score);
    $('#totalScore').texrt(socre);
    if (score == Random) {
      wins();
    } else if (score > Random) {
      losses();
    }
  });

  $('#yellowFour').on('click', function() {
    score = score + num4;
    console.log(score);
    $('#totalScore').texrt(socre);
    if (score == Random) {
      wins();
    } else if (score > Random) {
      losses();
    }
  });
});
