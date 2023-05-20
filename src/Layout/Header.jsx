import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


const drawerWidth = 240;
const navItems = ['Hobby', 'History', 'Contact', 'GitHub', 'LinkedIn'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Kimly Quac
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            {item === 'GitHub' ? (
                                <>
                                    <GitHubIcon sx={{ marginRight: 1 }} />
                                    <a href='https://github.com/kquac00' target='_blank' rel="noopener noreferrer">
                                        <ListItemText primary={item} /></a>
                                </>
                            ) : item === 'LinkedIn' ? (
                                <>
                                    <LinkedInIcon sx={{ marginRight: 1 }} />
                                    <a href='https://www.linkedin.com/in/kimly-quac-aa811533/' target='_blank' rel="noopener noreferrer">
                                        <ListItemText primary={item} />
                                    </a>
                                </>
                            ) : (
                                <Link to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ListItemText primary={item} />
                                </Link>
                            )}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <h2><a className='links' href='/'>Kimly Quac</a></h2>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <a href='https://github.com/kquac00' target='_blank' rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                            <GitHubIcon />
                        </a>
                        <a href='https://www.linkedin.com/in/kimly-quac-aa811533/' target='_blank' rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                            <LinkedInIcon />
                        </a>
                        <Link className='links' to="/hobby" style={{ marginRight: '10px' }}>Hobby</Link>
                        <Link className='links' to="/history" style={{ marginRight: '10px' }}>History</Link>
                        <Link className='links' to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography>

                </Typography>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {

    window: PropTypes.func,
};

export default DrawerAppBar;