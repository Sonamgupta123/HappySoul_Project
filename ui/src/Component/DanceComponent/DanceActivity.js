import "./DanceActivity.css";
import { useNavigate } from "react-router-dom";
function DanceActivity() {
    const navigate = useNavigate();
  const videos = [
    { title: "Peaceful Salsa Moves", link: "https://www.youtube.com/embed/0KSOMA3QBU0" },
    { title: "Calm Ballet Routine", link: "https://www.youtube.com/embed/_Z1U6CFo8Ig" },
    { title: "Full Body Zumba Dance", link: "https://www.youtube-nocookie.com/embed/ml6cT4AZdqI" },
    { title: "Soothing Modern Dance", link: "https://www.youtube.com/embed/kJQP7kiw5Fk" },
    { title: "Relaxing Dance Moves", link: "https://www.youtube.com/embed/tQ0yjYUFKAE" },
    { title: "Relaxing Jazz Dance", link: "https://www.youtube.com/embed/3AtDnEC4zak" },
    { title: "Tranquil Kathak Performance", link: "https://www.youtube-nocookie.com/embed/3uaKbaV2iq0" },
    { title: "Mindful Contemporary Flow", link: "https://www.youtube.com/embed/8UVNT4wvIGY" },
    { title: "Gentle Tango Steps", link: "https://www.youtube.com/embed/JGwWNGJdvx8" },
    { title: "Calm Dance Meditation", link: "https://www.youtube.com/embed/LsoLEjrDogU" },
  ];
   const handleBack = () => {
    navigate("/user-activities");
  };


  return (
    <div className="dance-container">
      <h1 className="dance-title">💃 Relaxing Dance Videos</h1>
      <p className="dance-sub">Enjoy these dances to refresh your mind and soul 💚</p>

      <div className="dance-grid">
        {videos.map((video, index) => (
          <div className="dance-card" key={index}>
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

export default DanceActivity;
