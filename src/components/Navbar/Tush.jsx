import { Box, Container, Link, Typography } from '@mui/material';
import NavImg4 from '../../assents/imgs/search.webp';
import * as React from 'react';
import './Navbar.css';
import { FaChevronDown, FaChevronRight, } from "react-icons/fa";
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';


const options = ['All Categories', 'Computers', 'Laptops', 'Cameras', 'Hardware', 'Smartphones'];
const options2 = ['All Categories', 'Computers', 'Laptops', 'Cameras', 'Hardware', 'Smartphones'];

function Tush() {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };
    const handleClick2 = () => {
        console.info(`You clicked ${options2[selectedIndex]}`);
    };


    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    
    return (
        <Box>
            <Box sx={{
                display: { xl: 'none', lg: 'none', md: 'none', sm: 'block', xs: 'none', },
                marginTop: '30px'
            }}>
                <Box id='drxtfgydersehtswdhjk'>
                    <Box sx={{ width: '50%', height: '100%' }}>
                        <input type="text" id='zxcvhkcyf' placeholder="Search for products..." />
                    </Box>
                    <Box sx={{
                        width: '1px',
                        height: '28px',
                        background: '#e5e5e5'
                    }}></Box>
                    <Box sx={{ width: '50%', height: '100%' }}>
                        <React.Fragment>
                            <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                                <Box onClick={handleToggle}>
                                    <Link onClick={handleClick2} id='wsearsdgfh'>
                                        {options2[selectedIndex]}
                                        <span id='asfhjke64cds'><FaChevronDown /></span>
                                    </Link>
                                </Box>
                            </ButtonGroup>
                            <Popper
                                sx={{
                                    zIndex: 1,
                                }}
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === 'bottom' ? 'center top' : 'center bottom',
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList id="split-button-menu" autoFocusItem>
                                                    {options.map((option, index) => (
                                                        <MenuItem
                                                            key={option}
                                                            selected={index === selectedIndex}
                                                            onClick={(event) => handleMenuItemClick(event, index)}
                                                        >
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </React.Fragment>
                    </Box>
                    <Box sx={{
                        height: '100%'
                    }}>
                        <Typography id='qSWERTYUIO3545'>
                            <img src={NavImg4} alt="" />
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Tush;