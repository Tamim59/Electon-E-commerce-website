import React from 'react'
import Flex from './Flex'
import {GoLocation} from 'react-icons/go'
import {MdDirectionsTransit} from 'react-icons/md'
import Container from './Container'

const Topheader = () => {
  return (
    <Container>
          <Flex className='sm:flex sm:justify-between pb-1 sm:pb-3 md:pb-5 lg:pb-7'>
            <div className='pb-2 sm:pb-0'>
                <p className='font-popi text-textdk font-normal text-sm'>
                  Need help? Call us: (+98) 0234 456 789
                </p>
            </div>
            <div className='flex gap-x-5 sm:gap-x-9'>
                <diV className='flex gap-x-3 sm:gap-x-5 items-center'>
                    <GoLocation className='text-base' />
                    <p className='font-popi text-textdk font-normal text-sm'>Our store</p>
                </diV>
                <diV className='flex gap-x-3 sm:gap-x-5 items-center'>
                    <MdDirectionsTransit className='text-base' />
                    <p className='font-popi text-textdk font-normal text-sm'>Track your order</p>
                </diV>
            </div>
        </Flex>
    </Container>
      
  )
}

export default Topheader