import gitHubLogo from "../../assets/icons8-github-24.png";
import "./footer.style.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="github">
        Projects repository
        <a href="https://github.com/SkyDmytro/typing_test">
          <img src={gitHubLogo} />
        </a>
      </div>
      <div className="idea">
        Inspired by{" "}
        <a className="highlighted" href="https://monkeytype.com/">
          Monkeytype
        </a>
      </div>
    </div>
  );
};
