import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                py: 2,
                textAlign: 'center',
                bottom:0,
            }}
        >
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} MIUI Footer
            </Typography>
        </Box>
    );
};

export default Footer;
