import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import MainContainer from '../../ui/MainContainer';
import PreviewDialog from '../dialog/PreviewDialog';
import { E_ROUTE } from '../../constants/constants';

const FunnelLayout = () => {
    const location = useLocation();
    const [openDialog, setOpenDialog] = useState(false);
    const pathname = location.pathname.split('/').slice(-1)[0];

    return (
        <>
            <Stack width='100%' height='100%' gap='10px'>
                <MainContainer width='100%' gap='8px'>
                    <Typography variant='body1'><strong>Website name</strong></Typography>
                    <Stack direction='row-reverse' justifyContent='space-between' alignItems='center'>
                        <Button
                            variant='contained'
                            sx={{ color: 'white' }}
                            onClick={() => setOpenDialog(true)}
                        >
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
                            <Link to={E_ROUTE.ANALYTICS}>
                                <Button
                                    variant={pathname === E_ROUTE.ANALYTICS ? 'outlined' : 'text'}
                                >
                                    Analytics
                                </Button>
                            </Link>
                            <Link to={E_ROUTE.UPSALE}>
                                <Button
                                    variant={pathname === E_ROUTE.UPSALE ? 'outlined' : 'text'}
                                >
                                    Upsale
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </MainContainer>
                <Stack height='100%' overflow='auto'>
                    <Outlet />
                </Stack>
            </Stack>
            <PreviewDialog open={openDialog} onClose={() => setOpenDialog(false)} />
        </>
    );
};

export default FunnelLayout;
