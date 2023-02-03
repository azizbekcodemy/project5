import { Box, Container, Typography } from '@mui/material';
import NavImg1 from '../../assents/imgs/phone.png.webp';
import NavImg2 from '../../assents/imgs/mail.png.webp';
import NavImg3 from '../../assents/imgs/user.svg';
import NavImg4 from '../../assents/imgs/search.webp';
import NavImg5 from '../../assents/imgs/heart.webp';
import NavImg6 from '../../assents/imgs/cart.webp';
import NavImg7 from '../../assents/imgs/phone_white.png.webp';
import NavImg8 from '../../assents/imgs/mail_white.png.webp';
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
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tooltip from '@mui/material/Tooltip';
import Tush from './Tush';
import { Link } from 'react-router-dom';

const options = ['All Categories', 'Computers', 'Laptops', 'Cameras', 'Hardware', 'Smartphones'];
const options2 = ['All Categories', 'Computers', 'Laptops', 'Cameras', 'Hardware', 'Smartphones'];

function Navbar() {

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
            <Box>
                <Box sx={{
                    borderBottom: 'solid 1px rgba(0,0,0,0.05)',
                    width: '100%',
                    background: '#fafafa',
                    display: { xl: 'block', lg: 'block', md: 'block', sm: 'block', xs: 'none' }
                }}>
                    <Container>
                        <Box sx={{
                            height: { xl: '56px', lg: '56px', md: '56px', sm: '40px', xs: '0' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ display: 'flex', marginRight: '40px', alignItems: 'center' }}>
                                    <Typography sx={{
                                        marginRight: '14px'
                                    }}>
                                        <img src={NavImg1} alt="" id='vbdkjgn48757' />
                                    </Typography>
                                    <Typography id='NavTepJYoz1'>
                                        +38 068 005 3570
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography sx={{
                                        marginRight: '14px'
                                    }}>
                                        <img src={NavImg2} alt="" id='vbdkjgn48deqw757' />
                                    </Typography>
                                    <Link href='mailto:fastsales@gmail.com' id='NavTepJYoz2' >
                                        fastsales@gmail.com
                                    </Link>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                                <Box sx={{
                                    display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'none' },
                                    height: '100%',
                                    alignItems: 'center'
                                }}>
                                    <Box id='NavTepJYoz3'>
                                        <Typography id='NavTepJYoz4'>
                                            English
                                        </Typography>
                                        <Box id='NavTepJYoz5'>
                                            <Link id='NavTepJYoz6'>
                                                Italian
                                            </Link>
                                            <Link id='NavTepJYoz6'>
                                                Spanish
                                            </Link>
                                            <Link id='NavTepJYoz7'>
                                                Japanese
                                            </Link>
                                        </Box>
                                    </Box>
                                    <Box id='NavTepJYoz3'>
                                        <Typography id='NavTepJYoz4'>
                                            $ US dollar
                                        </Typography>
                                        <Box id='NavTepJYoz8'>
                                            <Link id='NavTepJYoz9'>
                                                EUR Euro
                                            </Link>
                                            <Link id='NavTepJYoz9'>
                                                GBP British Pound
                                            </Link>
                                            <Link id='NavTepJYoz9'>
                                                JPY Japanese Yen
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', marginLeft: '35px', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography>
                                            <img src={NavImg3} alt="" id='uoewdvju' />
                                        </Typography>
                                        <Typography id='fyyguhinjkm'>
                                            Register
                                        </Typography>
                                    </Box>
                                    <Typography id='efrgthe34'>
                                        Sign in
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
                <Container>
                    <Box sx={{
                        height: { xl: '175px', lg: '175px', md: '175px', sm: '175px', xs: '75px', },
                        width: '100%',
                        alignItems: 'center',
                        display: 'flex'
                    }}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{
                                alignItems: 'center',
                                display: 'flex',
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    width: '100%',
                                    alignItems: 'center',
                                }} id='adgfshbdgn'>
                                    <Box sx={{ paddingRight: '30px' }}>
                                        <Typography sx={{
                                            fontSize: { xl: '36px', lg: '36px', md: '36px', sm: '36px', xs: '24px' },
                                            fontWeight: '600',
                                            color: '#0e8ce4'
                                        }}>
                                            OneTech
                                        </Typography>
                                    </Box>
                                    <Box id='drxtfgyhjk'>
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
                                                        <Link onClick={handleClick} id='wsearsdgfh'>
                                                            {options[selectedIndex]}
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
                                    <Box sx={{ display: 'flex', width: '55%', justifyContent: 'right' }}>
                                        <Box>
                                            <img src={NavImg5} alt="" id='gdjsdnndeSewf' />
                                        </Box>
                                        <Box sx={{
                                            marginLeft: '14px',
                                            marginRight: { xl: '50px', lg: '50px', md: '50px', sm: '0px', xs: '10px' }
                                        }}>
                                            <Typography sx={{
                                                fontSize: '18px',
                                                fontWeight: '400',
                                                color: '#000000',
                                                cursor: 'pointer',
                                                display: { xl: 'block', lg: 'block', md: 'block', sm: 'block', xs: 'none' },
                                                ':hover': {
                                                    color: '#0e8ce4'
                                                }
                                            }}>
                                                Wishlist
                                            </Typography>
                                            <Typography sx={{
                                                color: '#a3a3a3',
                                                fontSize: '14px',
                                                width: { xl: 'auto', lg: 'auto', md: 'auto', sm: '100%', xs: 'auto' },
                                                textAlign: { xl: 'start', lg: 'start', md: 'start', sm: 'end', xs: 'start', }
                                            }}>
                                                115
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ position: 'relative', marginRight: '28px' }}>
                                            <Typography sx={{
                                                position: 'absolute',
                                                lineHeight: '23px',
                                                fontSize: '12px',
                                                color: '#FFFFFF',
                                                width: { xl: '23px', lg: '23px', md: '23px', sm: '23px', xs: '21px' },
                                                height: { xl: '23px', lg: '23px', md: '23px', sm: '23px', xs: '21px' },
                                                background: '#0e8ce4',
                                                borderRadius: '50%',
                                                textAlign: 'center',
                                                right: '-14px',
                                                marginTop: { xl: '14px', lg: '14px', md: '14px', sm: '14px', xs: '4.5px' }
                                            }}>
                                                10
                                            </Typography>
                                            <Box>
                                                <img src={NavImg6} alt="" id='gdjsdnndecSewf' />
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography sx={{
                                                fontSize: '18px',
                                                fontWeight: '400',
                                                color: '#000000',
                                                cursor: 'pointer',
                                                display: { xl: 'block', lg: 'block', md: 'block', sm: 'block', xs: 'none' },
                                                ':hover': {
                                                    color: '#0e8ce4'
                                                }
                                            }}>
                                                Cart
                                            </Typography>
                                            <Typography sx={{
                                                color: '#a3a3a3',
                                                fontSize: '14px',
                                                width: { xl: 'auto', lg: 'auto', md: 'auto', sm: '100%', xs: 'auto' },
                                                textAlign: { xl: 'start', lg: 'start', md: 'start', sm: 'end', xs: 'start', }
                                            }}>
                                                $85
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        <Box>
                            <Tush />
                        </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box id='ergthyjuklf347'>
                <Container>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: {xl: 'transparent', lg: 'transparent', md: 'transparent', sm: '#0e8ce4', xs: '#0e8ce4' }
                    }}>
                        <Box>
                            <Box id='NavTepJYoz30'>
                                <Box id='NavTepJYreoz4' sx={{ background: '#0e8ce4', cursor: 'pointer' }}>
                                    <Box id='fdgkos85877'>
                                        <Typography sx={{
                                            fontSize: '20px',
                                            color: '#fff'
                                        }}>
                                            <RxHamburgerMenu />
                                        </Typography>
                                        <Typography id='sfadf8ieirvje'>
                                            CATEGORIES
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box id='NavTepJYoz80'>
                                    <Link id='NavTepJYoeeez6'>
                                        Computers &amp; Laptops
                                    </Link>
                                    <Link id='NavTepJYoeeez6'>
                                        Cameras &amp; Photos
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }}>
                                        <Box id='NavTepJYozfdhs3'>
                                            <Box sx={{ display: 'flex', alignItems: 'center', border: 'solid 1px #f2f2f2' }}>
                                                <Typography id='NavTepJYoeeez6'>
                                                    Hardware
                                                </Typography>
                                                <Typography style={{
                                                    fontSize: '12px',
                                                    color: '#000',
                                                    marginRight: '30px'
                                                }}>
                                                    <FaChevronRight />
                                                </Typography>
                                            </Box>
                                            <Box id='NavTepJYsadvoz5'>
                                                <Link style={{ textDecoration: 'none' }}>
                                                    <Box id='NavTepJYozfdhs30'>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', border: 'solid 1px #f2f2f2', cursor: 'pointer' }}>
                                                            <Typography id='NavTepJYoeeez6'>
                                                                Menu Item
                                                            </Typography>
                                                            <Typography style={{
                                                                fontSize: '12px',
                                                                color: '#000',
                                                                marginRight: '30px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <FaChevronRight />
                                                            </Typography>
                                                        </Box>
                                                        <Box id='NavTepJYsadvoz50'>
                                                            <Link id='NavTepJYoeeez6'>
                                                                Menu Item
                                                            </Link>
                                                            <Link id='NavTepJYoeeez6'>
                                                                Menu Item
                                                            </Link>
                                                            <Link id='NavTepJYoeeez6'>
                                                                Menu Item
                                                            </Link>
                                                            <Link id='NavTepJYoeeez6'>
                                                                Menu Item
                                                            </Link>
                                                        </Box>
                                                    </Box>
                                                </Link>
                                                <Link id='NavTepJYoeeez6'>
                                                    Menu Item
                                                </Link>
                                                <Link id='NavTepJYoeeez6'>
                                                    Menu Item
                                                </Link>
                                                <Link id='NavTepJYoeeez6'>
                                                    Menu Item
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Link>
                                    <Link id='NavTepJYoeeez6'>
                                        Smartphones &amp; Tablets
                                    </Link>
                                    <Link id='NavTepJYoeeez6'>
                                        TV &amp; Audio
                                    </Link>
                                    <Link id='NavTepJYoeeez6'>
                                        Gadgets
                                    </Link>
                                    <Link id='NavTepJYoeeez6'>
                                        Car Electronics
                                    </Link>
                                    <Link id='NavTepJYoeeez6'>
                                        Video Games &amp; Consoles
                                    </Link>
                                    <Link id='NavTepJYoeeez6'>
                                        Accessories
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: { xl: 'none', lg: 'none', md: 'none', sm: 'flex', xs: 'flex' },
                        }}>
                            <Box id='dgforehiogdtr'>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <Typography sx={{
                                                fontSize: '18px',
                                                fontWeight: '400',
                                                color: '#fff',
                                                marginRight: '14px'
                                            }}>
                                                MENU
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: '18px',
                                                fontWeight: '400',
                                                color: '#fff',
                                                marginRight: '25px',
                                                marginTop: '5px'
                                            }}>
                                                <RxHamburgerMenu />
                                            </Typography>
                                        </Box>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-aytr"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <Box sx={{
                                        padding: '26px 16px 30px 16px',
                                        display: { xl: 'none', lg: 'none', md: 'none', sm: 'none', xs: ';block' }
                                    }}>
                                        <input type="text" id='zxcvhkszcyf' placeholder="Search for products..." />
                                    </Box>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography sx={{
                                                textTransform: 'uppercase',
                                                fontSize: '14px',
                                                color: '#fff',
                                                fontWeight: '500'
                                            }}>Language</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ padding: '0 15px' }}>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                English
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Italian
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Spanish
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Japanese
                                            </Link>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography sx={{
                                                textTransform: 'uppercase',
                                                fontSize: '14px',
                                                color: '#fff',
                                                fontWeight: '500'
                                            }}>Currency</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ padding: '0 15px' }}>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                $ US dollar
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                EUR Euro
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                GBP British Pound
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                JPY Japanese Yen
                                            </Link>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Box>
                                        <Link className='dsfgaewrzsrnf'>
                                            HOME
                                        </Link>
                                    </Box>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography sx={{
                                                textTransform: 'uppercase',
                                                fontSize: '14px',
                                                color: '#fff',
                                                fontWeight: '500'
                                            }}>Super Deals</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ padding: '0 15px' }}>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Super Deals
                                            </Link>
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography sx={{
                                                        textTransform: 'uppercase',
                                                        fontSize: '14px',
                                                        color: '#fff',
                                                        fontWeight: '500'
                                                    }}>Menu Item</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails sx={{ padding: '0 15px' }}>
                                                    <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                        Menu Item
                                                    </Link>
                                                    <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                        Menu Item
                                                    </Link>
                                                    <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                        Menu Item
                                                    </Link>
                                                    <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                        Menu Item
                                                    </Link>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Menu Item
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Menu Item
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Menu Item
                                            </Link>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography sx={{
                                                textTransform: 'uppercase',
                                                fontSize: '14px',
                                                color: '#fff',
                                                fontWeight: '500'
                                            }}>Featured Brands</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ padding: '0 15px' }}>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Featured Brands
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Menu Item
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Menu Item
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Menu Item
                                            </Link>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography sx={{
                                                textTransform: 'uppercase',
                                                fontSize: '14px',
                                                color: '#fff',
                                                fontWeight: '500'
                                            }}>Trending Styles</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ padding: '0 15px' }}>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Trending Styles
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Menu Item
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Menu Item
                                            </Link>
                                            <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                Menu Item
                                            </Link>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Box>
                                        <Link className='dsfgaewrzsrnf'>
                                            BLOG
                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link className='dsfgaewrzsrnf'>
                                            CONTACT
                                        </Link>
                                    </Box>
                                    <Box>
                                        <Box id='aefsWHRaafs'>
                                            <Box sx={{ display: 'flex', marginRight: '40px', alignItems: 'center' }}>
                                                <Typography sx={{
                                                    marginRight: '14px',
                                                }}>
                                                    <img src={NavImg7} alt="" id='vbdkjgn48757ew' />
                                                </Typography>
                                                <Typography id='tfhftfrhsfgfjgha'>
                                                    +38 068 005 3570
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography sx={{
                                                    marginRight: '14px'
                                                }}>
                                                    <img src={NavImg8} alt="" id='vbdkjfgergn48deqw757' />
                                                </Typography>
                                                <Link href='mailto:fastsales@gmail.com' id='tfhftfrhgfjgh' >
                                                    fastsales@gmail.com
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Menu>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none' },
                            alignItems: 'center',
                            minHeight: '100%',
                        }}>
                            <Box sx={{ marginRight: '30px' }}>
                                <Link id='NavYozuv1'>
                                    Home
                                </Link>
                            </Box>
                            <Box sx={{ minHeight: '100%', marginRight: '30px' }}>
                                <Link style={{ textDecoration: 'none', height: '100%' }}>
                                    <Box id='NavmenuZzz1'>
                                        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                            <Typography id='NavmenuZzz'>
                                                Super Deals
                                            </Typography>
                                            <Typography style={{
                                                fontSize: '12px',
                                                color: '#a19a9a',
                                                marginLeft: '3px',
                                                marginTop: '5px'
                                            }}>
                                                <FaChevronDown />
                                            </Typography>
                                        </Box>
                                        <Box id='NavmenuZzz3'>
                                            <Link style={{ textDecoration: 'none' }}>
                                                <Box id='NavmenuZzz5'>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                                        <Typography id='NavmenuZzz2'>
                                                            Menu Item
                                                        </Typography>
                                                    </Box>
                                                    <Box id='NavmenuZzz6'>
                                                        <Link id='NavmenuZzz4'>
                                                            Menu Item
                                                        </Link>
                                                        <Link id='NavmenuZzz4'>
                                                            Menu Item
                                                        </Link>
                                                        <Link id='NavmenuZzz4'>
                                                            Menu Item
                                                        </Link>
                                                    </Box>
                                                </Box>
                                            </Link>
                                            <Link id='NavmenuZzz4'>
                                                Menu Item
                                            </Link>
                                            <Link id='NavmenuZzz4'>
                                                Menu Item
                                            </Link>
                                            <Link id='NavmenuZzz4'>
                                                Menu Item
                                            </Link>
                                        </Box>
                                    </Box>
                                </Link>
                            </Box>
                            <Box sx={{ minHeight: '100%', marginRight: '30px' }}>
                                <Link style={{ textDecoration: 'none', height: '100%' }}>
                                    <Box id='NavmenuZzz1'>
                                        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                            <Typography id='NavmenuZzz'>
                                                Featured Brands
                                            </Typography>
                                            <Typography style={{
                                                fontSize: '12px',
                                                color: '#a19a9a',
                                                marginLeft: '3px',
                                                marginTop: '5px'
                                            }}>
                                                <FaChevronDown />
                                            </Typography>
                                        </Box>
                                        <Box id='NavmenuZzz3'>
                                            <Link style={{ textDecoration: 'none' }}>
                                                <Box id='NavmenuZzz5'>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                                        <Typography id='NavmenuZzz2'>
                                                            Menu Item
                                                        </Typography>
                                                    </Box>
                                                    <Box id='NavmenuZzz6'>
                                                        <Link id='NavmenuZzz4'>
                                                            Menu Item
                                                        </Link>
                                                        <Link id='NavmenuZzz4'>
                                                            Menu Item
                                                        </Link>
                                                        <Link id='NavmenuZzz4'>
                                                            Menu Item
                                                        </Link>
                                                    </Box>
                                                </Box>
                                            </Link>
                                            <Link id='NavmenuZzz4'>
                                                Menu Item
                                            </Link>
                                            <Link id='NavmenuZzz4'>
                                                Menu Item
                                            </Link>
                                            <Link id='NavmenuZzz4'>
                                                Menu Item
                                            </Link>
                                        </Box>
                                    </Box>
                                </Link>
                            </Box>
                            <Box sx={{ minHeight: '100%', marginRight: '30px' }}>
                                <Link style={{ textDecoration: 'none', height: '100%' }}>
                                    <Box id='NavmenuZzz7'>
                                        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                            <Typography id='NavmenuZzz'>
                                                Pages
                                            </Typography>
                                            <Typography style={{
                                                fontSize: '12px',
                                                color: '#a19a9a',
                                                marginLeft: '3px',
                                                marginTop: '5px'
                                            }}>
                                                <FaChevronDown />
                                            </Typography>
                                        </Box>
                                        <Box id='NavmenuZzz8'>
                                            <Link id='NavmenuZzz4'>
                                                Shop
                                            </Link>
                                            <Link id='NavmenuZzz4'>
                                                Product
                                            </Link>
                                            <Link id='NavmenuZzz4'>
                                                Blog
                                            </Link>
                                            <Link id='NavmenuZzz4'>
                                                Blog Post
                                            </Link>
                                            <Link id='NavmenuZzz4'>
                                                Regular Post
                                            </Link>
                                            <Link id='NavmenuZzz4'>
                                                Cart
                                            </Link>
                                            <Link id='NavmenuZzz4'>
                                                Contact
                                            </Link>
                                        </Box>
                                    </Box>
                                </Link>
                            </Box>
                            <Box sx={{ marginRight: '30px' }}>
                                <Link id='NavYozuv1'>
                                    Blog
                                </Link>
                            </Box>
                            <Box>
                                <Link id='NavYozuv1'>
                                    Contact
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
export default Navbar;