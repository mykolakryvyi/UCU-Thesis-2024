import { useState } from 'react';
import { Button, IconButton, Stack, TextField } from '@mui/material';
import { Trash } from 'react-feather';
import MainContainer from '../../ui/MainContainer';
import ImageUploader from '../../components/uploader/ImageUploader';

const HomePage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [heading, setHeading] = useState('');
    const [subheading, setSubheading] = useState('');
    const [answers, setAnswers] = useState(['', '', '', '']);

    const addAnswer = () => {
        setAnswers((prevState) => [...prevState, '']);
    };

    const changeAnswer = (newValue: string, index: number) => {
        setAnswers((prevState) => prevState.map((el, i) => index === i ? newValue : el));
    };

    const removeAnswer = (index: number) => {
        setAnswers((prevState) => prevState.filter((_, i) => i !== index));
    };

    const checkSomeAnswersEmpty = () => answers.some((el) => !el)

    return (
        <MainContainer width='440px' maxWidth='100%'>
            <Stack gap='16px'>
                <ImageUploader
                    id='3'
                    file={file}
                    title='Drop photo here'
                    height='408px'
                    setFile={setFile}
                />
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
                        name='subheading'
                        label='Subheading'
                        value={subheading}
                        onChange={(e) => setSubheading(e.target.value)}
                    />
                </Stack>
                <Stack gap='8px'>
                    {answers.map((answer, i) => (
                        <Stack key={i} direction='row'>
                            <TextField
                                fullWidth
                                type='text'
                                size='small'
                                name={`answer${i + 1}`}
                                label={`Answer ${i + 1}`}
                                value={answer}
                                onChange={(e) => changeAnswer(e.target.value, i)}
                            />
                            {i > 3 && (
                                <IconButton onClick={() => removeAnswer(i)}>
                                    <Trash size={24} />
                                </IconButton>
                            )}
                        </Stack>
                    ))}
                    <Stack alignItems='center'>
                        <Button size='small' onClick={addAnswer}>+ Answer</Button>
                    </Stack>
                </Stack>
                <Button
                    fullWidth
                    variant='contained'
                    disabled={!heading || checkSomeAnswersEmpty() || !file}
                >
                    Save
                </Button>
            </Stack>
        </MainContainer>
    );
};

export default HomePage;
