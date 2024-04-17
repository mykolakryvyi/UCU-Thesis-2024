import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Grid,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import MainContainer from '../../ui/MainContainer';
import StripeIcon from '../../ui/icons/stripe-icon.svg';
import PaypalIcon from '../../ui/icons/paypal-icon.svg';
import AmplitudeIcon from '../../ui/icons/amplitude-icon.svg';
import FacebookPixelIcon from '../../ui/icons/facebook-pixel-icon.svg';
import GoogleAnalyticsIcon from '../../ui/icons/google-analytics-icon.svg';

const AnalyticsPage = () => {
    const [amplitudeId, setAmplitude] = useState('');
    const [facebookId, setFacebookId] = useState('');
    const [googleId, setGoogleId] = useState('');

    return (
        <Stack gap='10px'>
            <MainContainer width='592px' maxWidth='100%' gap='10px'>
                <Typography variant='body2'>Add payment methods</Typography>
                <Grid container gap='10px' wrap='nowrap'>
                    <Grid item xs={6}>
                        <Link to='https://stripe.com/' target='_blank'>
                            <Button
                                fullWidth
                                variant='contained'
                                endIcon={
                                    <img src={StripeIcon} alt='stripe icon'/>
                                }
                                sx={{
                                    backgroundColor: '#635BFF',
                                    '&:hover': {
                                        backgroundColor: '#635BFF',
                                    },
                                }}
                            >
                                Connect Stripe
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='https://paypal.com/' target='_blank'>
                            <Button
                                fullWidth
                                variant='contained'
                                endIcon={
                                    <img src={PaypalIcon} alt='paypal icon'/>
                                }
                                sx={{
                                    backgroundColor: '#003087',
                                    '&:hover': {
                                        backgroundColor: '#003087',
                                    },
                                }}
                            >
                                Connect PayPal
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </MainContainer>
            <MainContainer width='592px' maxWidth='100%' gap='10px' component='form'>
                <Typography variant='body2'>Add analytics tools</Typography>
                <Stack direction='row' alignItems='center' gap='10px'>
                    <TextField
                        fullWidth
                        size='small'
                        type='text'
                        name='amplitude id'
                        label='Amplitude ID'
                        value={amplitudeId}
                        onChange={(e) => setAmplitude(e.target.value)}
                    />
                    <img src={AmplitudeIcon} alt='amplitude icon' />
                </Stack>
                <Stack direction='row' alignItems='center' gap='10px'>
                    <TextField
                        fullWidth
                        size='small'
                        type='text'
                        name='facebook pixel id'
                        label='Facebook Pixel ID'
                        value={facebookId}
                        onChange={(e) => setFacebookId(e.target.value)}
                    />
                    <img src={FacebookPixelIcon} alt='facebook pixel icon' />
                </Stack>
                <Stack direction='row' alignItems='center' gap='10px'>
                    <TextField
                        fullWidth
                        size='small'
                        type='text'
                        name='google analytics id'
                        label='Google Analytics ID'
                        value={googleId}
                        onChange={(e) => setGoogleId(e.target.value)}
                    />
                    <img src={GoogleAnalyticsIcon} alt='google analytics icon' />
                </Stack>
                <Button
                    fullWidth
                    type='submit'
                    variant='contained'
                    disabled={!amplitudeId && !facebookId && !googleId}
                    onClick={(e) => e.preventDefault()}
                >
                    Save
                </Button>
            </MainContainer>
        </Stack>
    );
};

export default AnalyticsPage;
