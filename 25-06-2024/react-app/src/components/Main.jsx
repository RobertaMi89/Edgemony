import { MenuItem } from "./Header";

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
          <Article></Article>
          <Article></Article>
          <Article></Article>
        </div>
      </main>
    </>
  );
}
function Article() {
  return (
    <>
      <article>
        <h2>
          sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit
        </h2>
        <p>
          quia et suscipit suscipit recusandae consequuntur expedita et cum
          reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt
          rem eveniet architecto
        </p>
        <p>
          <em>Author: Anonymous</em>
        </p>
      </article>
    </>
  );
}
