import styles from "./footer.module.css";
import { theme } from 'antd';

export default function Footer() {
    const {
        token: { colorTextBase },
      } = theme.useToken();
    return (
        <div>
            <hr className={styles.hrFooterLine} />
            <div className={styles.Footer}>
                <p className={styles.webName} style={{color: colorTextBase,}}>Contact Us</p>
                <div className={styles.IconArea}> 
                    <a href="https://www.google.com/intl/zh-TW_tw/gmail/about/" target="_blank">
                        <img className={styles.icon} src="/images/mail.png" alt="twitter" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                        <img className={styles.icon} src="/images/fb.png" alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <img className={styles.icon} src="/images/ig.png" alt="instagram" />
                    </a>
                </div>
                <p className={styles.copyRight} style={{color: colorTextBase,}}>Teddy Land</p>
            </div>
            <hr className={styles.hrFooterLine2} />
        </div>
    )
}
