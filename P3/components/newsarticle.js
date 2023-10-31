function smallnewscard(img,header,article) {
  document.write(
    '<div class="smallnewscard">' +
      '<img src='+img+' alt="News Photo" />' +
      '<h3>'+header+'</h3>' +
      '<p>'+article+'</p>' +
      '</div>'
  );
}
