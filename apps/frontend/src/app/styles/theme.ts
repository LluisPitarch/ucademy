import { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    fontSize: 13,
    colorPrimary: '#0ABB87',
  },
  components: {
    Button: {
      fontFamily: 'Poppins',
      paddingContentHorizontal: 14,
      fontSize: 13,
    },
    Tabs: {
      fontFamily: 'Poppins',
      paddingContentVertical: 0,
      lineWidthBold: 5,
    },
  },
};
