import Container from '@/components/container/Container'

import Header from '@/Feature/header/Header'

import Questions from '@/Feature/FAQ/Questions'
import ReviewsSwiper from '@/Feature/ReviewsSwiper/ReviewsSwiper'
import React from 'react'

function page() {
  return (
    <Container>
      <Header />
     

      <ReviewsSwiper />
      <Questions/>

    </Container>
  )
}

export default page