var template = function($$vmc){return function($$Lisplate,$data,$strings,$runtime) {var $viewmodel=$$vmc?new $$vmc($data):null; var $helper=$$Lisplate.helpers; var $_w=$runtime.$W;
var $c = new $_w();
var $i_each= $runtime.each,
$i_escapeHtml= $runtime.escapeHtml,
$i_if= $runtime.if,
$i_eq= $runtime.eq,
$i_lt= $runtime.lt;

$c.w("<div class=\"colors\">Hello ")
$c.w($i_escapeHtml($data.name))
$c.w("!")
$c.w($i_if($data.colors,(function() {
var $c = new $_w();
$c.w("<ul>")
$c.w($i_each($data.colors,(function(color) {
var $c = new $_w();
$c.w("<li class=\"color\">")
$c.w($i_escapeHtml(color))
$c.w("</li>")

 return $c.getOutput();
})
))
$c.w("</ul>")

 return $c.getOutput();
})
,(function() {
var $c = new $_w();
$c.w("<div>No colors!</div>")

 return $c.getOutput();
})
))
$c.w("</div>")

return $c.getOutput();
}
}