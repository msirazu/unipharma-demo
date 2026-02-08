import { CssBaseline, Box, IconButton, Icon } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const MobileHeader = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{display: 'flex', height: 50, alignItems: 'center', px: 2, justifyContent: 'space-between', backgroundColor: '#dddddd50'}}>
        <Box to='/' component={Link}>
        <Box sx={{width: 100, height: 15}} component='img' src='https://unipharma.online/_next/image?url=%2Fmain_logo1.png&w=256&q=75'/>
        </Box>
        <Box sx={{gap: 2, display: 'flex'}}>
          <IconButton>
          <SearchIcon/>
          </IconButton>
          <Box to='/dashboard/login' component={Link}><IconButton>
          <PersonIcon/>
          </IconButton>
          </Box>
          <Box to='/cart' component={Link}>
          <IconButton>
          <ShoppingCartIcon sx={{color: '#000000'}}/>
          </IconButton></Box>
          <IconButton>
          <MenuIcon/>
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default MobileHeader;
