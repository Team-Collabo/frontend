import React from 'react';
import GoogleLogin from "react-google-login";

export default function Login() {
    const onSuccess = res => {
        console.log('[Login Success] currentUser: ', res.profileObj)
        console.log('token: ',res.accessToken)
        console.log(res.tokenObj.id_token)
    };

    const onFailure = res => {
        console.log('Login Failure] : ',res);
    }
    return (
        <div>
            <GoogleLogin
                clientId='408019739663-36iqjm145hgs48nsqcjsa1nh9ehml9q8.apps.googleusercontent.com'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true} />
        </div>
    );
};

