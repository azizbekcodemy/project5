import React from 'react'
import { Box, Grid, Link, Typography } from "@mui/material"
import shopimg from "../Shop/imgs/shop_background.jpg"
import blo from "./img/blog_1.jpg"
import { BlogText } from '../../assents/blogMap/blogmep'

import "./style.css"
function Blog() {
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
                        Technological Blog
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                background: "rgb(255, 255, 255)",
                paddingTop: "80px",
                paddingBottom: "100px",
            }}>
                <Grid container justifyContent="center" spacing={6}>
                    <Grid item xs={11.7} lg={10} md={11} sm={11.5} xl={7.2} >
                        <Grid container justifyContent="center" spacing={3}>
                            {BlogText.map((val, v) => (
                                <Grid key={v} item xs={11} lg={4} md={4} sm={5.5} xl={4} >
                                    <Box className='blog'>
                                        <img src={val.cart} alt="" style={{ width: "100%", height: "160px", borderRadius: "5px 5px 0 0", boxShadow: "rgb(0 0 0 / 10%) 0px 5px 20px" }} />
                                        <Typography sx={{
                                            padding: "21px 21px 21px",
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            width: "100%"
                                        }}>
                                            {val.text}
                                        </Typography>
                                        <Box className='blog_haver'>
                                            <Link sx={{
                                                color: "rgb(255, 255, 255)",
                                                lineHeight: "48px",
                                                fontSize: "18px",
                                                textDecoration: "none"
                                            }}>
                                                Continue Reading
                                            </Link>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}
export default Blog