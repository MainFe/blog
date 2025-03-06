import React from "react";
import "./NavTreeMenu.css";

const TreeMenu = () => {
    return (
        <div id="demo">
            <ul className="tree-menu">
                <li><a href="#">Home</a></li>
                <li>
                    <input type="checkbox" id="demo1-1" defaultChecked />
                    <label htmlFor="demo1-1">Web Developer Tutorials</label>
                    <ul>
                        <li>
                            <li><a href="#/webdevelopmenttutorials">Hello, World!</a></li>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default TreeMenu;
