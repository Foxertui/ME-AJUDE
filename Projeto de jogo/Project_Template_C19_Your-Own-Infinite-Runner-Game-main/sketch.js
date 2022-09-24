var life = 3
var palavra = 230

function preload(){
 heroi = loadImage("mago 2.png")
 vilão = loadImage("Mago monstro.png")
 bola_vermelha = loadImage("Bola vermelha.png")
 bola_azul = loadImage ("bola azul 2.png")
 Cenario = loadImage ("cenario.png")
 Rosto = loadImage("Cabeça.png")
 Vida = loadImage("Barra de vida.png")
}


function setup() {
 createCanvas(1400,700)
 evil = createSprite(700,450)
 evil.addImage(vilão)
 evil.scale = 1.3

 good = createSprite(100,630)
 good.addImage(heroi)
 good.scale = 0.3

 teto = createSprite(700,675,1400,2)
 cabeça = createSprite(1250,675)
 cabeça.addImage(Rosto)
 cabeça.scale = 0.2
 cabeça.mirrorX(-1)
 
 parede = createSprite(700,630,120,120)
 parede.visible = false
 
 xao = createSprite(0,500,1,700)
 xao2 = createSprite(1401,500,1,700)

 mao_esquerda= new Group()
 mao_direita = new Group()
 deus = new Group()
 tiro = new Group()


 cabeça2 = createSprite(1300,675)
 cabeça2.addImage(Rosto)
 cabeça2.scale = 0.2
 cabeça2.mirrorX(-1)

 cabeça3 = createSprite(1350,675)
 cabeça3.addImage(Rosto)
 cabeça3.scale = 0.2
 cabeça3.mirrorX(-1)
 
 

 chapeu = createSprite(1100,100)
 chapeu.addImage(Vida)
 chapeu.scale = 0.6
 
 teto.visible = false
 
 if(life===0){
 botao = createImg("Restart.png")
 botao.size(100,50)
 botao.position(350,400)
 }
}



function kill(){
   if(frameCount%80===0){
      K = createSprite(580,350)
      K.velocityY = 10
      K.lifetime = 700/12
      K.addImage(bola_azul)
      K.scale = 0.2
      mao_esquerda.add(K)
   }
     if(frameCount%80===0){
      K2 = createSprite(820,350)
      K2.velocityY = 10
      K2.lifetime = 700/12
      K2.addImage(bola_azul)
      K2.scale = 0.2
      mao_direita.add(K2)
   }



}



function fire(){
 if(frameCount%120===0){
 evil_fire = createSprite(200,0)
 evil_fire.x = Math.round(random(170,1400))
 evil_fire.velocityY = 10
 evil_fire.lifetime = 700/12
 evil_fire.addImage(bola_azul)
 evil_fire.scale = 0.5
 deus.add(evil_fire)
}



}

function draw() {
 image(Cenario,0,0,1400,700)
 drawSprites()
 
 fill(33,90,135)
 rect(1005,93,palavra,20)
 
 fire()
 kill()
 
 if(mao_esquerda.isTouching(good)){
   life = life-1
   good.x = 100
   good.y = 630
}
 if(mao_direita.isTouching(good)){
   life = life -1
   good.x = 100
   good.y = 630
 }
 if(deus.isTouching(good)){
   life = life -1
   good.x = 100
   good.y = 630
 }
 if(life===2){
 cabeça.destroy()
 }
 else if(life===1){
 cabeça2.destroy()
 }
 else if(life===0){
 cabeça3.destroy()
 background("black")
 textSize(70)
 textFont("Elephant")
 deus.destroyEach()
 mao_esquerda.destroyEach()
 mao_direita.destroyEach()
 fill("red")
 text("GAME OVER",500,350)
 }
 if(tiro.isTouching(evil)){
 
 if (palavra>=0){
 palavra = palavra - 0.8 
 background("yellow")
 textSize(70)
 textFont("Elephant")
 fill("black")
 text("YOU WIN",500,350)

 }   
}


 
 if(keyIsDown(LEFT_ARROW)){
    good.x = good.x - 10
    good.mirrorX(+1)

}
 if(keyIsDown(RIGHT_ARROW)){
    good.x = good.x + 10
    good.mirrorX(-1)
}
if(keyIsDown(UP_ARROW)&&good.y>600){
   good.velocityY = -12
    
}
good.velocityY = good.velocityY + 0.5
good.collide(teto)
good.collide(parede)
good.collide(xao)
good.collide(xao2)

if(good.x>width/2+1){
evil.mirrorX(+1)
}
if(good.x<width/2+1){
   evil.mirrorX(-1)
}

if(keyIsDown(LEFT_ARROW)){
   
   if (keyWentDown("space")){
      shoot = createSprite(200,200)
      
      shoot.x = shoot.x - 20
      shoot.mirrorX(-1)
      shoot.velocityX = -20
      
      shoot.lifetime = 700/12
      shoot.addImage(bola_vermelha)
      shoot.x = good.x 
      shoot.y = good.y + 15
      shoot.scale = 0.08
      tiro.add(shoot)
   }

}
if(keyIsDown(RIGHT_ARROW)){
   
   
   if (keyWentDown("space")){
      shoot = createSprite(200,200)
      
      shoot.x = shoot.x + 20
      shoot.mirrorX(+1)
      shoot.velocityX = +20


      shoot.lifetime = 700/12
      shoot.addImage(bola_vermelha)
      shoot.x = good.x 
      shoot.y = good.y + 15
      shoot.scale = 0.08
      tiro.add(shoot)
   }


}




}



