import React, { useState } from 'react';

const Navbar = () => {

    const [toggleClass, setToggleClass] = useState("");
    const [slideClass, setSlideClass] = useState("");
    const animation = () => {
        if (slideClass === "show-slider") {
            setSlideClass("");
            setToggleClass("");
        }
        else {
            setSlideClass("show-slider");
            setToggleClass("toggle");
        }
    }

    return (
        <nav className="navbar">
            <div className={`slider ${slideClass}`}>
                <ul id="dash">
                    <h4><i className="fas fa-chart-pie"></i> Dashboard</h4>
                    <li className="slider-item active"><i className="fas fa-sort-down"></i> Navy Aside</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Brand Aside</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Navy Header</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Light Aside</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Brand Header</li>
                    <h4><i className="fas fa-cogs"></i> Layout Builder</h4>
                </ul>
                <ul className="component">
                    <h4><i className="fab fa-artstation"></i> Components</h4>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Base</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Custom</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Extended</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Widgets</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Forms</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Keen Wizard</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> DataTables</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Icons</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Porlets</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Calender</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Charts</li>
                </ul>
                <ul className="custom">
                    <h4><i className="fab fa-intercom"></i> Custom</h4>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Blog</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Pricing</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> Invoices</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> FAQs</li>
                    <li className="slider-item"><i className="fas fa-sort-down"></i> User Pages</li>
                </ul>
            </div>
            <div className={`burger ${toggleClass}`} onClick={animation} >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-list">
                <li className="list-item">Pages</li>
                <li className="list-item">Reports</li>
                <li className="list-item">Apps</li>
            </ul>

            <ul className="icon-list">
                <li className="icon-item" ><i className="fas fa-search"></i></li>
                <li className="icon-item" ><i className="fas fa-bell"></i></li>
                <li className="icon-item" ><i className="fas fa-cog"></i></li>
                <li className="icon-item" ><i>Hi, User</i></li>
                <li className="icon-item" ><i className="fas fa-user-circle"></i></li>
                <li className="icon-item" ><i className="fas fa-ellipsis-v"></i></li>
            </ul>
        </nav>
    );
}

export default Navbar;