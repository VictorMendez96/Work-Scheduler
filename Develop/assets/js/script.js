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
    console.log(hour)
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

    // Clearing events string to be able to push array into string
    events = [];

    // Loop through each text area to create an event. This allows you to put other data in the event array in the future
    for (let i = 0; i < textArea.length; i++) {

        var info = textArea[i].value;

        var event = {
            info : info,
        };

        // Pushes the event array created above to the last spot
        events.push(event);
    };
    // Send events string to local storage 
    localStorage.setItem("events", JSON.stringify(events));

    // Calls showEvents function
    showEvents();
};

// function to show saved events
function showEvents(){

    // Retrieve data from local storage or make events an empty string if no no data has been saved yet
    events = JSON.parse(localStorage.getItem("events")|| '[]');

    // Populate saved data in "info:" to the textArea
    for (let i = 0; i < events.length; i++) {
        textArea[i].value = events[i].info;
    };

};

// Create event listener to save input when clicked
save.click(saveEvent);

// Call init() function
init();
