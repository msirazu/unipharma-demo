import { CssBaseline, Box, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <Box component='nav' sx={{backgroundColor: '#097B35', height: 100, display: 'flex', 'flexDirection': {xs: 'column', md: 'row'}, alignItems: 'center', justifyContent: 'center', gap: 3}}>
         <ButtonGroup variant="none" sx={{'& .MuiButton-root': {color: 'white', fontWeight: 600, fontSize: 16, fontFamily: 'Hind Siliguri, sans-serif'}}}>
            <Button component={Link} to='/'>কম্বো অফার</Button>
            <Button component={Link} to='/'>হার্টের ঔষধ</Button>
            <Button component={Link} to='/'>ডায়াবেটিস</Button>
            <Button component={Link} to='/'>হাই প্রেশার</Button>
            <Button component={Link} to='/'>লিভারের ঔষধ</Button>
            <Button component={Link} to='/'>ওজন হ্রাস</Button>
            <Button component={Link} to='/'>এলার্জি ঔষধ
</Button>
         </ButtonGroup>
      </Box>
    </>
  );
};

export default Navbar;
