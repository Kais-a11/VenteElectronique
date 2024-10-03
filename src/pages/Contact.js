import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../Styles/Contact.css'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTextareaResize } from "react-icons/bs";


export default function Contact() {
    return (
        <>
            <Header />
            <div className="container">
                <form className="Contact-card">
                    <div>
                        <h1>Contacts Us</h1>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="username" required />
                        <FaUser className="icon" />
                    </div>

                    <div className="input">
                        <input type="email" placeholder="email" />
                        <MdEmail className="icon" />
                    </div>
                    <div className="input">
                        <textarea placeholder="Message..." />
                        <BsTextareaResize className="icon" />
                    </div>
                    <div className="input-btn">
                        <button>Contact</button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    )
}