import { wrapper } from '@store';
import { getResources } from '@store/actions';
import { Loader, Home } from '../components';

const HomePage = () => {
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