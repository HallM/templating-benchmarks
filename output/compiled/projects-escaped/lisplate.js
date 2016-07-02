var template = function($$vmc){return function($$Lisplate,$data,$strings,$runtime) {var $viewmodel=$$vmc?new $$vmc($data):null; var $helper=$$Lisplate.helpers; var $_w=$runtime.$W;
var $c = new $_w();
var $i_each= $runtime.each,
$i_escapeHtml= $runtime.escapeHtml,
$i_if= $runtime.if,
$i_eq= $runtime.eq,
$i_lt= $runtime.lt;

$c.w("<html><head><title>")
$c.w($i_escapeHtml($data.title))
$c.w("</title></head><body><p>")
$c.w($i_escapeHtml($data.text))
$c.w("</p>")
$c.w($i_each($data.projects,(function(project) {
var $c = new $_w();
$c.w("<a href=\"")
$c.w($i_escapeHtml(project.url))
$c.w("\">")
$c.w($i_escapeHtml(project.name))
$c.w("</a><p>")
$c.w($i_escapeHtml(project.description))
$c.w("</p>")

 return $c.getOutput();
})
,"No projects"))
$c.w("</body></html>")

return $c.getOutput();
}
}