import styles from "./album.module.css";
import { Button, Carousel } from 'antd';
import { RightOutlined, LeftOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useRef } from "react";
import { theme } from 'antd';


export default function Album({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const ref = useRef();
  const {
    token: { colorTextBase },
  } = theme.useToken();

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    SlidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          SlidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          SlidesToScroll: 1,
        }
      },

    ]
  };
  return (

    <div className={styles.album}>
      <div className={styles.layout}>
      </div>
    </div>

  );
}
