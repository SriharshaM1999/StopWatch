console.log("main got called");

// code for accessing html elements

let day = document.getElementById('day');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
var timerId;

let isClockStopped = true;
let secondValue=0;
let minuteValue=0;
let hourValue=0;
let dayValue=0;

// console.log(day, hour, minute, second);




// (code/function) that executes when start button got clicked;

function start(){
    
    
    if(isClockStopped== false) return;

    console.log("inside start");

   

    isClockStopped=false;

    timerId = setInterval(timer,1000)
}


// (code/function) for updating the values of the timer

function timer(){

 
  //      let secondValue = second.innerHTML;

        secondValue++;

        // code for handling second value;

        
        if(secondValue<=9){
            second.innerHTML='0'+secondValue;
        }

        if(secondValue>59){
            secondValue=0;
            second.innerHTML='00';
           
          
            minuteValue++;

            
        }

        else if(secondValue>9){
            second.innerHTML=secondValue;
        }




        // code for handling minute value
        if(minuteValue<=9 && minuteValue>0){
            minute.innerHTML='0'+minuteValue;
        }


        else if(minuteValue>59){
            minuteValue=0;
            minute.innerHTML='00';
            hourValue++;
        }

        
        else if(minuteValue>9){
            minute.innerHTML=minuteValue;
        }



        // code for handling the hour value
        if(hourValue<=9 && hourValue>0){
            hour.innerHTML='0'+hourValue;
        }

        

        else if(hourValue>23){
            hourValue=0;
            hour.innerHTML='00';
            dayValue++;
        }

        else if(hourValue>9){
            hour.innerHTML=hourValue;
        
        }




        // code for handling the day section
        if(dayValue<=9  && dayValue>0){
            day.innerHTML='0'+dayValue;
        }

        else if(dayValue>9){
            day.innerHTML=dayValue;
        }


        

        
}



// (code/function) that executes when the stop button got clicked

function stop(){
        if(isClockStopped== true) return;
       clearInterval(timerId);
       isClockStopped=true;
}


// (code/function) that executes when the reset button got clicked

function reset(){

        day.innerHTML='00';
        hour.innerHTML='00';
        minute.innerHTML='00';
        second.innerHTML='00';
        secondValue=0;
        minuteValue=0;
        hourValue=0;
        dayValue=0;

        stop();


}


