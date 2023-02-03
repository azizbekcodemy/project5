import { Box, Grid, Link, Typography } from '@mui/material'
import { borderRadius } from '@mui/system'
import React from 'react'
import { salom } from '..'
import rasm1 from "../../imgs/featured_1.png"
function Caro() {
    return (
        <Box sx={{display: "flex",}}> 
            <Grid container spacing={0} sx={{display: "flex",}}>
                {salom.map((v) => (
                    <Grid item xs={12} >
                        <Link href='#' sx={{
                            width:"100%",
                            height: "230px",
                            textAlign: "center",
                            // p: "8px",
                            position: "relative",
                            transition: "ease all 0.2s",
                            width: { xl: "100%", lg: "90%", md: "90%", sm: "90%", xs: "100%" },
                            display: "flex",
                            justifyContent: "center",
                            cursor: "pointer",
                            "&:hover": {
                                cursor: "-moz-grab",
                                transform: " scale(1.1)",
                                boxShadow: "0px 10px 25px rgb(0 0 0 / 10%)"
                            },
                            textDecoration: "none"
                        }}>
                            <Box sx={{ position: "absolute" }} href='#' >
                                <Typography sx={{ position: "sticky" }}>
                                    <img src={v.rasm} alt=" " style={{ width: "80%", }} />
                                    <Typography sx={{ width: "35px", height: "35px", background: "red", position: "absolute", borderRadius: "50%", mt: "-100px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "12px", color: "white" }}>
                                        -25%
                                    </Typography>
                                </Typography>
                                <Typography sx={{ textAlign: "center", mt: "15px" }}>
                                    <span style={{ fontSize: "16px", color: "#df3b3b", fontWeight: "600" }}>{v.aksiya}</span> <span style={{ fontSize: "12px" }}> {v.narx}</span>
                                </Typography>
                                <Link href='#' sx={{ textDecoration: "none", cursor: "pointer", fontFamily: "", fontSize: "14px", }}>
                                  {v.madel}
                                </Link>
                            </Box>
                            <Box sx={{ opacity: "0", "&:hover": { opacity: "1" }, width: "100%", height: "100%", alignItems: "end", display: "flex" }}>
                                <Box sx={{ width: "100%", height: "40px", background: "#007bff", borderRadius: "0 0 5px 5px ", color: "white", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                    <Typography >Add to Cart</Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Caro