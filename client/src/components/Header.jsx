import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = ({
    title,
    subTitle
}) => {
    const theme = useTheme()
    return (
        <Box>
            <Typography
                variant='h2'
                color={theme.palette.secondary[100]}
                sx={{ mb: '5px' }}
                // fontFamily={'bold'}
            >
                {title}
            </Typography>
            <Typography
                variant='h5'
                color={theme.palette.secondary[300]}

            >
                {subTitle}
            </Typography>
        </Box>
    )
}

export default Header