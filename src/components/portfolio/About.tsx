import { SectionHeading } from "./Shared";
export default function About() {
  return (
    <section id="about" className="section container reveal">
      <SectionHeading
        label="A LITTLE ABOUT ME"
        title="A curious mind. An analytical approach."
      />
      <div className="about-copy about-copy-full">
        <p>
          I&apos;m Rishabh Bhagchandani, an MCA (Information Technology)
          student at <strong>IIIT Bhopal</strong>, currently in my 4th
          semester with a <strong>CGPA of 9.55</strong>.
        </p>
        <p>
          I&apos;m pursuing opportunities in data analysis and data science.
          My projects combine Python, SQL, exploratory analysis, machine
          learning and Power BI to turn raw data into useful insights.
        </p>
        <p>
          Along the way, I&apos;ve worked as a Teaching Assistant and
          participated in <strong>Smart India Hackathon 2024 and 2025</strong>
          . I also build AI-powered tools and web applications that make
          analytical work easier to use.
        </p>
      </div>
      <div className="education-section">
        <h3 className="education-heading">Education</h3>
        <div className="education-list">
          <article className="education-item">
            <h4>Indian Institute of Information Technology, Bhopal</h4>
            <p>Master of Computer Applications (MCA) — Information Technology</p>
            <p className="muted">2024 – 2027</p>
            <p className="muted">CGPA: 9.55</p>
          </article>
          <article className="education-item">
            <h4>Maharishi Dayanand Saraswati University, Ajmer</h4>
            <p>Bachelor of Science — Mathematics</p>
            <p className="muted">2020 – 2023</p>
            <p className="muted">Percentage: 84.68%</p>
          </article>
          <article className="education-item">
            <h4>Relevant Coursework</h4>
            <p>
              Data Warehousing &amp; Mining, Natural Language Processing, Deep
              Learning, Pattern Recognition, Soft Computing, IoT, Computer
              Networks
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
