import Footer from '../components/Footer';
import NavBarMenu from '../components/NavBarMenu';


function RootLayout({ children, items }) {
    return (
        <>
            <NavBarMenu items={items}/>
            {children}
            <Footer />
        </>
    );
}

export default RootLayout;