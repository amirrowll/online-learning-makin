import Container from '@/components/container/Container'
import Courses from '@/Feature/courses/Courses'
import DiscountCards from '@/Feature/discountCards/DiscountCards'
import Header from '@/Feature/header/Header'
import React from 'react'

function page() {
  return (
    <Container>
      <Header />
      <Courses />
      <DiscountCards />
    </Container>
  )
}

export default page