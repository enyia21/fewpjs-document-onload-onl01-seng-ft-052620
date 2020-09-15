// Your code goes here

// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
//   });

//   console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );

// I believe that this is the call back function:
document.addEventListener('DOMContentLoaded', () => {
    theDomHasLoaded();
    })

// document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

function theDomHasLoaded() {
    document.getElementById('text').innerHTML = "This is really cool!";;
    // domTestOnLoadChange.innerHTML = "This is really cool!";
}