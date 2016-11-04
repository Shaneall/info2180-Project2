"use strict";
var pieces;
var posY;
var posX;

window.onload = function(){
  var puzzlearea = document.getElementById('puzzlearea');
  pieces = puzzlearea.getElementsByTagName('div');
  for (var s = 0; s < pieces.length; s++){
    pieces[s].className = 'puzzlepiece';
    pieces[s].style.left = (s%4*100)+'px';
    pieces[s].style.top = (parseInt(s/4)*100) + 'px';
    pieces[s].style.backgroundPosition= '-' + pieces[s].style.left + ' ' + '-' + pieces[s].style.top;
    pieces[s].onmouseover = function(){
      if (moveCheck(parseInt(this.innerHTML))){
        pieces[s].addClassName("movablepiece");
      }
    };
    pieces[s].onmouseout = function(){
      pieces[s].removeClassName("movablepiece");
    };

    pieces[s].onclick = function(){
      if (moveCheck(parseInt(this.innerHTML))){
        swap(this.innerHTML-1);
        if (finished()){
          var timer = window.setInterval("winner()",1000);
        }
        return;
      }
    };
  }

  posX = '300px';
  posY = '300px';

  var shufflebutton = document.getElementById('shufflebutton');
  shufflebutton.onclick = function(){
    for (var p = 0; p < 250; p++){
      var r = parseInt(Math.random()* 100) %4;
      if (r == 0){
        var temp = moveUp(posX, posY);
        if (temp != -1){
          swap(temp);
        }
      }
      if (r == 1){
        var temp = moveDown(posX, posY);
        if (temp != -1){
          swap(temp);
        }
      }
      if (r == 2){
        var temp = moveLeft(posX, posY);
        if (temp != -1){
          swap(temp);
        }
      }
      if (r == 3)
      {
        var temp = moveRight(posX, posY);
        if (temp != -1){
          swap(temp);
        }
      }
    }
  };
};

function swap(pos){
  var temp = pieces[pos].style.top;
  pieces[pos].style.top = posY;
  posY = temp;
  temp = pieces[pos].style.left;
  pieces[pos].style.left = posX;
  posX = temp;
};

function moveLeft(x, y){
  var xx = parseInt(x);
  var yy = parseInt(y);

  if (xx > 0){
    for (var l = 0; l < pieces.length; l++){
      if (parseInt(pieces[l].style.left) + 100 == xx && parseInt(pieces[l].style.top) == yy){
        return l;
      } 
    }
  }else{
    return -1;
  }
}

function moveRight(x, y){
  var xx = parseInt(x);
  var yy = parseInt(y);
  if (xx < 300){
    for (var r =0; r < pieces.length; r++){
      if (parseInt(pieces[r].style.left) - 100 == xx && parseInt(pieces[r].style.top) == yy){
        return r;
      }
    }
  }else{
    return -1;
  } 
};

function moveUp(x, y){
  var xx = parseInt(x);
  var yy = parseInt(y);
  if (yy > 0){
    for (var u = 0; u < pieces.length; u++){
      if (parseInt(pieces[u].style.top) + 100 == yy && parseInt(pieces[u].style.left) == xx){
        return u;
      }
    }; 
  }else{
    return -1;
  };
};

function moveDown(x, y){
  var xx = parseInt(x);
  var yy = parseInt(y);
  if (yy < 300){
    for (var d = 0; d < pieces.length; d++){
      if (parseInt(pieces[d].style.top) - 100 == yy && parseInt(pieces[d].style.left) == xx){
        return d;
      };
    };
  }else{
    return -1;
  };
};

function moveCheck(pos){
  if (moveLeft(posX, posY) == (pos-1)){
    return true;
  }

  if (moveDown(posX, posY) == (pos-1)){
    return true;
  }

  if (moveUp(posX, posY) == (pos-1)){
    return true;
  }

  if (moveRight(posX, posY) == (pos-1)){
    return true;
  }
};

function finished(){
  var done = true;
  for (var c = 0; c < pieces.length; c++){
    var y = parseInt(pieces[c].style.top);
    var x = parseInt(pieces[c].style.left);
    if (x != (c%4*100) || y != parseInt(c/4)*100){
      done = false;
      break;
    }
  }
  return fin;
};

function winner(){
  var delay = 100;
  var winner = document.getElementById('body');
  winner.image = winner.jpg;
  f.style.display="none";
  for(k = 1;k < delay; k++) // creates delay between blinks
    var dummy = 0;
  winner.style.display="block";
};

var time = Date.now();
var running = setInterval(run, 10); // Save this so we can clear/cancel it later

setTimeout(function() {        // Set a timer
  clearInterval(running);      // Stop the running loop
  alert('Game over!');         // Let the user know, do other stuff here
}, 30000);     