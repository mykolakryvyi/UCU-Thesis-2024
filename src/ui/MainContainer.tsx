import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { FC } from 'react';
import type { StackProps } from '@mui/material';

const Container = styled(Stack)`
    padding: 16px;
    border-radius: 16px;
    background-color: ${({theme}) => theme.palette.background.default};
`;

const MainContainer: FC<StackProps> = (props) => {
    return (
        <Container {...props}>{props.children}</Container>
    );
};

export default MainContainer;
