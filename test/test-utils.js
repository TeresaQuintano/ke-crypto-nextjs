// test-utils.js
import { render } from "@testing-library/react";
import ReactDOM from 'react-dom/client';
let container;
// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }) => {
  return children;
};

const customRender = (ui, options = {}) =>
    render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

export const createContainerDom = () => {
  container = document.createElement('div');
  document.body.appendChild(container);
}

export const createContainer= (component) => {
  return  ReactDOM.createRoot(container).render(component);
}
