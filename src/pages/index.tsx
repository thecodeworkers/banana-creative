import { Loader, Home } from '../components'
import { useSelector } from 'react-redux'
import { wrapper } from '@store'
import { getPages } from '@store/actions'

const HomePage = () => {

 const state = useSelector(state => state) 

  return (
    <Loader>
      <Home />
    </Loader>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('homePage'))
)


export default HomePage