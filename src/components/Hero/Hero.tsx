import "./Hero.scss";
import profileImg from "../../assets/images/profile/my_profile_image.png";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__container">
                <div className="hero__content">
                    <p className="hero__eyebrow">Software Developer & UI Designer</p>

                    <h1>Hi, I'm Ali</h1>

                    <p className="hero__roles">
                        Web Development | Mobile Apps | UI Design | AI-Assisted Development
                    </p>

                    <p className="hero__text">
                        I design and build modern web and mobile applications with a focus on
                        clean interfaces, usability, and practical functionality. My work includes
                        responsive websites, React applications, Flutter Android apps, API
                        integrations, authentication systems, dashboards, and custom user
                        interfaces. I also use AI-assisted development as part of my workflow for
                        planning, implementation, debugging, and improving software solutions.
                    </p>

                    <div className="hero__actions">
                        <a className="hero__primary" href="#projects">
                            View Projects
                        </a>

                        <a className="hero__secondary" href="#contact">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__orbit"></div>

                    <div className="hero__circle">
                        <img
                            src={profileImg}
                            alt="Ali Nadirov"
                            className="hero__image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;