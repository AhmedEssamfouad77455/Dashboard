import { Box, Typography, useTheme } from "@mui/material"

export default function Header({text}) {
    const theme = useTheme()
  return (
    <Box sx={{my:2}}>
    <Typography variant="h5" color={theme.palette.primary.dark}> {text}</Typography>
    <Typography variant="h5" color={theme.palette.primary.light}> Welcome To {text}</Typography>
  </Box>
  )
}
