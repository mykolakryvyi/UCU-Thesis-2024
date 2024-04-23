import { useState } from 'react';
import { Stack } from '@mui/material';
import MainContainer from '../../ui/MainContainer';
import QuizQuestion from '../../components/quiz/QuizQuestion';
import SavedAlert from '../../alerts/SavedAlert';

const QuizPage = () => {
    const [questions, setQuestions] = useState([{ id: 0 }]);
    const [alert, setAlert] = useState(false);

    const addQuestion = () => {
        setQuestions((prevState) => [ ...prevState, { id: prevState[prevState.length - 1].id + 1 } ]);
    };

    const removeQuestion = (id: number) => {
        if (questions.length > 1) {
            setQuestions((prevState) => prevState.filter((q) => q.id !== id));
        }
    };

    return (
        <Stack gap='10px'>
            <SavedAlert open={alert} onClose={() => setAlert(false)} />
            {questions.map((question, i) => (
                <MainContainer key={question.id} width='592px' maxWidth='100%' gap='10px'>
                    <QuizQuestion
                        number={i + 1}
                        canRemove={questions.length > 1}
                        addQuestion={addQuestion}
                        removeQuestion={() => removeQuestion(question.id)}
                        onSave={() => setAlert(true)}
                    />
                </MainContainer>
            ))}
        </Stack>
    );
};

export default QuizPage;
