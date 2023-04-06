import React from 'react'
import Container from './leyouts/Container'
import Flex from './leyouts/Flex'
import Images from './leyouts/Images'
import Inputbox from './leyouts/Inputbox'
import List from './leyouts/List'
import Listitem from './leyouts/Listitem'
import Headerroun from './leyouts/Headerroun'
import Button from './leyouts/Button'
import {AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'

const Header = () => {
  return (
    <div className='bg-primary w-full'>
       <Container>
        <Flex className='flex items-center justify-between py-4'>
          <div className='flex justify-between relative gap-2'>
            <Images className='w-6/12' imgsrc='images/logo.png' />
            <AiOutlineSearch className='block sm:hidden text-white text-lg' />
            <Inputbox placeholder='Serach any things' className='hidden sm:inline-block sm:w-[250px] lg:w-[438px] py-4 rounded-[20px] px-4 border-none outline-none' />
            <Button className='absolute hidden sm:inline-block top-0 right-0 sm:py-[18px] lg:py-5 sm:px-2 lg:px-10 bg-yow text-white font-popi sm:text-sm lg:text-base font-semibold rounded-[20px]' title='Search' />
          </div>
          <div className='flex gap-x-7'>
            <div className='flex items-center gap-x-3'>
              <AiOutlineUser className='text-white' />
              <List>
                <Listitem href='about' className="hidden lg:block font-popi font-normal text-sm text-white" listitem="login"/>
              </List>
            </div>
            <div className='flex items-center'>
              <AiOutlineHeart className='text-white' />
              <Headerroun />
              <List>
                <Listitem href='about' className="hidden lg:block font-popi font-normal text-sm text-white pl-4"  listitem="Sing up"/>
              </List>
            </div>
            <div className='flex items-center'>
              <AiOutlineShoppingCart className='text-white' />
              <Headerroun />
              <List>
                <Listitem href='about' className="hidden lg:block font-popi font-normal text-sm text-white pl-4"  listitem="Cart"/>
              </List>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
   
  )
}

export default Header