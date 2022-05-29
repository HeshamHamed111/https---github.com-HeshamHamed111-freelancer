import { Box, Flex } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Page1 from './pages/page1';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Page2 from './pages/page2';
function App() {
  return (
    <div className="App">
    <Router>
    
        <Flex>
        <Box w="20%">
        <MenuBar />
        </Box>
        <Box w="80%">
        <Header />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
        </Box>

          </Flex>  
    
    </Router>
      </div>
  );
}

export default App;
