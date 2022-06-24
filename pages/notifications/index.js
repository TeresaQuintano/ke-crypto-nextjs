import Layout from '../../components/shared/Layout';

function Notifications() {

  return (

      <section className="p-to-do">
        <p>Notifications Page Content</p>
      </section>

  )
}

export default Notifications
Notifications.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
