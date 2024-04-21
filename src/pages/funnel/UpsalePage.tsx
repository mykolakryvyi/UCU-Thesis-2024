import { useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import MainContainer from '../../ui/MainContainer';
import ImageUploader from '../../components/uploader/ImageUploader';

const UpsalePage = () => {
    const [photo, setPhoto] = useState<File | null>(null);
    const [bullet1, setBullet1] = useState('');
    const [bullet2, setBullet2] = useState('');
    const [bullet3, setBullet3] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [newPrice, setNewPrice] = useState('');

    return (
        <MainContainer width='440px' maxWidth='100%'>
            <Stack gap='16px'>
                <Typography variant='body2'><strong>Upsale</strong></Typography>
                <ImageUploader
                    id='7'
                    file={photo}
                    title='Drop photo here'
                    height='408px'
                    setFile={setPhoto}
                />
                <Stack gap='8px'>
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
                <Stack gap='8px'>
                    <TextField
                        fullWidth
                        size='small'
                        type='number'
                        name='old-price'
                        label='Crossed out (old) price'
                        value={oldPrice}
                        onChange={(e) => setOldPrice(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        size='small'
                        type='number'
                        name='new-price'
                        label='New price'
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                    />
                </Stack>
            </Stack>
        </MainContainer>
    );
};

export default UpsalePage;
