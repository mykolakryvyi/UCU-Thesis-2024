import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { E_ROUTE } from '../../constants/constants';

const NavContainer = styled(Stack)`
    width: 100%;
    gap: 8px;
    padding: 16px;
    border-radius: 16px;
    background-color: ${({theme}) => theme.palette.background.default};
`

const FunnelLayout = () => {
    const location = useLocation();
    const pathname = location.pathname.split('/').slice(-1)[0];

    return (
        <Stack width='100%' gap='10px'>
            <NavContainer>
                <Typography variant='body1'>Website name</Typography>
                <Stack direction='row-reverse' justifyContent='space-between' alignItems='center'>
                    <Button variant='contained' sx={{ color: 'white' }}>
                        Preview
                    </Button>
                    <Stack direction={{ xs: 'column', lg: 'row' }}>
                        <Link to={E_ROUTE.GENERAL}>
                            <Button
                                variant={pathname === E_ROUTE.GENERAL ? 'outlined' : 'text'}
                            >
                                General Page
                            </Button>
                        </Link>
                        <Link to={E_ROUTE.THEME}>
                            <Button
                                variant={pathname === E_ROUTE.THEME ? 'outlined' : 'text'}
                            >
                                Theme
                            </Button>
                        </Link>
                        <Link to={E_ROUTE.HOME}>
                            <Button
                                variant={pathname === E_ROUTE.HOME ? 'outlined' : 'text'}
                            >
                                Home Page
                            </Button>
                        </Link>
                        <Link to={E_ROUTE.QUIZ}>
                            <Button
                                variant={pathname === E_ROUTE.QUIZ ? 'outlined' : 'text'}
                                sx={{ minWidth: '10px' }}
                            >
                                Quiz
                            </Button>
                        </Link>
                        <Link to={E_ROUTE.EMAIL}>
                            <Button
                                variant={pathname === E_ROUTE.EMAIL ? 'outlined' : 'text'}
                            >
                                Email Page
                            </Button>
                        </Link>
                        <Link to={E_ROUTE.PAYMENT}>
                            <Button
                                variant={pathname === E_ROUTE.PAYMENT ? 'outlined' : 'text'}
                            >
                                Payment Page
                            </Button>
                        </Link>
                        <Link to={E_ROUTE.PAYMENTS}>
                            <Button
                                variant={pathname === E_ROUTE.PAYMENTS ? 'outlined' : 'text'}
                            >
                                Payments
                            </Button>
                        </Link>
                        <Link to={E_ROUTE.ANALYTICS}>
                            <Button
                                variant={pathname === E_ROUTE.ANALYTICS ? 'outlined' : 'text'}
                            >
                                Analytics
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </NavContainer>
            <Stack>
                <Outlet />
            </Stack>
        </Stack>
    );
};

export default FunnelLayout;
