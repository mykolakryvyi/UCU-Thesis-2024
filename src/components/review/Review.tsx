import { useState } from 'react';
import {Button, Stack, TextField, Typography} from '@mui/material';
import MainContainer from '../../ui/MainContainer';
import ImageUploader from '../uploader/ImageUploader';
import type { FC } from 'react';

interface IReviewProps {
    number: number;
    addReview: () => void;
    removeReview: () => void;
}

const Review: FC<IReviewProps> = ({ number, addReview, removeReview }) => {
    const [photo, setPhoto] = useState<File | null>(null);
    const [name, setName] = useState('');
    const [body, setBody] = useState('');

    return (
        <MainContainer>
            <Stack gap='16px'>
                <Stack direction='row' justifyContent='space-between'>
                    <Typography variant='body2'>Review</Typography>
                    <Button
                        size='small'
                        variant='text'
                        // disabled={!heading && checkAllAnswersEmpty() && !canRemove}
                        // onClick={clickHandler}
                    >
                        {/*{heading || checkSomeAnswersNonEmpty() ? 'Clear' : 'Delete'}*/}
                    </Button>
                </Stack>
                <ImageUploader
                    id={`${number + 4}`}
                    title='Drop photo here'
                    height='408px'
                    file={photo}
                    setFile={setPhoto}
                />
                <Stack gap={8}>
                    <TextField
                        fullWidth
                        size='small'
                        type='text'
                        name='name'
                        label='Reviewer&gt;s name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        size='small'
                        type='text'
                        name='body'
                        label='Review&gt;s body'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </Stack>
                <Button fullWidth variant='contained'>Add next review</Button>
            </Stack>
        </MainContainer>
    );
};

export default Review;
