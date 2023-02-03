import React from 'react'
import { Box, Grid, Link, Typography,Button } from "@mui/material";
import { ContactIcon } from '../../assents/contactmap/conmep';
import "./style.css"

function Contact() {
    return (
        <>
            <Grid container justifyContent="center" spacing={0}>
                <Grid item xs={11.1} lg={8} md={9} sm={11.3} xl={6} >
                    <Box sx={{ marginTop: "67px",marginBottom:"87px" }}>
                        <Grid container justifyContent="center" spacing={4}>
                            {ContactIcon.map((val, v) => (
                                <Grid key={v} item xs={12} lg={4} md={4} sm={11.3} xl={4} >
                                    <Box sx={{
                                        border: "1px solid rgb(232, 232, 232)",
                                        boxShadow: "rgb(0 0 0 / 10%) 0px 1px 5px",
                                        width: "100%",
                                        height: "100px",
                                        paddingLeft: "32px",
                                        paddingRight: "15px",
                                        paddingTop: "30px",
                                        display: "flex"
                                    }}>
                                        <Box sx={{ width: "35px", height: "35px" }}>
                                            <img src={val.icon} alt="" />
                                        </Box>
                                        <Box sx={{ paddingLeft: "17px" }}>
                                            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                                                {val.name}
                                            </Typography>
                                            <Typography sx={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.5)" }}>
                                                {val.text}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Typography sx={{
                        fontSize: "30px",
                        fontWeight: 600,
                        marginBottom: "37px",
                        paddingLeft:{xl:"0px",lg:"0px",md:"0px",sm:"25px",xs:"0px"}
                    }}>
                        Get in Touch
                    </Typography>
                    <Grid container justifyContent="center" spacing={4}>
                        <Grid  item xs={12} lg={4} md={4} sm={3.8} xl={4} >
                            <Box sx={{marginBottom:"0px"}}>
                            <input type="text" className='cotactin' placeholder="Your name"/>
                            </Box>
                        </Grid>
                        <Grid  item xs={12} lg={4} md={4} sm={3.8} xl={4} >
                            <Box sx={{marginBottom:"0px"}}>
                            <input type="text" className='cotactin' placeholder="Your email"/>
                            </Box>
                        </Grid>
                        <Grid  item xs={12} lg={4} md={4} sm={3.7} xl={4} >
                            <Box sx={{marginBottom:"0px"}}>
                            <input type="text" className='cotactin' placeholder="Your phone number"/>
                            </Box>
                        </Grid>
                        <Grid  item xs={12} lg={12} md={12} sm={11.3} xl={12} >
                            <Box sx={{marginBottom:"30px"}}>
                            <textarea className='cotactin' style={{height:"160px"}} name="message" rows="4" placeholder="Message"></textarea>
                            </Box>
                        </Grid>
                        </Grid>
                        <Box sx={{textAlign:"start",paddingLeft:{xl:"0px",lg:"0px",md:"0px",sm:"25px",xs:"0px"}}}>
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
                             Send Message
                           </Button>
                        </Box>                   
                </Grid>
            </Grid>
            <Box sx={{
                width: "100%",
                height: "50px",
                background: "rgb(250, 250, 250)",
                marginTop: "120px",
            }}></Box>
            <Box >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47955.529859584916!2d69.26172159999999!3d41.304064000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1665154251123!5m2!1sru!2s"
              width="100%" height="400px" style={{ border: 0 }} allowfullscreen=""
              loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
        </>
    )
}
export default Contact