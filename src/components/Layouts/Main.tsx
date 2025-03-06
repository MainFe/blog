interface MainProps {
    title: string;
    date: string;
    children?: React.ReactNode; // 본문 내용
}

const Main: React.FC<MainProps> = ({ title, date, children }) => {
    return (
        <div style={{
            width: "800px",
            margin: "0 auto 0 auto",
            backgroundColor: "white",
            padding: "25px",
            boxSizing: "border-box",
            lineHeight: "24px",
        }}>
            <p style={{
                textAlign: "center",
                fontSize: "24px",
                padding: "25px",
                fontWeight: "600"
            }}>
                {title}
            </p>
            <p style={{
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "600",
                color: "gray",
            }}>
                {date}
            </p>
            <br /><br />
            {children}
        </div>
    );
}

export default Main;