import { AppBar, Box, Toolbar, Typography, Button, Container } from '@mui/material';


export const MenuBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Container sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Start Bootstrap
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit" disabled>About</Button>
            <Button color="inherit" disabled>Services</Button>
            <Button color="inherit" disabled>Contact</Button>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
