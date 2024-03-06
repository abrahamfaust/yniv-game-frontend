import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const list = [
  {id:1, name: 'abraham'},
  {id:2, name: 'adina'}
]

export default function SignleGame() {

  

 

  return (
    <Box>
      SingleGame
      <One/>
      <Form/>
      <Two/>
    </Box>
  )
}


const One = () => {
  const users = useQuery({
    queryKey:'users',
    queryFn:() => sleep(1000).then(() => [...list])
  })

  return(
    <Box sx={{bgcolor:'red', marginY:10}}>
    {users.isSuccess && users.data.map(user => <Typography sx={{color:'white', fontSize:24}} key={user.id}>{user.name}</Typography>)}
    </Box>

  )
}
const Two = () => {
  const users = useQuery({
    queryKey:'users',
    queryFn:() => sleep(1000).then(() => [...list])
  })

  return(
    <Box sx={{bgcolor:'blue',  marginY:10}}>
    {users.isSuccess && users.data.map(user => <Typography sx={{color:'white', fontSize:24}} key={user.id}>{user.name}</Typography>)}
    </Box>

  )
}

const Form = () => {
  const inputRef = useRef(null);

  const queryClient = useQueryClient()

  const addUser = useMutation({
    mutationFn:(userName) => sleep(1000).then(() => list.push({id:list[list.length - 1].id + 1, name:userName})),
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const handleClick = () => {
    if (inputRef.current) {
      addUser.mutate(inputRef.current.value)
    } else {
      console.log("Input ref is not available yet.");
    }
  };

  return (
    <Box>
      <TextField inputRef={inputRef} placeholder='enter text' variant='outlined' />
      <Button variant='contained' onClick={handleClick}>Add user</Button>
    </Box>
  );
};



