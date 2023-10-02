function updatetrain(obj) 
{
    // Mutating the object is visible outside the function
    obj.type = "express";
    // Try to reassign the parameter, but this won't affect
    // the variable's value outside the function
    obj = null;
  }
  
  const train = {
    type: "mail",
    trainNo: "Accord",
    station: "Amritsar"
  };
  
  console.log(train.type); // express
  
  // Pass object reference to the function
  updatetrain(train.type);
  
  // updatetype mutates train
  console.log(train.station); // Amritsar