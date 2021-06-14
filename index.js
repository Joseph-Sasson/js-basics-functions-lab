// Code your solution in this file!
const hq = 42
const feet = 264

function distanceFromHqInBlocks(destination){
  if (destination >= hq){return destination - hq}
  else if (destination <= hq) {return hq - destination}
 }

 function distanceFromHqInFeet(destinationByFeet){
   return distanceFromHqInBlocks(destinationByFeet)*feet
 }

 function distanceTravelledInFeet(start, end){
  if (start >= end){return (start - end)*feet}
  else if (start <= end) {return (end - start)*feet}
 }

 function calculatesFarePrice(start, end){
   const travelByFoot = distanceTravelledInFeet(start, end)
  if (travelByFoot <= 400) {return 0}
    else if (travelByFoot > 400 && travelByFoot <= 2000) {return (travelByFoot-400) * .02}
      else if (travelByFoot > 2000 && travelByFoot < 2500){return 25}
        else {return "cannot travel that far"}
 }
 