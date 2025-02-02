
import React from 'react'
import MenuOptions from '@/components/sidebar'
type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
        <MenuOptions/>
  
    <div className="flex items-center justify-center h-screen w-full">
      {children}
    </div>
    </div>
  )
}

export default Layout