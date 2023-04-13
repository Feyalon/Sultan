import { render, screen } from '@testing-library/react';
import App from './../App';
import { create } from "react-test-renderer";
import { AdminPanel } from './../pages/adminpanel/AdminPanel';
import { Basket } from './../pages/basket/Basket';
import { NotFound } from './../pages/notFound/NotFound';
import { SinglePageProduct } from './../pages/singlePageProduct/SinglePageProduct';
import { Purschase } from './../pages/purschase/Purschase';
import EditUser from './../pages/editPage/Edit';
import {

  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";


describe('Routes', () => {
  test('renders correct component based on route', () => {
    let renderer = create(
        <MemoryRouter initialEntries={["/adminpanel/", "/"]}>
            <Routes>
                <Route path="/adminpanel/" element={<AdminPanel />} />
                <Route path="/" element={<App />} />
            </Routes>
        </MemoryRouter>
      );
  
      expect(renderer.toJSON()).toMatchSnapshot();
  });
  test('renders Basket', () => {
    let renderer = create(
        <MemoryRouter initialEntries={["/basket/", "**"]}>
            <Routes>
                <Route path="/basket/" element={<Basket />} />
                <Route path="**" element={<NotFound />} />
            </Routes>
        </MemoryRouter>
      );
  
      expect(renderer.toJSON()).toMatchSnapshot();
  });
  test('renders Edit', () => {
    let renderer = create(
        <MemoryRouter initialEntries={["/purschase", "/editPage"]}>
            <Routes>
                <Route path="/purschase" element={<Purschase />} />
                <Route path="/editPage" element={<EditUser />} />
            </Routes>
        </MemoryRouter>
      );
  
      expect(renderer.toJSON()).toMatchSnapshot();
  });
})