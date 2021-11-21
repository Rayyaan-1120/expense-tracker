import React,{useEffect} from "react";
import {Button} from '@material-ui/core'
import { Globalstyle } from "./globalstyles";
import Mainpage from "./components/Mainpage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div>
            <Globalstyle />
            <Mainpage />
        </div>
    )
}

export default App



