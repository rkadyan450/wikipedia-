function searchArticle() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const content = document.getElementById("articleContent");

  const articles = {
    "html": {
      title: "HTML - HyperText Markup Language",
      content: "HTML is the standard markup language for creating Web pages. It describes the structure of a webpage using markup elements like headings, paragraphs, and links."
    },
    "css": {
      title: "CSS - Cascading Style Sheets",
      content: "CSS is used to style and layout web pages — for example, changing fonts, colors, spacing, and positioning. CSS is what makes websites look good."
    },
    "javascript": {
      title: "JavaScript",
      content: "JavaScript is a programming language that allows you to implement complex features on web pages — including content updates, interactive maps, animations, and more."
    }
  };

  if (articles[input]) {
    content.innerHTML = `
      <h2>${articles[input].title}</h2>
      <p>${articles[input].content}</p>
    `;
  } else {
    content.innerHTML = `
      <h2>No Article Found</h2>
      <p>Please try searching for: <strong>html</strong>, <strong>css</strong>, or <strong>javascript</strong>.</p>
    `;
  }
}
