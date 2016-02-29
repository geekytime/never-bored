var _ = require("lodash");
var activities = require("./activities.js");
var adjectives = require("./adjectives.js");
var bookActivities = require("./book-activities.js");
var condenseWhitespace = require("condense-whitespace");
var gameElements = require("./game-elements.js");
var gameTypes = require("./game-types.js");
var format = require("string-template");
var isVowel = require("is-vowel");
var places = require("./places.js");
var pluralize = require("pluralize");
var subjects = require("./subjects.js");

module.exports = function(){
  var tokens = {
    adjective: _.sample(adjectives),
    adjectiveSubjectPlace: buildAdjectiveSubjectPlace(),
    bookActivity: _.sample(bookActivities),
    gameElement: _.sample(gameElements),
    gameType: _.sample(gameTypes),
    place: _.sample(places),
    subject: _.sample(subjects),
    singularSubject: buildSingularSubject()
  };

  var activity = _.sample(activities);
  return format(activity, tokens);
};

var buildAdjectiveSubjectPlace = function(){
  var adjective = getItemMaybe(adjectives);
  var subject = _.sample(subjects);
  var place = getItemMaybe(places);
  var fragment = adjective + " " + subject + " " + place;
  return condenseWhitespace(fragment);
};

var getItemMaybe = function(list){
  var chance = _.random(1,2);
  if (chance === 1){
    return _.sample(list);
  }
  return "";
};

var buildSingularSubject = function(){
  var subject = _.sample(subjects);
  var singularSubject = pluralize(subject, 1);
  var firstLetter = _.first(singularSubject);
  if (isVowel(firstLetter)){
    return "an " + singularSubject;
  }
  return "a " + singularSubject;
};
