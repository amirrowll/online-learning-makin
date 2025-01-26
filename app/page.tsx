import Container from '@/components/container/Container'
import Courses from '@/Feature/courses/Courses'
import Header from '@/Feature/header/Header'
import React from 'react'

function page() {
  return (
    <Container>
      <Header />
      <Courses />
    </Container>
  )
}

export default page