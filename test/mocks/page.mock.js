import Layout from '../../components/shared/Layout';

export const PageMock = () => {

  return (

      <section className='p-to-do'>
        <p>Settings Page Content</p>
      </section>

  )
}

PageMock.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
