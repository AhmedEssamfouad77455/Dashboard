import { Button, Stack } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import Header from '../../Header';
export default function Row1() {
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
    <Header text={"Dashboard"}/>
      <Button variant='contained' sx={{
        textTransform:"capitalize",
        fontSize:"15px" , 
        px:0

      }} >
      <DownloadIcon/>
      Download Reports
        
      </Button>
    </Stack>
  )
}
