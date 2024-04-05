import { Box, Snackbar } from '@mui/material'

export const SnackBar = (props: any) => {
    const { vertical, horizontal, open, handleClose } = props
    return (
        <Box sx={{ width: 500 }}>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message="I love snacks"
                key={vertical + horizontal}
            />
        </Box>
    )
}