import Head from 'next/head';
import Header from '../Header/index';
import Footer from '../Footer/index';

const Layout = ({ children, title, description, header=true, footer=true }) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="description" content={ description } />
            </Head>
            { header && <Header /> }
            <main>
                {children}
            </main>
            { footer && <Footer /> }
        </>
    );
};

export default Layout;
