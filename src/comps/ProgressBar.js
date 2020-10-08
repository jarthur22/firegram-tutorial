import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

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
        <motion.div className="progress-bar" 
            initial={{width: 0}}
            animate={{width: progress + '%'}}
        ></motion.div>
    )
}

export default ProgressBar;