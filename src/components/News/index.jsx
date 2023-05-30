import styles from "./news.module.css";
import { Row, Col } from "antd";
import { Carousel } from 'antd';
import { theme } from 'antd';

export default function News() {
    const {
        token: { colorTextBase },
    } = theme.useToken();
    return (
        
            <div className={styles.layout}>
                <h1 className={styles.title} 
                    style={{color:colorTextBase,}}
                >
                    公司理念
                </h1>
                <Row className={styles.newsContent} gutter={[20, 20]}>
                    <Col type="flex" justify="center" align="middle"
                        sm={{ span: 24 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                        xxl={{ span: 12 }}
                    >
                        <div className={styles.carousel}>
                           <h style={{ color: colorTextBase }}>
                           給喜愛泰迪熊的你，<br></br>
                           提供最好的泰迪熊。</h> 
                        </div>
                        
                    </Col>
                    <Col type="flex" justify="center" align="middle"
                        sm={{ span: 24 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                        xxl={{ span: 12 }}
                    >
                        <div className={styles.carousel}>
                            <Carousel autoplay autoplaySpeed={6000} fade={true} dots={false}>
                                <div>
                                    <img className={styles.newsPic} src="/images/intothenewworld.jpg" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </div>
        
    )
}

