import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { makeStyles, Theme } from '@material-ui/core/styles'

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}))

export default function CustomizedSnackbars() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    return (
            <Snackbar  anchorOrigin={{ vertical: 'top', horizontal:'center' }} open={open} autoHideDuration={20000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info">
                    Your SMS code: 5555
                </Alert>
            </Snackbar>
    )
}