// Variables to define
var currentDay = $("#currentDay");
var saveEvent = $(".saveBtn");
var timeBlock = $(".time-block")
var events = []
var h = 0;


// Init function to call all necessary functions at page load
function init(){
    setCurrentDate();
    setColorCode;
    showEvents();
};

// function to set the current date in Jumbotron
function setCurrentDate(){
    var today = moment().format("dddd, MMM Do, YYYY, h:mm a");
    currentDay.text(today)

};

// function to set the background color based on time
function setColorCode(){

};

// function to save input events
function saveEvent(){
    var event = {
        hour : i,
        info : $.trim($("#sixText").val())
    }


};

// function to show saved events
function showEvents(){

};

// Create event listener to save input event
saveEvent.click(saveEvent);

// Call init() function
init();
