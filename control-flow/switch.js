let fruitType = "Bananass";

switch (fruitType) {
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
    // default:
    //   console.log(`Sorry, we are out of ${fruitType}.`); 
    // default can be placed anywhere, but if we don't put an extra break after it, the next statement will continue to be executed as long as no break is found or the case chain is ended
    // but it is not a good practice to use default above
    case "Apples":
      console.log("Apples are $0.32 a pound.");
      break;
    case "Bananas":
      console.log("Bananas are $0.48 a pound.");
      break; // if break is ommited, then the next case statement will also be executed
    case "Cherries":
      console.log("Cherries are $3.00 a pound.");
      break; // if break is ommited, then the next case statement will also be executed too
    case "Mangoes":
      console.log("Mangoes are $0.56 a pound.");
      break;
    case "Papayas":
      console.log("Papayas are $2.79 a pound.");
      break;
    // default:
    //   console.log(`Sorry, we are out of ${fruitType}.`);
  }
  console.log("Is there anything else you'd like?");
  
