import { createTheme, ThemeProvider } from '@mui/material';
import type { ReactNode } from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#BD8AFF',
        },
        background: {
            default: '#F9F6FF',
        },
    },
    typography: {
        button: {
            textTransform: 'none',
        }
    }
});

const App = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default App;
