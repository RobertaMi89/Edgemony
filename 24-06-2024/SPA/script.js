function createPageLayout() {
  createHeader();
  createSidebar();
  createMain();
  createFooter();
}

function createHeader() {
  const header = document.createElement("header");
  header.innerHTML = `
        <div class="logo">
            <img src="./assets/logo.png" alt="Logo">
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    `;
  document.body.insertBefore(header, document.getElementById("app"));
}

function createSidebar() {
  const sidebar = document.createElement("aside");
  sidebar.innerHTML = `
        <h2>Sidebar</h2>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    `;
  document.body.insertBefore(
    sidebar,
    document.getElementById("app").nextSibling
  );
}

async function createMain() {
  const main = document.createElement("main");
  const articles = await fetchArticles();
  main.innerHTML = "<h1>Articles</h1>";

  articles.forEach((article) => {
    const articleElement = document.createElement("article");
    articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.body}</p>
            <p><em>Author: ${article.author}</em></p>
        `;
    main.appendChild(articleElement);
  });

  document.body.appendChild(main);
}

async function fetchArticles() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const articles = await response.json();
    return articles.map((article) => ({
      title: article.title,
      body: article.body,
      author: "Anonymous",
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
        <div class="footer-logo">
            <img src="./assets/logo.png" alt="Footer Logo">
        </div>
        <nav>
            <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Legal</a></li>
                <li class="country">
                    <a href="#">United States</a>
                    <ul class="submenu">
                        <li><a href="#">Change your country</a></li>
                        <li><a href="#">More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    `;
  document.body.appendChild(footer);
}

document.addEventListener("DOMContentLoaded", createPageLayout);
