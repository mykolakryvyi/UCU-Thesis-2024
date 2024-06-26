import { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import MainContainer from '../../ui/MainContainer';
import SavedAlert from '../../alerts/SavedAlert';

const GeneralPage = () => {
    const [dns, setDns] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [alert, setAlert] = useState(false);

    return (
        <MainContainer width='592px' maxWidth='100%' gap='10px' component='form'>
            <SavedAlert open={alert} onClose={() => setAlert(false)} />
            <Stack direction='row' gap='10px'>
                <TextField
                    fullWidth
                    size='small'
                    type='text'
                    name='DNS'
                    label='Enter DNS'
                    value={dns}
                    onChange={(e) => setDns(e.target.value)}
                />
                <Button
                    variant='contained'
                    disabled={!dns}
                    sx={{ width: '138px', maxWidth: '40%' }}
                >
                    Verify DNS
                </Button>
            </Stack>
            <TextField
                fullWidth
                size='small'
                type='text'
                name='title'
                label='Title'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />
            <TextField
                fullWidth
                size='small'
                type='text'
                name='status'
                label='Status'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button
                fullWidth
                variant='contained'
                disabled={!dns || !status || !description}
                onClick={() => setAlert(true)}
            >
                Save
            </Button>
        </MainContainer>
    );
};

export default GeneralPage;
