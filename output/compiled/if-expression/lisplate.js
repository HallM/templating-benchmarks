var template = function($$vmc){return function($$Lisplate,$data,$strings,$runtime) {var $viewmodel=$$vmc?new $$vmc($data):null; var $helper=$$Lisplate.helpers; var $_w=$runtime.$W;
var $c = new $_w();
var $i_each= $runtime.each,
$i_escapeHtml= $runtime.escapeHtml,
$i_if= $runtime.if,
$i_eq= $runtime.eq,
$i_lt= $runtime.lt;

$c.w($i_each($data.accounts,(function(account) {
var $c = new $_w();
$c.w("<div>")
$c.w($i_if($i_eq(account.accountStatus,"closed"),(function() {
var $c = new $_w();
$c.w("<div>Your account has been closed!</div>")

 return $c.getOutput();
})
,$i_if($i_eq(account.accountStatus,"suspended"),(function() {
var $c = new $_w();
$c.w("<div>Your account has been temporarily suspended</div>")

 return $c.getOutput();
})
,(function() {
var $c = new $_w();
$c.w("<div>Bank balance:<span class=\"")
$c.w($i_if($i_lt(account.balance,0),"negative","positive"))
$c.w("\">$")
$c.w($i_escapeHtml(account.formattedBalance))
$c.w("</span></div>")

 return $c.getOutput();
})
)))
$c.w("</div>")

 return $c.getOutput();
})
))

return $c.getOutput();
}
}