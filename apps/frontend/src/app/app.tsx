import { ConfigProvider } from 'antd';
import Router from './router';

import './styles/fonts.css';
import './styles/global.css';
import { theme } from './styles/theme';

export function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router />
    </ConfigProvider>
  );
}

export default App;
