import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import './HomePage.css'

function HomePage() {
    return (
        <div>
            <Navbar />
            <section id="middle-section">
                <Sidebar />
                <section id="content-section">
                    <h1>This is the homepage</h1>
                </section>
            </section>
            <Footer />
        </div>
    )
}

export default HomePage;