var template = function($$vmc){return function($$Lisplate,$data,$strings,$runtime) {var $viewmodel=$$vmc?new $$vmc($data):null; var $helper=$$Lisplate.helpers; var $_w=$runtime.$W;
var $c = new $_w();
var $i_each= $runtime.each,
$i_escapeHtml= $runtime.escapeHtml,
$i_if= $runtime.if,
$i_eq= $runtime.eq,
$i_lt= $runtime.lt;

$c.w("<div class=\"my-app\">")
$c.w($$Lisplate.renderTemplate("components/LisplateColors",{name:$data.name,colors:$data.colors}))
$c.w("</div>")

return $c.getOutput();
}
}