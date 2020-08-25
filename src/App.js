import React,{useState} from 'react'
import PrimarySearchAppBar from "./components/navbar/Navigation";
import axios from "axios";


function App() {
    const [auth, setAuth] = useState({});

    const onClickHandler = () => {
        axios.get("http://localhost:8080/user/me", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTk4MDM2Mjk5LCJleHAiOjE1OTg5MDAyOTl9.cdMujseoveCID4rsCewOieotJKEvL-mw6F-F-K_0jDTczcxUIPMKnHQuGkUrAxfl2glyk8AmBQNzcKei-1PmHA"
            },
        }).then(response => {
            setAuth(response)
            console.log(auth)
        }).catch(err => {
            console.log(err)
        })
    };

    return (
        <div>
            <PrimarySearchAppBar/>
            <a href="http://localhost:8080/login/oauth2/code/google">구글로그인</a>

            <button onClick={onClickHandler}>click</button>
        </div>

    )
}

export default App
