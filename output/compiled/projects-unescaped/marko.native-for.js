function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      attr = __helpers.a;

  return function render(data, out) {
    out.w("<html><head><title>" +
      str(data.title) +
      "</title></head><body><p>" +
      str(data.text) +
      "</p>");

    for (var i=0, len=data.projects.length; i < len; i++) {
      var project = data.projects[i];

      out.w("<a" +
        attr("href", project.url, false) +
        ">" +
        str(project.name) +
        "</a><p>" +
        str(project.description) +
        "</p>");
    }

    if (empty(data.projects)) {
      out.w("No projects");
    }

    out.w("</body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
