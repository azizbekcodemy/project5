import { Box, Container, Grid, Link, Typography } from '@mui/material';
import * as React from 'react';
import './Futter.css'
import FutImg1 from '../../assents/imgs/send.webp';
import FutImg2 from '../../assents/imgs/logos_1.png.webp';
import FutImg3 from '../../assents/imgs/logos_2.png.webp';
import FutImg4 from '../../assents/imgs/logos_3.png.webp';
import FutImg5 from '../../assents/imgs/logos_4.png.webp';
import { FaFacebookF, FaTwitter, FaYoutube, FaGoogle, FaVimeoV, FaHeart } from "react-icons/fa";

function Futter() {

    return (
        <Box>
            <Box id='futbirtep1'>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={4.6}>
                            <Box>
                                <Box sx={{ 
                                    display:{xl:'flex',lg:'flex',md:'flex',sm:'flex',xs:'block' }, 
                                    paddingRight: '20px' ,
                                    textAlign:'center',
                                    width:'100%'
                                    }}>
                                    <Typography>
                                        <img src={FutImg1} alt="" id='dsfzmgsoergmv' />
                                    </Typography>
                                    <Box sx={{ paddingLeft: '35px' }}>
                                        <Typography sx={{
                                            fontSize:{xl:'18px',lg:'18px',md:'18px',sm:'18px',xs:'16px'},
                                            color: '#000'
                                        }}>
                                            Sign up for Newsletter
                                        </Typography>
                                        <Typography id='futbirtep2'>
                                            ...and receive %20 coupon for first shopping.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={7.4}>
                            <Box sx={{
                                 display: {xl:'flex',lg:'flex',md:'flex',sm:'flex',xs:'block'}
                                  }}>
                                <Box id='futbirtep3'>
                                    <Typography width={'100%'}>
                                        <input type="text" placeholder="Enter your email address" id='futbirtep4' />
                                    </Typography>
                                    <button id='futbirtep5'>
                                        Subscribe
                                    </button>
                                </Box>
                                <Typography id='futbirtep6'>
                                    UNSUBSCRIBE
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ padding: '52px 0 40px 0' }}>
                <Container>
                    <Box sx={{
                        display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'block' },
                        padding: { xl: '0 15px', lg: '0 15px', md: '0 15px', sm: '0' }
                    }}>
                        <Box sx={{ minWidth: '25%' }}>
                            <Link href='#' sx={{
                                textDecoration: 'none',
                                color: '#000',
                                fontWeight: 550,
                                fontSize: '36px',
                                fontFamily: "'Rubik', sans-serif",
                                letterSpacing: '0.00938em'
                            }}>
                                OneTech
                            </Link>
                            <Typography sx={{
                                fontSize: '14px',
                                fontWeight: '550',
                                color: '#000',
                                fontFamily: "'Rubik', sans-serif",
                                letterSpacing: '0.00938em',
                                marginTop: '22px'
                            }}>
                                Got Question? Call Us 24/7
                            </Typography>
                            <Typography sx={{
                                fontSize: '18px',
                                fontWeight: 600,
                                color: '#0e8ce4',
                                marginTop: '13px',
                                fontFamily: "'Rubik', sans-serif",
                                letterSpacing: '0.00938em'
                            }}>
                                +38 068 005 3570
                            </Typography>
                            <Box sx={{
                                marginTop: '10px'
                            }}>
                                <Typography className='futbirtep7'>
                                    17 Princess Road, London
                                </Typography>
                                <Typography className='futbirtep7'>
                                    Grester London NW18JR, UK
                                </Typography>
                            </Box>
                            <Box sx={{ paddingTop: '22px', display: 'flex' }}>
                                <Link href='#' className='FutIconKop'>
                                    <FaFacebookF />
                                </Link>
                                <Link href='#' className='FutIconKop'>
                                    <FaTwitter />
                                </Link>
                                <Link href='#' className='FutIconKop'>
                                    <FaYoutube />
                                </Link>
                                <Link href='#' className='FutIconKop'>
                                    <FaGoogle />
                                </Link>
                                <Link href='#' className='FutIconKop'>
                                    <FaVimeoV />
                                </Link>
                            </Box>
                        </Box>
                        <Box sx={{
                            marginLeft: { xl: '16.666667%', lg: '16.666667%', md: '16.666667%', sm: '0%' },
                            minWidth: '16.666667%',
                            padding: { xl: '0 15px', lg: '0 15px', md: '0 15px', sm: '0' }
                        }}>
                            <Typography id='futpasyoz1'>
                                Find it Fast
                            </Typography>
                            <Link href='#' id='futpasyoz2'>
                                Computers & Laptops
                            </Link>
                            <Link href='#' id='futpasyoz2'>
                                Cameras & Photos
                            </Link>
                            <Link href='#' id='futpasyoz2'>
                                Hardware
                            </Link>
                            <Link href='#' id='futpasyoz2'>
                                Smartphones & Tablets
                            </Link>
                            <Link href='#' id='futpasyoz2'>
                                TV & Audio
                            </Link>
                            <Typography sx={{
                                fontSize: '12px',
                                marginBottom: '6px',
                                color: '#000',
                                fontWeight: '600'
                            }}>
                                Gadgets
                            </Typography>
                            <Link href='#' id='futpasyoz2'>
                                Car Electronics
                            </Link>
                        </Box>
                        <Box sx={{
                            minWidth: '16.666667%',
                            marginTop: '47px',
                            padding: { xl: '0 15px', lg: '0 15px', md: '0 15px', sm: '0' }
                        }}>
                            <Link href='#' id='futpasyoz2'>
                                Video Games & Consoles
                            </Link>
                            <Link href='#' id='futpasyoz2'>
                                Accessories
                            </Link>
                            <Link href='#' id='futpasyoz2'>
                                Cameras & Photos
                            </Link>
                            <Link href='#' id='futpasyoz2'>
                                Hardware
                            </Link>
                            <Link href='#' id='futpasyoz2'>
                                Computers & Laptops
                            </Link>
                        </Box>
                        <Box sx={{
                            minWidth: '16.666667%',
                            padding: { xl: '0 15px', lg: '0 15px', md: '0 15px', sm: '0' }
                        }}>
                            <Typography id='futpasyoz1'>
                                Customer Care
                            </Typography>
                            <Link href='#' id='futpasyoz2'>
                                My Account
                            </Link>
                            <Link href='#' id='futpasyoz2'>
                                Order Tracking
                            </Link>
                            <Link href='#' id='futpasyoz2'>
                                Wish List
                            </Link>
                            <Link href='#' id='futpasyoz2'>
                                Customer Services
                            </Link>
                            <Link href='#' id='futpasyoz2'>
                                Returns / Exchange
                            </Link >
                            <Link href='#' id='futpasyoz2'>
                                FAQs
                            </Link>
                            <Link href='#' id='futpasyoz2'>
                                Product Support
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{background:'#fafafa',width:'100%'}}>
                <Container>
                    <Box sx={{
                        display: {xl:'flex',lg:'flex',md:'flex',sm:'flex',xs:'block'},
                        justifyContent: 'space-between',
                        width: "100%",
                        minHeight: "56px",
                        alignItems:'center'
                    }}>
                        <Box>
                            <Link id='dsfmieieioio'>
                                Copyright ©2023 All rights reserved | This template is made with <FaHeart style={{
                                    margin:'0 3px',
                                    paddingTop:'2px'
                                }} />by <span style={{
                                    color: '#0e8ce4'
                                }}> Colorlib</span>
                            </Link>
                        </Box>
                        <Box sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            <Link sx={{ marginRight: '16px' }}>
                                <img src={FutImg2} alt="" />
                            </Link>
                            <Link sx={{ marginRight: '16px',marginBottom:'6px' }}>
                                <img src={FutImg3} alt="" />
                            </Link>
                            <Link sx={{ marginRight: '16px',marginBottom:'6px' }}>
                                <img src={FutImg4} alt="" />
                            </Link>
                            <Link>
                                <img src={FutImg5} alt="" />
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
export default Futter;