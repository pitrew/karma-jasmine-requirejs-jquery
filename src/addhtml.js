define(['jquery'], function(jquery) {

  return {
    addHtml: function(element, text) {
		jquery(element).html(text);
    }
  };
});
