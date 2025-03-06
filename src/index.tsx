import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import './global.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Links/Home';
import { WebDevelopmentTutorials } from './components/Links/WebDevelopmentTutorials';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/webdevelopmenttutorials' element={<WebDevelopmentTutorials />} />
      </Routes>
    </HashRouter>
  )
};

// root DOM 요소를 선택합니다.
const rootElement = document.getElementById('root') as HTMLElement;

if (!rootElement) {
  throw new Error('루트 요소를 찾을 수 없습니다');
}

// createRoot를 사용하여 루트를 생성합니다.
const root = createRoot(rootElement);

// App 컴포넌트를 렌더링합니다.
root.render(<App />);
