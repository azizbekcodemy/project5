import React from 'react'
import { Box, Grid, Link, Typography,Button } from "@mui/material";
import cardi from "./shopping_cart.jpg"
import { CardN } from '../../assents/cardmap/cardmep';

function Card() {
    return (
        <>
            <Grid container justifyContent="center" spacing={0}>
                <Grid item xs={11.1} lg={8} md={9} sm={11} xl={6} >
                    <Typography sx={{
                        fontSize: "30px",
                        fontWeight: 600
                    }}>
                        Shopping Cart
                    </Typography>
                    <Box sx={{ marginTop: "67px" }}>
                        <Box sx={{
                            border: "1px solid rgb(232, 232, 232)",
                            boxShadow: "rgb(0 0 0 / 10%) 0px 1px 5px",
                            padding:"16px"
                        }}>
                            <Grid container justifyContent="center" spacing={0}>                             
                                <Grid item xs={12} lg={2} md={3} sm={12} xl={2} >
                                  <img src={cardi} alt="" style={{width:"133px",height:"133px"}}/>
                                </Grid> 
                                {CardN.map((val, v) => (
                                <Grid key={v} item xs={12} lg={2} md={val.md} sm={val.sn} xl={2} >
                                   <Box sx={{
                                    width:(val.wd),
                                    marginTop:{xl:"25px",lg:"25px",md:"25px",sm:"25px",xs:"25px"},
                                    textAlign:(val.ri),
                                    display:"flex"
                                   }}>
                                    <Typography sx={{
                                         fontSize: "14px",
                                         fontWeight: 500,
                                         color:"rgba(0, 0, 0, 0.5)"
                                    }}>
                                       {val.name}
                                    </Typography>
                                    <Typography sx={{
                                        fontSize:{xl:"18px",lg:"18px",md:"18px",sm:"18px",xs:"13px"},
                                        marginTop:{xl:"35px",lg:"35px",md:"35px",sm:"35px",xs:"-6px"},
                                        marginLeft:{xl:"0px",lg:"0px",md:"0px",sm:"0px",xs:"20px"}
                                    }}>
                                        <span style={{
                                            display: "inline-block",
                                            width: (val.wi),
                                            height: "20px",
                                            borderRadius: "50%",
                                            marginRight: (val.mg),
                                            transform:" translateY(4px)",
                                            backgroundColor:"#999999"
                                        }}></span>
                                      {val.test}
                                    </Typography>
                                   </Box>
                                </Grid>
                                ))}
                            </Grid>

                        </Box>
                        <Box sx={{
                             border: "1px solid rgb(232, 232, 232)",
                             boxShadow: "rgb(0 0 0 / 10%) 0px 1px 5px",
                             width:"100%",
                             height:"60px",
                             paddingRight:"46px",
                             paddingLeft:"15px",
                             marginTop:"37px"
                        }}>
                            <Box sx={{textAlign:{xl:"right",lg:"right",md:"right",sm:"right",xs:"start"}}}>
                              <Typography sx={{
                                 fontSize: "14px",
                                 fontWeight: 500,
                                 color:"rgba(0, 0, 0, 0.5)",
                                 lineHeight:"60px",
                                 display:"inline-block"
                              }}>
                              Order Total:
                              </Typography>
                              <Typography sx={{
                                 fontSize: "18px",
                                 fontWeight: 600,
                                 lineHeight:"60px",
                                 marginLeft:"26px",
                                 display:"inline-block"
                              }}>
                              $2000
                              </Typography>
                            </Box>
                        </Box>
                        <Box sx={{marginTop:"60px",textAlign:{xl:"right",lg:"right",md:"right",sm:"right",xs:"start"}}}>
                           <Button sx={{
                            display: "inline-block",
                            fontSize: {xl:"16px",lg:"16px",md:"16px",sm:"16px",xs:"14px"},
                            fontWeight: 400,
                            lineHeight: {xl:"38px",lg:"38px",md:"38px",sm:"38px",xs:"18px"},
                            background: "#FFFFFF",
                            border:" solid 1px #b2b2b2",
                            paddingLeft: "26px",
                            paddingRight: "26px",
                            cursor: "pointer",
                            marginRight: "26px",
                            borderRadius:"5px",
                            color:"#b2b2b2",
                            "&:hover":{
                                borderColor: "#0e8ce4",
                                color: "#0e8ce4",
                            }
                           }}>
                             Add to Cart
                           </Button>
                           <Button sx={{
                            display: "inline-block",
                            fontSize: {xl:"16px",lg:"16px",md:"16px",sm:"16px",xs:"14px"},
                            fontWeight: 400,
                            lineHeight: {xl:"38px",lg:"38px",md:"38px",sm:"38px",xs:"19px"},
                            background: "#0e8ce4",
                            border:"none",
                            paddingLeft: "26px",
                            paddingRight: "26px",
                            cursor: "pointer",
                            borderRadius:"5px",
                            color:"#ffff",
                          
                           }}>
                             Add to Cart
                           </Button>
                        </Box>
                    </Box>

                </Grid>
            </Grid>

        </>
    )
}
export default Card