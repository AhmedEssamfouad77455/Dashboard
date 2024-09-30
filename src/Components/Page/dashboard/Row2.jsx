import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { ResponsivePie } from "@nivo/pie";
const data = [
  {
    id: "go",
    label: "go",
    value: 50,
    color: "hsl(358, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 50,
    color: "hsl(106, 70%, 50%)",
  },



];
export default function Row2() {
  const theme = useTheme();
  const itemArray = [
    {
      icon: (
        <EmailIcon
          fontSize="large"
          sx={{
            color:
              theme.palette.mode == "dark"
                ? theme.palette.secondary.dark
                : theme.palette.primary.light,
          }}
        />
      ),
      text: "Sent Email",
      percent: "12.364",
      Percentage: "18%",
    },
    {
      icon: (
        <PointOfSale
          fontSize="large"
          sx={{
            color:
              theme.palette.mode == "dark"
                ? theme.palette.secondary.dark
                : theme.palette.primary.light,
          }}
        />
      ),
      text: "Sales obtained",
      percent: "468.225",
      Percentage: "12%",
    },
    {
      icon: (
        <PersonAdd
          fontSize="large"
          sx={{
            color:
              theme.palette.mode == "dark"
                ? theme.palette.secondary.dark
                : theme.palette.primary.light,
          }}
        />
      ),
      text: "new Client",
      percent: "32.364",
      Percentage: "22%",
    },
    {
      icon: (
        <Traffic
          fontSize="large"
          sx={{
            color:
              theme.palette.mode == "dark"
                ? theme.palette.secondary.dark
                : theme.palette.primary.light,
          }}
        />
      ),
      text: "Traffic Received",
      percent: "254.654",
      Percentage: "28%",
    },
  ];
  return (
    <>
      <Box
        sx={{
         display:"grid" , 
          gridTemplateColumns:{md: "repeat(auto-fit, minmax(24%, 1fr))" , xs:"repeat(auto-fit, minmax(48%, 1fr))"},
          gap: "10px",

        }}
      >
        {itemArray.map((item, index) => {
          return (
            <Paper
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                height:"150px",
                my:2,
                borderRadius: "10px",
                

              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Stack direction={"column"} gap={1} >
                  {item.icon}
                  {item.percent}
                </Stack>
                <Typography variant="p" sx={{
                    textWrap:"wrap",
                    fontSize:"18px"
                }}>


                {item.text}
                </Typography>
              </Box>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
  
              }}>
                <Box sx={{height:"70px" , width:"70px"}}>
                <ResponsivePie
      data={data}
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
      
    
      
        enableArcLinkLabels={false}
        enableArcLabels={false}
        isInteractive={false}

    />
                </Box>
                <Box sx={{fontSize:"20px"}}>{item.Percentage}</Box>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </>
  );
}
