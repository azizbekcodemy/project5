import { Box, Typography } from '@mui/material'
import React from 'react'

function Req() {
  return (
    <Box >
            <Box sx={{ width: "100%", height: "auto",  p: "85px 0 0", display: "flex", justifyContent: "center", }}>
                <Box>
                    <Box sx={{ width: "770px", height: "auto", }}>
                        <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
                            Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada
                        </Typography>
                        <Typography sx={{ fontSize: "18px", color: "rgba(0,0,0,0.7)", lineHeight: "2", fontWeight: "300", mt: "30px" }}>
                            Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis ac eu nisi. In accumsan tellus ut dapibus blandit.
                        </Typography>
                        <Box className="wert" sx={{ display: "flex", justifyContent: "center" }}>
                            <Box >
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Typography className='qwer'></Typography>
                                </Box>
                                <Typography className='poll' sx={{mt:"20px"}}>
                                    Quisque sagittis non ex eget vestibulum. Sed nec ultrices dui. Cras et sagittis erat. Maecenas pulvinar, turpis in dictum tincidunt, dolor nibh lacinia lacus.
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: "550", mt: "23px", textAlign: "center" }}>
                                    Liam Neeson
                                </Typography>
                            </Box>
                        </Box>
                        <Box className='sad' sx={{ mt: "42px" }}>

                            Praesent ac magna sed massa euismod congue vitae vitae risus. Nulla lorem augue, mollis non est et, eleifend elementum ante. Nunc id pharetra magna. Praesent vel orci ornare, blandit mi sed, aliquet nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
  )
}

export default Req