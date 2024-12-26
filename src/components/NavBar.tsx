import { HStack, Image, InputGroup, InputLeftElement, Input, Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import logo from '../assets/logo.svg'
import ColorModeSwitch from './ColorModeSwitch'

interface Props {
    onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack padding='10px' spacing={5} justify="space-between">
            <HStack spacing={5} flex={1}>
                <Image src={logo} boxSize='60px' />
                <InputGroup maxW='500px'>
                    <InputLeftElement>
                        <SearchIcon color="gray.400" />
                    </InputLeftElement>
                    <Input
                        placeholder="Search games..."
                        variant="filled"
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </InputGroup>
            </HStack>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar;