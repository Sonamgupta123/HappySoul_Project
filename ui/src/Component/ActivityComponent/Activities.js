import "./Activities.css";
import { useNavigate } from "react-router-dom";

function Activities() {
  const navigate = useNavigate();

  // Always send user to login page
  const handleActivityClick = () => {
    navigate("/login");
  };

  const cards = [
    { title: "Dance", route: "dance", img: "/assets/dance.jpg" },
    { title: "Yoga", route: "yoga", img: "/assets/yoga.jpg" },
    { title: "Joke Corner", route: "jokes", img: "/assets/joke.jpg" },
    { title: "Music", route: "music", img: "/assets/music.avif" },
    { title: "Expert Consultant", route: "consult", img: "/assets/consultant.webp" },
  ];

  return (
    <div className="activities-container">
      <h1 className="activities-title">Wellness Activities</h1>
      <p className="activities-sub">
        Explore activities to refresh your mind and soul 💚
      </p>

      <div className="activities-grid">
        {cards.map((card) => (
          <div
            key={card.route}
            className="activity-card"
            onClick={handleActivityClick}
          >
            <img src={card.img} alt={card.title} className="activity-img" />
            <h3 className="activity-name">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
