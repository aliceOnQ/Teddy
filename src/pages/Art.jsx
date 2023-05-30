import Footer from "../components/Footer";
import Header from "../components/Header";
import Text from "../components/Text";
import { Helmet } from "react-helmet-async"
import { theme } from 'antd';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MotionPage from '../components/MotionPage';


function ScrollToTopOnMount() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Art() {
    const {
        token: { colorBg, colorTextBase},
    } = theme.useToken();
    
    return (
        <MotionPage className="mainLayout">
            <ScrollToTopOnMount />
            <Helmet>
                <title>ART</title>
                <style>{`
            body { background-color: ${colorBg}; }
        `}</style>
            </Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent" >
                <div className="search">
                    <title style={{color: colorTextBase}}>IMAGINATION</title>
                </div>
                <Text/>
               
            </div>
            <Footer className="layoutFooter" />
        </MotionPage>

    )
}

export default Art;