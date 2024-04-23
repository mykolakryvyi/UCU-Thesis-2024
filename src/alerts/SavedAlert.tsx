import { Alert, Snackbar } from '@mui/material';
import type { FC } from 'react';

interface ISavedAlertProps {
    open: boolean;
    onClose: () => void;
}

const SavedAlert: FC<ISavedAlertProps> = ({ open, onClose }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            sx={{ marginTop: '-20px' }}
            onClose={onClose}
        >
            <Alert
                severity='success'
                variant='filled'
                sx={{ width: '100%' }}
                onClose={onClose}
            >
                Changes Saved
            </Alert>
        </Snackbar>
    );
};

export default SavedAlert;
