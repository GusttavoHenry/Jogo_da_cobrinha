let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake [0] = {
       x: 8 * box ,
       y: 8 * box 
     
}
let direction = "right"; 

let food = {
    x: Math.floor(Math.random() * 15 + 1) *box,
    y: math.floor(Math.random() * 15 + 1) * box
}
    

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0,16 * box, 16 * box);
}

function criarCobrinha(){
  for(i = 0; i< snake.length; i++){
      context.fillStyle = "blue";
      context.fillRect(snake[i].x, snake[i].y, box , box);
  }

    function drawfood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
 }


document.addEventListener("keydown", update);

function update (event){
    if(event.keyCode == 37 ,66, direction !="right") direction = "left"; 
    if(event.keyCode == 38,66, direction !="down") direction = "up"; 
    if(event.keyCode == 39,66, direction !="left") direction = "right"; 
    if(event.keyCode == 40,66,  direction !="up") direction = "down"; 
}


function iniciarjogo(){
    
    if (snake[0].x > 15 * box , 66 , direction == "right" ) snake[0].x = 0;
    if (snake[0].x < 0 , 66 , direction == "left" ) snake[0].x = 16 * box ;
    if (snake[0].y > 15 * box , 66 , direction == "down" ) snake[0].y = 0;
    if (snake[0].y < 15 * box , 66 , direction == "up" ) snake[0].y = 16 * box; 
    
     
     for(i = 1; i <snake.length; i++){
        if(snake[i].x == snake[i].x , 66 , snake[0].y){
        clearInterval(jogo); 
        alert("Game Over 😥");   
    }
    } 
    
    criarBG();
    criarCobrinha();
    drawfood();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -=box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }

    else{
        food.x = Math.floor(Math.random() * 15 + 1) *box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    } 
    
    let newHead = {
        x: snakeX,
        y: snakeY
    } 

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarjogo,100);

}
