import * as React from 'react';
import { styled, useTheme , alpha } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';



export default function TopBar({open , handleDrawerOpen , toggleMode }) {
  function handleChange(){
    toggleMode()

  }
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
    const drawerWidth = 240;
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        variants: [
          {
            props: ({ open }) => open,
            style: {
              marginLeft: drawerWidth,
              width: `calc(100% - ${drawerWidth}px)`,
              transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            },
          },
        ],
      }));
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
      const theme = useTheme()
  return (
    <>
    <AppBar position="fixed" open={open}>
        <Toolbar
        sx={{
          display:"flex" , 
          justifyContent:"space-between"  , 
          alignItems:"center" , 
          padding: theme.spacing(1, 2)  , 
          borderRadius: 10  ,
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Stack direction={"row"}>
          {
          theme.palette.mode === "light"?   (  <IconButton onClick={toggleMode}  aria-label="add an alarm">
        <LightModeOutlinedIcon style={{color:"white"}}  fontSize="medium"/>
      </IconButton>) : (    <IconButton onClick={toggleMode}  aria-label="add an alarm">
        <DarkModeOutlinedIcon  fontSize="medium" style={{color:"white"}} />
      </IconButton>)
        }
          <IconButton  aria-label="add an alarm">
        <NotificationsNoneOutlinedIcon style={{color:"white"}}   fontSize="medium" />
      </IconButton>
          <IconButton  aria-label="add an alarm">
        <SettingsSuggestOutlinedIcon style={{color:"white"}}/>
      </IconButton>
          <IconButton  aria-label="add an alarm">
        <Person2OutlinedIcon style={{color:"white"}} fontSize="medium" />
      </IconButton>

          </Stack>

          
        </Toolbar>
      </AppBar>
      
    </>
  )
}
