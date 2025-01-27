import Container from '@/components/container/Container'
import Questions from '@/Feature/FAQ/Questions'
import ReviewsSwiper from '@/Feature/ReviewsSwiper/ReviewsSwiper'
import Courses from '@/Feature/courses/Courses'
import DiscountCards from '@/Feature/discountCards/DiscountCards'
import Header from '@/Feature/header/Header'
import Introduction from '@/Feature/introduction/Introduction'
import React from 'react'
import Footer from '@/components/Footer/Footer'

function page() {
  return (
    <Container>
      <Header />
      <Courses />
      <DiscountCards />
      <Introduction />
      <ReviewsSwiper />
      <Questions/>
      <Footer />
    </Container>
  )
}

export default page