import React, { useState } from 'react';
import Chart from "react-apexcharts";

const Maincont = () => {
    const [baroptions, setBaroptions] = useState(
        {
            chart: {
                height: "100",
                width: "100",
                type: "bar",
                background: "white",
                foreColor: "#333"
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009],
                labels: {
                    show: false
                }
            },
            yaxis: {
                show: false
            }
        }
    );
    const [series, setSeries] = useState(
        [
            {
                name: "sales",
                data: [30, 40, 45, 10, 49, 60, 40, 51]
            },
            {
                name: "profit",
                data: [10, 50, 25, 5, 39, 20, 70, 91]
            }
        ]

    );
    const [donutopt, setDonutopt] = useState({

        
        labels: ['HTML', 'CSS', 'JAVASCRIPT']

    });
    const [donutseries, setDonutseries] = useState([10, 35, 55]);

    return (
        <div className="main-contnr">
            <div className="author-sales">
                <h4 className="grey auth-head" >Author Sales</h4>
                <div className="inner">
                <h1 className="score">
                    65M
                </h1>
                <Chart
                    options={baroptions}
                    series={series}
                    type="bar"
                    width="200"
                />
                </div>
            </div>
            <div className="author-sales">
                <h4 className="grey auth-head" >Technologies</h4>
                <div className="inner">
                <h1 className="score">
                    19M
                </h1>
                <Chart
                    className="donut-chart"
                    options={donutopt}
                    series={donutseries}
                    type="donut"
                    width="300"
                />

                </div>
            </div>
            <div className="author-sales">
                <h4 className="grey auth-head" >Total Orders</h4>
                <div className="inner">
                    <h1 className="score">7M</h1>
                <Chart
                    options={baroptions}
                    series={series}
                    type="line"
                    width="200"
                />
                </div>
            </div>
            <div className="author-sales">
                <h4 className="grey auth-head" >ANNOUNCEMENTS</h4>
                <h4 className="comments">Incredibly Positive Reviews</h4>
                <p className="comm-para grey">
                    To start a blog of a topic about anf first brainstream party is ways to write details
                </p>
            </div>
            <div className="author-sales">
                <h4 className="grey auth-head" >PROJECTS</h4>
                <h4 className="comments">First Milestone Achieved!</h4>
                <p className="comm-para grey">
                    To start a blog of a topic about anf first brainstream party is ways to write details
                </p>
                <span>progress:</span>
                <span>55%</span>
            </div>
            <div className="author-sales">
                <h4 className="grey auth-head" >TODAY'S SCHEDULE</h4>
                <h4 className="comments">UI/UX Design Updates</h4>
                <h4 className="time">11:15AM - 12:30PM</h4>
            </div>
            <div className="long-cont">
                <h4 className="grey auth-head">TOP PRODUCTS</h4>
                <ul className="top-list">
                    <li className="top-item">Templates <i className="fas fa-drafting-compass"></i></li>
                    <li className="top-item">Wordpress Themes <i className="fas fa-paint-roller"></i></li>
                    <li className="top-item">E-commerce Websites <i className="far fa-window-restore"></i></li>
                    <li className="top-item">Foobio Themes <i className="fab fa-affiliatetheme"></i></li>
                    <li className="top-item">UI/UX Design <i className="fas fa-palette"></i></li>
                </ul>
            </div>

            <div className="sales-stat">
                <h4 className="grey auth-head" >SALES STATISTICS</h4>
                <Chart
                    className="area-chart"
                    options={baroptions}
                    series={series}
                    type="area"
                    width="400"
                />
            </div>



        </div>
    );
}
export default Maincont;