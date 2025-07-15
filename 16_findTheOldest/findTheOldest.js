// # Exercise 16 - Find the Oldest

// Given an array of objects representing people with a birth and death year, return the oldest person.

// Now that you've reached the final exercise, you should be fairly comfortable getting the information you need from test case(s). Take a look at how the array of objects is constructed in this exercise's test cases to help you write your function.

// ## Hints
// - You should return the whole person object, but the tests mostly just check to make sure the name is correct.
// - There are many ways of doing this using built-in array methods like `reduce`, or even chaining multiple! 
// - One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.

const findTheOldest = function(people) {
    const oldestPerson = people.reduce((oldest, currentPerson) => {
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        return oldestAge < currentAge ? currentPerson : oldest; //return current person if older than oldest, otherwise return oldest.
    })  
 return oldestPerson;
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
