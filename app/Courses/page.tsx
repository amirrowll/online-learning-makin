import Container from '@/components/container/Container'
import Courses2 from '@/Feature/courses2/Courses2'
import CoursesHeader from '@/Feature/coursesHeader/CoursesHeader'
import React from 'react'

function page() {
  return (
    <Container>
        <CoursesHeader/>
        <Courses2 />
    </Container>
  )
}

export default page