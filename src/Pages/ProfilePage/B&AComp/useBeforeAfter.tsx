import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../AuthProvider";
import {app} from "../../../firebase";
import defaultImgB from "../../../assets/baImgB.jpeg";
import defaultImgA from "../../../assets/baImgA.jpeg";


export const useBeforeAndAfterImage = () => {

    const {user} = useContext(AuthContext);
    const uID = user?.uid;
    const db = app.firestore();
    const storageRef = app.storage().ref();

    const [beforeImg, setBeforeImg] = useState(defaultImgB);
    const [afterImg, setAfterImg] = useState(defaultImgA);

    const onFileChange = async (e: any) => {
        console.log("ima coled")
        const file = e.target.files[0];
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const ImageURL = await fileRef.getDownloadURL()

        setBeforeImg(afterImg)
        addBURLToUserData({"beforeImgURL": afterImg})
        setAfterImg(ImageURL)
        addBURLToUserData({"afterImgURL": ImageURL})

    };


    const addBURLToUserData = async (objectToStore: any) => {
        await db.collection('users').doc(uID).update(objectToStore);
    };

    useEffect(() => {
        getFileName();
    }, []);

    const getFileName = async () => {
        const doc = await db.collection('users')
            .doc(uID)
            .get()
        if (doc.exists) {
            const beforeImage = doc.data()?.beforeImgURL ?? defaultImgB
            const afterImage = doc.data()?.afterImgURL ?? defaultImgA

            setAfterImg(afterImage)
            setBeforeImg(beforeImage)


        } else {
            console.log('No such document!');
        }
    };

    return [beforeImg, afterImg, onFileChange]

}
