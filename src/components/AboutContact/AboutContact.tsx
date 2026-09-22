import "./AboutContact.scss";

function AboutContact() {
    return (
        <section className="about-contact">
            <div className="about-contact__container">
                <div className="about-contact__card" id="about">
                    <p className="about-contact__eyebrow">About</p>
                    <h2>Who I Am</h2>

                    <p>
                        I'm a Software Developer and UI Designer focused on building
                        modern web and mobile applications, responsive interfaces, and
                        practical digital experiences. My work includes React and
                        TypeScript web applications, Flutter Android development,
                        API integrations, authentication systems, dashboards, UI design,
                        branding, and visual concepts. I also use AI-assisted workflows
                        throughout planning, development, debugging, and creative work
                        while continuously expanding my technical and design skills.
                    </p>
                </div>

                <div className="about-contact__card" id="contact">
                    <p className="about-contact__eyebrow">Contact</p>
                    <h2>Let's Work Together</h2>

                    <ul>
                        <li>
                            Email:{" "}
                            <a href="mailto:devworkspace.lab@gmail.com">
                                devworkspace.lab@gmail.com
                            </a>
                        </li>

                        <li>
                            GitHub:{" "}
                            <a
                                href="https://github.com/Dev-Workspace-Lab"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Dev-Workspace-Lab
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutContact;