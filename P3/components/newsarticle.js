
function smallnewscard(img,header,article) {
  let sentence =article.slice(0,25);
  document.write(
    '<div class="smallnewscard">' +
      '<img src='+img+' alt="News Photo" />' +
      '<p>'+header+'</p>' +
      '<p>'+ sentence +'... </p>' +
      '</div>'
  );
}
