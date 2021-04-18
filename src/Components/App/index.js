import React,{useState} from 'react';

import { Switch, Route } from 'react-router-dom';



import Home from '../Home'
import Navigation from '../Navigation'
import MobileNavigation from '../Navigation/MobileNavigation'



const App =()=>{
    const [show,setShow] = useState(false)

    return(
        <div>
            <Navigation setShow={setShow}/>
            <MobileNavigation show={show} setShow={setShow}/>
            <Switch>
                 <Route path="/" component={Home} exact />
            </Switch>
        </div>
    )
}


export default App