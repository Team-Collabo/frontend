import React from 'react';
import {GoogleLogout} from "react-google-login";

export function Logout() {
    const onSuccess = () => {
        alert("Logout made successfully!");
    };

    return (
        <div>
            <GoogleLogout
                clientId='408019739663-36iqjm145hgs48nsqcjsa1nh9ehml9q8.apps.googleusercontent.com'
                onLogoutSuccess={onSuccess}
            />

        </div>
    );
}