import { wrapper } from '@store';
import { getResources } from '@store/actions';
import { Loader, IndividualProject } from '../components';

const IndividualProjectPage = () => {
  return (
    <Loader>
      <IndividualProject content={''} />
    </Loader>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ store }) => store.dispatch(getResources())
// )

export default IndividualProjectPage