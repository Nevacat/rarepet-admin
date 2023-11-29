import RotuerHandler from './router';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RotuerHandler />
    </ThemeProvider>
  );
}

export default App;
