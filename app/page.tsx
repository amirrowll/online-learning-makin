import Container from '@/components/container/Container'
import Courses from '@/Feature/courses/Courses'
import DiscountCards from '@/Feature/discountCards/DiscountCards'
import Header from '@/Feature/header/Header'
import Introduction from '@/Feature/introduction/Introduction'
import React from 'react'

function page() {
  return (
    <Container>
      <Header />
      <Courses />
      <DiscountCards />
      <Introduction />
    </Container>
  )
}

export default page