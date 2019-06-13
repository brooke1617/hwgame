//my variable as images

var images = [
    'assets/images/blue.jfif',
    'assets/images/white.jfif',
    'assets/images/purple.jfif',
    'assets/images/multi.jfif',
  ];

  // other variables
  var maxNumber = 20;
  var score = 0;
  var win = 0;
  var lose = 0;
  var randomNumbers = [];
  
  $('#maxNumber').text(maxNumber);
  $('#win').text(win);
  $('#lose').text(lose);
  $('#score').text(score);
  for (var i = 0; i < 5; i++) {
    var number = Math.floor(Math.random() * 15) + 1;
    randomNumbers.push(number);
  }
  
  for (var j = 0; j < randomNumbers.length; j++) {
    var img = $('<img>');
    img.attr('src', images[j]);
    img.addClass('game');
    img.attr('data-number', randomNumbers[j]);
    $('#empty-div').append(img);
  }
  
  $('.game').on('click', function() {
    value = Number($(this).attr('data-number'));
    score += value;
    $('#maxNumber').text(maxNumber);
    $('#win').text(win);
    $('#lose').text(lose);
    $('#score').text(score);
    console.log('score' + score);
  
    if (score === maxNumber) {
      win++;
      console.log('wins ' + wins);
      maxNumber = Math.floor(Math.random() * 50) + 1;
      console.log('target Number ' + maxNumber);
      Score = 0;
      randomNumbers = [];
      $('#maxNumber').text(maxNumber);
      $('#win').text(win);
      $('#lose').text(lose);
      $('#score').text(Score);
    }
    if (score > maxNumber) {
      lose++;
      maxNumber = Math.floor(Math.random() * 50) + 10;
      console.log('lose ' + lose);
      console.log('max Number ' + maxNumber);
      Score = 0;
      randomNumbers = [];
      $('#maxNumber').text(maxNumber);
      $('#win').text(win);
      $('#lose').text(lose);
      $('#score').text(Score);
    }
  });