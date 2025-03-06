import Blog from '../Layouts/Blog'

export function Home() {
    return (
        <Blog title='MainFe' date='2025.03.06'>
            <p>디자이너이자, 개발자, 차후 크리에이터로서 성장하기 위해 기록하는 블로그 입니다.</p>
            <p>허나, 가벼운 마음으로 작성하지 않고, 질 좋은 컨텐츠를 제공하기 위해 노력 할 것입니다.</p>
            <p>아래, 일정 계획표와 연혁을 작성합니다.</p>
            <br />
            <div style={{
                border: "1px dashed rgba(44, 44, 44, 0.5)"
            }}></div>
            <strong>2025 계획 일정</strong>
            <br />
            <br />
            <p>3월</p>
            <p>&nbsp;Web Developer Tutorials 작성</p>
            <br />
            <p>4월</p>
            <p>5월</p>
            <p>6월</p>
            <p>7월</p>
            <p>8월</p>
            <p>9월</p>
            <p>10월</p>
            <p>11월</p>
            <p>12월</p>
            <br />
            <div style={{
                border: "1px dashed rgba(44, 44, 44, 0.5)"
            }}></div>
            <strong>연혁</strong>
            <br />
            <br />
            <p>2025.03.06</p>
            <p>&nbsp;Home 페이지 작성</p>
            <br />
            <p>2025.03.05</p>
            <p>&nbsp;첫 글 작성</p>
            <br />
            <p>2025.02.08</p>
            <p>&nbsp;gh-page를 이용하여 배포 성공</p>
        </Blog>
    );
}