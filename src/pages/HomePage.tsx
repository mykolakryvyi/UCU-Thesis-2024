import { useState } from 'react';
import { Stack } from '@mui/material';
import MainContainer from "../ui/MainContainer";
import TableFilter from '../components/filter/TableFilter';
import FunnelTable from '../components/table/FunnelTable';
import { Funnels as funnelData } from '../constants/constants';
import { styled } from '@mui/material/styles';
import type { E_FUNNEL_STATUS } from '../interfaces/funnel';

const Container = styled(Stack)`
    width: 100%;
    height: 100%;
    gap: 10px
`

const HomePage = () => {
    const [status, setStatus] = useState<E_FUNNEL_STATUS | 'Both' | undefined>();
    const filteredFunnels = funnelData.filter(funnel => status && status !== 'Both' ? funnel.status === status : true);

    return (
        <Container>
            <MainContainer width='100%'>
                <TableFilter status={status} setStatus={setStatus} />
            </MainContainer>
            <MainContainer width='100%' maxHeight='100%' overflow='auto'>
                <FunnelTable funnels={filteredFunnels} />
            </MainContainer>
        </Container>
    );
};

export default HomePage;
