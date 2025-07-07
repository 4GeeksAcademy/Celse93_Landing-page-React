import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';


export const MediaCard = () => {
  return (
    <Card sx={{ maxWidth: 250, height: 500 }}>
      <CardMedia
        sx={{ height: "50%" }}
        image="https://placehold.co/600x400"
        title="placeholder"
      />
      <CardContent sx={{ height: "40%" }}>
        <Typography gutterBottom variant="h5" sx={{ display: 'flex', justifyContent: 'center' }}>
          4Geeks
        </Typography>
        <Typography gutterBottom variant="body2" sx={{ display: 'flex', justifyContent: 'center' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ height: "10%", display: 'flex', justifyContent: 'center' }}>
        <Button
          size="small"
          variant="contained"
          disableElevation
        >
          Find Out More!
        </Button>
      </CardActions>
    </Card>
  );
}
