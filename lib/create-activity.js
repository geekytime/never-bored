import _ from "lodash"
import activities from "./data/activities.js"
import adjectives from "./data/adjectives.js"
import bookActivities from "./data/book-activities.js"
import condenseWhitespace from "condense-whitespace"
import gameElements from "./data/game-elements.js"
import gameTypes from "./data/game-types.js"
import format from "string-template"
import isVowel from "is-vowel"
import places from "./data/places.js"
import pluralize from "pluralize"
import subjects from "./data/subjects.js"

export default function(){
  var tokens = {
    adjective: _.sample(adjectives),
    adjectiveSubjectPlace: buildAdjectiveSubjectPlace(),
    bookActivity: _.sample(bookActivities),
    gameElement: _.sample(gameElements),
    gameType: _.sample(gameTypes),
    place: _.sample(places),
    subject: _.sample(subjects),
    singularSubject: buildSingularSubject()
  }

  var activity = _.sample(activities)
  return format(activity, tokens)
}

var buildAdjectiveSubjectPlace = function(){
  var adjective = getItemMaybe(adjectives)
  var subject = _.sample(subjects)
  var place = getItemMaybe(places)
  var fragment = adjective + " " + subject + " " + place
  return condenseWhitespace(fragment)
}

var getItemMaybe = function(list){
  var chance = _.random(1,2)
  if (chance === 1){
    return _.sample(list)
  }
  return ""
}

var buildSingularSubject = function(){
  var subject = _.sample(subjects)
  var singularSubject = pluralize(subject, 1)
  var firstLetter = _.first(singularSubject)
  if (isVowel(firstLetter)){
    return "an " + singularSubject
  }
  return "a " + singularSubject
}
