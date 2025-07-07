import { MenuBar } from './MenuBar';
import { MediaCard } from './MediaCard';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container, Grid } from '@mui/material';


export const Home = () => {
  return (
    <>
      <MenuBar />
      <Container>
        <Header />
        <Grid container spacing={{ md: 6 }}>
          <Grid  size={{ xs: 12, md: 3 }}>
            <MediaCard />
          </Grid>
          <Grid  size={{ xs: 12, md: 3 }}>
            <MediaCard />
          </Grid>
          <Grid  size={{ xs: 12, md: 3 }}>
            <MediaCard />
          </Grid>
          <Grid  size={{ xs: 12, md: 3 }}>
            <MediaCard />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
