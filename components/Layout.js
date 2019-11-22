import Nav from './nav.js';

const layoutStyle = {
    margin: 10,
    padding: 20,
    border: '1px solid #DDD',
    boxSizing: 'border-box',
  };
  
  const Layout = props => (
    <>
       
        <div style={layoutStyle}>
        <Nav />
        {props.children}
        </div>
    </>
  );
  
  export default Layout;