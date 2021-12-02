//Switch case problem

const printMe = (n) => {
  switch (n) {
    case n === 1:
      console.log("I am one");
      break;
    case n === 2:
      console.log("I am two");
      break;
    case n > 2 && n < 5:
      console.log("I am greater than two and less than 5");
      break;
    default:
      console.log("No match found!..");
      break;
  }
};

printMe(2); //no match found
printMe(5); //no match found

//Explanation:
//printMe(2)-> (case n===1 )means (case false) cause because n===1 return false as 2 is passed. Same for other cases. For this reason we should use exact value in the case statement rather than logic. In another way, the value which is passed to the switch case wants to find the same in value in the case statement. So when n=2 is passed in the case statement case also wants to find case 2 but as there are some logical operators used for this reason in stead of finding exact value it is trying to match the boolean value
