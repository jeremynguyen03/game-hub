import React from "react";
import {HStack, Image, Text} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onInputSearch: (searchText: string) => void;
}

const NavBar = ({onInputSearch}: Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px'/>
      <SearchInput onInputSearch={onInputSearch}/>
      <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar;