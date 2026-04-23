import "./App.css";
import { sections, profile, type Link } from "./data/links";

function LinkButton({ link }: { link: Link }) {
  if (link.ogImage || link.ogDescription) {
    return (
      <a
        href={link.url}
        className="link-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.ogImage && (
          <img className="link-card-image" src={link.ogImage} alt={link.label} />
        )}
        <div className="link-card-body">
          <span className="link-card-title">{link.label}</span>
          {link.ogDescription && (
            <span className="link-card-desc">{link.ogDescription}</span>
          )}
        </div>
      </a>
    );
  }

  return (
    <a
      href={link.url}
      className="link-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.label}
    </a>
  );
}

export function App() {
  const avatarUrl = `${import.meta.env.BASE_URL}hayata-yamamoto.jpg`;

  return (
    <div className="container">
      <div className="profile">
        <img className="avatar" src={avatarUrl} alt={profile.name} />
        <h1 className="name">{profile.name}</h1>
      </div>
      {sections.map((section) => (
        <div key={section.title} className="section">
          <h2 className="section-title">{section.title}</h2>
          <div className="links">
            {section.links.map((link) => (
              <LinkButton key={link.url} link={link} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
