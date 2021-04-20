import React,{useState} from 'react';

import { Switch, Route } from 'react-router-dom';



import Home from '../Home'
import Navigation from '../Navigation'
import MobileNavigation from '../Navigation/MobileNavigation'
import Modal from '../Modal'
import Map from '../Map'



const App =()=>{
    const [show,setShow] = useState(false)

    return(
        <div>
            <Modal/>
            <Navigation setShow={setShow}/>
            <MobileNavigation show={show} setShow={setShow}/>
            <Switch>
                 <Route path="/" component={Home} exact />
                 <Route path="/map" component={Map} exact />
            </Switch>
        </div>
    )
}


export default App