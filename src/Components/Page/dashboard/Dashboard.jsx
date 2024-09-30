import { Button, Container, Paper, Stack, useTheme } from '@mui/material'
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import { PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Row4 from './Row4';
export default function Dashboard() {
  const theme = useTheme() ; 

  return (
    <Container>
    <Row1/>
    <Row2/>
    <Row3/>
    <Row4/>
   

      

      
    </Container>
  )
}
