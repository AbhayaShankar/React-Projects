import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <a href="https://twitter.com/AbhayaShankar2">
          <TwitterIcon
            className="icon"
            color="disabled"
            sx={{ "&:hover": { color: "white" } }}
          />
        </a>
        <a href="https://github.com/AbhayaShankar">
          <GitHubIcon color="disabled" sx={{ "&:hover": { color: "white" } }} />
        </a>
        <a href="https://www.linkedin.com/in/abhayashankar/">
          <LinkedInIcon
            color="disabled"
            sx={{ "&:hover": { color: "white" } }}
          />
        </a>
        <a href="https://www.instagram.com/abhaya_shankar05/">
          <InstagramIcon
            color="disabled"
            sx={{ "&:hover": { color: "white" } }}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
