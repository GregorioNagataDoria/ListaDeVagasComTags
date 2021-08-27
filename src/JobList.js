import React, { useState, useEffect } from "react";
import photosnap from "./images/photosnap.svg";
import short from "./images/shortly.svg";
import air from "./images/the-air-filter-company.svg";
import insure from "./images/insure.svg";
import eyecam from "./images/eyecam-co.svg";
import loop from "./images/loop-studios.svg";
import home from "./images/myhome.svg";
import faceit from "./images/faceit.svg";
import manage from "./images/manage.svg";
import account from "./images/account.svg";

import "./jobList.css";

export default function JobList(props) {
  const [tags, setTags] = useState([
    "js",
    "css",
    "frontend",
    "senior",
    "html",
    "fullstack",
    "midweight",
    "python",
    "react",
    "junior",
    "sass",
    "ruby",
    "vue",
    "backend",
    "ror",
    "django",
  ]);

  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);
  const [frontend, setFrontend] = useState(false);
  const [senior, setSenior] = useState(false);
  const [html, setHtml] = useState(false);
  const [fullstack, setFullstack] = useState(false);
  const [midweight, setMidweight] = useState(false);
  const [python, setPython] = useState(false);
  const [react, setReact] = useState(false);
  const [junior, setJunior] = useState(false);
  const [sass, setSass] = useState(false);
  const [ruby, setRuby] = useState(false);
  const [vue, setVue] = useState(false);
  const [backend, setBackend] = useState(false);
  const [ror, setRor] = useState(false);
  const [django, setDjango] = useState(false);

  const allfalse =
    css == false &&
    js == false &&
    frontend == false &&
    senior == false &&
    html == false &&
    fullstack == false &&
    midweight == false &&
    python == false &&
    react == false &&
    junior == false &&
    sass == false &&
    ruby == false &&
    vue == false &&
    backend == false &&
    ror == false &&
    django == false
      ? true
      : false;

  function removeTag(t) {
    {
      t(false);
    }
  }

  function clearTags() {
    setBackend(false);
    setCss(false);
    setDjango(false);
    setFrontend(false);
    setFullstack(false);
    setHtml(false);
    setJs(false);
    setJunior(false);
    setMidweight(false);
    setPython(false);
    setReact(false);
    setRor(false);
    setRuby(false);
    setSass(false);
    setSenior(false);
    setVue(false);
  }

  function addTag(t) {
    {
      t(true);
    }
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { height, width } = useWindowDimensions();

  return (
    <>
      <div className="so-body">
        <div className="so-tag-holder">
          {css ? (
            <div>
              <span className="so-tag">CSS</span>
              <span className="x" onClick={() => removeTag(setCss)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {js ? (
            <div>
              <span className="so-tag">JavaScript</span>
              <span className="x" onClick={() => removeTag(setJs)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {frontend ? (
            <div>
              <span className="so-tag">Frontend</span>
              <span className="x" onClick={() => removeTag(setFrontend)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {senior ? (
            <div>
              <span className="so-tag">Senior</span>
              <span className="x" onClick={() => removeTag(setSenior)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {html ? (
            <div>
              <span className="so-tag">Html</span>
              <span className="x" onClick={() => removeTag(setHtml)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {fullstack ? (
            <div>
              <span className="so-tag">Fullstack</span>
              <span className="x" onClick={() => removeTag(setFullstack)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {midweight ? (
            <div>
              <span className="so-tag">MidWeight</span>
              <span className="x" onClick={() => removeTag(setMidweight)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {python ? (
            <div>
              <span className="so-tag">Python</span>
              <span className="x" onClick={() => removeTag(setPython)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {react ? (
            <div>
              <span className="so-tag">React</span>
              <span className="x" onClick={() => removeTag(setReact)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {junior ? (
            <div>
              <span className="so-tag">Junior</span>
              <span className="x" onClick={() => removeTag(setJunior)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {sass ? (
            <div>
              <span className="so-tag">Sass</span>
              <span className="x" onClick={() => removeTag(setSass)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {ruby ? (
            <div>
              <span className="so-tag">Ruby</span>
              <span className="x" onClick={() => removeTag(setRuby)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {vue ? (
            <div>
              <span className="so-tag">Vue</span>
              <span className="x" onClick={() => removeTag(setVue)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {backend ? (
            <div>
              <span className="so-tag">Backend</span>
              <span className="x" onClick={() => removeTag(setBackend)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {ror ? (
            <div>
              <span className="so-tag">Ror</span>
              <span className="x" onClick={() => removeTag(setRor)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
          {django ? (
            <div>
              <span className="so-tag">Django</span>
              <span className="x" onClick={() => removeTag(setDjango)}>
                X
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="clear-btn" onClick={() => clearTags()}>
          Clear
        </div>
      </div>

      {css || js || html || frontend || senior || allfalse ? (
        <div className="jb-holder">
          <div className="jb">
            <img className="jimg" src={photosnap} />
            <span className="jb-flex">
              <span className="title-holder">
                <span className="title">Photosnap</span>
                <div className="new">NEW!</div>
                <div className="featured">FEATURED</div>
              </span>

              <span className="middle">
                <div className="ocup-name">Senior Frontend Developer</div>
              </span>
              <span className="extra-info">1d ago * Full time * USA</span>
            </span>
          </div>
          {width < 1100 ? <hr className="hr1" /> : ""}
          <div className="tag-holder2">
            {" "}
            <div className="jb-tag" onClick={() => addTag(setFrontend)}>
              Frontend
            </div>
            <div className="jb-tag" onClick={() => addTag(setHtml)}>
              HTML
            </div>
            <div className="jb-tag" onClick={() => addTag(setCss)}>
              CSS
            </div>
            <div className="jb-tag" onClick={() => addTag(setJs)}>
              JavaScript
            </div>
            <div className="jb-tag" onClick={() => addTag(setSenior)}>
              Senior
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {fullstack || midweight || python || react || allfalse ? (
        <div className="jb-holder">
          <div className="jb">
            <img className="jimg" src={manage} />
            <span className="jb-flex">
              <span className="title-holder">
                <span className="title">Manage</span>
                <div className="new">NEW!</div>
                <div className="featured">FEATURED</div>
              </span>

              <span className="middle">
                <div className="ocup-name">Fullstack Developer</div>{" "}
              </span>
              <span className="extra-info">1d ago * Part time * Remote</span>
            </span>
          </div>
          {width < 1100 ? <hr className="hr1" /> : ""}
          <div className="tag-holder2">
            {" "}
            <div className="jb-tag" onClick={() => addTag(setFullstack)}>
              FullStack
            </div>
            <div className="jb-tag" onClick={() => addTag(setMidweight)}>
              Midweight
            </div>
            <div className="jb-tag" onClick={() => addTag(setPython)}>
              Python
            </div>
            <div className="jb-tag" onClick={() => addTag(setReact)}>
              React
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {js || react || sass || frontend || junior || allfalse ? (
        <div className="jb-holder">
          <div className="jb">
            <img className="jimg" src={account} />
            <span className="jb-flex">
              <span className="title-holder">
                <span className="title">Account</span>
                <div className="new">NEW!</div>
              </span>

              <span className="middle">
                <div className="ocup-name">Junior Frontend Developer</div>{" "}
              </span>
              <span className="extra-info">2d ago * Part time * USA</span>
            </span>
          </div>
          {width < 1100 ? <hr className="hr1" /> : ""}
          <div className="tag-holder2">
            {" "}
            <div className="jb-tag" onClick={() => addTag(setFrontend)}>
              Frontend
            </div>
            <div className="jb-tag" onClick={() => addTag(setSass)}>
              Sass
            </div>
            <div className="jb-tag" onClick={() => addTag(setReact)}>
              React
            </div>
            <div className="jb-tag" onClick={() => addTag(setJs)}>
              JavaScript
            </div>
            <div className="jb-tag" onClick={() => addTag(setJunior)}>
              Junior
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {css || js || frontend || junior || allfalse ? (
        <div className="jb-holder">
          <div className="jb">
            <img className="jimg" src={home} />{" "}
            <span className="jb-flex">
              <span className="title-holder">
                <span className="title">MyHome</span>
              </span>

              <span className="middle">
                <div className="ocup-name">Junior Frontend Developer</div>{" "}
              </span>
              <span className="extra-info">3d ago * Contract * USA</span>
            </span>
          </div>
          {width < 1100 ? <hr className="hr1" /> : ""}
          <div className="tag-holder2">
            <div className="jb-tag" onClick={() => addTag(setFrontend)}>
              Frontend
            </div>
            <div className="jb-tag" onClick={() => addTag(setCss)}>
              CSS
            </div>
            <div className="jb-tag" onClick={() => addTag(setJs)}>
              JavaScript
            </div>
            <div className="jb-tag" onClick={() => addTag(setJunior)}>
              Junior
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {fullstack || js || sass || ruby || midweight || allfalse ? (
        <div className="jb-holder">
          <div className="jb">
            <img className="jimg" src={loop} />
            <span className="jb-flex">
              <span className="title-holder">
                <span className="title">Loop Studios</span>
              </span>

              <span className="middle">
                <div className="ocup-name">Software Engineer</div>{" "}
              </span>
              <span className="extra-info">1w ago * Full time * Worldwide</span>
            </span>
          </div>
          {width < 1100 ? <hr className="hr1" /> : ""}
          <div className="tag-holder2">
            {" "}
            <div className="jb-tag" onClick={() => addTag(setFrontend)}>
              Frontend
            </div>
            <div className="jb-tag" onClick={() => addTag(setSass)}>
              Sass
            </div>
            <div className="jb-tag" onClick={() => addTag(setRuby)}>
              Ruby
            </div>
            <div className="jb-tag" onClick={() => addTag(setJs)}>
              JavaScript
            </div>
            <div className="jb-tag" onClick={() => addTag(setMidweight)}>
              Midweight
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {backend || junior || ruby || ror || allfalse ? (
        <div className="jb-holder">
          <div className="jb">
            <img className="jimg" src={faceit} />
            <span className="jb-flex">
              <span className="title-holder">
                <span className="title">FaceIt</span>
              </span>

              <span className="middle">
                <div className="ocup-name">Junior Backend Developer</div>{" "}
              </span>
              <span className="extra-info">2w ago * Full time * UK</span>
            </span>
          </div>
          {width < 1100 ? <hr className="hr1" /> : ""}
          <div className="tag-holder2">
            {" "}
            <div className="jb-tag" onClick={() => addTag(setBackend)}>
              Backend
            </div>
            <div className="jb-tag" onClick={() => addTag(setJunior)}>
              Junior
            </div>
            <div className="jb-tag" onClick={() => addTag(setRuby)}>
              Ruby
            </div>
            <div className="jb-tag" onClick={() => addTag(setRor)}>
              Ror
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {sass || js || html || frontend || junior || allfalse ? (
        <div className="jb-holder">
          <div className="jb">
            <img className="jimg" src={short} />
            <span className="jb-flex">
              <span className="title-holder">
                <span className="title">Shortly</span>
              </span>

              <span className="middle">
                <div className="ocup-name">Junior Developer</div>{" "}
              </span>
              <span className="extra-info">2w ago * Full time * Worldwide</span>
            </span>
          </div>
          {width < 1100 ? <hr className="hr1" /> : ""}
          <div className="tag-holder2">
            {" "}
            <div className="jb-tag" onClick={() => addTag(setFrontend)}>
              Frontend
            </div>
            <div className="jb-tag" onClick={() => addTag(setHtml)}>
              HTML
            </div>
            <div className="jb-tag" onClick={() => addTag(setSass)}>
              Sass
            </div>
            <div className="jb-tag" onClick={() => addTag(setJs)}>
              JavaScript
            </div>
            <div className="jb-tag" onClick={() => addTag(setJunior)}>
              Junior
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {sass || js || vue || frontend || junior || allfalse ? (
        <div className="jb-holder">
          <div className="jb">
            <img className="jimg" src={insure} />
            <span className="jb-flex">
              <span className="title-holder">
                <span className="title">Insure</span>
              </span>

              <span className="middle">
                <div className="ocup-name">Junior Frontend Developer</div>{" "}
              </span>
              <span className="extra-info">3w ago * Full time * Worldwide</span>
            </span>
          </div>
          {width < 1100 ? <hr className="hr1" /> : ""}
          <div className="tag-holder2">
            {" "}
            <div className="jb-tag" onClick={() => addTag(setFrontend)}>
              Frontend
            </div>
            <div className="jb-tag" onClick={() => addTag(setSass)}>
              Sass
            </div>
            <div className="jb-tag" onClick={() => addTag(setVue)}>
              Vue
            </div>
            <div className="jb-tag" onClick={() => addTag(setJs)}>
              JavaScript
            </div>
            <div className="jb-tag" onClick={() => addTag(setJunior)}>
              Junior
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {fullstack || midweight || js || python || django || allfalse ? (
        <div className="jb-holder">
          <div className="jb">
            <img className="jimg" src={eyecam} />
            <span className="jb-flex">
              <span className="title-holder">
                <span className="title">Eyecam Co.</span>
              </span>

              <span className="middle">
                <div className="ocup-name">Full Stack Engineer</div>{" "}
              </span>
              <span className="extra-info">3w ago * Full time * Worldwide</span>
            </span>
          </div>
          {width < 1100 ? <hr className="hr1" /> : ""}
          <div className="tag-holder2">
            {" "}
            <div className="jb-tag" onClick={() => addTag(setFullstack)}>
              Fullstack
            </div>
            <div className="jb-tag" onClick={() => addTag(setJs)}>
              JavaScript
            </div>
            <div className="jb-tag" onClick={() => addTag(setDjango)}>
              Django
            </div>
            <div className="jb-tag" onClick={() => addTag(setMidweight)}>
              Midweight
            </div>
            <div className="jb-tag" onClick={() => addTag(setPython)}>
              Python
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {react || js || sass || frontend || junior || allfalse ? (
        <div className="jb-holder">
          <div className="jb">
            <img className="jimg" src={air} />
            <span className="jb-flex">
              <span className="title-holder">
                <span className="title">The Air Filter Company</span>
              </span>

              <span className="middle">
                <div className="ocup-name">Front-end Dev</div>{" "}
              </span>
              <span className="extra-info">
                1mo ago * Part time * Worldwide
              </span>
            </span>
          </div>
          {width < 1100 ? <hr className="hr1" /> : ""}
          <div className="tag-holder2">
            {" "}
            <div className="jb-tag" onClick={() => addTag(setFrontend)}>
              Frontend
            </div>
            <div className="jb-tag" onClick={() => addTag(setSass)}>
              Sass
            </div>
            <div className="jb-tag" onClick={() => addTag(setReact)}>
              React
            </div>
            <div className="jb-tag" onClick={() => addTag(setJs)}>
              JavaScript
            </div>
            <div className="jb-tag" onClick={() => addTag(setJunior)}>
              Junior
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
