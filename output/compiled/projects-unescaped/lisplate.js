var template = function($$vmc){return function($$Lisplate,$data,$strings,$runtime) {var $viewmodel=$$vmc?new $$vmc($data):null; var $helper=$$Lisplate.helpers; var $_w=$runtime.$W;
var $c = new $_w();
var $i_each= $runtime.each,
$i_escapeHtml= $runtime.escapeHtml,
$i_if= $runtime.if,
$i_eq= $runtime.eq,
$i_lt= $runtime.lt;

$c.w("<html><head><title>")
$c.w($data.title)
$c.w("</title></head><body><p>")
$c.w($data.text)
$c.w("</p>")
$c.w($i_each($data.projects,(function(project) {
var $c = new $_w();
$c.w("<a href=\"")
$c.w(project.url)
$c.w("\">")
$c.w(project.name)
$c.w("</a><p>")
$c.w(project.description)
$c.w("</p>")

 return $c.getOutput();
})
,"No projects"))
$c.w("</body></html>")

return $c.getOutput();
}
}