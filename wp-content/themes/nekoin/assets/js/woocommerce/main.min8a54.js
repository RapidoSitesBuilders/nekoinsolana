!function(s){"use strict";var t=s("body"),i=!1;function o(o,e=!1){i&&i.abort(),i=s.ajax({type:"GET",url:o,beforeSend:function(){var t=s("ul.nart-products");e||t.addClass("preloader")},success:function(t){t=s(t);e?s("#main ul.nart-products").append(t.find("#main ul.nart-products > li")):s("#main ul.nart-products").replaceWith(t.find("#main ul.nart-products")),s("#main .woocommerce-pagination-wrap").replaceWith(t.find("#main .woocommerce-pagination-wrap")),window.history.pushState(null,null,o),i=!1,s(document).trigger("nart-products-loaded")}})}function e(){"function"==typeof s.fn.waypoint&&s(".products-load-more-btn.load-on-scroll").waypoint(function(){s(".products-load-more-btn.load-on-scroll").trigger("click")},{offset:"100%"})}t.on("change",".nart-products-per-page #per_page",function(t){t.preventDefault(),o(this.value)}),t.on("click",".products-load-more-btn",function(t){t.preventDefault(),s(this).addClass("loading"),o(s(this).attr("href"),!0)}),s(document).ready(function(){var t;(t=s(".widget_product_categories").find("ul")).length&&t.find("li").each(function(){var o=s(this),t=o.find("> a"),e=o.find("> ul.children");e.length&&(o.hasClass("closed")?(e.hide(),t.before('<i class="icon-plus"></i>')):(o.hasClass("opened")||o.addClass("opened"),t.before('<i class="icon-minus"></i>')),o.find("i").on("click",function(t){e.slideToggle("slow"),o.hasClass("closed")?(o.removeClass("closed").addClass("opened"),o.find(">i").removeClass("icon-plus").addClass("icon-minus")):(o.removeClass("opened").addClass("closed"),o.find(">i").removeClass("icon-minus").addClass("icon-plus")),t.stopImmediatePropagation()}),o.on("click",function(t){s(t.target).filter("a").length||(e.slideToggle("slow"),o.hasClass("closed")?(o.removeClass("closed").addClass("opened"),o.find("i").removeClass("icon-plus").addClass("icon-minus")):(o.removeClass("opened").addClass("closed"),o.find("i").removeClass("icon-minus").addClass("icon-plus")),t.stopImmediatePropagation())}))})}).on("nart-products-loaded",function(){s(".products-load-more-btn").removeClass("loading"),e()}),t.on("click",".widget.nart-widget-woocommerce .widgettitle",function(t){t.preventDefault();t=s(this).closest(".nart-menu-filter");t.length?s(this).hasClass("toggled-on")?s(this).removeClass("toggled-on").siblings(".widget-content").stop().slideUp().closest(".widget").removeClass("active"):(t.find(".toggled-on").removeClass("toggled-on"),t.find(".widget-content").stop().slideUp(),t.find(".widget").removeClass("active"),s(this).addClass("toggled-on").siblings(".widget-content").stop().slideDown().closest(".widget").addClass("active")):s(this).toggleClass("toggled-on").siblings(".widget-content").stop().slideToggle().closest(".widget").toggleClass("active")}),e(),s(".woocommerce-ordering select").change(function(){var t=s(this).find("option:selected").text(),t=s("<select/>").append(s("<option/>").text(t));s(this).after(t),s(this).width(t.width()),t.remove()}).change(),s("body").on("click",".product-block .product-color .item",function(){var t=s(this).data("image"),o=s(this).closest(".product-block").find(".product-image img");o.attr("src",t.src),o.attr("srcset",t.srcset),o.attr("sizes",t.sizes),s(this).hasClass("active-swatch")||(s(this).parent().find(".active-swatch").removeClass("active-swatch"),s(this).addClass("active-swatch"))}),s("body").on("mouseenter",".group-action .add_to_cart_tooltips:not(.tooltipstered), .group-action .woosw-btn:not(.tooltipstered), .group-action .woosq-btn:not(.tooltipstered), .group-action .woosc-btn:not(.tooltipstered)",function(){var t=s(this);void 0!==s.fn.tooltipster&&t.tooltipster({position:"top",functionBefore:function(t,o){t.content(t._$origin.text())},theme:"opal-product-tooltipster",delay:0,animation:"grow"}).tooltipster("show")}),s(document).on("added_to_wishlist removed_from_wishlist",function(){var o=s(".header-wishlist .count, .footer-wishlist .count, .header-wishlist .wishlist-count-item");s.ajax({url:yith_wcwl_l10n.ajax_url,data:{action:"yith_wcwl_update_wishlist_count"},dataType:"json",success:function(t){o.html(t.count),s(".wishlist-count-text").html(t.text)}})}),s("body").on("woosw_change_count",function(t,o){var e=s(".header-wishlist .count, .footer-wishlist .count, .header-wishlist .wishlist-count-item");s.ajax({url:woosw_vars.ajax_url,data:{action:"woosw_ajax_update_count"},dataType:"json",success:function(t){s(".wishlist-count-text").html(t.text)}}),e.html(o)})}(jQuery);