import React, { useEffect, useState } from 'react'
import CustomLoader from '../components/loader'
import { useNavigate, useParams } from "react-router-dom";
import { axiosOpenInstance } from '../services';
import { Paper } from '@mui/material';
import useStyles from '../theme';
import { message } from 'antd'


export default function EmailVerify() {
    const [loading, setIsLoading] = useState(false)
    let { token } = useParams();
    const classes = useStyles();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        let tokenUUID = {token};
        axiosOpenInstance.post('/auth/api/v1/email/verify/',tokenUUID)
            .then(response => {
                console.log({response});
                setIsLoading(false);
                if(response.status === 200){
                    message.error('The token provided is invalid.');
                }
                if (response.status === 201) {
                    message.success('Email has been verifed successfully.');
                    navigate('/login');
                }
            }).catch(err => {
                console.log({err});
                setIsLoading(false);
            })
    }, [])
    
  return (
    <Paper className={classes.paper}>
        <CustomLoader loading={loading}></CustomLoader>
    </Paper>
  )
}
