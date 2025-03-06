import NavTreeMenu from "./NavTreeMenu"

const Nav = () => {
    return (
        <div id="nav" style={{
            backgroundColor: "white",
            width: "300px",
            height: "300px",
            padding: "10px",
            boxSizing: "border-box",
        }}>
            <p style={{
                fontSize: "15px",
                textAlign: "center",
                paddingBottom: "10px",
            }}>Navigator</p>
            <NavTreeMenu />
        </div>
    )
}

export default Nav;