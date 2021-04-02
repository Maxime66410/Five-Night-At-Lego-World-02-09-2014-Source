//This script is a part of Five Nights at Teddy's Project by Dima Vulgerstal
//vulgerstal@gmail.com		youtube.com/vulgerstal

#pragma strict

var door : Transform;
var opened : boolean;

private var doorStartPositionY : float;
private var doorEndPositionY : float;

function Start () {
doorStartPositionY = transform.position.y;
doorEndPositionY = transform.position.y * 4;
}

function Update () {


if(opened)
{
door.transform.position.y += Time.deltaTime*4; //-
if(door.transform.position.y >= doorStartPositionY) { door.transform.position.y = doorStartPositionY;}
}

if(!opened)
{
door.transform.position.y += Time.deltaTime*4;
if(door.transform.position.y >= doorEndPositionY) { door.transform.position.y = doorEndPositionY;}
}

}