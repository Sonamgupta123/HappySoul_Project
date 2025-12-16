import HeroSection from "../HeroSectionComponent/HeroSection";
import "./Home.css";

function Home() {
  return (
    <>
      <HeroSection />

      {/* About Section */}
      {/* <section className="about-section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">
            HappySoul is a safe space dedicated to emotional well-being and personal growth.
            Our goal is to help individuals reduce stress, overcome anxiety, and stay mentally fit
            through professional guidance, healing activities, and community support.
          </p>
        </div>
      </section> */}

      {/* Upcoming Events */}
      <section className="events-section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-grid">
            <div className="event-card">
              <h3>Meditation Workshop</h3>
              <p>Guided meditation for inner peace & calmness.</p>
              <span>📅 22 January 2026</span>
            </div>

            <div className="event-card">
              <h3>Stress Relief Activities</h3>
              <p>Fun interactive group activities for stress reduction.</p>
              <span>📅 29 January 2026</span>
            </div>

            <div className="event-card">
              <h3>Healing Through Art</h3>
              <p>Express your emotions through creative art therapy.</p>
              <span>📅 Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
