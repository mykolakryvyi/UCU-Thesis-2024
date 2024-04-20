import { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import MainContainer from '../../ui/MainContainer';
import ImageUploader from '../../components/uploader/ImageUploader';

const ThemePage = () => {
    const [logo, setLogo] = useState<File | null>(null);
    const [favicon, setFavicon] = useState<File | null>(null);

    return (
        <Stack gap='10px'>
            <MainContainer width='592px' maxWidth='100%' gap='10px'>
                <Typography variant='body2'>Images</Typography>
                <Stack direction='row' gap='16px'>
                    <ImageUploader
                        id='1'
                        file={logo}
                        title='Drop logo here'
                        height='272px'
                        setFile={setLogo}
                    />
                    <ImageUploader
                        id='2'
                        file={favicon}
                        title='Drop favicon here'
                        height='272px'
                        setFile={setFavicon}
                    />
                </Stack>
            </MainContainer>
            <MainContainer width='592px' maxWidth='100%' gap='10px'>
                <Typography variant='body2'>Colors</Typography>
            </MainContainer>
            <MainContainer width='592px' maxWidth='100%'>
                <Button
                    fullWidth
                    variant='contained'
                    disabled={!logo || !favicon}
                >
                    Save
                </Button>
            </MainContainer>
        </Stack>
    );
};

export default ThemePage;
