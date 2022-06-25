import Layout from '../../components/shared/Layout';

function Settings() {

  return (

      <section className='p-to-do'>
        <p>Settings Page Content</p>
      </section>

  )
}
export default Settings
Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
