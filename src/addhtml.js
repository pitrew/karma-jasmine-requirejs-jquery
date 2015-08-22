define(['jquery'], function(jquery) {

  return {
    addHtml: function(idName, text) {
		jquery(idName).html(text);
    }
  };
});
