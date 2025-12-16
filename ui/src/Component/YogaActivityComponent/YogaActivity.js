import "./YogaActivity.css";
import { useNavigate } from "react-router-dom";

function YogaActivity() {
  const navigate = useNavigate();

  const videos = [
    { title: "Morning Relaxing Yoga", link: "https://www.youtube.com/embed/v7AYKMP6rOE" },
    { title: "Yoga for Stress Relief", link: "https://www.youtube.com/embed/4pKly2JojMw" },
    { title: "Gentle Yoga Flow", link: "https://www.youtube.com/embed/VaoV1PrYft4" },
    { title: "Yoga for Mindfulness", link: "https://www.youtube.com/embed/lCg_gh_fppI" },
    { title: "Relaxing Hatha Yoga", link: "https://www.youtube.com/embed/4pKly2JojMw" },
    { title: "Evening Wind-Down Yoga", link: "https://www.youtube.com/embed/5Kfv13sGbZQ" },
    { title: "Calming Yoga for Sleep", link: "https://www.youtube.com/embed/wh8Uu9IeuYY" },
    { title: "Gentle Stretch Yoga", link: "https://www.youtube.com/embed/7kgZnJqzNaU" },
    { title: "Yoga for Relaxing Mind & Body", link: "https://www.youtube-nocookie.com/embed/4pLUleLdwY4" },
    { title: "Full Body Relaxing Yoga", link: "https://www.youtube-nocookie.com/embed/2L2lnxIcNmo" },
  ];

  const handleBack = () => {
    navigate("/user-activities");
  };

  return (
    <div className="yoga-container">
      <h1 className="yoga-title">🧘 Relaxing Yoga Videos</h1>
      <p className="yoga-sub">Enjoy these yoga sessions to refresh your mind and soul 💚</p>

      <div className="yoga-grid">
        {videos.map((video, index) => (
          <div className="yoga-card" key={index}>
            <h3 className="video-title">{index + 1}. {video.title}</h3>
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                src={video.link}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <button className="back-btn" onClick={handleBack}>
        ← Back
      </button>
    </div>
  );
}

export default YogaActivity;
