var client = contentful.createClient({
    space: 'h5mh44f99pyo',
    accessToken: 'tuiXjqgZU8N9fXntb3zuX6MOCLcnLSuZOH7LXjJTmtk',
  });

  client.getEntries().then(entries => {
    // log the title for all the entries that have it
  
    let blogContainer = document.getElementById('blog');
  
    entries.items.forEach(entry => {
      console.log(entry);
      let title = document.createElement('h1'); // create element
      title.textContent = entry.fields.title;
      title.classList.add('blog-title');
      blogContainer.append(title);
  
      let image = document.createElement('img');
      image.src = entry.fields.image.fields.file.url;
      image.classList.add('blog-image');
      blogContainer.append(image);
  
      let content = document.createElement('p');
      content.textContent = entry.fields.content;
      content.classList.add('blog-content');
      blogContainer.append(content);
    });
  });
/* lient.getEntries().then(entries => {

    let blogContainer = document.getElementById('blog');
    entries.items.forEach(entry => {
        console.log(entry);

        let converter = new showdown.Converter();
        let text = entry.fields.content;
        let body = converter.makeHtml(text);
        let html = `
          <div class="blog-post">
            <h1 class="title">${entry.fields.title}</h1>
            <img class='blog-image' src='${entry.fields.image.fields.file.url}'>
            <div class="content">
                ${body}
            </div>
          </div>
        `;
        blogContainer.innerHTML += html;
      });
})

function renderHTML(entry){

} */