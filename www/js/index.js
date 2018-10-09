var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

document.addEventListener("deviceready", onDeviceReady, false);


function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
// This is where the evenet listeners are. Defined by the .addEventListener command
// The lifecycle events are onResume and onPause
// The event handlers check for different states the phone is in and executes the commands based on the state of the phone
	launched_count++;
	updateDisplay();

	alert("device ready");
    }


    function onPause() {

	paused_count++;
	updateDisplay();

	alert("pause");
    }


    function onResume() {

	resumed_count++;
	updateDisplay();

	alert("resume");
    }
