import React from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList, Spinner} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms, {Platform} from "../hooks/usePlatforms";

interface Props {
  selectedSort: (sort: Platform) => void;
  onSelectSort: Platform | null;
}

const SortSelector = () => {
  const {data, error, isLoading} = usePlatforms();
  if (error) return null
  if (isLoading) return <Spinner/>
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown/>}
      >Order by: Relevance</MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default SortSelector;