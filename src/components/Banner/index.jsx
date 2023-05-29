import { Carousel } from 'antd';
import styles from "./banner.module.css";

const Banner = () => (
    <div className={styles.banner}>
        <Carousel autoplay>
            <div>
            <img className={styles.img} src="/images/banner-1.jpeg" />
            </div>
            <div>
            <img className={styles.img} src="/images/banner-2.jpg" />
            </div>
            <div>
            <img className={styles.img} src="/images/banner-3.jpg" />
            </div>
        </Carousel>
    </div>
);
export default Banner;

