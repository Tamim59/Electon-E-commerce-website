import React from 'react'
import Container from './leyouts/Container'
import Flex from './leyouts/Flex'

const Navbar = () => {
  return (
    <Container>
      <Flex className='flex justify-between'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Flex>
    </Container>
  )
}

export default Navbar