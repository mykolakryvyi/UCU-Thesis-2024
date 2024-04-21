import { TextField, Stack } from '@mui/material';
import { HEX_COLOR_REGEX, CAN_BE_HEX_COLOR_REGEX } from '../../constants/regex';
import type { FC, ChangeEvent } from 'react';

interface IColorPickerProps {
    label: string;
    color: string;
    setColor: (color: string) => void;
}

const ColorPicker: FC<IColorPickerProps> = ({ label, color, setColor }) => {
    const validateColor = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (!CAN_BE_HEX_COLOR_REGEX.test(value)) return;
        setColor(value);
    };

    return (
        <Stack direction='row' gap='8px'>
            <TextField
                fullWidth
                type='text'
                size='small'
                label={label}
                value={color}
                onChange={validateColor}
            />
            <Stack
                width='40px'
                minWidth='40px'
                height='100%'
                sx={{
                    backgroundColor: HEX_COLOR_REGEX.test(color) ?
                        color : 'transparent',
                    border: '1px solid rgba(0, 0, 0, 0.23)',
                    borderRadius: '4px',
                }}
            ></Stack>
        </Stack>
    );
};

export default ColorPicker;
