import "./UserDashboard.css";
import MoodTracker from "../UserMoodComponent/UserMood";

function UserDashboard() {
  const name = localStorage.getItem("name") || "User";

  
  const moods = [
    { emoji: "😄", label: "Happy" },
    { emoji: "🙂", label: "Okay" },
    { emoji: "😔", label: "Sad" },
    { emoji: "😟", label: "Anxious" },
    { emoji: "😤", label: "Stressed" },
  ];

  const quotes = [
    "You are stronger than you think.",
    "One step at a time. You got this 💚",
    "Your feelings are valid.",
    "Breathe. Relax. Reset.",
    "Be kind to yourself today.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="dashboard">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h2>Welcome back, {name}! 💚</h2>
        <p>Hope you're taking care of yourself today.</p>
      </div>

      <MoodTracker />

      {/* Fake Recent Progress */}
      <div className="progress-section">
        <h3>Your Recent Progress</h3>
        <ul>
          <li>✔ Completed 3 meditation sessions this week</li>
          <li>✔ Mood checked-in 5 times</li>
          <li>✔ Joined 2 wellness activities</li>
        </ul>
      </div>

      {/* Daily Quote */}
      <div className="quote-box">
        <h3>🌟 Daily Positive Quote</h3>
        <p>{randomQuote}</p>
      </div>
    </div>
  );
}

export default UserDashboard;
