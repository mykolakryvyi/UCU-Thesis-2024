import { useState } from 'react';
import {
    Button, FormControl,
    FormControlLabel,
    FormGroup, IconButton, InputLabel, MenuItem, Select,
    Stack,
    Switch,
    TextField,
    Typography,
} from '@mui/material';
import { Trash } from 'react-feather';
import MainContainer from '../../ui/MainContainer';
import ImageUploader from '../../components/uploader/ImageUploader';
import Review from '../../components/review/Review';
import SavedAlert from '../../alerts/SavedAlert';
import { E_SUBSCRIPTION } from '../../constants/constants';

const PaymentPage = () => {
    const [heading, setHeading] = useState('');
    const [bullet1, setBullet1] = useState('');
    const [bullet2, setBullet2] = useState('');
    const [bullet3, setBullet3] = useState('');
    const [beforeImageDescription, setBeforeImageDescription] = useState('');
    const [afterImageDescription, setAfterImageDescription] = useState('');
    const [planName, setPlanName] = useState('');
    const [planPrice, setPlanPrice] = useState('');
    const [paywallText, setPaywallText] = useState('');
    const [subscription, setSubscription] = useState<E_SUBSCRIPTION | null>(null);
    const [features, setFeatures] = useState(['', '']);
    const [reviews, setReviews] = useState([{ id: 0 }]);
    const [marketingPhoto, setMarketingPhoto] = useState<File | null>(null);
    const [beforeImage, setBeforeImage] = useState<File | null>(null);
    const [afterImage, setAfterImage] = useState<File | null>(null);
    const [alert, setAlert] = useState(false);

    const addReview = () => {
        setReviews((prevState) => [ ...prevState, { id: prevState[prevState.length - 1].id + 1 } ]);
    };

    const removeReview = (id: number) => {
        if (reviews.length > 1) {
            setReviews((prevState) => prevState.filter((q) => q.id !== id));
        }
    };

    const changeFeature = (index: number, value: string) => {
        setFeatures((prevState) => prevState.map((el, i) => i === index ? value : el));
    }

    const addFeature = () => {
        setFeatures((prevState) => [...prevState, '']);
    };

    const removeFeature = (index: number) => {
        setFeatures((prevState) => prevState.filter((_, i) => i !== index));
    };

    return (
        <Stack gap='10px'>
            <SavedAlert open={alert} onClose={() => setAlert(false)} />
            <MainContainer width='440px' maxWidth='100%'>
                <Stack gap='16px'>
                    <Typography variant='body2'><strong>Marketing promo</strong></Typography>
                    <Stack gap='8px'>
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
                            name='bullet1'
                            label='Bullet 1'
                            value={bullet1}
                            onChange={(e) => setBullet1(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            size='small'
                            type='text'
                            name='bullet2'
                            label='Bullet 2'
                            value={bullet2}
                            onChange={(e) => setBullet2(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            size='small'
                            type='text'
                            name='bullet3'
                            label='Bullet 3'
                            value={bullet3}
                            onChange={(e) => setBullet3(e.target.value)}
                        />
                    </Stack>
                    <ImageUploader
                        id='4'
                        file={marketingPhoto}
                        title='Drop photo here'
                        height='408px'
                        setFile={setMarketingPhoto}
                    />
                </Stack>
            </MainContainer>
            <MainContainer width='440px' maxWidth='100%'>
                <Stack gap='16px'>
                    <Typography variant='body2'><strong>Reviews</strong></Typography>
                    {reviews.map((review, i) => (
                        <Review
                            key={i}
                            number={i + 1}
                            canRemove={reviews.length > 1}
                            removeReview={() => removeReview(review.id)}
                        />
                    ))}
                    <Button
                        fullWidth
                        variant='contained'
                        onClick={addReview}
                    >
                        Add next review
                    </Button>
                </Stack>
            </MainContainer>
            <MainContainer width='440px' maxWidth='100%'>
                <Stack gap='16px'>
                    <Typography variant='body2'><strong>The before-after block</strong></Typography>
                    <Stack gap='8px'>
                        <Typography variant='body2'>The before image</Typography>
                        <ImageUploader
                            id='5'
                            file={beforeImage}
                            title='Drop photo here'
                            height='408px'
                            setFile={setBeforeImage}
                        />
                        <TextField
                            fullWidth
                            size='small'
                            type='text'
                            name='before description'
                            label='Image description'
                            value={beforeImageDescription}
                            onChange={(e) => setBeforeImageDescription(e.target.value)}
                        />
                    </Stack>
                    <Stack gap='8px'>
                        <Typography variant='body2'>The after image</Typography>
                        <ImageUploader
                            id='6'
                            file={afterImage}
                            title='Drop photo here'
                            height='408px'
                            setFile={setAfterImage}
                        />
                        <TextField
                            fullWidth
                            size='small'
                            type='text'
                            name='after description'
                            label='Image description'
                            value={afterImageDescription}
                            onChange={(e) => setAfterImageDescription(e.target.value)}
                        />
                    </Stack>
                </Stack>
            </MainContainer>
            <MainContainer width='440px' maxWidth='100%'>
                <Stack gap='16px'>
                    <Typography variant='body2'><strong>Payment information</strong></Typography>
                    <Stack gap='8px'>
                        <FormControl sx={{ width: '100%', backgroundColor: 'white' }}>
                            <InputLabel id='subscription-select-label' size='small'>
                                Subscription period
                            </InputLabel>
                            <Select
                                labelId='status-select-label'
                                id='status-select'
                                label='Subscription period'
                                size='small'
                                value={subscription || ''}
                                onChange={(e) => setSubscription(e.target.value as E_SUBSCRIPTION)}
                            >
                                <MenuItem value={E_SUBSCRIPTION.WEEKLY}>Weekly</MenuItem>
                                <MenuItem value={E_SUBSCRIPTION.MONTHLY}>Monthly</MenuItem>
                                <MenuItem value={E_SUBSCRIPTION.QUARTERLY}>Quarterly</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            size='small'
                            type='text'
                            name='plan name'
                            label='Plan name'
                            value={planName}
                            onChange={(e) => setPlanName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            size='small'
                            type='number'
                            name='plan price'
                            label='Plan price'
                            value={planPrice}
                            onChange={(e) => setPlanPrice(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            size='small'
                            type='text'
                            name='paywall text'
                            label='Paywall text'
                            value={paywallText}
                            onChange={(e) => setPaywallText(e.target.value)}
                        />
                    </Stack>
                    <Stack>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch />}
                                label='PayPal'
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch />}
                                label='Apple Pay'
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch />}
                                label='Card'
                            />
                        </FormGroup>
                    </Stack>
                </Stack>
            </MainContainer>
            <MainContainer width='440px' maxWidth='100%'>
                <Stack gap='16px'>
                    <Typography variant='body2'><strong>Features</strong></Typography>
                    <Stack gap='8px'>
                        {features.map((feature, i) => (
                            <Stack key={i} direction='row' gap='8px'>
                                <TextField
                                    fullWidth
                                    size='small'
                                    type='text'
                                    name={`feature${i}`}
                                    label='Write a feature'
                                    value={feature}
                                    onChange={(e) => changeFeature(i, e.target.value)}
                                />
                                {i > 1 && (
                                    <IconButton onClick={() => removeFeature(i)}>
                                        <Trash size={24} />
                                    </IconButton>
                                )}
                            </Stack>
                        ))}
                        <Stack alignItems='center'>
                            <Button size='small' onClick={addFeature}>+ Answer</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </MainContainer>
            <MainContainer width='440px' maxWidth='100%'>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label='Money-back Guarantee'
                    />
                </FormGroup>
            </MainContainer>
            <MainContainer width='440px' maxWidth='100%'>
                <Button
                    fullWidth
                    variant='contained'
                    disabled={
                        !heading ||
                        !bullet1 ||
                        !bullet2 ||
                        !bullet3 ||
                        !beforeImageDescription ||
                        !afterImageDescription ||
                        !planName ||
                        !planPrice ||
                        !paywallText ||
                        !beforeImage ||
                        !afterImage ||
                        !marketingPhoto ||
                        !subscription ||
                        features.some((el) => !el)
                    }
                    onClick={() => setAlert(true)}
                >
                    Save
                </Button>
            </MainContainer>
        </Stack>
    );
};

export default PaymentPage;
