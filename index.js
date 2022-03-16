// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];


function findMatching(collection, name){
    return collection.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

findMatching(Bobby);

function fuzzyMatch(collection, name){
    return collection.filter(letter => letter.startsWith(name));
}

fuzzyMatch(sa);

function matchName(collection, user){
    return collection.filter(driver => driver.name === user);
}

matchName(bobby);
