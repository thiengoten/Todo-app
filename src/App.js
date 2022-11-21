import { CheckCircleIcon, DeleteIcon } from '@chakra-ui/icons'
import {
    Input,
    InputGroup,
    InputLeftElement,
    Button,
    Text,
    Flex,
    UnorderedList,
    ListItem,
    List,
    ListIcon,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addTodo, removeTodo } from './redux/todo/TodoSlice'

function App() {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()
    const input = useRef()
    const todos = useSelector((state) => state.todos)

    const handleSummit = () => {
        dispatch(addTodo(todo))
        setTodo('')
        input.current.focus()
    }
    const handleDelete = (index) => {
        dispatch(removeTodo(index))
    }
    const handleClick = (e) => {
        console.log(e.target)
        input.current.focus()
    }
    return (
        <>
            <Text
                display='flex'
                alignItems='center'
                justifyContent='center'
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
            >
                Todo App
            </Text>
            <div className='user-input'>
                <InputGroup justifyContent='center'>
                    <InputLeftElement
                        pointerEvents='none'
                        color='gray.900'
                        fontSize='1.2em'
                        children='🤟'
                        left='29%'
                        top='3px'
                    />
                    <Input
                        placeholder='Add Item here!!'
                        _placeholder={{
                            opacity: 1,
                            color: 'white',
                        }}
                        color='teal.300'
                        borderColor='purple.200'
                        focusBorderColor='pink.400'
                        size='lg'
                        width='35%'
                        onChange={(e) => setTodo(e.target.value)}
                        value={todo}
                        ref={input}
                    />
                    <Button
                        ml='10px'
                        bgGradient='linear(to-r, teal.500, green.500)'
                        color='white'
                        _hover={{
                            bgGradient: 'linear(to-r, red.500, yellow.500)',
                        }}
                        size='lg'
                        onClick={handleSummit}
                    >
                        Add Todo
                    </Button>
                </InputGroup>
            </div>
            {todos.length > 0 ? (
                <List>
                    {todos.map((todo, index) => (
                        <ListItem
                            key={index}
                            fontSize='3xl'
                            color='teal.300'
                            className='todo-text'
                            onClick={handleClick}
                            _hover={{
                                cursor: 'pointer',
                                color: 'purple.400',
                            }}
                        >
                            {todo}
                            <DeleteIcon
                                ml='20px'
                                _hover={{
                                    cursor: 'pointer',
                                    color: 'pink.400',
                                }}
                                onClick={() => handleDelete(index)}
                            />
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Text fontSize='3xl' color='teal.300' className='todo-text'>
                    You don't have any Todo! 😲
                </Text>
            )}
        </>
    )
}

export default App
