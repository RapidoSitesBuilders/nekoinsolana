!function(d){"use strict";d(document).ready(function(){var i,r,t,a,o,n,s;i=!1,r=d(".woocommerce-product-search"),t=d(".ajax-search .woocommerce-product-search .search-field"),a=d(".ajax-search-result"),o=wp.template("ajax-live-search-template"),n=d(".input-dropdown-inner"),s=d("> .list-wrapper",n),d("body").on("click",function(){a.hide(),s.slideUp(100),n.removeClass("dd-shown")}),d(".input-dropdown-inner > a").on("click",function(e){return e.preventDefault(),n.hasClass("dd-shown")?(n.removeClass("dd-shown"),s.slideUp(100)):(n.addClass("dd-shown"),s.slideDown(100)),a.hide(),!1}),d(".input-dropdown-inner > .list-wrapper").on("click","a",function(e){e.preventDefault();var e=d(this).data("val"),n=d(this).text();d(".input-dropdown-inner > .list-wrapper").find(".current-item").removeClass("current-item"),d(this).parent().addClass("current-item"),0!=e?s.find("ul:not(.children) > li:first-child").show():0==e&&s.find("ul:not(.children) > li:first-child").hide(),d(".input-dropdown-inner > a span").text(n),d(".input-dropdown-inner > select").val(e).trigger("cat_selected"),s.slideUp(100),r.trigger("search",[t.val(),e])}),d(".input-dropdown-inner > select").change(function(){var e=d(this).val(),n=d(this).find("option:selected").text();d(".input-dropdown-inner > .list-wrapper").find(".current-item").removeClass("current-item"),d(this).parent().addClass("current-item"),0!=e?s.find("ul:not(.children) > li:first-child").show():0==e&&s.find("ul:not(.children) > li:first-child").hide(),d(".input-dropdown-inner > a span").text(n)}),t.length&&t.keyup(function(){var e=d('select[name="product_cat"]',r).val();r.trigger("search",[this.value,e])}).on("click",function(e){e.stopPropagation()}).on("focus",function(e){s.slideUp(100),n.removeClass("dd-shown"),2<this.value.length&&a.show()}),r.on("search",function(e,n,t){2<n.length?(i&&i.abort(),i=d.ajax({url:nartAjax.ajaxurl,type:"post",data:{action:"nart_ajax_search_products",query:n,product_cat:t},beforeSend:function(){r.addClass("loading")},success:function(e){r.removeClass("loading");e=d.parseJSON(e);a.empty(),a.show(),d.each(e,function(e,n){a.append(o({url:n.url,title:n.value,img:n.img,price:n.price}))})}})):a.hide()})})}(jQuery);