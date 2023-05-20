import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ecommerceImage from '../static/images/ecommerce.jpg';
import etikitImage from '../static/images/etikit.jpg';
import portfolioImage from '../static/images/portfolio.jpg';
import SeaBackground from '../static/images/Seattlebg.jpg'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TeamImage from "../static/images/teamwork.jpg"
import '../biography.css';
import '../project.css'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Projectv1() {
    // const [expanded, setExpanded] = React.useState(false);

    const [expanded, setExpanded] = React.useState([false, false, false]);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    const handleExpandClick = (index) => {
        setExpanded((prevExpanded) => {
            const newExpanded = [...prevExpanded];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    }
    return (
        <div className='main'>
            <div className='wrapper'>
                <header>
                    <div>
                        <h1 className='title'>Technologies</h1>
                        <div className='chip-stack'>
                            <Stack direction="row" spacing={1}>
                                <Chip label="Java" />
                                <Chip label="JavaScript" />
                                <Chip label="ES6" />
                                <Chip label="Node JS" />
                                <Chip label="Python" />
                                <Chip label="HTML5" />
                                <Chip label="CSS" />
                                <Chip label="MySQL" />
                            </Stack>
                        </div>
                        <div className='chip-stack'>
                            <Stack direction="row" spacing={1}>
                                <Chip label="VS code" />
                                <Chip label="Flask" />
                                <Chip label="Jinja2" />
                                <Chip label="Spring Boot" />
                                <Chip label="Spring Tool Suite 4" />
                                <Chip label="JQuery" />
                                <Chip label="React" />
                                <Chip label="Express" />
                                <Chip label="React Native" />
                                <Chip label="Bootstrap" />
                                <Chip label="Material-UI" />
                                <Chip label="MySQL Workbench" />
                            </Stack>
                        </div>
                        <div className='chip-stack'>
                            <Stack direction="row" spacing={1}>
                                <Chip label="MongoDB" />
                                <Chip label="Mongoose" />
                                <Chip label="AJAX" />
                                <Chip label="Rest API" />
                                <Chip label="Json" />
                                <Chip label="Postman" />
                                <Chip label="Socket.io" />
                                <Chip label="AWS" />
                                <Chip label="GitHub" />
                                <Chip label="OOP" />
                            </Stack>
                        </div>
                        <div className='chip-stack'>
                            <Stack direction="row" spacing={1}>
                                <Chip label="Agile development Life Cycle" />
                                <Chip label="Scrum Methology" />
                                <Chip label="CI/CD Pipeline" />
                                <Chip label="Toastify" />
                                <Chip label="JWT" />
                                <Chip label="Bcrypt" />
                            </Stack>
                        </div>
                    </div>
                    <img src={SeaBackground} className='background' alt='seattle'></img>
                </header>
            </div>

            {/* -----------------project showcase -------------- */}
            <div className='body-text'>
                <div className='cool-text'>Projects</div>
            </div>
            <div className='projectCard'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                E
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Ecommerce"
                        subheader="March 29, 2023"
                    />
                    <a href='https://statuesque-swan-894988.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <CardMedia
                            component="img"
                            height="194"
                            image={ecommerceImage}
                            alt="Ecommerce"
                        />
                    </a>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            •	Worked with a team using Agile and Scrum methodology to create a React-based front end with MongoDB, Express, and Mongoose APIs and MySQL database
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <a href='https://github.com/kquac00/Ecommerce' target='_blank' rel="noopener noreferrer">
                            <IconButton aria-label="GitHub" >
                                <GitHubIcon />
                            </IconButton>
                        </a>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>

                        <ExpandMore
                            expand={expanded[0]}
                            onClick={() => handleExpandClick(0)}
                            aria-expanded={expanded[0]}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                •	Implemented Login/Registration using JWT and Bcrypt for authentication and authorization
                            </Typography>
                            <Typography paragraph>
                                •	Styled the project using Material-UI and bootstrap.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                E
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Etikit Cinema"
                        subheader="April 28, 2023"
                    />
                    <a href='https://glittering-bavarois-1598d8.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <CardMedia
                            component="img"
                            height="194"
                            image={etikitImage}
                            alt="EtikitCinema"
                        />
                    </a>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            •	Collaborated with a team using Agile and Scrum methodology to create a React-based front end and Spring Java-based back end with a MySQL database
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <a href='https://github.com/kquac00/etikit-cinema-react-fe' target='_blank' rel="noopener noreferrer">
                            <IconButton aria-label="GitHub" >
                                <GitHubIcon />
                            </IconButton>
                        </a>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded[1]}
                            onClick={() => handleExpandClick(1)}
                            aria-expanded={expanded[1]}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                •	Created a movie API using Spring Tool Suite 4 and implemented login/registration for admin access
                            </Typography>
                            <Typography paragraph>
                                •	Built a user-facing front end with React.js, using Material-UI carousel, bootstrap, react-player, and react toastify for payment notification
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Kimly's portfolio"
                        subheader="May 15, 2023"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={portfolioImage}
                        alt="Kimly's portfolio"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Need content here...
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded[2]}
                            onClick={() => handleExpandClick(2)}
                            aria-expanded={expanded[2]}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded[2]} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>

                            </Typography>
                            <Typography paragraph>

                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
            <div className='wrapper'>
                <header>
                    <img className='background' src={TeamImage} alt='team_image'></img>

                    <section>

                        <div className='body-text'>
                            <h1 className='cool-text'>Full Stack Developer</h1>
                        </div>
                        <p><strong>Coding Dojo graduate - April 2023 </strong> <a href="https://app.diplomasafe.com/en-US/diploma/db153694d63e82f40c58882139efca9f8e4d936ff" target='_blank'>- Certificate</a></p>
                        <p>Passionate software developer eager to expand knowledge and embrace emerging technologies.</p>
                        <p>Dynamic, agile, and quick learner with an adaptable mindset.</p>
                        <p>Value collaborative team environments and thrive in agile Scrum methodologies, leveraging CI/CD pipelines on GitHub.</p>
                        <p>Successfully completed an intensive 3.5-month bootcamp, dedicating over 600 hours to coding mastery.</p>
                        <p>I believe in continuous learning and adaptability, coupled with strong problem-solving skills, empower software developers to stay up to date with evolving technologies, effectively tackle complex challenges, and embrace new programming languages and frameworks. By fostering a collaborative mindset and demonstrating a commitment to continuous improvement, developers not only excel in teamwork and career growth but also contribute to innovative projects and thrive in a dynamic and ever-changing industry.</p>
                    </section>
                </header>
            </div>
        </div>
    );
}
