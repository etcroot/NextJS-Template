import { Content } from "../components/Layout";

export default function Home() {
  return (
    <Content
      header={true}
      title="NextJS Template"
    >
      <div className="content-section">
        <p>
          This is a basic template made by{" "}
          <a
            href={process.env.author}
            target="_blank"
          >
            etcroot
          </a>{" "}
          , this is pretty much everything i use whenever i start a new project.
        </p>
        <p>You can pretty much use it for whatever you want.</p>
        <div>
          <h3>Things i used for this:</h3>
          <ul className="custom-list">
            <li>
              <a
                href="https://nextjs.org/"
                target="_blank"
              >
                NextJS
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
              >
                TailwindCSS{" "}
                <small>
                  // some additional things such as forms & line-clamp too
                </small>
              </a>
            </li>
            <li>
              <a
                href="https://fakerjs.dev/"
                target="_blank"
              >
                FakerJS
              </a>
            </li>
            <li>
              <a
                href="https://react-icons.github.io/react-icons/"
                target="_blank"
              >
                React Icons
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Content>
  );
}
