import React from 'react'
// import profileImage from './assets/profile.png'
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material'
import { useDispatch } from 'react-redux'
import FlexBetween from './FlexBetween'

import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined
} from '@mui/icons-material'
import { setMode } from 'state'
const NavBar = ({
    setIsSidebarOpen,
    isSidebarOpen
}) => {
    const dispatch = useDispatch()
    const theme = useTheme()
    return (
        <AppBar
            sx={{
                position: 'static',
                background: 'none',
                boxShadow: 'none',
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }} >
                {/* left */}
                <FlexBetween>
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <MenuIcon />
                    </IconButton>
                    <FlexBetween
                        backgroundColor={theme.palette.background.alt}
                        borderRadius="9px"
                        gap="3rem"
                        p="0.1rem 1.5rem"
                    >
                        <InputBase placeholder='Search ...' />
                        <IconButton >
                            <Search />
                        </IconButton>
                    </FlexBetween>

                </FlexBetween>
                {/* right */}

                <FlexBetween
                    gap={'1.rem'}
                >
                    <IconButton onClick={() => dispatch(setMode())}>
                        {
                            theme.palette.mode == 'dark' ? (
                                <DarkModeOutlined sx={{ fontSize: '25px' }} />
                            ) : (
                                <LightModeOutlined sx={{ fontSize: '25px' }} />
                            )
                        }
                    </IconButton>
                    <IconButton >
                        <SettingsOutlined sx={{ fontSize: '25px' }} />
                    </IconButton>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar