import Header from './components/Header/Header.js'
import styled from 'styled-components'
import Search from './components/Search/Search.js';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(11,18,48);
  background: linear-gradient(90deg, rgba(3,11,45,1) 0%, rgba(18,69,124,1) 50%, rgba(73,137,193,1) 100%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
    </AppContainer>
  );
}

export default App