// Write your JavaScript code here!
window.addEventListener("load", function() {
   // alert("Ready to go");
   function isNumeric(num){
      return !isNaN(num)
    };
   function noSpecialChars(str){
      return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
    };
   const form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event){
      // alert("Ready to go");
      // console.log("ready to go")
      let pilotNameInput = document.getElementById("pilotName");
      let copilotNameInput = document.getElementById("copilotName");
      let fuelLevelInput = document.getElementById("fuelLevel");
      let cargoMassInput = document.getElementById("cargoMass");

      let pilotStatusInput = document.getElementById("pilotStatus");
      let copilotStatusInput = document.getElementById("copilotStatus");
      let fuelStatusInput = document.getElementById("fuelStatus");
      let cargoStatusInput = document.getElementById("cargoStatus");

      let launchStatusOutput = document.getElementById("launchStatus");
      let launchChecklist = document.getElementById("faultyItems");
      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || 
      cargoMassInput.value === ""){
         alert("All fields are required!");
         event.preventDefault()
      } 
      if (isNumeric(pilotNameInput.value) === true || noSpecialChars(pilotNameInput.value) === false){
         alert("Listed pilot's name is not valid!");
         event.preventDefault()
      }
      if (isNumeric(copilotNameInput.value) === true || noSpecialChars(copilotNameInput.value) === false){
         alert("Listed co-pilot's name is not valid!");
         event.preventDefault()
      }
      if (isNumeric(fuelLevelInput.value) === false || noSpecialChars(fuelLevelInput.value) === false){
         alert("Listed fuel level is not a number!");
         event.preventDefault()
      } 
      if (isNumeric(cargoMassInput.value) === false || noSpecialChars(cargoMassInput.value) === false){
         alert("Listed cargo mass is not a number!");
         event.preventDefault()
      }

      pilotStatusInput.innerHTML = pilotNameInput.value;
      copilotStatusInput.innerHTML = copilotNameInput.value;
      
      if (fuelLevelInput.value < 10000){
         launchChecklist.style.visibility = "visible";
         fuelStatusInput.innerHTML = "Not enough fuel for the journey.";
         launchStatusOutput.innerHTML = "Shuttle not ready for launch.";
         launchStatusOutput.style.color = "red";
      }

      if (cargoMassInput.value > 10000){
         launchChecklist.style.visibility = "visible";
         cargoStatusInput.innerHTML = "Too much mass for takeoff.";
         launchStatusOutput.innerHTML = "Shuttle not ready for launch.";
         launchStatusOutput.style.color = "red";
      }

      if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000){
         launchChecklist.style.visibility = "visible";
         fuelStatusInput.innerHTML = "Fuel level high enough for launch."
         cargoMassInput.innerHTML = "Cargo mass low enough for launch."
         launchStatusOutput.innerHTML = "Shuttle is ready for launch.";
         launchStatusOutput.style.color = "green";
      }
      
      
      
      event.preventDefault();
   


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
