import React, {useContext} from 'react'
import SelectMenuList from './SelectMenuList'
import {MenuContext} from './SelectMenuModal'

const SelectMenuTabPanel = ({tabName, items}) => {
  const menuContext = useContext(MenuContext);
  React.useEffect(() => {
    if (menuContext.selectedTab === tabName){
      menuContext.setItems(items)
    }
  }, [menuContext.selectedTab])

  return (
    <SelectMenuList hasTabs hidden={menuContext.selectedTab !== tabName} items={items}/>
  )
}

export default SelectMenuTabPanel