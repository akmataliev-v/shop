import React from "react";
import "./footer.css";
import image from "../../components/assets/reactlogo.png"
<script src="https://kit.fontawesome.com/c4254e24a8.js"></script>

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col">
                    <img className="logo" src={image} alt=""/>
                    <p></p>
                </div>
                <div className="col">
                    <h3>Office <div className="underline"><span></span></div></h3>
                    <p>ITPL Road</p>
                    <p>Whitefield, Bangolore</p>
                    <p>Karnataka, PIN 560066, India</p>
                    <p className="email-id">rassvetdoni@gmail.com</p>
                    <h4>+999 - 03090300</h4>
                </div>
                <div className="col">
                    <h3>Links <div className="underline"><span></span></div></h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Newsletter <div className="underline"><span></span></div></h3>
                    <form>
                        <i className="far fa-envelope"></i>
                        <input type="email" placeholder="Enter your email id" required/>
                        <button type="submit"><i className="fas fa-arrow-right"></i></button>
                    </form>
                </div>
                <div className="social-icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-whatsapp"></i>
                    <i className="fab fa-pinterest"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer;