import { useState } from 'react';
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
    Typography,
} from '@mui/material';
import MainContainer from '../../ui/MainContainer';
import SavedAlert from '../../alerts/SavedAlert';

const EmailPage = () => {
    const [heading, setHeading] = useState('');
    const [subheading, setSubheading] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [alert, setAlert] = useState(false);

    return (
        <MainContainer width='592px' maxWidth='100%' gap='10px' component='form'>
            <SavedAlert open={alert} onClose={() => setAlert(false)} />
            <Typography variant='body2'><strong>Page content</strong></Typography>
            <TextField
                fullWidth
                size='small'
                type='text'
                name='heading'
                label='Heading'
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
            />
            <TextField
                fullWidth
                size='small'
                type='text'
                name='subheading'
                label='Subheading'
                value={subheading}
                onChange={(e) => setSubheading(e.target.value)}
            />
            <TextField
                fullWidth
                size='small'
                type='text'
                name='button text'
                label='Button text'
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
            />
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox size='small' />}
                    label={
                        <Typography variant='body2'>
                            Validate emails on a correct input
                        </Typography>
                    }
                />
            </FormGroup>
            <Button
                fullWidth
                variant='contained'
                disabled={!heading || !subheading || !buttonText}
                onClick={() => setAlert(true)}
            >
                Save
            </Button>
        </MainContainer>
    );
};

export default EmailPage;
