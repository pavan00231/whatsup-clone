import { Box, InputBase, Modal } from '@mui/material'
import React from 'react'

const AddNewUser = ({ userName,setUserName,open, handleClose, createUser}) => {



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
                <h2 id="parent-modal-title" style={{textAlign:'center'}}>Add New User</h2>
                <div>
                    <InputBase style={{
                            width: "100%",
                            padding: '20px',
                            height: '20px',
                            fontSize: '14px',
                            border: '1px solid',
                            borderRadius: '10px',
                            marginBottom: '35px',
                            marginTop: '25px'
                    }} value={userName} onChange={(e)=>setUserName(e.target.value)} />
                </div>
                <div id="parent-modal-description" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <button style={{

                        height: '40px',
                        width: '120px',
                        marginRight: '20px'
                    }}  onClick={()=>createUser()}>Create</button>

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

export default AddNewUser