console.log("aside got called");

let asideFooter = document.getElementById('aside-footer');





// (code/function) that executes when the capture button got clicked.

function capture(){



    let currentDay = day.innerHTML.trim();
    let currentHour = hour.innerHTML.trim();
    let currentMinute = minute.innerHTML.trim();
    let currentSecond = second.innerHTML.trim();


    let current = currentDay+" : "+currentHour+" : "+currentMinute+" : "+currentSecond
    
    var element = document.createElement("div");
    var text = document.createTextNode(current);

    element.appendChild(text);

    var attribute = document.createAttribute("class");
    attribute.value = "aside-footer-element";
    
    element.setAttributeNode(attribute);

    asideFooter.appendChild(element);
    
    console.log(current); 


}