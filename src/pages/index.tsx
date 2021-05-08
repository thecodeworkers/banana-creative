import { wrapper } from '@store';
import { getResources } from '@store/actions';
import { useEffect } from 'react';
import { Loader, Home } from '../components';
import { useDispatch } from 'react-redux'

const HomePage = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getResources())    
  // }, [])

  return (
    <Loader>
      <Home />
    </Loader>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default HomePage
