import { Box, Paper, Typography, useTheme } from '@mui/material'
import PieChart from '../Pie/PieChart';
import Bar from '../Bar/Bar';
import Goa from '../Goagraphy/Goa';

export default function Row4() {
    const theme = useTheme();
  return (
    <>
    <Box
        sx={{
         display:"grid" , 
          gridTemplateColumns:{md: "repeat(auto-fit, minmax(32%, 1fr))" , xs:"repeat(auto-fit, minmax(48%, 1fr))"},
          gap: "10px",
          my:2

        }}
    >
    
    <Paper >
   <Typography variant="h6"
   
   color={theme.palette.mode == "dark"
                ? theme.palette.secondary.dark
                : theme.palette.primary.light}
   sx={{padding:"30px 30px 0 30px "}}
   fontWeight={"600"}
   >
   Campaign

   </Typography>
    <PieChart isDashBoard={true}/>
    <Typography variant="p" align="center" sx={{mt:"15px"}} >
    $48,352 revenue generated

    </Typography>
    <Typography variant="body2" align="center" px={0.7} pb={3} >
   Includes extra misc expenditure ans costs

    </Typography>

    </Paper>
    <Paper  sx={{
      display:"flex" ,
      flexDirection:"column" , 
      justifyContent:"space-between"

    }} >
      <Typography variant="h5" color={
          theme.palette.mode == "dark"
                ? theme.palette.secondary.dark
                : theme.palette.primary.light
        }
        fontWeight="600"
        sx={{padding:"30px 30px 0 30px"}}
        >

        Sale Quantity
      

      </Typography>
        <Bar isDashBoard={true} />

    </Paper>
    <Paper sx={{
      display:"flex" ,
      flexDirection:"column" ,

      justifyContent:"space-between"
    }} >
    <Typography variant="h5" color={
            theme.palette.mode == "dark"
                ? theme.palette.secondary.dark
                : theme.palette.primary.light
        }
        fontWeight="600"
        sx={{padding:"30px 30px 0 30px"}}
        >

Geographic map
      

      </Typography>

      <Goa isDashBoard={true} />
    </Paper>
    </Box>
    

      
    </>
  )
}
