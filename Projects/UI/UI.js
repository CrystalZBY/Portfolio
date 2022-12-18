var client = contentful.createClient({
    space: 'h5mh44f99pyo',
    accessToken: 'tuiXjqgZU8N9fXntb3zuX6MOCLcnLSuZOH7LXjJTmtk',
  });
    
  client.getEntries().then(entries => {
    // log the title for all the entries that have it
    let blog = document.getElementById('blog');
  
    entries.items.forEach(entry => {
      console.log(entry);
      let converter = new showdown.Converter();
      let text = entry.fields.body;
      let body = converter.makeHtml(text);
      let html = `
        <a href="../individual_project.html?id=${entry.sys.id}" >
          <div class="project-container">
            <div class="project-title">${entry.fields.title}</div>
          </div>
        </a>
      `;
      blog.innerHTML += html;
    });
});
  