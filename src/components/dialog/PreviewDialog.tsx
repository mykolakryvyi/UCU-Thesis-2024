import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import type { FC } from 'react';

interface IPreviewDialogProps {
    open: boolean;
    onClose: () => void;
}

const PreviewDialog: FC<IPreviewDialogProps> = ({ open, onClose }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            sx={{ textAlign: 'center' }}
            PaperProps={{ sx: { backgroundColor: 'background.default' } }}
        >
            <DialogTitle>Note</DialogTitle>
            <DialogContent>
                This feature allows to have a preview of the funnel you've just built.{' '}
                We are still developing it and will let you know once it is released!
            </DialogContent>
        </Dialog>
    );
};

export default PreviewDialog;
