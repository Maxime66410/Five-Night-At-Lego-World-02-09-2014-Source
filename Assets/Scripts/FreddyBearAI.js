//This script is a part of Five Nights at Teddy's Project by Dima Vulgerstal
//vulgerstal@gmail.com		youtube.com/vulgerstal

#pragma strict
var playerCamera : GameObject;
var spawnPointOne : Transform;
var spawnPointTwo : Transform;
var spawnPointThree : Transform;
var spawnPointFour : Transform;
var spawnPointFive : Transform;
var spawnPreAttack : Transform;
var spawnPreAttackTwo : Transform;
var spawnAttack: Transform;
var spawnNeutral : Transform;
var whoToMove : GameObject;
var enough : boolean;
var spawnPosition : int;
var youAreDead : boolean;
var youAreDeadTwo : boolean;
var bearSound : AudioClip;
var doorRbutton : GameObject;
var doorLbutton : GameObject;
var speed : float; //5
var randomTime : float;
var busy : boolean;
var weAreGood : boolean = true;
var gameOver : boolean;
var suddenAttackPosition : int = 0;
var b : int = 8;
var done : boolean;

var isPlaying : boolean;
var notPlaying : boolean;
var wasPlayed : boolean;
var wasStopped : boolean;
var wasListened : boolean;

var jumpScareLight : GameObject;
var eyes : GameObject;

function SuddenAttack()
{

	wasPlayed = isPlaying;
	wasStopped = notPlaying;
	
	if(playerCamera.GetComponent(ShowHideCameraButton).darkness.audio.isPlaying) { isPlaying=true; eyes.active = true;}
	if(!playerCamera.GetComponent(ShowHideCameraButton).darkness.audio.isPlaying && isPlaying) { notPlaying=true; }

	if(wasPlayed && wasStopped)
		{
		if(!wasListened)
			{
			//Some action like 'var lol=35; //Right After Music Stops We Can Do something Once!
		/*if(suddenAttackPosition == 1 || suddenAttackPosition == 2 ) //Right */ if(suddenAttackPosition == 1991)
		{
			speed = 15;
			whoToMove.transform.position = spawnPointTwo.transform.position;
			whoToMove.transform.rotation = spawnPointTwo.transform.rotation;
			playerCamera.GetComponent(ShowHideCameraButton).doorRcounter=1;
			SuddenAttackFromRight();
			//ItEntersFromRight();
		}
		/*if(suddenAttackPosition == 3 || suddenAttackPosition == 4 ) //Left */
		if(suddenAttackPosition == 3 || suddenAttackPosition == 4 || suddenAttackPosition == 1 || suddenAttackPosition == 2)
		{
		speed = 15;
		whoToMove.transform.position = spawnPointFive.transform.position;
		whoToMove.transform.rotation = spawnPointFive.transform.rotation;
		SuddenAttackFromLeft();
		//ItEntersFromLeft();
	}
		
			wasListened = true;
			}
		}

}

function Start () { spawnPosition = Random.Range(1, 5); /*1,4*/ }
function Update ()
{

SuddenAttack();


//UNif(Input.GetKey(KeyCode.M)/*wasListened && !done /*|| /*gameOver && *//*!playerCamera.GetComponent(ShowHideCameraButton).darkness.audio.isPlaying && !done*/)
//UN	{
		//if(suddenAttackPosition == 1 || suddenAttackPosition == 2) //Right
		//{
//UN			speed = 15;
			//gameOver=true;
			//playerCamera.GetComponent(ShowHideCameraButton).doorRcounter=1;
//UN			whoToMove.transform.position = spawnPointTwo.transform.position; //spawnPreAttack
//UN			whoToMove.transform.rotation = spawnPointTwo.transform.rotation;
			//SuddenAttackFromRight();
			//playerCamera.GetComponent(ShowHideCameraButton).doorRcounter=1;
//UN			ItEntersFromRight();
			//var stepA : float = speed * Time.deltaTime;
	        //whoToMove.transform.position = Vector3.MoveTowards(whoToMove.transform.position, spawnPreAttack.position, stepA);
//UN			done = true;
		//}
//UN	} //if(wasListened) <<<==================





//UNCOMMENT2DASHESif(Input.GetKey(KeyCode.N)/*wasListened && !done *//*|| /*gameOver && *//*!playerCamera.GetComponent(ShowHideCameraButton).darkness.audio.isPlaying && !done*/)
//UN{
	//if(suddenAttackPosition == 3 || suddenAttackPosition == 4) //Left
		//{
//UN		speed = 15; //15
		//gameOver=true;
		//doorLbutton.GetComponent(DoorButton).opened = false;
//UN		whoToMove.transform.position = spawnPointFive.transform.position; //spawnPreAttackTwo
//UN		whoToMove.transform.rotation = spawnPointFive.transform.rotation;
		//SuddenAttackFromLeft();
//UN		ItEntersFromLeft();
		//var stepB : float = speed * Time.deltaTime;
		//whoToMove.transform.position = Vector3.MoveTowards(whoToMove.transform.position, spawnPreAttackTwo.position, stepB);
//UN		done = true;
	//}
//UN}



		randomTime -= Time.deltaTime;
		if(randomTime<0){randomTime=0; busy=false;}


	if(playerCamera.GetComponent(ShowHideCameraButton).weAreWatching && !enough)
	{
ItIsSpawning();
	}
	if(!playerCamera.GetComponent(ShowHideCameraButton).weAreWatching && enough)
	{
	enough=false;
	}
	
	if(/*playerCamera.GetComponent(ShowHideCameraButton).*/weAreGood)
	{
	ItIsWalking();
	ItEntersFromRight();
	ItEntersFromLeft();
	}
}

function ItIsSpawning()
{
	spawnPosition = Random.Range(1, 6); //1, 4;1, 5;
	if(spawnPosition==1)
	{
	whoToMove.transform.position = spawnPointOne.transform.position;
	whoToMove.transform.rotation = spawnPointOne.transform.rotation;
	}
	else if(spawnPosition==2)
	{
	whoToMove.transform.position = spawnPointTwo.transform.position;
	whoToMove.transform.rotation = spawnPointTwo.transform.rotation;
	}
	else if(spawnPosition==3)
	{
	whoToMove.transform.position = spawnPointThree.transform.position;
	whoToMove.transform.rotation = spawnPointThree.transform.rotation;
	}
	else if(spawnPosition==4)
	{
	whoToMove.transform.position = spawnPointFour.transform.position;
	whoToMove.transform.rotation = spawnPointFour.transform.rotation;
	}
	else if(spawnPosition==5 && !doorLbutton.GetComponent(DoorButton).opened)
	{
	whoToMove.transform.position = spawnPointFive.transform.position;
	whoToMove.transform.rotation = spawnPointFive.transform.rotation;
	}
	enough = true;
}

//if(doorLbutton.GetComponent(DoorButton).opened && whoToMove.transform.position == spawnPointFive.transform.position)
//{
//	       whoToMove.transform.position = spawnNeutral.position;
//	       whoToMove.transform.rotation = spawnNeutral.rotation;
//}


function ItIsWalking()
{
	if(!busy)
		{
		busy=true;
		randomTime = Random.Range(10.0,20.0); //5.0,15.0 //10,25
		ItIsSpawning();
		//randomTime -= Time.deltaTime;
		//if(randomTime<0){randomTime=0; busy=false;}
		//if(randomTime==0){
		//ItIsSpawning();
	}
}


/*
	spawnPosition = Random.Range(1, 5); //1, 4
	if(spawnPosition==1)
	{
	whoToMove.transform.position = spawnPointOne.transform.position;
	whoToMove.transform.rotation = spawnPointOne.transform.rotation;
	}
	else if(spawnPosition==2)
	{
	whoToMove.transform.position = spawnPointTwo.transform.position;
	whoToMove.transform.rotation = spawnPointTwo.transform.rotation;
	}
	else if(spawnPosition==3)
	{
	whoToMove.transform.position = spawnPointThree.transform.position;
	whoToMove.transform.rotation = spawnPointThree.transform.rotation;
	}
	else if(spawnPosition==4)
	{
	whoToMove.transform.position = spawnPointFour.transform.position;
	whoToMove.transform.rotation = spawnPointFour.transform.rotation;
	}
	yield WaitForSeconds(randomTime);
	*/
//ItIsSpawning();
//enough = false;
//playerCamera.GetComponent(ShowHideCameraButton).weAreWatching = true;
//playerCamera.GetComponent(ShowHideCameraButton).weAreWatching=true;
//enough = true;
//playerCamera.GetComponent(ShowHideCameraButton).weAreWatching=false;
//enough = false;
//}

function ItEntersFromRight()
{

if(whoToMove.transform.position == spawnPointTwo.transform.position && playerCamera.GetComponent(ShowHideCameraButton).doorRcounter==1)
	{ youAreDead=true; }
	if(youAreDead)
	{
	var step : float = speed * Time.deltaTime;
	        whoToMove.transform.position = Vector3.MoveTowards(whoToMove.transform.position, spawnPreAttack.position, step);
	}
	if(whoToMove.transform.position == spawnPreAttack.transform.position && !doorRbutton.GetComponent(DoorButton).opened)
	{
	gameOver=false;
	done=true;
	jumpScareLight.light.enabled = true;
	eyes.active = false;
	       playerCamera.GetComponent(PowerUsage).battery = 0;
	       playerCamera.GetComponent(Transform).position = playerCamera.GetComponent(ShowHideCameraButton).cameraPositionOne.transform.position;
	       playerCamera.GetComponent(Transform).rotation = playerCamera.GetComponent(ShowHideCameraButton).cameraPositionOne.transform.rotation;
	       youAreDead = false;
	       audio.clip = bearSound;
	       audio.Play();
	       
	       //PLACE FOR TIMER
	       
	       
	       whoToMove.transform.position = spawnAttack.position;
	       whoToMove.transform.rotation = spawnAttack.rotation;
	}
	if(whoToMove.transform.position == spawnPreAttack.transform.position && doorRbutton.GetComponent(DoorButton).opened)
	{
	       whoToMove.transform.position = spawnNeutral.position;
	       whoToMove.transform.rotation = spawnNeutral.rotation;
	       youAreDead = false;
	}

}



function ItEntersFromLeft()
{

if(whoToMove.transform.position == spawnPointFive.transform.position && !doorLbutton.GetComponent(DoorButton).opened)
{ youAreDeadTwo=true; }


//if(whoToMove.transform.position == spawnPointFive.transform.position && playerCamera.GetComponent(ShowHideCameraButton).doorLcounter==1)
//	{ youAreDeadTwo=true; }
	
	
	if(youAreDeadTwo)
	{
	var stepTwo : float = (speed/5) * Time.deltaTime;
	        whoToMove.transform.position = Vector3.MoveTowards(whoToMove.transform.position, spawnPreAttackTwo.position, stepTwo);
	
		       if(doorLbutton.GetComponent(DoorButton).opened)
	       {
	       whoToMove.transform.position = spawnNeutral.position;
	       whoToMove.transform.rotation = spawnNeutral.rotation;
	       }
	
	
	}
	
	
	if(whoToMove.transform.position == spawnPreAttackTwo.transform.position && !doorLbutton.GetComponent(DoorButton).opened)
	{
	
		gameOver=false;
	done=true;
	jumpScareLight.light.enabled = true;
	eyes.active = false;
	       playerCamera.GetComponent(PowerUsage).battery = 0;
	       playerCamera.GetComponent(Transform).position = playerCamera.GetComponent(ShowHideCameraButton).cameraPositionOne.transform.position;
	       playerCamera.GetComponent(Transform).rotation = playerCamera.GetComponent(ShowHideCameraButton).cameraPositionOne.transform.rotation;
	       youAreDeadTwo = false;
	       audio.clip = bearSound;
	       audio.Play();
	       
	       //PLACE FOR TIMER
	       

	       whoToMove.transform.position = spawnAttack.position;
	       whoToMove.transform.rotation = spawnAttack.rotation;
	}
	
	
}


function SuddenAttackFromRight()
{
var stepFour : float = speed * Time.deltaTime;
whoToMove.transform.position = Vector3.MoveTowards(whoToMove.transform.position, spawnPreAttack.position, stepFour);
}
if(whoToMove.transform.position == spawnPreAttack.transform.position)
	{
	gameOver=false;
	done=true;
	       playerCamera.GetComponent(PowerUsage).battery = 0;
	       playerCamera.GetComponent(Transform).position = playerCamera.GetComponent(ShowHideCameraButton).cameraPositionOne.transform.position;
	       playerCamera.GetComponent(Transform).rotation = playerCamera.GetComponent(ShowHideCameraButton).cameraPositionOne.transform.rotation;
	       youAreDead = false;
	       audio.clip = bearSound;
	       audio.Play();
	       whoToMove.transform.position = spawnAttack.position;
	       whoToMove.transform.rotation = spawnAttack.rotation;
	}

	function SuddenAttackFromLeft()
	{
	var stepThree : float = (speed/5) * Time.deltaTime;
	        whoToMove.transform.position = Vector3.MoveTowards(whoToMove.transform.position, spawnPreAttackTwo.position, stepThree);
	        if(whoToMove.transform.position == spawnPreAttackTwo.transform.position)
	        gameOver=false;
			done=true;
			jumpScareLight.light.enabled = true;
			eyes.active = false;
	       playerCamera.GetComponent(PowerUsage).battery = 0;
	       playerCamera.GetComponent(Transform).position = playerCamera.GetComponent(ShowHideCameraButton).cameraPositionOne.transform.position;
	       playerCamera.GetComponent(Transform).rotation = playerCamera.GetComponent(ShowHideCameraButton).cameraPositionOne.transform.rotation;
	       youAreDeadTwo = false;
	       audio.clip = bearSound;
	       audio.Play();
	       whoToMove.transform.position = spawnAttack.position;
	       whoToMove.transform.rotation = spawnAttack.rotation;
	}