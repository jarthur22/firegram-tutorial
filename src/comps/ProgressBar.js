import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file, setFile}) => {
    const {url, progress} = useStorage(file);
    console.log(progress, url);

    //useEffect to make progress bar disappear at 100%
    useEffect(() => {
        if(url){
            setFile(null);
        }
    }, [url, setFile]);

    return (
        //progress bar, dynamic width
        <div className="progress-bar" style={{
            width: progress + '%',
        }}></div>
    )
}

export default ProgressBar;