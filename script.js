let hours=['#9am','#10am','#11am','#12pm','#1pm','#2pm','#3pm','#4pm','#5pm'];

//moment js for header
let today = moment();
$("#currentDay").text(today.format("[Today is] dddd, MMM Do, YYYY"));

//Time blocks
function checkTime(){
    let hourCount=9; //start at 9am
    //Will check if the current hour matches any of the timeblocks
    for(i=0; i<hours.length; i++){
        console.log(hours[i]);
        if(today.hour()<hourCount){
             //if the current hour is less than the timeblock, future class is added
            $(hours[i]).addClass("future");
        }

        if(today.hour()>hourCount){
            //if the current hour is greater than the timeblock, past class is added
            $(hours[i]).addClass("past");
        }
        else {
            //if the current hour is equal to the timeblock, present class is added
           $(hours[i]).addClass("present");
       }
        hourCount++;
    }
}
//save messages to local storage
function savePlanner(){
    for(i=0; i<hours.length;i++){
        localStorage.setItem(hours[i],$(hours[i]).val());
    }
}
//get the plans saved to local and populate them on the planner
function plans(){
    for(i=0; i<hours.length; i++){
        $(hours[i]).text(localStorage.getItem(hours[i]));
    }
}
checkTime();
plans();
$("button").click(function(){
    savePlanner();
});