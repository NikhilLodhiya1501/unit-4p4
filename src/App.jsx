
import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: ""
  });

  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() ||
        !form.phone.trim() || !form.course) {
      setError("Please complete all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStudent({ ...form });
  }

  function resetForm() {
    setStudent(null);
    setForm({ name: "", email: "", phone: "", course: "" });
    setError("");
  }

  return (
    <main className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon">✦</span>
          <span>Edu<span className="accent">Sphere</span></span>
        </div>
        <span className="status">● ADMISSIONS OPEN</span>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">YOUR FUTURE STARTS HERE</span>
          <h1>Learn today.<br /><span>Lead tomorrow.</span></h1>
          <p>Join a community of future innovators and turn your ambitions into achievements.</p>

          <div className="stats">
            <div><strong>25+</strong><small>Courses</small></div>
            <div><strong>5k+</strong><small>Students</small></div>
            <div><strong>95%</strong><small>Success rate</small></div>
          </div>
        </div>

        <div className="form-card">
          {!student ? (
            <>
              <div className="card-icon">🎓</div>
              <h2>Student Registration</h2>
              <p className="muted">Create your academic profile</p>

              <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input name="name" value={form.name}
                  onChange={handleChange} placeholder="e.g. Aarav Patel" />

                <label>Email Address</label>
                <input name="email" type="email" value={form.email}
                  onChange={handleChange} placeholder="you@example.com" />

                <label>Phone Number</label>
                <input name="phone" type="tel" value={form.phone}
                  onChange={handleChange} placeholder="Enter phone number" />

                <label>Choose Your Course</label>
                <select name="course" value={form.course}
                  onChange={handleChange}>
                  <option value="">Select a course</option>
                  <option value="BCA">BCA — Computer Applications</option>
                  <option value="BBA">BBA — Business Administration</option>
                  <option value="B.Com">B.Com — Commerce</option>
                  <option value="B.Sc IT">B.Sc IT — Information Technology</option>
                </select>

                {error && <p className="error">{error}</p>}

                <button className="primary-btn" type="submit">
                  Complete Registration <span>→</span>
                </button>
              </form>
              <p className="secure">✦ &nbsp; Your journey to success begins here</p>
            </>
          ) : (
            <div className="success-panel">
              <div className="success-icon">✓</div>
              <span className="eyebrow">REGISTRATION COMPLETE</span>
              <h2>Welcome aboard, {student.name}!</h2>
              <p className="muted">Your student profile has been created.</p>
              <div className="profile">
                <div className="avatar">
                  {student.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <strong>{student.name}</strong>
                  <p>{student.course}</p>
                </div>
              </div>
              <div className="detail"><span>Email</span><strong>{student.email}</strong></div>
              <div className="detail"><span>Phone</span><strong>{student.phone}</strong></div>
              <div className="detail"><span>Status</span><strong className="green">✓ Registered</strong></div>
              <button className="primary-btn" onClick={resetForm}>
                Register Another Student ↗
              </button>
            </div>
          )}
        </div>
      </section>

      <footer>© 2026 EduSphere Academy <span>Designed with ♥ for learning</span></footer>
    </main>
  );
}

export default App;