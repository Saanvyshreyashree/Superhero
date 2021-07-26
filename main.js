var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_width=30;
block_height=30;

var player_object="";
var block_object="";

function player_update()
{
fabric.Image.fromURL("player.png",function(Img)
{
 player_object=Img;
 player_object.scaleToWidth(150);
 player_object.scaleToHeight(140);
 player_object.set(
     {
        top:player_y,
        left:player_x 
     }
 );

 canvas.add(player_object);
});
}


function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img)
{
 block_object=Img;
 block_object.scaleToWidth(block_width);
 block_object.scaleToHeight(block_height);
 block_object.set(
     {
        top:player_y,
        left:player_x 
     }
 );

 canvas.add(block_object);
});
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
       keypressed=e.keyCode;
    if(e.shiftkey==true && keypressed=='80')
    {
        console.log("p and shift pressed togethere");
        block_width=block_width +10;
        block_height=block_height +10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;

    }

        if(e.shiftkey==true && keypressed=='77')
        {
            console.log("m and shift pressed togethere");
            block_width=block_width -10;
            block_height=block_height -10;
            document.getElementById("current_width").innerHTML=block_width;
            document.getElementById("current_height").innerHTML=block_height;
            
        }
    
        if(keypressed=='38')
        {
            up();
            console.log("up");
        }

        if(keypressed=='40')
        {
            down();
            console.log("down");
        }

        if(keypressed=='39')
        {
            right();
            console.log("right");
        }

        if(keypressed=='37')
        {
            left();
            console.log("left");
        }

        if(keypressed=='87')
        {
            new_image('player.png');
            console.log("p");
        }

        if(keypressed=='71')
        {
            new_image('spiderman_body.png');
            console.log("s");
        }

        if(keypressed=='76')
        {
            new_image('thor_right_hand');
            console.log("t");
        }

        if(keypressed=='84')
        {
            new_image('captain_america_left_hand.png');
            console.log("c");
        }

        if(keypressed=='82')
        {
            new_image('hulk_legs.png');
            console.log("h");
        }
 
        if(keypressed=='89')
        {
            new_image('ironman_face.png');
            console.log("i");
        }
    }

function up()
{
    if(player_y >=0)
    {
        player_y= player_y - block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x= player_x + block_width;
        canvas.remove(player_object);
        player_update();
    }
} 

function left()
{
    if(player_x >=0)
    {
        player_x= player_x - block_width;
        canvas.remove(player_object);
        player_update();
    }
}