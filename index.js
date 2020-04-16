const wakeDog = function(name, breed){
  const phrase = createPhrase("Wake", name, breed);
  console.log(phrase);
  return phrase;
}

const leashDog = function(name, breed){
  const phrase = createPhrase("Leash", name, breed);
  console.log(phrase);
  return phrase;
}

const walkToPark = function(name, breed){
  const phrase = createPhrase("Walk to the park with", name, breed);
  console.log(phrase);
  return phrase;
}

const throwFrisbee = function(name, breed){
  const phrase = createPhrase("Throw the frisbee for", name, breed);
  console.log(phrase);
  return phrase;
}

const walkHome = function(name, breed){
  const phrase = createPhrase("Walk home with", name, breed);
  console.log(phrase);
  return phrase;
}

const unleashDog = function(name, breed){
  const phrase = createPhrase("Unleash", name, breed);
  console.log(phrase);
  return phrase;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
  const results = [];
  for(let i = 0; i < routine.length; ++i) {
    results.push(routine[i](dogName, dogBreed));
  }
  return results;
}

function createPhrase(verb, name, breed){
  return `${verb} ${name} the ${breed}`;
}
