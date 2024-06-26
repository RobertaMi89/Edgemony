import "./Main.css";
import { MenuItem } from "../Header/Header";
import posts from "../../data.json";

export function Main() {
  return (
    <>
      <main>
        <aside>
          <h2>Sidebar</h2>
          <MenuItem label={"item 1"} />
          <MenuItem label={"item 2"} />
          <MenuItem label={"item 3"} />
        </aside>
        <div className="articleDiv">
          {posts.map((posts) => (
            <Cards
              key={posts.id}
              title={posts.title}
              content={posts.body}
              userId={posts.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
}
function Cards(props) {
  const { title, content, userId } = props;
  return (
    <article className="article">
      <div className="article-inner">
        <h3 className="title">{props.title}</h3>
        <div className="tags">
          <span className="tag">{props.content}</span>
          <span className="tag">{props.userId}</span>
        </div>
      </div>
    </article>
  );
}
