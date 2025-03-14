import Blog from '../Layouts/Blog'

export function WebDevelopmentTutorials() {
    return (
        <Blog title='Web Developer Tutorials' date='2025.03.05'>
            <p>Hello World!</p>
            <h5>1. 목적과 타겟 사용자 정하기</h5>
            <p>기업 사이트, 블로그, 이커머스 등</p>
            <p>누가 사용할지를 명확히 해야 디자인 방향이 잡힌다.</p>
            <br />
            <h5>2. 반응형 디자인을 신경쓴다면</h5>
            <p>1. 모바일 사용자 기준으로 먼저 디자인 후, 태블릭, PC로 연결한다.</p>
            <p>2. 타이포그래피, 색상 조합, 접근성, 로딩 속도, 네비게이션의 직관성 등 체크해야 함.</p>
            <p>3. 모바일 퍼스트 (Mobile First) 방식으로 디자인 하는 게 좋다.</p>
            <p>4. 그리고, CSS media()를 이용하여 화면 크기에 맞게 스타일 조정</p>
            <p>5. 모바일에서 가독성이 중요하여, font-size, line-height를 적절히 조절해야 함.</p>
            <p>6. 버튼이나 링크는 터치하기 편하게 min-width: 44px;, min-height: 44px; 같은 기준을 지키는 게 좋다.</p>
            <p>7. 스크롤과 오버플로우: overflow-x: hidden;을 적절히 사용하여 가로 스크롤이 생기지 않도록 해야 좋습니다.</p>
            <p>8. 성능 최적화: 불필요한 애니메이션을 최소화. 이미지 최적화를 통해 로딩 속도를 개선해야 한다.</p>
            <p>모바일 퍼스트 접근 방식이 유리한 이유가 바로 그거예요. 작은 화면부터 디자인하면 필수적인 요소만 먼저 배치하고, 화면이 커질수록 점진적으로 요소를 추가하거나 레이아웃을 확장할 수 있어요.</p>
            <br />
            <p>반대로 데스크탑 기준으로 먼저 디자인하면 요소가 많고 복잡해지는데, 이걸 모바일에서 다시 단순화하려면 조정이 어려워요. 가령 사이드바나 큰 이미지, 여러 개의 컬럼이 있는 레이아웃을 모바일에서 어떻게 정리할지 고민해야 하거든요. 하지만 모바일 퍼스트로 하면 처음부터 핵심 콘텐츠를 중심으로 설계하고, 점점 더 여유로운 레이아웃으로 확장해 나갈 수 있죠.</p>
            <br />
            <p>또한, 성능 면에서도 이점이 있어요. 모바일에서는 가벼운 스타일을 기본으로 적용하고, 화면이 커질 때만 추가적인 스타일을 로드하면 성능 최적화도 쉬워져요.</p>
        </Blog>
    );
}