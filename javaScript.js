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
//printMe(2)-> (case n===1 )means (case false) cause because n===1 return false as 2 is passed. Same for other cases. For this reason we should use exact value in the case statement rather than logic.
