import React from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';

const App = () => {
  return (
    <div className='App'>
      <p>df</p>Hello, World!
    </div>
  );
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
