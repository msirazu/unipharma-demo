import { Box, CircularProgress } from "@mui/material";

const CircularColorLoading = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default CircularColorLoading;
