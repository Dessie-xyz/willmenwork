import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import NotImplemented, {NotImplHandle} from "./NotImplemented.tsx";

const Home = () => {
  const navFren = useNavigate();
  const notImplRef = useRef<NotImplHandle>(null);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Weak Submissive Men</h1>
        <p>The most pathetic, weak, and submissive men we could find.</p>
        <nav>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <button onClick={() => notImplRef.current?.showNotImplDialog()}>Browse (TODO)</button>
            </li>
            <li>
              <button onClick={() => navFren("/collections")}>Collections</button>
            </li>
            <li>
              <button onClick={() => navFren("/about")}>About Us</button>
            </li>
            <li>
              <button onClick={() => navFren("/submit")}>Contribute!</button>
            </li>
          </ul>
          <NotImplemented ref={notImplRef} />
        </nav>
      </div>{" "}
    </div>
  );
};

export default Home;