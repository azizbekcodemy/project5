import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import rasm from "../../assents/imgs/single_4.jpg.webp"
import rasm1 from "../../assents/imgs/single_2.jpg.webp"
import rasm2 from "../../assents/imgs/single_3.jpg.webp"
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
import { Kerak1 } from '../../assents/homemap'


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

function Product() {


  return (
    <Box>
      <Box sx={{ width: "100%", height: "80vh", m: "80px 0", }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={2} md={2} sm={12} >
              <Box sx={{ width: "100%", height: "auto", }}>
                <Box>

                  <Box sx={{ width: "100%", height: "30%", p: "10px", border: "solid 1px #e8e8e8", boxShadow: "0px 1px 5px rgb(0 0 0 / 10%)", mb: "15px", display: "flex", justifyContent: "center", alignItems: "center" , display:{lg:"flex", md:"flex", sm:'none', xs:"none", cursor:"pointer"}}}>
                    <img src={rasm} alt="" style={{ width: "auto", height: "100%" }} />
                  </Box>
                  <Box sx={{ width: "100%", height: "30%", p: "10px", border: "solid 1px #e8e8e8", boxShadow: "0px 1px 5px rgb(0 0 0 / 10%)", mb: "15px", display: "flex", justifyContent: "center", alignItems: "center" , display:{lg:"flex", md:"flex", sm:'none', xs:"none", cursor:"pointer"}}}>
                    <img src={rasm1} alt="" style={{ width: "auto", height: "100%" }} />
                  </Box>
                  <Box sx={{ width: "100%", height: "30%", p: "10px", border: "solid 1px #e8e8e8", boxShadow: "0px 1px 5px rgb(0 0 0 / 10%)", display: "flex", justifyContent: "center", alignItems: "center" , display:{lg:"flex", md:"flex", sm:'none', xs:"none", cursor:"pointer"}}}>
                    <img src={rasm2} alt="" style={{ width: "auto", height: "100%" }} />
                  </Box>
                </Box>
                <Grid container spacing={2} sx={{ display:{lg:"none", md:"none", sm:'flex', xs:"flex"}}}>
                  <Grid item xs={4}>
                    <Box sx={{ width: "100%", height: "100%", p: "10px", border: "solid 1px #e8e8e8", boxShadow: "0px 1px 5px rgb(0 0 0 / 10%)", mb: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <img src={rasm} alt="" style={{ width: "auto", height: "100%" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ width: "100%", height: "100%", p: "10px", border: "solid 1px #e8e8e8", boxShadow: "0px 1px 5px rgb(0 0 0 / 10%)", mb: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <img src={rasm1} alt="" style={{ width: "auto", height: "100%" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>

                    <Box sx={{ width: "100%", height: "100%", p: "10px", border: "solid 1px #e8e8e8", boxShadow: "0px 1px 5px rgb(0 0 0 / 10%)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <img src={rasm2} alt="" style={{ width: "auto", height: "100%" }} />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item lg={5} md={5} sm={12}>
              <Box sx={{ width: "100%", height: "auto", }}>
                <Box sx={{ width: "100%", height: "100%", p: "20px", border: "solid 1px #e8e8e8", boxShadow: "0px 1px 5px rgb(0 0 0 / 10%)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src={rasm} alt="" style={{ width: "auto", height: "100%" }} />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={5} md={5} sm={12}>
              <Box sx={{ width: "100%", height: "auto", paddingLeft: { lg: "50px", md: "50px", sm: "0", xs: "0" } }}>
                <Box sx={{ width: "100%", height: "100%", p: "10px", }}>
                  <Typography sx={{ fontSize: "12px", color: "rgba(0,0,0,0.5)" }}>Laptops</Typography>
                  <Typography sx={{ fontSize: "30px", mt: "11px", fontWeight: "600" }}>
                    MacBook Air 13
                  </Typography>
                  <Typography sx={{ fontSize: "14px", lineHeight: "1.7", fontWeight: "500", color: "#828282", mt: "60px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum. laoreet turpis, nec sollicitudin dolor cursus at. Maecenas aliquet, dolor a faucibus efficitur, nisi tellus cursus urna, eget dictum lacus turpis.
                  </Typography>
                  <Box sx={{ width: "100%", height: "50px", borderRadius: "5px", display: "flex", justifyContent: "start", alignItems: "center", mt: "50px", }}>
                    <Grid container rowspacing={2}>
                      <Grid item lg={6} md={12} xs={12} >
                        <Box sx={{ maxWidth: "180px", border: "solid 1px #e5e5e5 ", display: "flex", borderRadius: "5px" }}>
                          <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", ml: "15px" }}>Quantity:</Typography>
                          <Typography class="qty">
                            <input type="number" name="qty" id="qty" min="1" max="10" step="1" value="1" />
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item lg={6} md={12} xs={12}>
                        <Box sx={{ maxWidth: "180px", border: "solid 1px #e5e5e5 ", display: "flex", borderRadius: "5px", height: "50px", justifyContent: "start ", alignItems: "center" }}>
                          <Typography sx={{ ml: "15px" }}>
                            Color:
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Typography></Typography>
                  </Box>
                  <Typography sx={{ fontSize: "24px", mt: "75px", fontWeight: "600", color: "black" }}>
                    $2000
                  </Typography>

                  <Button sx={{ textTransform: "capitalize", fontSize: "18px", fontWeight: "500", lineHeight: "48px", color: "white", background: "#0E8CE4", width: "170px", height: "45px", "&:hover": { background: "#0E8CE4" }, mt: "35px" }}>
                    Add to Cart
                  </Button>

                </Box>
              </Box>
            </Grid>
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
    </Box>
  )
}

export default Product