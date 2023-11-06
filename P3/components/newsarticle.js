function smallnewscard(img, header, article) {
  let sentence = article.slice(0, 25);
  let cardDiv = document.createElement('div');
  cardDiv.className = "smallnewscard";
  cardDiv.innerHTML = `
      <img src="${img}" alt="News Photo" />
      <p class="news-header">${header}</p>
      <p>${sentence}... </p>
  `;
  cardDiv.setAttribute('data-article', article); // Setting the full article data

  document.querySelector('.news').appendChild(cardDiv);
}
