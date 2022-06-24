import Layout from '../../components/shared/Layout';

function Card() {

  return (

      <section className='p-to-do'>
        <p>Card Page Content</p>
      </section>

  )
}
export default Card
Card.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
