import Footer from './Footer';
import Header from './Header';
import Middle from './Middle';

interface MainProps {
    title: string;
    date: string;
    children?: React.ReactNode; // 본문 내용
}

export const Blog: React.FC<MainProps> = ({ title, date, children }) => {
    return (
        <>
            <Header />
            <Middle title={title} date={date}>
                {children}
            </Middle>
            <Footer />
        </>
    )
}

export default Blog;