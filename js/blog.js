function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const blogId = getQueryParam("id");

fetch("/data/data.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    const blogs = data.blogs.find((b) => b.id == blogId);
    const body = document.getElementById("body");
    if (blogs) {
      const tag = blogs.tags.map((tag) => `<p>#${tag}</p>`).join("");
      const box = `
        <div class="box" id="box">
          <img src="${blogs.secondImage}" alt="${blogs.imageName}">
          <h1>${blogs.name}</h1>
          <div class="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              eligendi quis aliquid iure consequatur voluptatibus quas corporis,
              iusto incidunt molestiae commodi magnam similique modi laudantium
              dolore nisi esse sit ut? Eius, est! Enim perferendis dicta, ab soluta
              aliquam necessitatibus laudantium, ad quis cumque aspernatur
              reiciendis voluptate illum delectus! Qui quaerat, a modi nobis commodi
              earum esse harum ad itaque quisquam? Sunt aliquid excepturi dolorem
              quod quibusdam, praesentium dolore accusamus accusantium non commodi,
              dolor eaque ad eos. Pariatur aliquid excepturi esse. Quae iste
              deleniti recusandae fugit nostrum cumque. Impedit, similique eaque!
              Minus debitis reiciendis ducimus assumenda nostrum corrupti voluptas
              reprehenderit, voluptate ratione veritatis fuga suscipit voluptatum
              magni distinctio adipisci dolor? Unde nostrum quis voluptas
              asperiores? Suscipit modi culpa dolore harum itaque. Voluptate dolores
              quaerat debitis vero necessitatibus culpa deleniti dolore maiores
              nulla dignissimos consequatur, aut quas quibusdam eum atque
              perferendis nesciunt, dicta vel omnis sequi est qui distinctio
              recusandae. Quaerat, possimus? Blanditiis cum accusamus, vitae vero
              culpa omnis qui enim. Veritatis suscipit sapiente perspiciatis veniam.
              Ullam earum est fuga sit, illum similique quam maiores voluptas
              dolores, velit veniam. Ex, dolore cum. Illo quaerat reprehenderit
              velit inventore quis ad. Vitae commodi nihil excepturi atque
              cupiditate, architecto quam sunt nesciunt nam. Temporibus nisi
              obcaecati nostrum ex, et animi dolore doloremque itaque quasi
              perferendis? Laboriosam eveniet, debitis et unde inventore tempore
              architecto dolorem repudiandae pariatur atque eligendi officiis sint,
              iure eaque! Eaque quasi, rem dolores nisi natus officiis? Adipisci
              recusandae quia eius iusto veritatis! Libero, ullam consequatur saepe
              doloremque deserunt voluptatem similique itaque harum illo nostrum,
              earum possimus facilis nihil repellendus ad beatae suscipit deleniti
              placeat aspernatur. Quas debitis rem doloremque dolores suscipit
              obcaecati! Reiciendis dicta facilis sequi quaerat sapiente aperiam
              debitis itaque quasi molestiae nesciunt rem magni minus dolores
              voluptate, nobis inventore nam. Natus voluptas vel itaque esse
              suscipit consectetur tenetur quae ipsa.
            </p>
          </div>
        <div class="end-box">
          ${tag}
        </div>
      </div>
      `;
      body.innerHTML += box;
    } else {
      console.error("Blog not found");
    }
  })
  .catch((error) => console.error("Unable to fetch data:", error));
