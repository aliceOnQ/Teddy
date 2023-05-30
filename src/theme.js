import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    colorBgBase	: "#dec19b",
    colorBg:"#f0d8b9",
    colorTextBase: "#ffffff",
    colorTextBase1: "#75564c",
    colorTextBase2: "#ffffff",
    colorTextBase3: "#75564c",
    colorBgHeader: "#75564c",
    inputContainer:"#75564c"
  },
  components: {
    Button: {
      colorPrimary: "#75564c",
      colorPrimaryHover: "#75564c",
      colorBorder: "#75564c",
            lineWidth: "4",
            colorText: "#75564c",
    },
    Input:{
        colorBgContainer:" #75564c",
        colorBorder:"#75564c",
        colorTextQuaternary:"#75564c",
        
    },
    Badge:{fontSize:"16"}
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgBase	: "#75564c",
    colorBg:"#75564c",
    colorTextBase: "#434868",
    colorTextBase2: "#75564c",
    colorTextBase3: "#747BA8",
    colorBgHeader: "#75564c",
    inputContainer:"#75564c"
    // colorBorder: "#F18BA2",
    //         lineWidth: "4",
    //         colorText: "#F18BA2",
  },
  components: {
    Button: {
      colorPrimary: "#75564c",
     colorPrimaryHover: "#75564c",
      colorBorder: "#75564c",
            lineWidth: "4",
            colorText: "#75564cr",
    },
    Input:{
        colorBgContainer:"#75564c",
        // colorBorder:"#696D8A",
        colorTextQuaternary:"#75564c",
       

    },
    Badge:{fontSize:"16"}
  },
};

export { lightTheme, darkTheme };

