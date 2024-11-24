import Pagina from '@/components/template/Pagina';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = (props: any) => {
  return <Pagina>{props.children}</Pagina>;
};

export default Layout;
