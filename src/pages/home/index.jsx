import { Button, Link, Typography } from '@mui/material'
import { Box, Grid, Container } from '@mui/material'
import React from 'react'
import { assa, dats, Davlat, HOmm, Kerak, Kerak1, MAx, Maxa, salom } from '../../assents/homemap'
import "./style.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import rasm from "../../assents/imgs/deals.png"
import rass from "../../assents/imgs/banner_product.png.webp"
import Rating from '@mui/material/Rating';
import Carousel from 'react-elastic-carousel'
import { FaHeart } from 'react-icons/fa';
import HomCarPasImg1 from '../../assents/imgs/brands_1.jpg.webp'
import HomCarPasImg2 from '../../assents/imgs/brands_2.jpg.webp'
import HomCarPasImg3 from '../../assents/imgs/brands_3.jpg.webp'
import HomCarPasImg4 from '../../assents/imgs/brands_4.jpg.webp'
import HomCarPasImg5 from '../../assents/imgs/brands_5.jpg.webp'
import HomCarPasImg6 from '../../assents/imgs/brands_6.jpg.webp'
import HomCarPasImg7 from '../../assents/imgs/brands_7.jpg.webp'
import HomCarPasImg8 from '../../assents/imgs/brands_8.jpg.webp'

const breakPoints54 = [
  { width: 1, itemsToShow: 2 },
  { width: 300, itemsToShow: 4 },
  { width: 600, itemsToShow: 6 },
  { width: 900, itemsToShow: 8 },
  { width: 1100, itemsToShow: 8 },
];

const breakPoints = [
    { width: 100, itemsToShow: 1, showArrows: false },
    { width: 550, itemsToShow: 4, showArrows: false },
    { width: 768, itemsToShow: 4, showArrows: false },
    { width: 1200, itemsToShow: 5, showArrows: false },
];
const breakPoints2 = [
    { width: 100, itemsToShow: 1, showArrows: false },
    { width: 550, itemsToShow: 4, showArrows: false },
    { width: 768, itemsToShow: 5, showArrows: false },
    { width: 1200, itemsToShow: 5, showArrows: false },
];


const breakPoints21 = [
    { width: 100, itemsToShow: 1, showArrows: false },
    { width: 550, itemsToShow: 4, showArrows: false },
    { width: 768, itemsToShow: 5, showArrows: false },
    { width: 1200, itemsToShow: 5, showArrows: false },
];
const breakPoints3 = [
    { width: 100, itemsToShow: 1, showArrows: false },
    { width: 550, itemsToShow: 3, showArrows: false },
    { width: 768, itemsToShow: 3, showArrows: false },
    { width: 1200, itemsToShow: 5, showArrows: false },
];

const breakPoints31 = [
    { width: 100, itemsToShow: 1, showArrows: false },
    { width: 550, itemsToShow: 2, showArrows: false },
    { width: 768, itemsToShow: 3, showArrows: false },
    { width: 1200, itemsToShow: 5, showArrows: false },
];
const breakPoints32 = [
    { width: 100, itemsToShow: 1, showArrows: false },
    { width: 550, itemsToShow: 2, showArrows: false },
    { width: 768, itemsToShow: 6, showArrows: false },
    { width: 1200, itemsToShow: 5, showArrows: false },
];

const breakPoints1 = [
    { width: 100, itemsToShow: 1, showArrows: false },
    { width: 550, itemsToShow: 1, showArrows: false },
    { width: 768, itemsToShow: 1, showArrows: false },
    { width: 1200, itemsToShow: 1, showArrows: false },
];




function Home() {
    const [value, setValue] = React.useState(5);



    const items = [
        <Box className="item" data-value="1" style={{ padding: "0 10px" }}>
            <Typography sx={{ fontSize: "18px", color: "#000", fontWeight: "600", mb: "15px" }}>
                Deals of the Week
            </Typography>
            <img src={rasm} alt="" style={{ width: "100%", marginTop: "25px" }} />
            <Box sx={{ display: "flex", justifyContent: "space-between", color: "rgba(0,0,0,0.5)", }}>
                <Typography sx={{ fontSize: "14px" }}>Headphones</Typography><Typography sx={{ fontSize: "14px" }}>$300</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", color: "#000", fontSize: "24px", }}>
                <Typography sx={{ fontSize: "24px", }}>Beoplay H7</Typography><Typography sx={{ fontSize: "24px", color: "red", fontWeight: "600" }}>$225</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", color: "rgba(0,0,0,0.5)", mt: "15px" }}>
                <Typography sx={{ fontSize: "12px" }}>Availabel: <span style={{ color: "rgba(0,0,0,0.8)" }}>6</span></Typography><Typography sx={{ fontSize: "12px" }}>Already sold: <span style={{ color: "rgba(0,0,0,0.8)" }}>28</span></Typography>
            </Box>
            <Box sx={{ width: "100%", height: "10px", background: "#e8e8e8", borderRadius: "5px", mt: "5px" }}>
                <Box sx={{ width: "20%", height: "100%", background: "#0e8ce4", borderRadius: "5px" }}></Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", m: "30px 0 0" }}>
                <Typography>
                    <Typography sx={{ fontSize: "14px", color: "#000000", fontWeight: "550" }}>Hurry Up</Typography>
                    <Typography sx={{ fontSize: "12px" }}>Offer ends In:</Typography>
                </Typography>
                <Box sx={{ width: "auto", border: "1px solid #ccc", height: "40px", borderRadius: "5px", textAlign: "center", p: "0 15   px " }}>
                    45  |  35 |  25
                </Box>
            </Box>
        </Box>,

    ];

    return (
        <Box>

            <Box className="dadat" sx={{ display: "flex", justifyContent: "start", alignItems: "center", p: "45px 0" }}>
                <Container>


                    <Box sx={{ width: { lg: "450px", md: "450px", sm: "450px", xs: "100% " }, height: "70%", zIndex: "1", position: "relative", mt: "25px", ml: { lg: "390px", md: "320px" } }}>
                        <Typography sx={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: "500",
                            lineHeight: "1.166",
                            color: "rgb(117, 153, 178)",
                            textTransform: "uppercase",
                            letterSpacing: "0.038em",
                            fontSize: { lg: "48px", md: "48px", sm: "48px", xs: "24px" }
                        }}>
                            NEW ERA OF SMARTPHONES
                        </Typography>
                        <Box sx={{ display: "flex", fontFamily: "'Rubik', sans-serif ", mt: { lg: "87px", md: "87px", sm: "87px", xs: "20px" } }}>
                            <Typography sx={{
                                color: "rgb(126, 130, 133)",
                                fontSize: { lg: "30px", md: "30px", sm: "30px", xs: "18px" },
                                position: "relative",
                                display: "inline-block",
                                mr: "15px"
                            }}>
                                $530
                                <Typography sx={{ display: "block", position: "absolute", top: "21px", width: "100%", height: "2px", background: "rgb(141, 141, 141)" }}></Typography>
                            </Typography>
                            <Typography sx={{ fontSize: { lg: "30px", md: "30px", sm: "30px", xs: "18px" }, color: "#df3b3b" }}>
                                $460
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: { lg: "18px", md: "18px", sm: "18px", xs: "13px" }, mt: "10px" }}>
                            Apple Iphone 6s
                        </Typography>
                        <Button sx={{ textTransform: "capitalize", width: { lg: "160px", md: "160px", sm: "160px", xs: "105px" }, height: { lg: "50px", md: "50px", sm: "50px", xs: "32px" }, fontSize: { lg: "18px", sm: "18px", xs: "12px", md: "18px" }, background: "#0E8CE4", color: "white", "&:hover": { background: "#007bff" }, mt: "33px", mb: "80px" }}>
                            Shop Now
                        </Button>
                    </Box>
                </Container>
                <Box sx={{ display: "flex", justifyContent: "right", alignItems: "center", }}>

                    <Box sx={{ width: "100%", height: "100%", position: "absolute", width: { lg: "520px", md: "520px", sm: "520px", xs: "270px" }, height: { lg: "450px", md: "450px", sm: "450px", xs: "220px" }, position: "absolute", mr: { lg: "100px", md: "40px", sm: "30px", xs: "10px" }, opacity: { lg: "1", md: "1", sm: "1", xs: "0.5" }, mt: { lg: "65px", md: "70px" } }}>
                        <img src={rass} alt="" style={{ width: "100%", height: '100%' }} />
                    </Box>
                </Box>


            </Box>
            <Container>
                <Box sx={{ p: "60px 0" }}>
                    <Grid container spacing={3}>
                        {HOmm.map((v) => (

                            <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ width: "100%" }}>
                                <Typography sx={{ width: "100%", height: "100px", border: "solid 1px #e8e8e8", boxShadow: "0px 1px 5px rgb(0 0 0 / 10%)", display: "flex", alignItems: "center", p: " 0 0 0 36px" }}>

                                    <img src={v.rasm} alt="" style={{ width: "auto", height: "28px", marginRight: "25px" }} />
                                    <Typography>
                                        <Typography sx={{ fontSize: "14px", }}>
                                            {v.name}
                                        </Typography>
                                        <Typography sx={{ fontSize: "12px" }}>
                                            {v.price}
                                        </Typography>
                                    </Typography>
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>




                <Box sx={{ p: "60px 0" }}>
                    <Grid container spacing={0}>
                        <Grid item lg={4.5} md={4.5} sm={12} xs={12}>
                            <Box sx={{ width: "100%  ", boxShadow: "0px 10px 25px rgb(0 0 0 / 10%)", borderRadius: "5px", p: "45px 50px 35px", }}>
                                <AliceCarousel
                                    autoPlay

                                    animationDuration={1500}
                                    disableButtonsControls
                                    infinite
                                    items={items}
                                    mouseTracking
                                    width="100%"
                                    height="100%"
                                />
                            </Box>
                        </Grid>
                        <Grid item lg={7.5} md={7.5} sm={12} xs={12}>
                            <Box sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", }}>
                                <Carousel breakPoints={breakPoints} autoPlaySpeed={10000} >
                                    {salom.map((v) => (
                                        <Grid container spacing={0} sx={{ display: "flex", justifyContent: "center", height: "auto", p: "8px" }}>
                                            <Grid item lg={12} md={12} sm={12} xs={12} >

                                                <Link href='#' sx={{
                                                    width: "100%",
                                                    height: "270px",
                                                    textAlign: "center",
                                                    // p: "8px",
                                                    position: "relative",
                                                    transition: "ease all 0.2s",

                                                    display: "flex",
                                                    justifyContent: "center",
                                                    cursor: "pointer",
                                                    "&:hover": {
                                                        cursor: "-moz-grab",
                                                        transform: " scale(1.1)",
                                                        boxShadow: "0px 10px 25px rgb(0 0 0 / 10%)",

                                                    },
                                                    textDecoration: "none",
                                                    mb: "20px",
                                                    // borderRight:"1px solid grey"
                                                }}>
                                                    <Box sx={{ position: "absolute", }}  >
                                                        <Typography sx={{ position: "relative", mt: "20px" }}>
                                                            <img src={v.rasm} alt=" " style={{ width: "90%", height: "100px", }} />
                                                            <Typography sx={{ width: "35px", height: "35px", background: (v.fon), position: "absolute", borderRadius: "50%", mt: "-100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "12px", color: "white" }}>
                                                                {v.cke}
                                                            </Typography>


                                                        </Typography>
                                                        <Typography sx={{ textAlign: "center", mt: "15px" }}>
                                                            <span style={{ fontSize: "16px", color: "#df3b3b", fontWeight: "600", color: (v.rang) }}>{v.aksiya}</span> <span style={{ fontSize: "12px", color: (v.color) }}> {v.narx}</span>
                                                        </Typography>
                                                        <Link href='#' sx={{ textDecoration: "none", cursor: "pointer", fontFamily: "", fontSize: "14px", color: "#000000" }}>
                                                            {v.madel}
                                                        </Link>
                                                    </Box>
                                                    <Box sx={{ opacity: "0", "&:hover": { opacity: "1" }, width: "200%", height: "100%", alignItems: "end", display: "flex" }}>
                                                        <Box sx={{ width: "100%" }}>
                                                            <Box sx={{ width: "100%", height: "20px", mb: "10px", display: "flex", justifyContent: "center" }}>
                                                                <Typography sx={{ width: "15px", height: "15px", background: "#6f42c1", borderRadius: "50%", ml: "0px" }}></Typography>
                                                                <Typography sx={{ width: "15px", height: "15px", background: "black", borderRadius: "50%", ml: "2px" }}></Typography>
                                                                <Typography sx={{ width: "15px", height: "15px", background: "#868e96", borderRadius: "50%", ml: "2px" }}></Typography>

                                                            </Box>
                                                            <Box sx={{ width: "100%", height: "40px", background: "#007bff", borderRadius: "0 0 5px 5px ", color: "white", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                                                <Typography >Add to Cart</Typography>
                                                            </Box>
                                                        </Box>
                                                        <Box className="shopnew">
                                                            <i className='shopicon'>
                                                                <FaHeart />
                                                            </i>
                                                        </Box>
                                                    </Box>
                                                </Link>
                                                <Link href='#' sx={{
                                                    width: "100%",
                                                    height: "270px",
                                                    textAlign: "center",
                                                    // p: "8px",
                                                    position: "relative",
                                                    transition: "ease all 0.2s",

                                                    display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                                                    justifyContent: "center",
                                                    cursor: "pointer",
                                                    "&:hover": {
                                                        cursor: "-moz-grab",
                                                        transform: " scale(1.1)",
                                                        boxShadow: "0px 10px 25px rgb(0 0 0 / 10%)"
                                                    },
                                                    textDecoration: "none",
                                                    mb: "20px",
                                                    // borderRight:"1px solid grey"
                                                }}>
                                                    <Box sx={{ position: "absolute", }}  >
                                                        <Typography sx={{ position: "relative", mt: "20px" }}>
                                                            <img src={v.rasm} alt=" " style={{ width: "90%", height: "100px" }} />
                                                            <Typography sx={{ width: "35px", height: "35px", background: (v.fon), position: "absolute", borderRadius: "50%", mt: "-100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "12px", color: "white" }}>
                                                                {v.cke}
                                                            </Typography>
                                                        </Typography>
                                                        <Typography sx={{ textAlign: "center", mt: "15px" }}>
                                                            <span style={{ fontSize: "16px", color: "#df3b3b", fontWeight: "600", color: (v.rang) }}>{v.aksiya}</span> <span style={{ fontSize: "12px", color: (v.color) }}> {v.narx}</span>
                                                        </Typography>
                                                        <Link href='#' sx={{ textDecoration: "none", cursor: "pointer", fontFamily: "", fontSize: "14px", color: "#000000" }}>
                                                            {v.madel}
                                                        </Link>
                                                    </Box>
                                                    <Box sx={{ opacity: "0", "&:hover": { opacity: "1" }, width: "200%", height: "100%", alignItems: "end", display: "flex" }}>
                                                        <Box sx={{ width: "100%" }}>
                                                            <Box sx={{ width: "100%", height: "20px", mb: "10px", display: "flex", justifyContent: "center" }}>
                                                                <Typography sx={{ width: "15px", height: "15px", background: "#6f42c1", borderRadius: "50%", ml: "0px" }}></Typography>
                                                                <Typography sx={{ width: "15px", height: "15px", background: "black", borderRadius: "50%", ml: "2px" }}></Typography>
                                                                <Typography sx={{ width: "15px", height: "15px", background: "#868e96", borderRadius: "50%", ml: "2px" }}></Typography>

                                                            </Box>
                                                            <Box sx={{ width: "100%", height: "40px", background: "#007bff", borderRadius: "0 0 5px 5px ", color: "white", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                                                <Typography >Add to Cart</Typography>
                                                            </Box>
                                                        </Box>
                                                        <Box className="shopnew">
                                                            <i className='shopicon'>
                                                                <FaHeart />
                                                            </i>
                                                        </Box>
                                                    </Box>
                                                </Link>

                                            </Grid>
                                        </Grid>
                                    ))}
                                </Carousel>
                            </Box>

                        </Grid>

                    </Grid>


                </Box >

            </Container >

            <Box sx={{ p: "60px 0" }}>
                <Container>
                    <Box>
                        <Box >
                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <Grid container spacing={4}>
                                        <Grid item lg={3} md={3} sm={12} xs={12}>
                                            <Box sx={{ width: "100%", height: "auto ", p: "0 15px" }}>
                                                <Typography sx={{ fontSize: "30px", fontWeight: "600", lineHeight: "1.2" }}>Popular Categories</Typography>
                                                <Typography sx={{ mt: "50px" }}><Link href='#' sx={{ fontSize: "12px", textDecoration: "none", cursor: "pointer", }}> FULL CATALOG</Link></Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item lg={9} md={9} sm={12} xs={12}>
                                            <Grid container spacing={0} id='sssss'>
                                                <Carousel breakPoints={breakPoints21} autoPlaySpeed={10000}>
                                                    {Maxa.map((v) => (
                                                        <Grid item xs={12} >
                                                            <Box sx={{ width: "100%", height: "215px", background: (v.ran), p: "0 40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                <Box>
                                                                    <Typography sx={{ display: "flex", justifyContent: "center" }}>
                                                                        <img src={v.rasm} alt="" />
                                                                    </Typography>
                                                                    <Typography sx={{ fontSize: "14px", textAlign: "center", mt: "20px" }}>
                                                                        {v.text}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                    ))}
                                                </Carousel>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box sx={{ p: "88px 0", }} className="orqafon">
                <Container>
                    <Carousel breakPoints={breakPoints1} enableAutoPlay autoPlaySpeed={10000}>
                        {Davlat.map((v) => (
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <Grid container spacing={2}>
                                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                                        <Box sx={{ width: "100%", height: "300px", mt: "50px" }}>
                                            <Typography sx={{ fontSize: "12px", color: "#828282" }}>{v.name}</Typography>
                                            <Typography sx={{ fontSize: "30px", color: "#000000", mt: "10px" }}> {v.madel}</Typography>
                                            <Typography sx={{ fontSize: "16px", color: "#828282", mt: "15px" }}>{v.text}</Typography>
                                            <Box sx={{ width: "130px", height: "50px", background: "#0e8ce4", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center", mt: "40px", cursor: "pointer" }}><Typography sx={{ fontSize: "18px", color: "white" }}>Explore</Typography></Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                                        <Box sx={{ width: "100%", height: "auto" }}>
                                            <img src={v.rasm} alt="" style={{ width: "100%", height: "auto" }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        ))}
                    </Carousel>
                </Container>
            </Box>
            <Box sx={{ width: "100%", height: "auto", p: "80px 0" }}>
                <Container>
                    <Box sx={{ width: "100%", height: "40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography sx={{ fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "0" }, color: "#000000", }}>Hot New Arrivals</Typography>
                        <Box sx={{ display: "flex" }}>
                            <Typography sx={{ mr: "35px", fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "14px" }, cursor: "pointer" }}>Featured</Typography>
                            <Typography sx={{ mr: "35px", fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "14px" }, color: "rgba(0,0,0,0.5)", "&:hover": { color: "black" }, cursor: "pointer" }}>Audio & Video</Typography>
                            <Typography sx={{ fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "14px" }, color: "rgba(0,0,0,0.5)", "&:hover": { color: "black" }, cursor: "pointer" }}>Laptops & Computers
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", height: "1px", background: "#dadada", mt: "5px" }}></Box>
                    <Grid container spacing={0}>
                        <Grid item lg={9.5} md={9} sm={12} xs={12}>
                            <Box sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", }}>
                                <Carousel breakPoints={breakPoints2} autoPlaySpeed={10000}>
                                    {assa.map((v) => (
                                        <Grid container spacing={0} sx={{ display: "flex", justifyContent: "center", height: "auto", p: "8px" }}>
                                            <Grid item lg={12} md={12} sm={12} xs={12} >

                                                <Link href='#' sx={{
                                                    width: "100%",
                                                    height: "270px",
                                                    textAlign: "center",
                                                    // p: "8px",
                                                    position: "relative",
                                                    transition: "ease all 0.2s",

                                                    display: "flex",
                                                    justifyContent: "center",
                                                    cursor: "pointer",
                                                    "&:hover": {
                                                        cursor: "-moz-grab",
                                                        transform: " scale(1.1)",
                                                        boxShadow: "0px 10px 25px rgb(0 0 0 / 10%)"
                                                    },
                                                    textDecoration: "none",
                                                    mb: "20px",
                                                    // borderRight:"1px solid grey"
                                                }}>
                                                    <Box sx={{ position: "absolute", }}  >
                                                        <Typography sx={{ position: "relative", mt: "20px" }}>
                                                            <img src={v.rasm} alt=" " style={{ width: "90%", height: "100px" }} />
                                                            <Typography sx={{ width: "35px", height: "35px", background: (v.fon), position: "absolute", borderRadius: "50%", mt: "-100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "12px", color: "white" }}>
                                                                {v.cke}
                                                            </Typography>
                                                        </Typography>
                                                        <Typography sx={{ textAlign: "center", mt: "15px" }}>
                                                            <span style={{ fontSize: "16px", color: "#df3b3b", fontWeight: "600", color: (v.rang) }}>{v.aksiya}</span> <span style={{ fontSize: "12px", color: (v.color) }}> {v.narx}</span>
                                                        </Typography>
                                                        <Link href='#' sx={{ textDecoration: "none", cursor: "pointer", fontFamily: "", fontSize: "14px", color: "#000000" }}>
                                                            {v.madel}
                                                        </Link>
                                                    </Box>
                                                    <Box sx={{ opacity: "0", "&:hover": { opacity: "1" }, width: "200%", height: "100%", alignItems: "end", display: "flex" }}>
                                                        <Box sx={{ width: "100%" }}>
                                                            <Box sx={{ width: "100%", height: "20px", mb: "10px", display: "flex", justifyContent: "center" }}>
                                                                <Typography sx={{ width: "15px", height: "15px", background: "#6f42c1", borderRadius: "50%", ml: "0px" }}></Typography>
                                                                <Typography sx={{ width: "15px", height: "15px", background: "black", borderRadius: "50%", ml: "2px" }}></Typography>
                                                                <Typography sx={{ width: "15px", height: "15px", background: "#868e96", borderRadius: "50%", ml: "2px" }}></Typography>

                                                            </Box>
                                                            <Box sx={{ width: "100%", height: "40px", background: "#007bff", borderRadius: "0 0 5px 5px ", color: "white", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                                                <Typography >Add to Cart</Typography>
                                                            </Box>
                                                        </Box>
                                                        <Box className="shopnew">
                                                            <i className='shopicon'>
                                                                <FaHeart />
                                                            </i>
                                                        </Box>
                                                    </Box>
                                                </Link>
                                                <Link href='#' sx={{
                                                    width: "100%",
                                                    height: "270px",
                                                    textAlign: "center",
                                                    // p: "8px",
                                                    position: "relative",
                                                    transition: "ease all 0.2s",

                                                    display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                                                    justifyContent: "center",
                                                    cursor: "pointer",
                                                    "&:hover": {
                                                        cursor: "-moz-grab",
                                                        transform: " scale(1.1)",
                                                        boxShadow: "0px 10px 25px rgb(0 0 0 / 10%)"
                                                    },
                                                    textDecoration: "none",
                                                    mb: "20px",
                                                    // borderRight:"1px solid grey"
                                                }}>
                                                    <Box sx={{ position: "absolute", }}  >
                                                        <Typography sx={{ position: "relative", mt: "20px" }}>
                                                            <img src={v.rasm} alt=" " style={{ width: "90%", height: "100px" }} />
                                                            <Typography sx={{ width: "35px", height: "35px", background: (v.fon), position: "absolute", borderRadius: "50%", mt: "-100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "12px", color: "white" }}>
                                                                {v.cke}
                                                            </Typography>
                                                        </Typography>
                                                        <Typography sx={{ textAlign: "center", mt: "15px" }}>
                                                            <span style={{ fontSize: "16px", color: "#df3b3b", fontWeight: "600", color: (v.rang) }}>{v.aksiya}</span> <span style={{ fontSize: "12px", color: (v.color) }}> {v.narx}</span>
                                                        </Typography>
                                                        <Link href='#' sx={{ textDecoration: "none", cursor: "pointer", fontFamily: "", fontSize: "14px", color: "#000000" }}>
                                                            {v.madel}
                                                        </Link>
                                                    </Box>
                                                    <Box sx={{ opacity: "0", "&:hover": { opacity: "1" }, width: "200%", height: "100%", alignItems: "end", display: "flex" }}>
                                                        <Box sx={{ width: "100%" }}>
                                                            <Box sx={{ width: "100%", height: "20px", mb: "10px", display: "flex", justifyContent: "center" }}>
                                                                <Typography sx={{ width: "15px", height: "15px", background: "#6f42c1", borderRadius: "50%", ml: "0px" }}></Typography>
                                                                <Typography sx={{ width: "15px", height: "15px", background: "black", borderRadius: "50%", ml: "2px" }}></Typography>
                                                                <Typography sx={{ width: "15px", height: "15px", background: "#868e96", borderRadius: "50%", ml: "2px" }}></Typography>

                                                            </Box>
                                                            <Box sx={{ width: "100%", height: "40px", background: "#007bff", borderRadius: "0 0 5px 5px ", color: "white", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                                                <Typography >Add to Cart</Typography>
                                                            </Box>
                                                        </Box>
                                                        <Box className="shopnew">
                                                            <i className='shopicon'>
                                                                <FaHeart />
                                                            </i>
                                                        </Box>
                                                    </Box>
                                                </Link>

                                            </Grid>
                                        </Grid>
                                    ))}
                                </Carousel>
                            </Box>

                        </Grid>
                        <Grid item lg={2.5} md={3} sm={3} xs={12} sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }}>
                            <Box sx={{ p: "10px" }}>
                                <Box sx={{ width: "100%", height: "auto" }}  >
                                    <Typography sx={{ position: "relative", mt: "20px" }}>
                                        <img src={rasm} alt=" " style={{ width: "100%", height: "auto" }} />
                                        <Typography sx={{ width: "35px", height: "35px", position: "absolute", borderRadius: "50%", mt: "-220px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "12px", color: "white", background: "#0e8ce4" }}>
                                            new
                                        </Typography>
                                    </Typography>
                                    <Typography href='#' sx={{ textDecoration: "none", cursor: "pointer", fontFamily: "", fontSize: "12px", color: "#000000" }}>
                                        Smartphones
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: "5px" }}>
                                        <Typography>
                                            LUNA Smartphone
                                        </Typography>
                                        <Typography>
                                            $380
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ width: "100%", height: "auto", alignItems: "end", display: "flex", cursor: "pointer", mt: "25px", }}>
                                    <Box sx={{ width: "100%" }}>
                                        <Box sx={{ width: "100%", height: "50px", background: "#007bff", borderRadius: " 5px ", color: "white", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                            <Typography >Add to Cart</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ background: "#eff6fa", width: "100%", height: "auto", p: "60px 0" }}>
                <Container>
                    <Box sx={{ width: "100%", height: "40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography sx={{ fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "0" }, color: "#000000", }}>Hot Best Sellers</Typography>
                        <Box sx={{ display: "flex" }}>
                            <Typography sx={{ mr: "35px", fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "14px" }, cursor: "pointer" }}>Featured</Typography>
                            <Typography sx={{ mr: "35px", fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "14px" }, color: "rgba(0,0,0,0.5)", "&:hover": { color: "black" }, cursor: "pointer" }}>Audio & Video</Typography>
                            <Typography sx={{ fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "14px" }, color: "rgba(0,0,0,0.5)", "&:hover": { color: "black" }, cursor: "pointer" }}>Laptops & Computers
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", height: "1px", background: "#dadada", m: "5px 0 85px" }}></Box>
                    <Grid container spacing={2}>
                        <Carousel breakPoints={breakPoints31} autoPlaySpeed={10000}>
                            {Kerak.map((v) => (
                                <Grid item xs={11.5}>
                                    <Box sx={{ width: "100%", height: "auto", background: "white", p: "25px", borderRadius: "8px" }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={5} >
                                                <Box sx={{ width: "100%", height: "100%", p: "5px" }}>
                                                    <img src={v.img} alt="" style={{ width: "100%", height: "100%" }} />
                                                </Box>

                                            </Grid>
                                            <Grid item xs={7}>
                                                <Typography sx={{ fontSize: "12px", mb: "5px", mt: "10px" }}>{v.satr}</Typography>
                                                <Typography sx={{ fontSize: "16px ", mb: "10px" }}>{v.nomi}</Typography>
                                                <Box
                                                    sx={{ '& > legend': { mt: 2 }, }}
                                                >
                                                    <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                                                    <Box sx={{ display: "flex", mt: "10px", }}>
                                                        <Typography sx={{ color: "red", fontSize: "16px" }}>{v.chekirma} </Typography>
                                                        <Typography sx={{ fontSize: "13px", mt: "2px", ml: "15px" }}>{v.asl}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ width: "100%", height: "auto", background: "white", p: "25px", borderRadius: "8px", mt: "20px", display: { lg: "flex", md: "flex", sm: "flex", xs: "none" } }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={5} >
                                                <Box sx={{ width: "100%", height: "100%", p: "5px" }}>
                                                    <img src={v.img} alt="" style={{ width: "100%", height: "100%" }} />
                                                </Box>

                                            </Grid>
                                            <Grid item xs={7}>
                                                <Typography sx={{ fontSize: "12px", mb: "5px", mt: "10px" }}>{v.satr}</Typography>
                                                <Typography sx={{ fontSize: "16px ", mb: "10px" }}>{v.nomi}</Typography>
                                                <Box
                                                    sx={{ '& > legend': { mt: 2 }, }}
                                                >
                                                    <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                                                    <Box sx={{ display: "flex", mt: "10px", }}>
                                                        <Typography sx={{ color: "red", fontSize: "16px" }}>{v.chekirma} </Typography>
                                                        <Typography sx={{ fontSize: "13px", mt: "2px", ml: "15px" }}>{v.asl}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            ))}
                        </Carousel>
                    </Grid>





                </Container>
            </Box>


            <Box sx={{ p: "60px 0" }}>
                <Container>

                    <Grid container spacing={3}>
                        {dats.map((v) => (
                            <Grid item lg={4} md={4} sm={12} xs={12} xl={4} >
                                <Box sx={{ width: "100%", height: "170px", border: "1px solid #e8e8e8", display: "flex", alignItems: "center", boxShadow: "0px 1px 5px rgb(0 0 0 / 10%)", justifyContent: "space-between" }}>
                                    <Box sx={{ width: "45%", height: "100%", ml: "30px", color: "#828282", mt: "70px" }}>
                                        <Box>
                                            <Typography sx={{ fontSize: (v.raz), color: (v.rang), fontWeight: "500", mt: (v.mt), mb: (v.mb) }}>
                                                {v.name}
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", fontWeight: "550", color: "#0e8ce4" }}>
                                                {v.sale}
                                            </Typography>
                                            <Typography sx={{ fontSize: "14px", mt: "8px" }}>
                                                {v.text}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ width: "auto", height: "100%" }}>
                                        <img src={v.rasm} alt="" style={{ width: "100%", height: "100%" }} />
                                    </Box>

                                </Box>

                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{}} className="rasmm">
                <Box sx={{ background: "rgba(203, 225, 238, 0.3)", p: "60px 0" }}>

                    <Container >
                        <Box >
                            <Box>
                                <Grid container spacing={0}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={6}>
                                            <Grid item lg={3} md={3} sm={12} xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Box sx={{ width: "100%", height: "auto ", }}>
                                                    <Typography sx={{ fontSize: "36px", fontWeight: "600", lineHeight: "1.2", width: { lg: "150px", md: "150px", sm: "100%", xs: "100%" } }}>Trends 2018</Typography>
                                                    <Typography sx={{ mt: "25px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing Donec et.</Typography>
                                                    <Typography sx={{ mt: "50px" }}><Link href='#' sx={{ fontSize: "12px", textDecoration: "none", cursor: "pointer", }}></Link></Typography>
                                                </Box>

                                            </Grid>
                                            <Grid item lg={9} md={9} sm={12} xs={12}>

                                                <Grid container spacing={0}>
                                                    <Carousel breakPoints={breakPoints3} autoPlaySpeed={10000}>
                                                        {MAx.map((v) => (
                                                            <Grid item xs={12} sx={{ p: "10px", }}>
                                                                <Box sx={{ width: "100%", height: "320px", background: (v.ran), borderRadius: "10px", backgroundColor: "white", p: "25px" }}>
                                                                    <Box sx={{ height: "212px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                                        <Typography sx={{ display: "flex", justifyContent: "center", }}>
                                                                            <img src={v.rasm} alt="" style={{ width: "100%", }} />
                                                                        </Typography>
                                                                    </Box>
                                                                    <Typography sx={{ fontSize: "12px", textAlign: "start", mt: "20px" }}>
                                                                        {v.smart}
                                                                    </Typography>
                                                                    <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "17px", fontWeight: "700" }}>
                                                                        <Typography>Jump White</Typography>
                                                                        <Typography>$379</Typography>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>

                                                        ))}
                                                    </Carousel>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Box sx={{ p: "80px 0" }}>
                <Container>
                    <Box sx={{ width: "100%", height: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                        <Typography sx={{ fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "0" }, color: "#000000", fontWeight: "600" }}>Latest Reviews</Typography>
                        <Box sx={{ display: "flex" }}>
                            <Link href='#' sx={{ fontSize: "14px", textDecoration: "none" }}>View All Reviews</Link>
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", height: "1px", background: "#dadada", m: "5px 0 25px" }}></Box>

                    <Grid container spacing={2}>
                        <Carousel breakPoints={breakPoints31} autoPlaySpeed={10000}>
                            {Kerak1.map((v) => (
                                <Grid item xs={11.5}>
                                    <Box sx={{ width: "100%", height: "auto", background: "white", p: "25px", borderRadius: "8px" }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={5} >
                                                <Box sx={{ width: "100%", height: "100%", p: "5px" }}>
                                                    <img src={v.img} alt="" style={{ width: "100%", height: "100%" }} />
                                                </Box>

                                            </Grid>
                                            <Grid item xs={7}>
                                                <Typography sx={{ fontSize: "16px", mb: "5px", mt: "10px", fontWeight: "600", color: "black" }}>{v.satr}</Typography>
                                                <Typography sx={{ fontSize: "12px ", mb: "10px" }}>{v.nomi}</Typography>


                                                <Box sx={{ display: "flex", mt: "10px", }}>
                                                    <Typography sx={{ fontSize: "13px" }}>{v.chekirma} </Typography>
                                                    <Typography sx={{ fontSize: "13px", mt: "2px", ml: "15px" }}>{v.asl}</Typography>
                                                </Box>

                                            </Grid>
                                        </Grid>
                                    </Box>

                                </Grid>
                            ))}
                        </Carousel>
                    </Grid>

                </Container>
            </Box>
            <Box sx={{ p: "80px 0", background: "#eff6fa" }}>
                <Container>
                    <Box sx={{ width: "100%", height: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                        <Typography sx={{ fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "0" }, color: "#000000", fontWeight: "600" }}>Latest Reviews</Typography>
                        <Box sx={{ display: "flex" }}>

                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", height: "1px", background: "#dadada", m: "5px 0 25px" }}></Box>

                    <Grid container spacing={2}>
                        <Carousel breakPoints={breakPoints32} autoPlaySpeed={10000}>
                            {Kerak1.map((v) => (
                                <Grid item xs={10.5}>
                                    <Box sx={{ width: "100%", height: "auto", background: "white", p: "25px", borderRadius: "8px" }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", }} >
                                                <Box sx={{ width: "115px", height: "115px", p: "5px", }}>
                                                    <img src={v.img} alt="" style={{ width: "100%", height: "100%" }} />
                                                </Box>

                                            </Grid>
                                            <Grid item xs={12} >
                                                <Typography sx={{ fontSize: "16px", mb: "5px", mt: "10px", fontWeight: "600", color: "black", textAlign: "center" }}>{v.narx}</Typography>
                                                <Typography sx={{ fontSize: "13px", mb: "5px", mt: "10px", fontWeight: "500", color: "black", textAlign: "center" }}>{v.satr}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>

                                </Grid>
                            ))}
                        </Carousel>
                    </Grid>

                </Container>
            </Box>
            <Box id='Homedgfawfv' sx={{
                margin: '90px 0'
            }}>
                <Container>
                    <div>
                        <div>
                            <Carousel breakPoints={breakPoints54} style={{
                                border: 'solid 1px #e8e8e8',
                                boxShadow: '0px 1px 5px rgb(0 0 0 / 10%)',
                                padding: '0 30px'
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg1} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg2} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg3} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg4} width={'112px'} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg5} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg6} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg7} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg8} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg1} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg2} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg3} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg4} width={'112px'} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg5} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg6} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }}>
                                    <Typography>
                                        <img src={HomCarPasImg7} />
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', height: '130px' }} >
                                    <Typography>
                                        <img src={HomCarPasImg8} />
                                    </Typography>
                                </Box>
                            </Carousel>
                        </div>
                    </div>
                </Container>
            </Box>


        </Box >
    )
}

export default Home