(function($){"use strict";$(window).on('elementor/frontend/init',()=>{elementorFrontend.hooks.addAction('frontend/element_ready/nart-service.default',($element)=>{let addHandler=$('.nart-swiper',$element);if(addHandler.length>0){elementorFrontend.elementsHandler.addHandler(nartSwiperBase,{$element,});}});});})(jQuery);