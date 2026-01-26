import { CssBaseline, Box } from '@mui/material';
import Navbar from './Navbar';
import DesktopHeader from './DesktopHeader';

const Header = () => {
    return (
        <>
        <CssBaseline/>
        <Box sx={{display: {xs: 'none', md: 'block'}}}>
           <DesktopHeader/>
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block'}}} component='section'>
            <Navbar/>
        </Box>
        </>
    );
};

export default Header;