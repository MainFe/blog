import Nav from './Nav'
import Main from './Main'

interface MainProps {
    title: string;
    date: string;
    children?: React.ReactNode; // 본문 내용
}

const Middle: React.FC<MainProps> = ({ title, date, children }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            width: "1100px",
            margin: "auto",
            padding: "25px",
            marginBlock: "25px",
            border: "2px solid rgba(55, 55, 55, 0.1)"
        }}>
            <Nav />
            <div id="space" style={{
            width: "0",
            border: "1px solid black",
            }}></div>
            <Main title={title} date={date}>
                {children}
            </Main>
        </div>
    )
}

export default Middle;