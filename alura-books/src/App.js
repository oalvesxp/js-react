import Header from './components/Header/Header.js';
import Search from './components/Search/Search.js';
import LastReleases from './components/LastReleases/LasteReleases.js';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LastReleases />
    </AppContainer>
  );
}

export default App