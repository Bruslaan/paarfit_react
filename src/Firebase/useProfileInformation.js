import {db} from "../firebase"

export async function updateUserInformaion(userID, payload) {
    try {
        await db.collection("users").doc(userID).update(
            payload
        )
        return true
    } catch (e) {
        console.log("Cannot update User because: ", e)
        return false
    }
}

export async function getUserInfo(userID) {
    try {
        const document = await db.collection("users").doc(userID).get()
        if(document.exists){
            return document.data()
        }
    } catch (e) {
        console.log("Cannot get User because: ", e)
    }
}