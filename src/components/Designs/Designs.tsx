import { designs } from "../../data/designs";
import "./Designs.scss";

function Designs() {
  return (
    <section className="designs" id="creative">
      <div className="designs__container">
        <div className="designs__header">
          <p className="designs__eyebrow">Creative & Visual Design</p>

          <h2>Branding, Marketing & Visual Concepts</h2>

          <p>
            Visual design work covering branding concepts, product graphics,
            promotional campaigns, advertising assets, and digital content
            created with Adobe Photoshop and AI-assisted creative workflows.
          </p>
        </div>

        <div className="designs__grid">
          {designs.map((design) => (
            <article className="design-card" key={design.id}>
              <div
                className={`design-card__image design-card__image--${design.imageFit}`}
              >
                <img src={design.image} alt={design.title} />
              </div>

              <div className="design-card__body">
                <p className="design-card__category">{design.category}</p>
                <h3>{design.title}</h3>
                <p>{design.description}</p>

                <div className="design-card__tags">
                  {design.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Designs;