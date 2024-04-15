import { Link, Outlet } from 'react-router-dom';
import { Button, Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import style from '@emotion/styled'
import { E_ROUTE } from '../../constants/constants';

const Container = style.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 10px;
`

const Drawer = styled(Box)`
    width: 16%;
    min-width: 288px;
    height: 100%;
    padding: 16px;
    border-radius: 16px;
    background-color: ${({theme}) => theme.palette.background.default};
`;

const MainLayout = () => {
    return (
        <Container>
            <Drawer>
                <Link to={E_ROUTE.MAIN}>
                    <Button variant='outlined' fullWidth>Funnels</Button>
                </Link>
            </Drawer>
            <Stack width='100%'>
                <Outlet />
            </Stack>
        </Container>
    );
};

export default MainLayout;
