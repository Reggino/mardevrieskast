function scrollToHash() {
  const pageDiv = document.getElementById(window.location.hash.substr(1));
  const scrollingContainer = document.querySelector(
    ".content_container bodycopy.content_padding .page_content"
  );
  if (!pageDiv || !scrollingContainer) {
    return;
  }
  const boundingClientRect = pageDiv.getBoundingClientRect();
  scrollingContainer.scrollTo({
    left: boundingClientRect.x + scrollingContainer.scrollLeft - window.outerWidth / 2 + boundingClientRect.width / 2,
    behavior: "smooth",
  });
}

window.BaseUnit.prototype.refresh = function () { console.log('refresh overloaded'); }

window.addEventListener("load", () => {
  // Stop cargo.site auto resizing logic
  window.baseUnit.stopListening();
  window.baseUnit.removeEventListeners();

  // Remove any configure autosizing font size
  document.documentElement.removeAttribute("style");

  // Layout videoList if it exists
  const videoList = document.querySelector('ol.videoList');
  if (videoList) {
    const newHtml = [`<div grid-row="" grid-pad="10" grid-gutter="20"><div grid-col="x7" grid-pad="10" class=""><img width="542" height="157" width_o="542" height_o="157" data-src="https://freight.cargo.site/t/original/i/77abf55eddc168cbce36e8a6785643a61d5c23a75e3796dce81005d9bc27d15b/to-the-right.png" data-mid="173269622" border="0" data-scale="24" src="//freight.cargo.site/w/542/i/77abf55eddc168cbce36e8a6785643a61d5c23a75e3796dce81005d9bc27d15b/to-the-right.png" style="width: 313.402px; height: 90.7824px;"></div>`];
    [...videoList.children].forEach(li => {
      const title = li.querySelector(':scope > h1');
      const intro = li.querySelector(':scope > h2');
      const content = li.querySelector(':scope > p');
      const video = li.querySelector(':scope > a');

      newHtml.push(`
      <div grid-col="x7" grid-pad="10" class="" id="${li.id}" style="max-width: 1100px; margin-right: 50px;">
        <iframe frameborder="0" width="1100" height="650" src=${video.innerText} title=${title.text} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" data-scale="100" class=""></iframe><br>
        <h2>${title.innerText}<br>
        ${intro.innerText} <br>
        </h2>
        ${content.outerHTML}
      </div>`)
    });
    newHtml.push('<div grid-col="x7" grid-pad="10" class=""><img width="469" height="145" width_o="469" height_o="145" data-src="https://freight.cargo.site/t/original/i/ad93de1007b19e05a58b8dfa65775f71a22718a8de2aad943e3ad529b9fead06/to-the-left.png" data-mid="173269648" border="0" data-scale="24" src="//freight.cargo.site/w/469/i/ad93de1007b19e05a58b8dfa65775f71a22718a8de2aad943e3ad529b9fead06/to-the-left.png" style="width: 313.399px; height: 96.8931px;"></div></div>');
    videoList.outerHTML = newHtml.join('');
  }

  // Install scroll handlers
  window.addEventListener("hashchange", scrollToHash);
  scrollToHash();
  
  // Set menu to default width
  const menuStyle = document.querySelector('body > div.main_container > div.pinned.pinned_top > div > div.page.container.container_width.clearfix > bodycopy > div > div:nth-child(3) > div').style;
  menuStyle.width = 'auto';
  menuStyle.marginLeft = 'auto';
  menuStyle.marginRight = 'auto';
});
