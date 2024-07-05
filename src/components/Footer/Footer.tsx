import { useContext } from "react";
import gitHubLogo from "../../assets/icons8-github-24.png";
import "./footer.style.scss";
import { ThemeContext } from "../../pages/MainPage/MainPage";
import styled from "styled-components";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const StyledFooter = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0;
    left: 0;
    color: ${theme.baseColor};
    width: 100%;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    .github {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
    .idea {
      .highlighted {
        color: ${theme.activeColor};
        text-decoration: none;
      }
    }
  `;
  return (
    <StyledFooter className="footer">
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
    </StyledFooter>
  );
};
