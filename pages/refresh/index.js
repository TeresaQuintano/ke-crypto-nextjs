import Layout from '../../components/shared/Layout';

function Refresh() {

  return (

      <section className='p-to-do'>
        <p>Refresh Page Content</p>
      </section>

  )
}
export default Refresh
Refresh.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
