/**
 * Notes:
 * - input is a number that represents number of switches and number of rounds (count)
 * - output is an array
 * 
 * lightsOn(5);
 * round 1: turn on all lights 1, 2, 3, 4, 5
 * round 2: toggle all lights that are divisible by 2 off - 2, 4; all odd index lights are on - 1, 3, 5
 * round 3: toggle all lights from are divisible by 3 off - 2, 3, 4; on - 1, 5
 * round 4: toggle all lights from are divisible by 4 off - 2, 3 ; on - 1, 4, 5
 * round 5: toggle all lights from are divisible by 5 off - 2, 3, 5; on 1, 4
 * 
 * Algorithm: 
 * - declare the object with lights from 1 to input count
 * - define a toggle function that changes the the value of a given object property to !property
 * - loop over the object of lights from 2 to count
 *   - on each iteration toggle lights object values indexes of which are divisible by currentDivisor
 * - filter only the keys that are true
 * - return those
 */

function makeLights(number) {
  let object = {};
  for (let index = 1; index <= number; index += 1) {
    object[index] = false;
  }

  return object;
}



function toggle(object, rounds) {
  for (let round = 1; round <= rounds; round += 1) {
    for (let lightSwitch = 1; lightSwitch <= rounds; lightSwitch += 1) {
      if (lightSwitch % round === 0) {
        object[lightSwitch] = !object[lightSwitch];
      }
    }

  }

  return object;
}

function lightsOn(number) {
  let object =  toggle(makeLights(number), number);
  let onSwitches = [];
  Object.entries(object).filter(array => array[1] === true).forEach(arr => onSwitches.push(Number(arr[0])));
  return onSwitches;
}

console.log(lightsOn(100));