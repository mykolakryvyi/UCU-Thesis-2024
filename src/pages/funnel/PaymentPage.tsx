import { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import MainContainer from '../../ui/MainContainer';
import ImageUploader from '../../components/uploader/ImageUploader';

const PaymentPage = () => {
    const [heading, setHeading] = useState('');
    const [bullet1, setBullet1] = useState('');
    const [bullet2, setBullet2] = useState('');
    const [bullet3, setBullet3] = useState('');
    const [marketingPhoto, setMarketingPhoto] = useState<File | null>(null);
    const [reviewPhoto, setReviewPhoto] = useState<File | null>(null);
    const [beforeImage, setBeforeImage] = useState<File | null>(null);
    const [afterImage, setAfterImage] = useState<File | null>(null);

    return (
        <Stack gap='10px'>
            <MainContainer width='440px' maxWidth='100%'>
                <Stack gap='16px'>
                    <Typography variant='body2'>Marketing promo</Typography>
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
                        id='8'
                        file={marketingPhoto}
                        title='Drop photo here'
                        height='408px'
                        setFile={setMarketingPhoto}
                    />
                </Stack>
            </MainContainer>
            <MainContainer width='440px' maxWidth='100%'></MainContainer>
            <MainContainer width='440px' maxWidth='100%'></MainContainer>
            <MainContainer width='440px' maxWidth='100%'></MainContainer>
            <MainContainer width='440px' maxWidth='100%'></MainContainer>
            <MainContainer width='440px' maxWidth='100%'></MainContainer>
            <MainContainer width='440px' maxWidth='100%'>
                <Button fullWidth variant='contained'>Save</Button>
            </MainContainer>
        </Stack>
    );
};

export default PaymentPage;
