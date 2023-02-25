// You are given an array items, where each items[i] = [typei, colori, namei] describes the
// type, color, and name of the ith item. You are also given a rule represented by two strings,
// ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

//This is my pseudocode
//Given an array of items and they are describing the product type, color and name
//Create a function that counts the matching types in the array by using ruleKey and rule ruleValue
//Want my output to print the number of matches

//Example 2
// Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
// Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"].
// Note that the item ["computer","silver","phone"] does not match.

const items = [
    ['phone', 'blue', 'pixel'],
    ['computer', 'silver', 'lenovo'],
    ['phone', 'gold', 'phone']
  ],
  ruleKey = 'type';
ruleValue = 'phone';

var countMatches = function(items, ruleKey, ruleValue) {
  let counter = 0;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === 'type') {
      if (ruleValue === items[i][0]) {
        counter++;
      }
    } else if (ruleKey === 'color') {
      if (ruleValue === items[i][1]) {
        counter++;
      }
    } else if (ruleKey === 'name') {
      if (ruleValue === items[i][2]) {
        counter++;
      }
    } else {
      //return exits the function
      return 'This is everything else';
    }
  }
  return counter;
};

console.log(countMatches(items, ruleKey, ruleValue));
