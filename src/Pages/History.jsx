import * as React from 'react';
import Navigation from '../Components/Navigation'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CambodiaMap from "../static/images/cambodia_map.jpg";
import FranceMap from "../static/images/france_map.jpg";
import USAMap from "../static/images/usa_map.jpg";
import '../history.css';

const History = () => {
    return (
        <>
            <div>
                <Navigation />
            </div>
            <h3 style={{ color: "blue", fontFamily: "cursive" }}>The countries I lived and grew up in</h3>
            <div className='cards'>
                <div>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={CambodiaMap}
                                alt="cambodia map"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cambodia
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    I was born in Cambodia in a province call Kampong Thom. We left to France for a better opportunity back in 1989.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={FranceMap}
                                alt="france map"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    France
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    I grew up in France and lived in a few different places including: Paris 13th district, Le Perreux-Sur-Marne, Lognes in the Seine-et-Marne. We eventually left France for better opportunity in the U.S.A.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={USAMap}
                                alt="usa map"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    USA
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    We moved to the U.S. in 1999, the land of opportunities. I first lived in Bellevue, WA and later moved to Auburn, WA where I settled with my wife Tiffany and we had our two kids Ethan and Aaron.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default History