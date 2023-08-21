import React, {useState} from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList, Spinner} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({onSelectSortOrder}: Props) => {
  const [currentOrder, setCurrentOrder] = useState('')
  const sortOrders = [
    {value: '', label: 'Relevance'},
    {value: '-added', label: 'Date added'},
    {value: 'name', label: 'Name'},
    {value: '-released', label: 'Release date'},
    {value: '-metacritic', label: 'Popularity'},
    {value: '-rating', label: 'Average rating'},
  ]

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown/>}
      >Order by: {currentOrder ? currentOrder : 'Relevance'}</MenuButton>
      <MenuList>
        {sortOrders.map(order => <MenuItem
          key={order.value}
          value={order.value}
          onClick={() => {
            onSelectSortOrder(order.value);
            setCurrentOrder(order.label)
          }}
        >{order.label}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default SortSelector;