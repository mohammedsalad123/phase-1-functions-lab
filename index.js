// Code your solution in this file!


function distanceFromHqInBlocks (feet) {
   if(feet<42){
    return (42- feet);
   } else {
    return (feet - 42)
   }
}

    


function distanceTravelledInFeet(start , destination){
    if (destination > start) {
        return (destination-start)*264
    }
    else {
        return (start-destination)*264
    }
}





function calculatesFarePrice(start,destination){
    let feet = (distanceTravelledInFeet(start,destination))
   if (feet<=400){
    return 0;
   }
   else if (feet > 400 && feet <= 2000) {
    return (feet-400)*0.02;
   }
   else if (feet > 2000 && feet<=2500 ) {
    return 25;
   }
   else if (feet>2500) {
    return 'cannot travel that far'
   }

}
function distanceFromHqInFeet (_feet) {
    if (_feet=50) {
      return (_feet-42)*264 ;
    }
    else (_feet=43) => {
      return (_feet-42);
    }
    
  }
    
