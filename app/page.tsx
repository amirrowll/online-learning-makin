import Container from '@/components/container/Container'

import Courses from '@/Feature/courses/Courses'
import DiscountCards from '@/Feature/discountCards/DiscountCards'
import Header from '@/Feature/header/Header'
import Introduction from '@/Feature/introduction/Introduction'
import Questions from '@/Feature/FAQ/Questions'
import ReviewsSwiper from '@/Feature/ReviewsSwiper/ReviewsSwiper'

import React from 'react'

function page() {
  return (
    <Container>
      <Header />

      <Courses />
      <DiscountCards />
      <Introduction />

     

      <ReviewsSwiper />
      <Questions/>


    </Container>
  )
}

export default page