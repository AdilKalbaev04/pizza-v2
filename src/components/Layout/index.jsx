import { Toolbar } from '../Toolbar';

export const Layout = ({ children }) => {
  return (
    <>
      <Toolbar />
      <main>{children}</main>
    </>
  );
};
