import React from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import styled from 'styled-components';

const Header = styled.header`
  /* background: red; */
  border: 1px solid black;
  width: 100%;

  font-size: 32px;
  text-align: center;
`
const Section = styled.section`
  /* background: yellow; */
  border: 1px solid black;
  display: flex;
  flex-direction: row;
`
const Nav = styled.nav`
  /* background: green; */
  border: 1px solid black;

  width: 220px;
`
const Main = styled.main`
  /* background: skyblue; */
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: calc(100vw - 220px);
`

const App = () => {
  return (
    <div className='App'>
      <Header>
        <h1>시 작 점</h1>
      </Header>
      <Section>
        <Nav>
          <a href="/asdf"><p>asdfa</p></a>
        </Nav>
        <Main>
          <div style={{background: 'blue'}}>
            <p>Hello, World!! 아2</p>
          </div>
        </Main>
      </Section>
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
