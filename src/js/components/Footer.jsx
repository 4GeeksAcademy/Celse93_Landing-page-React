import { Typography, Toolbar, Box, AppBar } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';


export const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ mt: "25px" }}>
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <Typography>
                        <CopyrightIcon /> Copyright 2025
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}