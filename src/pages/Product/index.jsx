import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import rasm from "../../assents/imgs/single_4.jpg.webp"
import rasm1 from "../../assents/imgs/single_2.jpg.webp"
import rasm2 from "../../assents/imgs/single_3.jpg.webp"
import "./style.css"


function Product() {


  return (
    <Box>
      <Box sx={{ width: "100%", height: "80vh", mt: "80px", }}>
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
    </Box>
  )
}

export default Product