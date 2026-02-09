import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const DesignOne = () => {
  return (
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <Box>
        <Box to='/' component={Link}>Back to Home</Box>
        <Typography sx={{textAlign: 'center', textTransform: 'capitalize'}} component='p' variant='p'>
          coming soon
        </Typography>
        </Box>
      </Box>
  )}

export default DesignOne;