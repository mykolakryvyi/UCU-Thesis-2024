import { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import MainContainer from '../../ui/MainContainer';
import ImageUploader from '../../components/uploader/ImageUploader';
import ColorPicker from '../../components/colorPicker/ColorPicker';
import { HEX_COLOR_REGEX } from '../../constants/regex';

const ThemePage = () => {
    const [logo, setLogo] = useState<File | null>(null);
    const [favicon, setFavicon] = useState<File | null>(null);
    const [backgroundColor, setBackgroundColor] = useState<string>('#');
    const [cardColor, setCardColor] = useState<string>('#');
    const [mainTextColor, setMainTextColor] = useState<string>('#');
    const [mainButtonColor, setMainButtonColor] = useState<string>('#');

    return (
        <Stack gap='10px'>
            <MainContainer width='592px' maxWidth='100%' gap='10px'>
                <Typography variant='body2'><strong>Images</strong></Typography>
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
                <Typography variant='body2'><strong>Colors</strong></Typography>
                <Stack gap='8px'>
                    <ColorPicker
                        label='Background color code'
                        color={backgroundColor}
                        setColor={setBackgroundColor}
                    />
                    <ColorPicker
                        label='Card color code'
                        color={cardColor}
                        setColor={setCardColor}
                    />
                    <ColorPicker
                        label='Main text color code'
                        color={mainTextColor}
                        setColor={setMainTextColor}
                    />
                    <ColorPicker
                        label='Main button color code'
                        color={mainButtonColor}
                        setColor={setMainButtonColor}
                    />
                </Stack>
            </MainContainer>
            <MainContainer width='592px' maxWidth='100%'>
                <Button
                    fullWidth
                    variant='contained'
                    disabled={
                        !logo ||
                        !favicon ||
                        !HEX_COLOR_REGEX.test(backgroundColor) ||
                        !HEX_COLOR_REGEX.test(cardColor) ||
                        !HEX_COLOR_REGEX.test(mainButtonColor) ||
                        !HEX_COLOR_REGEX.test(mainTextColor)
                    }
                >
                    Save
                </Button>
            </MainContainer>
        </Stack>
    );
};

export default ThemePage;
