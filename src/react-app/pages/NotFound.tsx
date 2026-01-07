import { useNavigate } from "react-router-dom";

const Header = () => {
  const navFren = useNavigate();
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Unrecognized URL</h1>
        <p>The requested URL was not recognized as matching any page. If you typed it in manually, double check your spelling.</p>
        <nav>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
                <button onClick={() => navFren("/")}>View Homepage</button>
            </li>
          </ul>
        </nav>
        <figure>
          <img src="https://c.tenor.com/lMpaVEufHsYAAAAd/tenor.gif" alt='An anthropomorphic cat character looking around in distress. The image is captioned "w-where are all the m-men?? i need men!"'/>
          <figcaption><a href="https://tenor.com/view/boykisser-meme-gif-10721481181001359046">Image posted to Tenor.com by boykisser2.</a></figcaption>
        </figure>
      </div>{" "}
    </div>
  );
};

export default Header;