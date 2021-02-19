import React,{Fragment} from 'react';
import MyPhoto from './MyPhoto';
import Stack from './Stack';


const AboutMe = () => {
    return ( 
        <Fragment>
            <h1>About me</h1>
            <Stack/>
            <MyPhoto/>
        </Fragment>
        
     );
}
 
export default AboutMe;