function SendMailTo(name, company, domain) {
  locationstring = 'mai' + 'lto:' + name + '@' + company + '.' + domain;
  window.location.replace(locationstring);
}