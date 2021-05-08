remark.highlighter.engine.highlightBlock = (block, temp) => {
   shiki_wrapper(block)
};

function shiki_wrapper (block) {

    shiki
      .getHighlighter({
        theme: JSON.parse(fs.readFileSync('work-hard.json', 'utf-8'))
      })
      .then(highlighter => {

        // Add spaces to empty lines to avoid them being removed
        const search = '<div class="remark-code-line"></div>';
        const replaceWith = '<div class="remark-code-line"> </div>';
        block.innerHTML = block.innerHTML.split(search).join(replaceWith);

        codeLanguage = block.className.replace(" remark-code","")
        block.innerHTML = highlighter.codeToHtml(block.innerText, codeLanguage)
      });
};

