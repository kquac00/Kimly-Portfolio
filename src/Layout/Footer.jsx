import React from 'react'
import '../footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>

            <section id="footer" className="bg-dark text-light">
                <div className="container">
                    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 pl-20">
                        <div className="col mb-3">
                            <h5>Portfolio</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/hobby">Hobby</Link></li>
                                <li className="nav-item mb-2"><Link to="/history">History</Link></li>
                            </ul>
                        </div>
                        <div className="col mb-3">
                            <h5>Communication</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href='https://www.linkedin.com/in/kimly-quac-aa811533/' target='_blank' rel="noopener noreferrer">LinkedIn</a></li>
                                <li className="nav-item mb-2"><a href='https://github.com/kquac00' target='_blank' rel="noopener noreferrer">GitHub</a></li>
                                <li className="nav-item mb-2"><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col mb-3">
                            <h5>Projects</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href='https://glittering-bavarois-1598d8.netlify.app/' target='_blank' rel="noopener noreferrer" >Etikit</a></li>
                                <li className="nav-item mb-2"><a href='https://statuesque-swan-894988.netlify.app/' target='_blank' rel="noopener noreferrer">E-Commerce</a></li>
                                <li className="nav-item mb-2"><a href="https://splendid-manatee-aa0ee4.netlify.app/">Dental Website</a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    )
}

export default Footer;