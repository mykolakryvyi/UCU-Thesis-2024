import {
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
} from '@mui/material';
import { Search } from 'react-feather';
import { E_FUNNEL_STATUS } from '../../interfaces/funnel';
import { styled } from '@mui/material/styles';
import type { FC } from 'react';
import type { SelectChangeEvent } from '@mui/material';

const Container = styled(Stack)`
    flex-direction: row;
    gap: 10px;
`;

interface ITableFilterProps {
    status?: E_FUNNEL_STATUS | 'Both';
    setStatus: (status: E_FUNNEL_STATUS | 'Both') => void;
}

const TableFilter: FC<ITableFilterProps> = ({ status, setStatus }) => {
    const handleStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as E_FUNNEL_STATUS | 'Both');
    };

    return (
        <Container>
            <TextField
                type='text'
                name='search'
                placeholder='Search'
                size='small'
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <Search size={20} />
                        </InputAdornment>
                    ),
                }}
                sx={{ minWidth: 'min(407px, 50%)' }}
            />
            <FormControl sx={{ width: '160px' }}>
                <InputLabel id='status-select-label' size='small'>
                    Status
                </InputLabel>
                <Select
                    labelId='status-select-label'
                    id='status-select'
                    label='Status'
                    size='small'
                    value={status || ''}
                    onChange={handleStatusChange}
                >
                    <MenuItem value={E_FUNNEL_STATUS.ACTIVE}>Active</MenuItem>
                    <MenuItem value={E_FUNNEL_STATUS.INACTIVE}>Inactive</MenuItem>
                    <MenuItem value='Both'>Both</MenuItem>
                </Select>
            </FormControl>
        </Container>
    );
};

export default TableFilter;
