import styles from "./text.module.css";
import { theme } from 'antd';
import { motion } from 'framer-motion';


export default function CompanyItro() {
    const {
        token: { colorTextBase,colorTextBase3 },
    } = theme.useToken();

    const typingContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.14,
            }
        }
    }
    const typingText = {
        hidden: { opacity: 0, y: "-20px" },
        show: {
            opacity: 1,
            y: "0",
            transition: {
                ease: 'easeInOut',
            }
        }
    }
    const explainProduct = {
        hidden: { opacity: 0, y:"50px"},
        show: {
            opacity: 1,
            y: "0",
            transition: {
                delay: 1.5,
                ease: "easeInOut",
                duration:1.8
            }
        }
    }
    const pic = {
        hidden: { opacity: 0},
        show: {
            opacity: 1,
            y: "0",
            transition: {
                delay: 2,
                ease: "easeInOut",
                duration:1.5
            }
        }
    }
    return (
        <div className={styles.ContentArea}>
            
            <motion.img className={styles.smpic} variants={pic} 
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
           style={{color: colorTextBase}} 
           src="/images/art.jpg" alt="smtown" />

            <motion.p className={styles.description}
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1}}
                viewport={{once:true}}
                style={{color: colorTextBase}}
            >義大利的視覺創作藝術家Salvatore Garau，以「I am（我是）」為主題，自稱創作了一項無形體的雕塑品。這項作品被放在152x152公分的方形透明方體中展示。對於這項作品的創作理念，Salvatore表示，他的靈感是源於海森堡的不確定原理（uncertainty principle），他認為，空白是一個充滿能量的空間，看似虛無，其實仍是有重量的，虛無也仍是具有能量，可以聚合，也可以再轉化。「I am（我是）」作品原先的估價定在6000歐元至9000歐元（約台幣20萬至30萬）之間，但義大利拍賣行於五月進行拍賣會時，它最終以15000歐元（約台幣50萬）超乎意料的價格售出。<br/>
            <br/>本公司非常贊同這樣的理念，只有你想不到，沒有我們做不出來的泰迪熊。藝術本就是深澳、難以理解的，我們致力於把藝術體現在泰迪熊上，讓每個人都能擁有屬於自己的，獨一無二的泰迪熊，一個人一生只能購買一次'國王的泰迪熊'，並且是由本公司自行構想、製作，顧客自己改造、修補，能賦予這隻泰迪熊更多的意義。<br/>
            </motion.p>
        </div>
    )
}