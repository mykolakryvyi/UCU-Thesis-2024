import { useState } from 'react';
import { Stack } from '@mui/material';
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

const Wrapper = styled(Stack)`
    width: 100%;
    padding: 16px;
    border-radius: 16px;
    background-color: ${({theme}) => theme.palette.background.default};
`;

const HomePage = () => {
    const [status, setStatus] = useState<E_FUNNEL_STATUS | undefined>();
    const filteredFunnels = funnelData.filter(funnel => status ? funnel.status === status : true);

    return (
        <Container>
            <Wrapper>
                <TableFilter status={status} setStatus={setStatus} />
            </Wrapper>
            <Wrapper maxHeight='100%' overflow='auto'>
                <FunnelTable funnels={filteredFunnels} />
            </Wrapper>
        </Container>
    );
};

export default HomePage;
