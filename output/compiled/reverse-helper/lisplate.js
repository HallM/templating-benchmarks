var template = function($$vmc){return function($$Lisplate,$data,$strings,$runtime) {var $viewmodel=$$vmc?new $$vmc($data):null; var $helper=$$Lisplate.helpers; var $_w=$runtime.$W;
var $c = new $_w();
var $i_each= $runtime.each,
$i_escapeHtml= $runtime.escapeHtml,
$i_if= $runtime.if,
$i_eq= $runtime.eq,
$i_lt= $runtime.lt;

$c.w($i_escapeHtml($helper.reverse($data.A)))
$c.w($i_escapeHtml($helper.reverse($data.B)))
$c.w($i_escapeHtml($helper.reverse($data.C)))
$c.w($i_escapeHtml($helper.reverse($data.D)))
$c.w($i_escapeHtml($helper.reverse($data.E)))

return $c.getOutput();
}
}