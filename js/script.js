const row = document.getElementById("row");

function fetchJSONData() {
  fetch("/data/data.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const blogs = data.blogs;
      blogs.map((blog, index) => {
        const tagsHTML = blog.tags.map((tag) => `<p>${tag}</p>`).join("");
        const box = `
          <a href="blog-details.html?id=${index + 1}" class="box" id="${
          index + 1
        }">
            <img src="${blog.image}" alt="${blog.imageName}">
            <div class="texts">
              <div class="tags">
                ${tagsHTML}
              </div>
              <h2>${blog.name}</h2>
              <p>${blog.summary}</p>
              <div class="auther">
                <img src="${blog.autherImg}" alt="${blog.autherName}">
                <div class="info">
                  <h5>${blog.autherName}</h5>
                  <p>${blog.time}</p>
                </div>
              </div>
            </div>
          </a>
        `;
        row.innerHTML += box;
      });
    })
    .catch((error) => console.error("Unable to fetch data:", error));
}

fetchJSONData();
