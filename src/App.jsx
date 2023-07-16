import {ThemeProvider} from 'styled-components'
import { GlobalStyles } from './components/styles/Global';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import Card from './components/Card';
import content from '../context';
import Footer from './components/Footer';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App
