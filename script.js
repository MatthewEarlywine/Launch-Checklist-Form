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
   const destination = document.getElementById("missionTarget");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      return response.json();
      }).then(function(json) {

         let i = Math.floor(Math.random()*6);
         let planetSpecs = `
           <h2>Mission Destination</h2>
           <ol>
              <li>Name: ${json[i].name}</li>
              <li>Diameter: ${json[i].diameter}</li>
              <li>Star: ${json[i].star}</li>
              <li>Distance from Earth: ${json[i].distance}</li>
              <li>Number of Moons: ${json[i].moons}</li>
           </ol>
           <img src="${json[i].image}"> `
         destination.innerHTML = planetSpecs;
      }); 

   
   form.addEventListener("submit", function(event){
      event.preventDefault();
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
      let pilotPresence = false;
      let copilotPresense = false;
      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || 
      cargoMassInput.value === ""){
         alert("All fields are required!");
      };
      if (isNumeric(pilotNameInput.value) === true || noSpecialChars(pilotNameInput.value) === false){
         alert("Listed pilot's name is not valid!");
      };
      if (isNumeric(copilotNameInput.value) === true || noSpecialChars(copilotNameInput.value) === false){
         alert("Listed co-pilot's name is not valid!");
      };
      if (isNumeric(fuelLevelInput.value) === false || noSpecialChars(fuelLevelInput.value) === false){
         fuelStatusInput.innerHTML = `"${fuelLevelInput.value}" is not a valid fuel amount.`
         alert("Listed fuel level is not a number!");
      };
      if (isNumeric(cargoMassInput.value) === false || noSpecialChars(cargoMassInput.value) === false){
         cargoStatusInput.innerHTML = `"${cargoMassInput.value}" is not a valid cargo amount.`
         alert("Listed cargo mass is not a number!");
      };
      

      if (isNumeric(pilotNameInput.value) === false && noSpecialChars(pilotNameInput.value) === true){
         pilotStatusInput.innerHTML = `Pilot ${pilotNameInput.value} is Ready`;
         pilotPresence = true;
      } else {
         pilotStatusInput.innerHTML = `Pilot is Not Ready`;
         launchChecklist.style.visibility = "visible";
      };
     
      if (isNumeric(copilotNameInput.value) === false && noSpecialChars(copilotNameInput.value) === true){
         copilotStatusInput.innerHTML = `Copilot ${copilotNameInput.value} is Ready`;
         copilotPresense = true;
      } else {
         copilotStatusInput.innerHTML = `Copilot is Not Ready`;
         launchChecklist.style.visibility = "visible";
      };
      
      if (fuelLevelInput.value < 10000){
         launchChecklist.style.visibility = "visible";
         fuelStatusInput.innerHTML = "Not enough fuel for the journey.";
      } else if (fuelLevelInput === ''){
         launchChecklist.style.visibility = "visible";
         fuelStatusInput.innerHTML = "No fuel available for the journey.";
      } else if (fuelLevelInput.value >= 10000){
         launchChecklist.style.visibility = "visible";
         fuelStatusInput.innerHTML = "Fuel level high enough for launch.";
      };

      if (cargoMassInput.value > 10000){
         launchChecklist.style.visibility = "visible";
         cargoStatusInput.innerHTML = "Too much mass for takeoff.";
       } else if (cargoMassInput.value === ""){
         launchChecklist.style.visibility = "visible";
         cargoStatusInput.innerHTML = "No cargo has been loaded.";
       } else if (cargoMassInput.value <= 10000){
         launchChecklist.style.visibility = "visible";
         cargoStatusInput.innerHTML = "Cargo mass low enough for launch.";
       };
       
      if (cargoMassInput.value > 10000 || fuelLevelInput.value < 10000 || pilotPresence === false || 
         copilotPresense === false){
            launchChecklist.style.visibility = "visible";
            launchStatusOutput.style.color = "red";
            launchStatusOutput.innerHTML = "Shuttle not ready for launch.";
         };

      if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000 && pilotPresence === true && 
         copilotPresense === true){
         launchChecklist.style.visibility = "visible";
         fuelStatusInput.innerHTML = "Fuel level high enough for launch.";
         cargoStatusInput.innerHTML = "Cargo mass low enough for launch.";
         launchStatusOutput.innerHTML = "Shuttle is ready for launch.";
         launchStatusOutput.style.color = "green";
      };
      
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
