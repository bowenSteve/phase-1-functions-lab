function distanceFromHqInBlocks(location){
    return Math.abs((location-42));
}
function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    return blocks*264;
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination-start))*264;
}
function calculatesFarePrice(start, destination){
    let feetTravelled=distanceTravelledInFeet(start,destination);
    if (feetTravelled<=400){
        return 0;
    }else if(feetTravelled>400 && feetTravelled<=2000){
        return ((feetTravelled-400)*2)/100;
    }else if(feetTravelled>2000 && feetTravelled<=2500){
       return 25;
    }else{
        return 'cannot travel that far';
    }

}