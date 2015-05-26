Handlebars.registerHelper('format_ts', function(date) {
  if(!date.getTime) {
    date = new Date(date);
  }
  return new Handlebars.SafeString((date / 1000).toFixed(3));
});
