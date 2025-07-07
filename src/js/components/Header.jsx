import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';


const lightGrey = grey[200];

export const Header = () => {
    return (
        <Box sx={{ mb: "10px" }}>
            <Card variant="outlined" sx={{ height: 300, bgcolor: lightGrey }}>
                <Box sx={{ mx: "20px" }}>
                    <CardContent>
                        <Typography variant="h2">
                            Word of the Day
                        </Typography>
                        <Typography variant="body2" sx={{ mt: "35px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ mt: "20px" }}>
                        <Button
                            size="large"
                            variant="contained"
                            disableElevation
                        >
                            Call to action!
                        </Button>
                    </CardActions>
                </Box>
            </Card>
        </Box>
    )
}
