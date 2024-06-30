const speedLimit = 70;
let speed = 130;
const speedInterval = 5;
const pointsLimit = 12;

function speedChecker() {
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
speedChecker()
