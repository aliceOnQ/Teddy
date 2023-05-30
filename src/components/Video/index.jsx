import styles from "./video.module.css";
import { Button, Carousel } from 'antd';
import { RightOutlined, LeftOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useRef } from "react";
import { Row, Col } from "antd";
import { theme } from 'antd';


export default function Video({ video }) {
    const ref = useRef();
    const ref2 = useRef();
    const {
        token: { colorTextBase },
    } = theme.useToken();

    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
    };
    return (

        <div className={styles.layout}>
            
            
        </div>

    )
}
