import { useState } from 'react';
import { Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import { Trash } from 'react-feather';
import type { FC } from 'react';

interface IQuizQuestionProps {
    number: number;
    canRemove: boolean;
    addQuestion: () => void;
    removeQuestion: () => void;
    onSave: () => void;
}

const QuizQuestion: FC<IQuizQuestionProps> = ({
    number,
    canRemove,
    addQuestion,
    removeQuestion,
    onSave,
}) => {
    const [heading, setHeading] = useState('');
    const [answers, setAnswers] = useState(['', '']);

    const addAnswer = () => {
        setAnswers((prevState) => [...prevState, '']);
    };

    const changeAnswer = (newValue: string, index: number) => {
        setAnswers((prevState) => prevState.map((el, i) => index === i ? newValue : el));
    };

    const removeAnswer = (index: number) => {
        setAnswers((prevState) => prevState.filter((_, i) => i !== index));
    };

    const clearAnswers = () => {
        setAnswers((prevState) => prevState.map(() => ''));
    };

    const checkAllAnswersEmpty = () => !answers.some((el) => !!el);

    const checkSomeAnswersEmpty = () => answers.some((el) => !el)

    const checkSomeAnswersNonEmpty = () => answers.some((el) => !!el);

    const clickHandler = () => {
        if (heading || checkSomeAnswersNonEmpty()) {
            setHeading('');
            clearAnswers();
        } else {
            removeQuestion();
        }
    };

    return (
        <>
            <Stack direction='row' justifyContent='space-between'>
                <Typography variant='body2'><strong>Question {number}</strong></Typography>
                <Button
                    size='small'
                    variant='text'
                    disabled={!heading && checkAllAnswersEmpty() && !canRemove}
                    onClick={clickHandler}
                >
                    {heading || checkSomeAnswersNonEmpty() ? 'Clear' : 'Delete'}
                </Button>
            </Stack>
            <TextField
                fullWidth
                size='small'
                type='text'
                name='heading'
                label='Heading'
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
            />
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
                    {i > 1 && (
                        <IconButton onClick={() => removeAnswer(i)}>
                            <Trash size={24} />
                        </IconButton>
                    )}
                </Stack>
            ))}
            <Stack alignItems='center'>
                <Button size='small' onClick={addAnswer}>+ Answer</Button>
            </Stack>
            <Stack width='100%' direction='row' gap='10px'>
                <Button
                    fullWidth
                    variant='contained'
                    disabled={!heading || checkSomeAnswersEmpty()}
                    onClick={addQuestion}
                >
                    Add next question
                </Button>
                <Button
                    fullWidth
                    variant='contained'
                    disabled={!heading || checkSomeAnswersEmpty()}
                    onClick={onSave}

                >
                    Save quiz
                </Button>
            </Stack>
        </>
    );
};

export default QuizQuestion;
