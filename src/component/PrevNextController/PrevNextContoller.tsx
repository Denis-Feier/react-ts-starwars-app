import React, { FC, useEffect } from 'react';

import classes from './PrevNextContoller.module.css';

interface PrevNextContollerProps {
    next?: () => void;
    prev?: () => void;
}

const PrevNextContoller: FC<PrevNextContollerProps> = (props) => {

    useEffect(() => {
        console.log(props);
    }, [])

    return <div className={classes['wrapper-controller']}>
            <div>
                <button
                    disabled={props.prev === undefined}
                    className={classes['button-controller']} 
                    onClick={props.prev}
                >{'< PREV'}</button>
                <span className={classes['spacer']} />
                <button
                    disabled={props.next === undefined}
                    className={classes['button-controller']}  
                    onClick={props.next}
                >{'NEXT >'}</button>
            </div>
        </div>

}

export default PrevNextContoller;