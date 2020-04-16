const wakeDog = function wakeDog(name, breed){
  const phrase = createPhrase("Wake", name, breed);
  console.log(phrase);
  return phrase;
}

const leashDog = function leashDog(name, breed){
  const phrase = createPhrase("Leash", name, breed);
  console.log(phrase);
  return phrase;
}

const walkToPark = function walkToPark(name, breed){
  const phrase = createPhrase("Walk to the park with", name, breed);
  console.log(phrase);
  return phrase;
}

const throwFrisbee = function throwFrisbee(name, breed){
  const phrase = createPhrase("Throw the frisbee for", name, breed);
  console.log(phrase);
  return phrase;
}

const walkHome = function walkHome(name, breed){
  const phrase = createPhrase("Walk home with", name, breed);
  console.log(phrase);
  return phrase;
}

const unleashDog = function unleashDog(name, breed){
  const phrase = createPhrase("Unleash", name, breed);
  console.log(phrase);
  return phrase;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
  results = [];
  for(let i = 0; i < routine.length; ++i) {
    results.push(routine[i](dogName, dogBreed));
  }
}

function createPhrase(verb, name, breed){
  return `${verb} ${name} the ${breed}`;
}
