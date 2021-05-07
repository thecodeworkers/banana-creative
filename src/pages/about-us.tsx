import React from 'react'
import { wrapper } from '@store'
import { AboutUs } from '@components'
import { getPages } from '@store/actions'

const AboutUsPage = () => {

  return (
    <AboutUs />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('aboutPage', 'aboutUs'))
)

export default AboutUsPage
