var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        bdImage=Img;


        bdImage.scaleToWidth(700);
        bdImage.scaleToHeigth(510);
        bdImage.set({
            top:0,
            left:0
        });
        canvas.add(bdImage);
    });
	
}

function playSound(){
	x.play();
}

