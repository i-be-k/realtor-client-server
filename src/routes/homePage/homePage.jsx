import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

    const {currentUser} = useContext(AuthContext)

    console.log(currentUser)
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Seek Realtor & Get Your Dream Property
                    </h1>
                    <p>
                        Welcome to your one-stop online shop for finding your dream properties in Ibadan, offering comprehensive listings of houses, condos, lands, and apartments with detailed property information, virtual tours, and professional local guidance to help you navigate the market.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>6+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>10</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className="box">
                            <h1>100+</h1>
                            <h2>Properties Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage;