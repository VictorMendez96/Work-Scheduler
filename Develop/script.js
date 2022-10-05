// Variables to define
var currentDay = $("#currentDay");
var save = $(".saveBtn");
var timeBlock = $(".time-block")
var events = []
var hour = 8;
var now = moment().hours()
var textArea = $("textArea")

// Init function to call all necessary functions at page load
function init(){
    setCurrentDate();
    setColorCode();
    showEvents();
};

// function to set the current date in Jumbotron
function setCurrentDate(){
    var today = moment().format("dddd, MMM Do, YYYY, h:mm a");
    currentDay.text(today)

};

// function to set the background color based on time
function setColorCode(){
    timeBlock.each(function() {
        
        if (hour < now) {
            $(this).addClass("past");
        } else if (hour === now) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }
        hour++;

    });
    hour = 8;
};

// function to save input events
function saveEvent(){
    for (let i = 0; i < textArea.length; i++) {
        var info = textArea[i].value;
        var event = {
            hour : hour,
            info : info,
        };
        events.push(event);
        events = events.concat(JSON.parse(localStorage.getItem("events")||'[]'));
        localStorage.setItem("events", JSON.stringify(events));
        hour++;
    }
    hour = 8;
    showEvents();
};

// function to show saved events
function showEvents(){

};

// Create event listener to save input when clicked
save.click(saveEvent);

// Call init() function
init();
