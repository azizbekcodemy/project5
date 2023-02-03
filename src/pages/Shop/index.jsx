import React from 'react'
import { Box, Container, Grid, Link, Typography } from "@mui/material"
import Slider from '@mui/material/Slider';
import shopimg from "./imgs/shop_background.jpg"
import { ShopCate, ShopLin, ShopTavar } from '../../assents/shopmap/shopmep'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaHeart } from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import "./style.css"


import HomCarPasImg1 from '../../assents/imgs/brands_1.jpg.webp'
import HomCarPasImg2 from '../../assents/imgs/brands_2.jpg.webp'
import HomCarPasImg3 from '../../assents/imgs/brands_3.jpg.webp'
import HomCarPasImg4 from '../../assents/imgs/brands_4.jpg.webp'
import HomCarPasImg5 from '../../assents/imgs/brands_5.jpg.webp'
import HomCarPasImg6 from '../../assents/imgs/brands_6.jpg.webp'
import HomCarPasImg7 from '../../assents/imgs/brands_7.jpg.webp'
import HomCarPasImg8 from '../../assents/imgs/brands_8.jpg.webp'  
import Carousel from 'react-elastic-carousel'
import { Kerak1 } from '../../assents/homemap';


const breakPoints32 = [
  { width: 100, itemsToShow: 1, showArrows: false },
  { width: 550, itemsToShow: 2, showArrows: false },
  { width: 768, itemsToShow: 6, showArrows: false },
  { width: 1200, itemsToShow: 5, showArrows: false },
];



const breakPoints54 = [
  { width: 1, itemsToShow: 2 },
  { width: 300, itemsToShow: 4 },
  { width: 600, itemsToShow: 6 },
  { width: 900, itemsToShow: 8 },
  { width: 1100, itemsToShow: 8 },
];


function valueLabelFormat(value) {

    let unitIndex = 0;
    let scaledValue = value;

    while (scaledValue >= 1000) {
        unitIndex += 1;
        scaledValue /= 10;
    }

    return `${scaledValue}`;
}

function calculateValue(value) {
    return 2 ** value;
}



function Shop() {
    const [age, setAge] = React.useState('');

    const handleChangee = (event) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState(10);

    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };
    return (
        <>
            <Box sx={{
                width: "100%",
                height: "260px",
                position: "relative"
            }}>
                <Box sx={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}>
                    <img src={shopimg} alt="" style={{
                        width: "100%",
                        height: "100%",
                    }} />
                </Box>
                <Box sx={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(rgb(255, 255, 255), rgb(205, 228, 241))",
                    opacity: "0.9",
                }}>
                </Box>
                <Box className='shop_name'>
                    <Typography variant='h2' sx={{ fontSize: "45px" }}>
                        Smartphones & Tablets
                    </Typography>
                </Box>

            </Box>
            <Box sx={{
                background: "rgb(255, 255, 255)",
                paddingTop: "80px",
                paddingBottom: "139px",
            }}>
                <Grid container justifyContent="center"  >
                    <Grid item xs={11} lg={2.5} md={3.5} sm={11} xl={2} >
                        <Box sx={{
                            width: "100%",
                            // transform:" translateX(-37px)" , 
                            marginBottom: "80px"
                        }}>
                            <Box>
                                <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                                    Categories
                                </Typography>
                                <Box sx={{ paddingTop: "37px" }}>
                                    {ShopCate.map((val, v) => (
                                        <Typography key={v} sx={{ marginBottom: "7px" }}>
                                            <Link sx={{
                                                textDecoration: "none", color: "rgba(0, 0, 0, 0.5)", display: "block", fontSize: "14px", fontWeight: "500px",
                                                "&:hover": { color: "#0e8ce4" }
                                            }}>
                                                {val.name}
                                            </Link>
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: "45px" }}>
                                <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                                    Filter By
                                </Typography>
                                <Typography sx={{ fontSize: "14px", fontWeight: 600, marginTop: "25px" }}>
                                    Price
                                </Typography>
                                <Box sx={{ marginTop: "28px" }}>
                                    <Box sx={{ width: 195 }}>
                                        <Slider
                                            value={value}
                                            min={1}
                                            step={1}
                                            max={30}
                                            scale={calculateValue}
                                            getAriaValueText={valueLabelFormat}
                                            valueLabelFormat={valueLabelFormat}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="non-linear-slider"
                                        />
                                        <Typography id="non-linear-slider" gutterBottom sx={{
                                            fontSize: "12px",
                                            color: "rgba(0, 0, 0, 0.5)",
                                            marginBottom: "0px",
                                            fontWeight: 600
                                        }}>
                                            Range: $0-${valueLabelFormat(calculateValue(value))}
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>
                            <Box sx={{ marginTop: "27px" }}>
                                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                                    Color
                                </Typography>
                                <Box sx={{ marginTop: "14px" }}>
                                    <Typography className='color' sx={{ background: "#b19c83", }}></Typography>
                                    <Typography className='color' sx={{ background: "#000000", }}></Typography>
                                    <Typography className='color' sx={{ background: "#999999", }}></Typography>
                                    <Typography className='color' sx={{ background: "#0e8ce4", }}></Typography>
                                    <Typography className='color' sx={{ background: "#df3b3b", }}></Typography>
                                    <Typography className='color' sx={{ background: "#ffffff", border: "solid 1px #e1e1e1" }}></Typography>
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: "27px" }}>
                                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                                    Brands
                                </Typography>
                                <Box sx={{ paddingTop: "12px" }}>
                                    {ShopLin.map((val, v) => (
                                        <Typography key={v} sx={{ marginBottom: "7px" }}>
                                            <Link sx={{
                                                textDecoration: "none", color: "rgba(0, 0, 0, 0.5)", display: "block", fontSize: "14px", fontWeight: "500px",
                                                "&:hover": { color: "#0e8ce4" }
                                            }}>
                                                {val.name}
                                            </Link>
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={11} lg={7.5} md={8} sm={11} xl={6} sx={{ textAlign: "center", }}>
                        <Box sx={{ width: "100%" }}>
                            <Box sx={{
                                borderBottom: "1px solid rgb(218, 218, 218)",
                                paddingBottom: "14px",
                                height: "35px"
                            }}>
                                <Box>
                                    <Typography sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        float: "left"
                                    }}>
                                        <span style={{ color: "rgb(14, 140, 228)" }}>186</span>
                                        products found
                                    </Typography>
                                    <Typography sx={{
                                        float: "right"
                                    }}>
                                        <span style={{ fontSize: "14px", fontWeight: 600 }}>Sort by:</span>
                                        <FormControl className='sellet' variant="standard" sx={{ minWidth: 105, marginTop: "-20px" }}>
                                            <InputLabel sx={{ fontSize: "14px" }}>highest rated</InputLabel>
                                            <Select
                                                value={age}
                                                onChange={handleChangee}
                                                label="Age"
                                            >
                                                <MenuItem sx={{ fontSize: "14px" }} value={10}>highest rated</MenuItem>
                                                <MenuItem sx={{ fontSize: "14px" }} value={20}>name</MenuItem>
                                                <MenuItem sx={{ fontSize: "14px" }} value={30}>price</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Typography>
                                </Box>
                                <Grid container  >
                                    {ShopTavar.map((val, v) => (
                                        <Grid key={v} item xs={5.5} lg={2.4} md={2.4} sm={2.4} xl={2.4} >
                                            <Box className='shopp' sx={{
                                                width: "100%",
                                                cursor: "pointer",
                                                paddingTop: "40px",
                                                paddingBottom: "24px",
                                                textAlign: "center",
                                                marginTop: "20px",
                                                position: "relative",
                                            }}>
                                                <Box className='borderR' sx={{ width: (val.bor) }}></Box>
                                                <Typography sx={{
                                                    width: "100%",
                                                    height: "115px"
                                                }}>
                                                    <img src={val.imgg} alt="" />
                                                </Typography>
                                                <Box sx={{ width: "100%" }}>
                                                    <Typography sx={{
                                                        fontSize: "16px",
                                                        fontWeight: 600,
                                                        marginTop: "25px",
                                                        color: (val.coll)
                                                    }}>
                                                        {val.narx}
                                                        <span className='shopspan'>{val.sp}</span>
                                                    </Typography>
                                                    <Typography sx={{
                                                        marginTop: "4px",
                                                        fontSize: "14px",
                                                        fontWeight: 500,
                                                        color: "rgb(0, 0, 0)"
                                                    }}>
                                                        {val.name}
                                                    </Typography>
                                                </Box>
                                                <Box className="shopnew">
                                                    <i className='shopicon'>
                                                        <FaHeart />
                                                    </i>
                                                </Box>
                                                <Box sx={{
                                                    display: "block",
                                                    position: "absolute",
                                                    top: "33px",
                                                    left: "24px",
                                                    transition: "all 200ms ease 0s",
                                                }}>
                                                    <Typography sx={{
                                                        width: "36px",
                                                        height: "36px",
                                                        borderRadius: "50%",
                                                        color: "rgb(255, 255, 255)",
                                                        textAlign: "center",
                                                        lineHeight: "36px",
                                                        fontSize: "12px",
                                                        background: (val.col)
                                                    }}>
                                                        {val.holat}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
            <Grid container justifyContent="center"  >
                <Grid item xs={11} lg={2.5} md={3.5} sm={11} xl={2} >
                </Grid>
                <Grid item xs={11} lg={7.5} md={8} sm={11} xl={6} sx={{ textAlign: "center",marginTop:{xs:"1550px",sm:"730px",md:"-170px"}}}>
                    <Box sx={{
                        width: "100%",
                        height: "50px",
                        display: "flex"
                    }}>
                        <Box sx={{
                            width: "50px",
                            height: "100%",
                            border: "1px solid rgb(229, 229, 229)",
                            borderRadius: "5px",
                            cursor: "pointer",
                            paddingTop: "10px"
                        }}>
                            <Typography sx={{
                                fontSize: "20px",
                                color: "rgb(229, 229, 229)",
                                "&:hover": {
                                    color: "black"
                                }
                            }}>
                                <AiOutlineLeft />
                            </Typography>
                        </Box>
                        <ul className="page_nav">
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">...</a></li>
                            <li><a href="#">21</a></li>
                        </ul>
                        <Box sx={{
                            width: "50px",
                            height: "100%",
                            border: "1px solid rgb(229, 229, 229)",
                            borderRadius: "5px",
                            cursor: "pointer",
                            paddingTop: "10px"
                        }}>
                            <Typography sx={{
                                fontSize: "20px",
                                color: "rgb(229, 229, 229)",
                                "&:hover": {
                                    color: "black"
                                }
                            }}>
                                <AiOutlineRight />
                            </Typography>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
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
        </>
    )
}
export default Shop
