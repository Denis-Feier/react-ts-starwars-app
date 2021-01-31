import React, {FC, ReactNode} from 'react';

import classes from './Wrapper.module.css';

const Wrapper: FC<{children: ReactNode}> = (props) => {
   return <div className={classes.wrapper}>
      {props.children}
   </div> 
}

export default Wrapper;