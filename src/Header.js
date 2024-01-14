import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from "@iconify/icons-mdi/fire-alert"

const Header = () => {
  return (
    <div className='header'>
      
        <h1> <Icon icon={locationIcon} className='header-icon'/> WILDFIRE TRACKER</h1>

      </div>
  )
}

export default Header