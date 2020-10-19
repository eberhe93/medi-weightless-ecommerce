import React from 'react';
import Alert from '@material-ui/lab/Alert';

const ToastMessages = {
    'success': "Your purchase has been successfully completed. You will now be redirected in 5 seconds...",
    'error': "An error has occured, please contact support to resolve this issue or try again later. You will now be redirected in 5 seconds..."
}

const ToastMessage = props => {
    if(props.msg && props.msg !== undefined){
        return(
            <Alert severity={props.msg}> {ToastMessages[props.msg]} </Alert>
            )
    }
    return null;
        
}

export default ToastMessage;