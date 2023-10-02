function updatetrain(obj) 
{
    // Mutating the object is visible outside the function
    train.type = "express";
    // Try to reassign the parameter, but this won't affect
    // the variable's value outside the function
    obj = null;
  }
  
  const train = {
    type: "mail",
    trainNo: "12013",
    station: "Amritsar"
  };
  
  console.log(train.type); // express
  
  // Pass object reference to the function
  updatetrain();
  
  // updatetype mutates train
  console.log(train.station); // Amritsar
  console.log(train.trainNo);//12013
  console.log(train.type);//express after executing function