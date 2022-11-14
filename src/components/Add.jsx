import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'



const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})


const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip title="Add"
                onClick={(e) => setOpen(true)}
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "Calc(50% - 25px)", md: 30 }
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box 
                bgcolor={"background.default"} color={"text.primary"}
                width={400} 
                p={3} 
                height={260} 
                borderRadius={7} 
                 >
                    <Typography variant='h6' color="gray" textAlign="center">Create post</Typography>
                    <UserBox>
                        <Avatar
                            sx={{
                                width: "30px",
                                height: "30px"
                            }}
                            src={"C:/Users/LENOVO/Desktop/Some_img/IMG_7741.jpeg"}
                        />
                        <Typography variant='span' fontWeight={500}>
                            Gidado
                        </Typography>
                    </UserBox>
                    <TextField sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <VideoCameraBack color="error" />
                        <Image color="success" />
                        <PersonAdd color="secondary" />
                    </Stack>
                    <ButtonGroup fullWidth variant='contained' color='secondary'  >
                        <Button >Post</Button>
                        <Button sx={{width:"100px"}}>
                            <DateRange /> 
                            </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add