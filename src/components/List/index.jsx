import styles from "./List.module.css";
import { theme } from 'antd';

export default function list(){
    const {
        token: { colorTextBase },
      } = theme.useToken();
    
    return(
        <div className={styles.layout}>
            <h1 className={styles.title} style={{color: colorTextBase,}}>OLD TEDDY BEARS</h1>
        </div>
    )
}
