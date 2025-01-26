import Container from '@/components/container/Container'
import Questions from '@/Feature/FAQ/Questions'
import ReviewsSwiper from '@/Feature/ReviewsSwiper/ReviewsSwiper'
import React from 'react'

function page() {
  return (
    <Container>
     
      <ReviewsSwiper />
      <Questions/>
    </Container>
  )
}

export default page