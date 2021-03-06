import { Button, GlobalPosition, StockList } from '../../components';
import { useApp } from '../../context/AppContext';
import Layout from '../../components/shared/Layout';

export default function Dashboard() {
  let {totalAmount, hasError} = useApp();
  const renderDashboard = (
      <section className="p-dashboard">
        <GlobalPosition
            title="your balance"
            quantity={totalAmount}
        />
        <div className="p-dashboard__wrapper">
          <StockList/>
          <Button label="Show all transactions"
                  class="c-button c-button--primary"
                  id="showMore"
                  data-testid="showMore"
          />
        </div>
      </section>
  )
  const renderError = (
      <section className="p-dashboard__wrapper">
        <div className="c-list c-list--error">
          <p className="c-list--error__message">Ooops! Something is wrong.</p>
        </div>
      </section>
  )
  return (


      <main>

        {hasError ? renderError : renderDashboard}


      </main>

  )
}


Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
