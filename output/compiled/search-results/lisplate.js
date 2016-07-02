var template = function($$vmc){return function($$Lisplate,$data,$strings,$runtime) {var $viewmodel=$$vmc?new $$vmc($data):null; var $helper=$$Lisplate.helpers; var $_w=$runtime.$W;
var $c = new $_w();
var $i_each= $runtime.each,
$i_escapeHtml= $runtime.escapeHtml,
$i_if= $runtime.if,
$i_eq= $runtime.eq,
$i_lt= $runtime.lt;

$c.w("<div class=\"search-results-container\"><div class=\"searching\" id=\"searching\"><div class=\"wait-indicator-icon\"></div> Searching...</div><div id=\"resultsContainer\"><div class=\"hd\"><span class=\"count\"><span id=\"count\">")
$c.w($i_escapeHtml($data.totalCount))
$c.w("</span> results</span><div class=\"view-modifiers\"><div class=\"view-select\">View:<div class=\"view-icon view-icon-selected\" id=\"viewIconGallery\"><i class=\"icon-th\"></i></div><div class=\"view-icon\" id=\"viewIconList\"><i class=\"icon-th-list\"></i></div></div></div></div><div id=\"resultsTarget\"><div class=\"search-results view-")
$c.w($i_escapeHtml($data.view))
$c.w("\">")
$c.w($i_each($data.searchRecords,(function(record) {
var $c = new $_w();
$c.w("<div class=\"search-item\"><div class=\"search-item-container drop-shadow\"><div class=\"img-container\"><img src=\"")
$c.w($i_escapeHtml(record.imgUrl))
$c.w("\"></div><h4 class=\"title\"><a href=\"")
$c.w($i_escapeHtml(record.viewItemUrl))
$c.w("\">")
$c.w($i_escapeHtml(record.title))
$c.w("</a></h4>")
$c.w($i_escapeHtml(record.description))
$c.w($i_if(record.featured,(function() {
var $c = new $_w();
$c.w("<div>Featured!</div>")

 return $c.getOutput();
})
))
$c.w($i_if(record.sizes,(function() {
var $c = new $_w();
$c.w("<div>Sizes available:<ul>")
$c.w($i_each(record.sizes,(function(size) {
var $c = new $_w();
$c.w("<li>")
$c.w($i_escapeHtml(size))
$c.w("</li>")

 return $c.getOutput();
})
))
$c.w("</ul></div>")

 return $c.getOutput();
})
))
$c.w("</div></div>")

 return $c.getOutput();
})
))
$c.w("</div></div></div></div>")

return $c.getOutput();
}
}