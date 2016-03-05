import Cycle from "@cycle/core";
import {makeDOMDriver, hJSX} from "@cycle/dom";

var getActivity = require("./get-activity.js");

var render = function(activityText){
  console.log(activityText);
  return (
    <div>
      <h1>Never Bored</h1>
      <p>Kid(s): I'm bored!</p>
      <p>You: Okay. Here's your new job:</p>
      <h2>{activityText}</h2>
      <input id="refresh" type="button" value="Refresh"/>
    </div>
  );
};

var main = function(sources){
  var clickRefresh$ = sources.DOM.select("#refresh").events("click").map(getActivity);
  var activities$ = clickRefresh$.startWith(getActivity());
  var sinks = {};
  sinks.DOM = activities$.map(render);
  return sinks;
};

Cycle.run(main, {
  DOM: makeDOMDriver("#app")
});
