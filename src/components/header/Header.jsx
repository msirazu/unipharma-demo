import { CssBaseline, Box } from '@mui/material';
import Navbar from './Navbar';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

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
        <Box sx={{display: {xs: 'block', md: 'none'}}}>
            <MobileHeader/>
        </Box>
        </>
    );
};

export default Header;