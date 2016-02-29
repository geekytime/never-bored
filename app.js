var getActivity = require("./get-activity.js");

var activityElement = document.getElementById("activity");

var setActivityText = function(){
  var activityText = getActivity();
  activityElement.innerHTML = activityText;
};

document.getElementById("refresh").addEventListener("click", setActivityText);

setActivityText();
