import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import GoogleLogin, {GoogleLogout} from "react-google-login";
import Login from "../auth/Login";
import {Logout} from "../auth/Logout";

export default function LoginForm() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge color="secondary">
                    <AccountCircle onClick={handleClickOpen} />
                </Badge>
            </IconButton>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>

                <DialogContent>
                    <Login/>
                    <Logout/>
                </DialogContent>
            </Dialog>
        </div>
    );
}
