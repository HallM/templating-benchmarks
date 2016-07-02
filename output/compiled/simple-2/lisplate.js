var template = function($$vmc){return function($$Lisplate,$data,$strings,$runtime) {var $viewmodel=$$vmc?new $$vmc($data):null; var $helper=$$Lisplate.helpers; var $_w=$runtime.$W;
var $c = new $_w();
var $i_each= $runtime.each,
$i_escapeHtml= $runtime.escapeHtml,
$i_if= $runtime.if,
$i_eq= $runtime.eq,
$i_lt= $runtime.lt;

$c.w("<div><h1 class='header'>")
$c.w($i_escapeHtml($data.header))
$c.w("</h1><h2 class='header2'>")
$c.w($i_escapeHtml($data.header2))
$c.w("</h2><h3 class='header3'>")
$c.w($i_escapeHtml($data.header3))
$c.w("</h3><h4 class='header4'>")
$c.w($i_escapeHtml($data.header4))
$c.w("</h4><h5 class='header5'>")
$c.w($i_escapeHtml($data.header5))
$c.w("</h5><h6 class='header6'>")
$c.w($i_escapeHtml($data.header6))
$c.w("</h6><ul class='list'>")
$c.w($i_each($data.list,(function(item) {
var $c = new $_w();
$c.w("<li class='item'>")
$c.w($i_escapeHtml(item))
$c.w("</li>")

 return $c.getOutput();
})
))
$c.w("</ul></div>")

return $c.getOutput();
}
}