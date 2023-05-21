import React, { useState, useEffect } from 'react';
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
import Career from "../static/images/new_career.jpg"
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
    const [text, setText] = useState("");
    const fullText = "I  am motivated to contribute to the world of technology by leveraging coding skills to create innovative solutions that improve lives, streamline processes, and make a positive impact on our society.";

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText((prevText) => prevText + fullText.charAt(index));
            index++;

            if (index === fullText.length) {
                clearInterval(intervalId);
            }
        }, 50);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const [expanded, setExpanded] = React.useState([false, false, false]);
    const handleExpandClick = (index) => {
        setExpanded((prevExpanded) => {
            const newExpanded = [...prevExpanded];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    }

    return (
        <div className='main'>
            <div className="wrapper">

                <img src={Career} alt='openDoor' className='background'></img>
                <div className='text' style={{ fontFamily: 'Raleway, sans-serif', fontSize: '20px' }}>
                    <h3>Career Journey: Embracing Passion and Pursuing Technology</h3>
                    <p>Upon graduating from high school, I enrolled in community college to pursue a career in the world of technology, but it didn't provide the direction I sought. Circumstances led me to a warehouse job where I advanced to a management position, providing financial stability for my family. However, it didn't align with my true interests and aspirations.</p>
                    <p>When the COVID-19 pandemic hit, I saw it as an opportunity to reevaluate my life. I made the courageous decision to quit my job and embrace the chance to pursue my passion for technology. I realized that becoming a software developer encompassed all the traits I value: creativity, problem-solving, and continuous learning. This leap of faith opened doors for me to explore and excel in an area that truly ignites my passion.</p>
                    <p><strong>{text}</strong></p>
                </div>

            </div>
            <div className='wrapper'>
                <header>

                    <div>
                        <div className='body-text'>
                            <h1 className='cool-text' style={{ fontSize: "80px" }}>Technologies</h1>
                        </div>
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
                                <Chip label="Toastify" />
                                <Chip label="JWT" />
                                <Chip label="Bcrypt" />
                            </Stack>
                        </div>
                    </div>
                    <img src={SeaBackground} className='foreground' alt='seattle'></img>
                </header>
            </div>
            {/* -----------------project showcase -------------- */}
            <div>
                <h1 style={{ fontFamily: "Roboto", textAlign: "center" }}>Projects</h1>
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
                            <li>Worked with a team using Agile and Scrum methodology to create a React-based front end with MongoDB and Mongoose APIs and MySQL database</li>
                            <li>Implemented Login/Registration using JWT and Bcrypt for authentication and authorization</li>
                            <li>React, a JavaScript library for building user interfaces.</li>
                            <li>React DOM for rendering React components into the DOM.</li>
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
                                <li>React Scripts for starting the development server, building the project, running tests, and ejecting from Create React App.</li>
                                <li>Emotion is a CSS-in-JS library used for styling React components.</li>
                                <li>Axios to used for making HTTP requests from the client-side.</li>
                            </Typography>
                            <Typography paragraph>
                                <li>Express</li>
                                <li>MUI (Material-UI)library</li>
                                <li>React Router for declarative routing in the application.</li>
                                <li>React Router Bootstrap to use components for routing purposes.</li>
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
                            <li>Collaborated with a team using Agile and Scrum methodology to create a React-based front end and Spring Java-based back end with a MySQL database</li>
                            <li>Technologies used in React, axios, bootstrap, React DOM, Material Ui carousel</li>
                            <li>emotion styled, emotion react, emotion, React Toastify, cors</li>
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
                    <a href='https://646950e879c84500074c5b7f--stellar-beignet-d51f23.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <CardMedia
                            component="img"
                            height="194"
                            image={portfolioImage}
                            alt="Kimly's portfolio"
                        />
                    </a>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            <li>Solo React project.</li>
                            <li>React Router for declarative routing in the application.</li>
                            <li>React DOM for rendering React components into the DOM.</li>
                            <li>React Scripts for starting the development server, building the project, running tests, and ejecting from Create React App.</li>
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
                                <li>Bootstrap is used for styling and layout of the application.</li>
                                <li>EmailJS for sending emails from the browser.</li>
                                <li>React Toastify for displaying toast notifications in the application.</li>
                            </Typography>
                            <Typography paragraph>
                                <li>MUI (Material-UI) using its icons and UI components.</li>
                                <li>Styled Components, CSS-in-JS library used for styling React components.</li>
                                <li>Fontsource Roboto for loading and using the Roboto font in the application.</li>
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
                        <p><strong>Coding Dojo graduate - April 2023 </strong> <a href="https://app.diplomasafe.com/en-US/diploma/db153694d63e82f40c58882139efca9f8e4d936ff" target='_blank' rel="noopener noreferrer">- Certificate</a></p>
                        <p>Passionate software developer eager to expand knowledge and embrace emerging technologies.</p>
                        <p>Dynamic, agile, and quick learner with an adaptable mindset.</p>
                        <p>Value collaborative team environments and thrive in agile Scrum methodologies.</p>
                        <p>Successfully completed an intensive 3.5-month bootcamp, dedicating over 600 hours to coding mastery.</p>
                        <p>I believe in continuous learning and adaptability, coupled with strong problem-solving skills, empower software developers to stay up to date with evolving technologies, effectively tackle complex challenges, and embrace new programming languages and frameworks. By fostering a collaborative mindset and demonstrating a commitment to continuous improvement, developers not only excel in teamwork and career growth but also contribute to innovative projects and thrive in a dynamic and ever-changing industry.</p>
                    </section>
                </header>
            </div>
        </div>
    );
}
