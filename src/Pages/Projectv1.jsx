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
import Dentist from '../static/images/Dentist.jpg';
import SeaBackground from '../static/images/Seattlebg.jpg'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TeamImage from "../static/images/teamwork.jpg"
import Career from "../static/images/new_career.jpg"
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
                <div className='text' style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <h2 className='textC'>Career Journey: Embracing Passion and Pursuing Technology</h2>
                    <p>When the COVID-19 pandemic hit, I saw it as an opportunity to reevaluate my life. I made the courageous decision to quit my job in warehousing and logistic, which provided financial stability for my family, and embrace the chance to pursue my passion for technology. I realized that becoming a software developer encompassed all the traits I value: creativity, problem-solving, and continuous learning. This leap of faith opened doors for me to explore and excel in an area that truly ignites my passion.</p>
                    <p style={{ color: "orange" }}><strong>{text}</strong></p>
                </div>
            </div>
            <div className='wrapper'>
                <header>
                    <div className='tech-display'>
                        <div className='body-text'>
                            <h1 className='cool-text'>Technologies</h1>
                        </div>
                        <div className='chip-stack'>
                            <Stack direction="row" spacing={1} className='chip-container'>
                                <Chip label="Java" className='chip' />
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
                            <Stack direction="row" spacing={1} className='chip-container'>
                                <Chip label="VS code" />
                                <Chip label="Flask" />
                                <Chip label="Jinja2" />
                                <Chip label="Spring Boot" />
                                <Chip label="Spring Tool Suite 4" />
                                <Chip label="JQuery" />
                            </Stack>
                        </div>
                        <div className='chip-stack'>
                            <Stack direction="row" spacing={1} className='chip-container'>
                                <Chip label="React" />
                                <Chip label="Express" />
                                <Chip label="React Native" />
                                <Chip label="Bootstrap" />
                                <Chip label="Material-UI" />
                                <Chip label="MySQL Workbench" />
                                <Chip label="OOP" />
                            </Stack>
                        </div>
                        <div className='chip-stack'>
                            <Stack direction="row" spacing={1} className='chip-container'>
                                <Chip label="MongoDB" />
                                <Chip label="Mongoose" />
                                <Chip label="AJAX" />
                                <Chip label="Rest API" />
                                <Chip label="Json" />
                                <Chip label="Postman" />
                                <Chip label="Socket.io" />
                                <Chip label="AWS" />
                                <Chip label="GitHub" />

                            </Stack>
                        </div>
                        <div className='chip-stack'>
                            <Stack direction="row" spacing={1} className='chip-container'>
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
                                D
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Dental Website (in progress)"
                        subheader="June 3rd, 2023"
                    />
                    <a href='https://splendid-manatee-aa0ee4.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <CardMedia
                            component="img"
                            height="194"
                            image={Dentist}
                            alt="Dentist"
                        />
                    </a>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            <li>Solo project: Working to design a website for a family member who owns a dental office using MERN</li>
                            <li>Collaborating with the dentist and his staff to create their new website</li>
                            <li>Implemented Login/Registration using JWT and Bcrypt for authentication and authorization</li>
                            <li>React, a JavaScript library for building user interfaces.</li>
                            <li>React DOM for rendering React components into the DOM.</li>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <a href='https://github.com/kquac00/Dental-Project' target='_blank' rel="noopener noreferrer">
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
                                <li>this is a full-stack web application, leveraging the React.js library and an Express server. This private project prioritizes user interface design, with Emotion and Material-UI for advanced styling, Bootstrap for layout, FontAwesome and Roboto for visual elements, and slick-carousel for interactive content. Axios is utilized for effective client-server communication. The project also includes robust testing, using the Testing Library suite for React applications. Browser compatibility is ensured through specified browser lists for both production and development environments, and ESLint enforces high-quality, maintainable code.</li>
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
                        title="Etikit Cinema (deploying back-end)"
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
            </div>
            <div className='wrapper'>
                <header>
                    <img className='background' src={TeamImage} alt='team_image'></img>
                    <section className='visionMain'>
                        <div className='body-text'>
                            <h5 className='cool-text'>Full Stack Developer</h5>
                        </div>
                        <div className='vision'>
                            <p><strong>Coding Dojo graduate - April 2023 </strong> <a href="https://app.diplomasafe.com/en-US/diploma/db153694d63e82f40c58882139efca9f8e4d936ff" target='_blank' rel="noopener noreferrer">- Certificate</a></p>
                            <p>Passionate software developer eager to expand knowledge and embrace emerging technologies.</p>
                            <p>Dynamic, agile, and quick learner with an adaptable mindset.</p>
                            <p>Value collaborative team environments and thrive in agile Scrum methodologies.</p>
                            <p>Successfully completed an intensive 3.5-month bootcamp, dedicating over 600 hours to coding mastery.</p>
                            <p style={{ color: "green" }}><strong>I believe in continuous learning and adaptability, coupled with strong problem-solving skills, empower software developers to stay up to date with evolving technologies, effectively tackle complex challenges, and embrace new programming languages and frameworks. By fostering a collaborative mindset and demonstrating a commitment to continuous improvement, developers not only excel in teamwork and career growth but also contribute to innovative projects and thrive in a dynamic and ever-changing industry.</strong></p>
                        </div>
                    </section>
                </header>
            </div>
        </div>
    );
}
