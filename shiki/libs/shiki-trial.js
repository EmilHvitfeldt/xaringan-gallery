remark.highlighter.engine.highlightBlock = (block, temp) => {

   shiki_wrapper(block)
};

function shiki_wrapper (block) {
    shiki
      .getHighlighter({
        theme: 'github-light'
      })
      .then(highlighter => {
        block.innerHTML = highlighter.codeToHtml(block.innerText, 'r')
      });
};

