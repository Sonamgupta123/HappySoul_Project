import "./ExpertConsultant.css";
import { useNavigate } from "react-router-dom";


function ExpertConsultant() {
  const navigate = useNavigate();

  const doctors = [
    {
      name: "Dr. Nidhi Jain Bukharia",
      specialty: "Neuropsychiatrist,Psychiatrist",
      experience: "12 Years Experience",
      contact: "011400 36581",
    },
    {
      name: "Dr Indu Bhana",
      specialty: "Child Neurologist",
      experience: "10 Years Experience",
      contact: "+91‑93018 95907",
    },
    {
      name: "Dr. (Ms.) Alka Kapoor",
      specialty: "Anxiety & Depression Counselor",
      experience: "40 Years Experience",
      contact: "+91-91793 83554",
    },
    {
      name: "Naitram “ The Mindful Space",
      specialty: "Mindfulness & Meditation Center",
      experience: "12 Years Experience",
      contact: "095222 22019",
    },
    {
      name: "Dr. Ashutosh Singh",
      specialty: "Relationship & Emotional Health Expert",
      experience: "20 Years Experience",
      contact: "078690 88193",
    },
    {
      name: "Dr. Apurva Tiwari",
      specialty: "Cognitive Behavioral Therapist",
      experience: "11 Years Experience",
      contact: "098269 27259",
    },
  ];

  const handleBack = () => {
    navigate("/user-activities");
  };

  return (
    <div className="consult-container">
      <h1 className="consult-title">🩺 Expert Consultants</h1>
      <p className="consult-sub">Talk with professionals to improve your well‑being 💚</p>

      <div className="consult-grid">
        {doctors.map((doc, index) => (
          <div className="consult-card" key={index}>
            <h3 className="doc-name">{doc.name}</h3>
            <p className="doc-specialty">{doc.specialty}</p>
            <p className="doc-exp">{doc.experience}</p>
            <p className="doc-contact">📩 {doc.contact}</p>
          </div>
        ))}
      </div>
     
      <button className="back-btn" onClick={handleBack}>
        ← Back
      </button>
    </div>
  );
}

export default ExpertConsultant;
