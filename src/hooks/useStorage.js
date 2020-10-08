import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    //runs every time there is a new file
    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        //put request to database
        storageRef.put(file).on('state_changed', (snap) => {
            //set progress bar percentage
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => { //second argument returns error to func
            setError(err);
        }, async () => { //third argument fires when complete
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url, createdAt});
            setUrl(url);
        });
    }, [file]);

    //return values at the end
    return {progress, url, error};
}

export default useStorage;