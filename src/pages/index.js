import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';

export default function Index() {
  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <h1>About Us</h1>
    </Main>
  );
}
