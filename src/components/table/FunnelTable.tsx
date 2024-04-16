import { Link } from 'react-router-dom';
import {
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { Edit2 } from 'react-feather';
import { E_FUNNEL_STATUS } from '../../interfaces/funnel';
import { styled } from '@mui/material/styles';
import type { IFunnel } from '../../interfaces/funnel';
import type { FC } from 'react';

const TableHeadCell = styled(TableCell)`
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: ${({theme}) => theme.palette.background.paper};
`;

interface IFunnelTableProps {
    funnels: IFunnel[];
}

const FunnelTable: FC<IFunnelTableProps> = ({ funnels }) => {
    return (
        <TableContainer component={Paper} sx={{ borderRadius: '16px', overflow: 'auto' }}>
            <Table stickyHeader sx={{ minWidth: 650 }} aria-label='funnel table'>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Website</TableHeadCell>
                        <TableHeadCell>Name</TableHeadCell>
                        <TableHeadCell>Status</TableHeadCell>
                        <TableHeadCell>Created at</TableHeadCell>
                        <TableHeadCell>Updated at</TableHeadCell>
                        <TableHeadCell></TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {funnels.map((funnel) => (
                        <TableRow
                            key={funnel.id}
                            sx={{ '&:last-child td, &:last-child th': { borderX: 0 } }}
                        >
                            <TableCell component='th' scope='row'>
                                <Link
                                    to={`funnels/${funnel.id}/general`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    {funnel.website}
                                </Link>
                            </TableCell>
                            <TableCell >{funnel.name}</TableCell>
                            <TableCell
                                sx={{ color: funnel.status === E_FUNNEL_STATUS.ACTIVE ? 'green' : 'red' }}
                            >
                                {funnel.status}
                            </TableCell>
                            <TableCell>{funnel.createdAt.toDateString()}</TableCell>
                            <TableCell>{funnel.updatedAt.toDateString()}</TableCell>
                            <TableCell align='center'>
                                <Link
                                    to={`funnels/${funnel.id}/general`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Stack
                                        direction='row'
                                        alignItems='center'
                                        justifyContent='center'
                                        gap={1}
                                        color='primary.light'
                                    >
                                        <Edit2 size={15} />
                                        Edit
                                    </Stack>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FunnelTable;
