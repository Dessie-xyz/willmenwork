import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>About</h1>
        <p style={{textAlign:"left", paddingLeft:"5%", paddingRight:"5%"}}>Hi,<br/><br/>
        I’m [REDACTED], but you can call me Red, the founder and curator of Weak Submissive Men. As a rather financially irresponsible lesbian, my initial acquisition of this website was an impulsive decision while drinking at my Cloudflare dashboard. Since then, I have sobered up and have committed myself to using my formidable SEO skills to better the weak-submissive-man-appreciating community. This website is dedicated to providing a central hub for any media surrounding weak submissive men.<br/><br/>
        <b>However, I need your help.</b> Despite my unchallenged intellect and impeccable branding skills, I’m just one idiot and can’t find all of the highest quality content by myself. That’s why community engagement is a core value of weaksubmissive.men. We encourage anyone who has any contributions or suggestions reach out using the means listed on our <Link to="/submit">submissions page</Link>. Though this website’s creation may have been unplanned, I promise mommy still loves you very much. 
        <br/><br/>
        With much love,
        <br />Red</p><br/>
        <h2>Our Mission</h2>
        <p style={{paddingLeft:"7.5%", paddingRight:"7.5%"}}>Weak Submisive Men is comitted to organizing high-quality content dipicting submissive men into an easily searchable database. Through comunity outreach and innovation, Weak Submissive Men aims to be the Internet's foremost hub for finding high-quality submissive man content.</p><br/><hr/>
      </div>{" "}
    </div>
  );
};

export default Header;