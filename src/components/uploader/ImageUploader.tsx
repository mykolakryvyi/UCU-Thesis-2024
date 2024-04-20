import { Button, Stack, Typography } from '@mui/material';
import { FC, ChangeEvent, DragEvent } from 'react';

interface IImageUploaderProps {
    id: string;
    title: string;
    height: string;
    file: File | null;
    setFile: (file: File) => void;
}

const ImageUploader: FC<IImageUploaderProps> = ({ id, file, title, height, setFile }) => {
    const handleUploadClick = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const files = event.target?.files
        if (!files || !files[0]) return;

        setFile(files[0]);
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer?.files
        if (!files || !files[0]) return;

        setFile(files[0]);
    };

    return (
        <Stack width='100%' gap='8px'>
            <Stack
                width='100%'
                height={height}
                textAlign='center'
                alignContent='center'
                justifyContent='center'
                borderRadius='8px'
                border='1px solid rgba(0, 0, 0, 0.23)'
                sx={{ backgroundColor: 'background.paper' }}
                onDrop={handleDrop}
                onDragOver={(event) => event.preventDefault()}
            >
                {file ? (
                    <img
                        src={URL.createObjectURL(file)}
                        alt='uploaded img'
                        width='100%'
                        height='100%'
                    />
                ) : (
                    <Typography variant='caption' component='span'>{title}</Typography>
                )}
            </Stack>
            <input
                multiple
                type='file'
                accept='image/*'
                id={'raised-button-file-' + id}
                style={{ width: '100%', display: 'none' }}
                onChange={handleUploadClick}
            />
            <label htmlFor={'raised-button-file-' + id}>
                <Button fullWidth variant='contained' component='span'>
                    Choose image
                </Button>
            </label>
        </Stack>
    );
};

export default ImageUploader;
