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
    localStorage.setItem("events", JSON.stringify(events));
    events = JSON.parse(localStorage.getItem("events")|| "[]");
    console.log(hour)
    for (let i = 0; i < textArea.length; i++) {
        // events = JSON.parse(localStorage.getItem("events")|| "[]");
        var info = textArea[i].value;
        var event = {
            hour : hour,
            info : info,
        };
        
        events.push(event);
        localStorage.setItem("events", JSON.stringify(events));
        hour++;
    }
    
    ;
    // events = JSON.parse(localStorage.getItem("events")||'[]');
    
    hour = 8;
    showEvents();
};

// function to show saved events
function showEvents(){
    events = JSON.parse(localStorage.getItem("events"));

    for (let i = 0; i < textArea.length; i++) {
        const element = array[i];
        
    }

    // events.forEach(Element => {
    //     i= 0;
    //     if (hour === $(Element.hour)) {
    //         textArea[i].value = $(Element.info)
    //     };
    //     i++;
    //     hour++;
    // });
    hour = 8;
};

// Create event listener to save input when clicked
save.click(saveEvent);

// Call init() function
init();
