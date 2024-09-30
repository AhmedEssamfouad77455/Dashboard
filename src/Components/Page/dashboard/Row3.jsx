import React from 'react'
import { Transactions } from "./data";
import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import LineChart from "../Line/LineChart";
import {  DownloadOutlined } from "@mui/icons-material";
export default function Row3() {
    const theme = useTheme();

  return (
    <>
        <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={1} alignItems={"center"}>

        <Paper sx={{  width:{xs:"100%" , md:"68%"} , padding:"10px" , overflow:"hidden" }} >
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"}>
    <Box>
      <Typography color={  theme.palette.mode == "dark"
                ? theme.palette.secondary.dark
                : theme.palette.primary.light} fontWeight={"bold"}  variant="h4">
      Revenue Generated
      
      </Typography>
      <Typography  fontWeight={"bold"} p={1.2} variant="h6">
      $500,000
      
      </Typography>
    </Box>
    <Box>
    <IconButton>

      <DownloadOutlined fontSize="large"/>
    </IconButton>
    </Box>

    </Stack>
    <LineChart isDashboard={true}/>
    
    </Paper>

        <Box sx={{  width:{xs:"100%" , md:"30%"} , p:1 , height:"470px" ,  overflow:"auto"}} >
    <Paper>
   
      <Typography 
      color={  theme.palette.mode == "dark"
                ? theme.palette.secondary.dark
                : theme.palette.primary.light}
      fontWeight={"bold"}
      p={1.2}
      variant="h6"
      
      >
      Recent Transactions

      </Typography>

    </Paper>



    {Transactions.map((item ,index) => {
          return (
            <Paper
            key={index}
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}

    

    </Box>

        </Stack>
      
    </>
  )
}
