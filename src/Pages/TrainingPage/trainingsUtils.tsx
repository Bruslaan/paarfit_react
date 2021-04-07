export const sequenceState: { [key: number]: string; } = {
    0: "Aufwärmen",
    1: "Kraft",
    2: "Ausdauer/Fettverbrennung",
    3: "Dehnen",
    4: "Yoga",

}

export const ReturnLink = (stage: string, level: string) => {

    let workoutsLevel = `&&workoutlevels.levelname=${level}`

    console.log(stage)

    switch (stage) {
        case "Kraft":
            return `https://paarfit-strapi.herokuapp.com/workouts?workoutcategories.categoryname=${stage}` + workoutsLevel
        case "Ausdauer/Fettverbrennung":
            return `https://paarfit-strapi.herokuapp.com/workouts?workoutbodyparts.bodypart=Ausdauer%20Pool%20Anf%C3%A4nger`
        case "Yoga":
            return `https://paarfit-strapi.herokuapp.com/workouts?workoutcategories.categoryname=${stage}`
        case "Aufwärmen":
            return `https://paarfit-strapi.herokuapp.com/workouts?workoutcategories.categoryname=${stage}`
        case "Dehnen":
            return `https://paarfit-strapi.herokuapp.com/workouts?workoutbodyparts.bodypart=Dehnpool%20Anf%C3%A4nger/Fortgeschrittene/Profis`
        default:
            break;
    }
}
export const HandleData = (stage: string, level: string, data: Array<any>) => {


    console.log("Das sind meine Übungen: ", data)
    switch (stage) {
        case "Kraft":
            return CreateWorkouts(data)
        case "Ausdauer/Fettverbrennung":
            return getRandom(data, 2)
        case "Yoga":
            return getRandom(data, 1)
        case "Aufwärmen":
            return GetAufwärmVideos(data, level)
        case "Dehnen":
            return getRandom(data, 2)
        default:
            break;
    }

}

const GetAufwärmVideos = (object: Array<any>, level: string) => {

    let workoutsAusPool1;
    let workoutsAusPool2;

    console.log(object, "das sind die Workouts")

    switch (level) {
        case "Anfänger":
            workoutsAusPool1 = object.filter(workout => workout.workoutbodyparts[0]?.bodypart === "Aufwärmen Anfänger Pool 1")
            workoutsAusPool2 = object.filter(workout => workout.workoutbodyparts[0]?.bodypart === "Aufwärmen Anfänger Pool 2")
            break
        case "Fortgeschrittene":
            workoutsAusPool1 = object.filter(workout => workout.workoutbodyparts[0]?.bodypart === "Aufwärmen Fortgeschrittene Pool 1")
            workoutsAusPool2 = object.filter(workout => workout.workoutbodyparts[0]?.bodypart === "Aufwärmen Fortgeschrittene Pool 2")
            break
        case "Profis":
            workoutsAusPool1 = object.filter(workout => workout.workoutbodyparts[0]?.bodypart === "Aufwärmen Profis Pool 1")
            workoutsAusPool2 = object.filter(workout => workout.workoutbodyparts[0]?.bodypart === "Aufwärmen Profis Pool 2")
            break
    }

    return [...getRandom(workoutsAusPool1, 2), ...getRandom(workoutsAusPool2, 1)]

}

export const CreateWorkouts = (object: Array<any>) => {

    const BrustWorkouts = object.filter(workout => workout.workoutbodyparts[0].bodypart === "Brust")
    const Beine = object.filter(workout => workout.workoutbodyparts[0].bodypart === "Beine")
    const Rücken = object.filter(workout => workout.workoutbodyparts[0].bodypart === "Rücken")
    const Schulter = object.filter(workout => workout.workoutbodyparts[0].bodypart === "Schulter")
    const Arme = object.filter(workout => workout.workoutbodyparts[0].bodypart === "Arme")
    const Bauch = object.filter(workout => workout.workoutbodyparts[0].bodypart === "Bauch")

    const CompleteWorkout = [
        ...getRandom(BrustWorkouts, 1),
        ...getRandom(Beine, 1),
        ...getRandom(Rücken, 1),
        ...getRandom(Schulter, 1),
        ...getRandom(Arme, 1),
        ...getRandom(Bauch, 1)]

    console.log("The workous", CompleteWorkout)

    return CompleteWorkout
}

export function getRandom(arr: any, n: number) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        return arr
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


export const getPoints = (stage: string) => {
    switch (stage) {
        case "Kraft":
            return 40
        case "Aufwärmen":
            return 15
        case "Ausdauer/Fettverbrennung":
            return 30
        case "Yoga":
            return 15
        default:
            return 15;
    }
}


export const diff_minutes = (dt2: Date, dt1: Date) => {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
}