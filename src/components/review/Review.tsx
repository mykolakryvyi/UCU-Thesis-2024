import { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import ImageUploader from '../uploader/ImageUploader';
import type { FC } from 'react';

interface IReviewProps {
    number: number;
    canRemove: boolean;
    removeReview: () => void;
}

const Review: FC<IReviewProps> = ({ number, canRemove, removeReview }) => {
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);

    const clickHandler = () => {
        if (name || body || photo) {
            setName('');
            setBody('');
            setPhoto(null);
        } else {
            if (canRemove) removeReview();
        }
    };

    return (
        <Stack gap='8px'>
            <Stack direction='row' justifyContent='space-between'>
                <Typography variant='body2'>Review {number}</Typography>
                <Button
                    size='small'
                    variant='text'
                    disabled={!name && !body && !photo && !canRemove}
                    onClick={clickHandler}
                >
                    {name || body || photo ? 'Clear' : 'Delete'}
                </Button>
            </Stack>
            <ImageUploader
                id={`${number + 7}`}
                file={photo}
                title='Drop photo here'
                height='408px'
                setFile={setPhoto}
            />
            <TextField
                fullWidth
                size='small'
                type='text'
                name='reviewer name'
                label='Reviewer&#39;s name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                fullWidth
                size='small'
                type='text'
                name='review body'
                label='Review&#39;s body'
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
        </Stack>
    );
};

export default Review;
