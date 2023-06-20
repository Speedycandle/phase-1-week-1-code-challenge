function checkSpeed(sped){
    const speedLimit = 78
    const points = 5
    const pointsthreshold = 12
    if (speed <= speedlimit){
        return "Okay"
    }else {
        const excessspeed = speed - speedlimit
        const pointss = math.floor(speed / points)
        if (points > pointsthreshold){
            return "LICENSE CANCELLED"

        }else {
            return "points" + points
        }
    }
}
const speed =parseInt ("100")
checkSpeed(speed)
console.log(checkspeed(speed))