import { Box, Modal } from '@mui/material'
import React from 'react'

const DeletePopup = ({ open, handleClose,deleteData ,item}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ width: 425 }}
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '35%',
                    background: 'white',
                    padding: '20px'
                }}>
                <h2 id="parent-modal-title" style={{textAlign:'center'}}>Do you want to delete this {item}</h2>
                <div id="parent-modal-description" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <button style={{

                        height: '40px',
                        width: '120px',
                        marginRight: '20px'
                    }}  onClick={()=>deleteData()}>Delete</button>

                    <button style={{

                        height: '40px',
                        width: '120px',
                        marginRight: '20px'
                    }} onClick={()=>handleClose()}>Cancel</button>
                </div>
                {/* <ChildModal /> */}
            </Box>
        </Modal>
    )
}

export default DeletePopup