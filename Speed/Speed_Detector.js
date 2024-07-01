function speedChecker(speed) {
    const speedLimit = 70;
    const pointsLimit = 12;
    const speedInterval = 5;
    if (speed <= 70) {
        console.log("OK");
    }else if (speed > 70) {
        let demeritpoints = (speed - speedLimit) / speedInterval;
        console.log(demeritpoints);
        if (demeritpoints >= pointsLimit) {
            console.log("Lincense Suspended");
        }
    }
}
speedChecker(140)
