import { Link, Outlet } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import MainContainer from '../../ui/MainContainer';
import style from '@emotion/styled'
import { E_ROUTE } from '../../constants/constants';

const Container = style.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 10px;
    overflow: auto;
`

const MainLayout = () => {
    return (
        <Container>
            <MainContainer width='16%' minWidth='288px' height='100%'>
                <Link to={E_ROUTE.MAIN}>
                    <Button variant='outlined' fullWidth>Funnels</Button>
                </Link>
            </MainContainer>
            <Stack width='100%'>
                <Outlet />
            </Stack>
        </Container>
    );
};

export default MainLayout;
