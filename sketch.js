var PLAY = 1
var END = 0
var GAME_OVER = 0
var PAUSE = 0

var cenario_1, cenario_1png
var chao_fake;
var moeda_yoshi, moeda_yoshiimg
var moeda, moedaimg

var ponteiro = 0

var gameState = PLAY

function preload(){
cenario_1png = loadImage("fase1.png") 
mario_correndo = loadAnimation("Mario correndo 1.png", "Mario correndo 2.png")
nuvemimg = loadImage("Nuvem.png")
//moeda_yoshiimg = loadAnimation("Yoshi.c1.png", "Yoshi.c2.png", "Yoshi.c3.png", "Yoshi.c4.png")
}

function setup() {
createCanvas(windowWidth, windowHeight)
//CENARIO
cenario_1 = createSprite(11700,670,100,100);
cenario_1.addImage("cenario1", cenario_1png)
cenario_1.scale = 2

chao_fake = createSprite(width/2,cenario_1.position.y+200,1000,50);

mario = createSprite(849, 836)
mario.addAnimation("mario_corre", mario_correndo)

}

function draw() {
background('#A4F0F8');
//PONTUAÇÃO
text("Pontuação: " + ponteiro, mario.position.x - 30, mario.position.y - 50 )

mario.collide(chao_fake)
//Play
if (gameState === PLAY) {
ponteiro = ponteiro + Math.round(getFrameRate()/50);
mario.x = camera.position.x-270;

//cenario se movendo
cenario_1.velocityX = -(10 + 8*ponteiro/100);

if(keyIsDown(32) && mario.isTouching(chao_fake)){
    mario.velocityY -= 10
}
//gravidade
mario.velocityY +=1.5

//spawn de nuvem
if (frameCount % 60 === 0) {
    nuvem = createSprite(10000, 120, 40, 10)
    nuvem.addImage("nuvem_img", nuvemimg)
    nuvem.y = Math.round(random(52,696))
    nuvem.x = Math.round(random(5000, 10000))
    nuvem.velocityX = -30
    nuvem.scale = 2
}

//MOEDA
//moeda = createSprite()

}
//GAME OVER
if (gameState === GAME_OVER) {
    mario.velocityX = 0
}

drawSprites()

/*POSIÇÃO DO MAUSE
console.log(mouseX);
console.log(mouseY);
*/

console.log(mario.position.y)
}
