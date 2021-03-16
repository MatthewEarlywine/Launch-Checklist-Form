// Write your JavaScript code here!
window.addEventListener("load", function() {
   // alert("Ready to go");
   const form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event){
      // alert("Ready to go");
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (pilotNameInput === null || copilotNameInput === null || fuelLevelInput === null || cargoMassInput === null){
         alert("All fields are required!");
         event.preventDefault()
      }
      if (typeof(pilotNameInput) !== "string"){
         alert("Listed pilot's name is not valid!");
         event.preventDefault()
      }
      if (typeof(copilotNameInput) !== "string"){
         alert("Listed co-pilot's name is not valid!");
         event.preventDefault()
      }
      if (isNaN(fuelLevelInput) === true){
         alert("Listed fuel level is not a number!");
         event.preventDefault()
      } 
      if (isNaN(cargoMassInput) === true){
         alert("Listed cargo mass is not a number!");
         event.preventDefault()
      }
   


   });
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
