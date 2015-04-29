/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20140114 */
(function(e){"use strict";e(document).on("cycle-bootstrap",function(e,t,i){"carousel"===t.fx&&(i.getSlideIndex=function(e){var t=this.opts()._carouselWrap.children(),i=t.index(e);return i%t.length},i.next=function(){var e=t.reverse?-1:1;t.allowWrap===!1&&t.currSlide+e>t.slideCount-t.carouselVisible||(t.API.advanceSlide(e),t.API.trigger("cycle-next",[t]).log("cycle-next"))})}),e.fn.cycle.transitions.carousel={preInit:function(t){t.hideNonActive=!1,t.container.on("cycle-destroyed",e.proxy(this.onDestroy,t.API)),t.API.stopTransition=this.stopTransition;for(var i=0;t.startingSlide>i;i++)t.container.append(t.slides[0])},postInit:function(t){var i,n,s,o,r=t.carouselVertical;t.carouselVisible&&t.carouselVisible>t.slideCount&&(t.carouselVisible=t.slideCount-1);var l=t.carouselVisible||t.slides.length,c={display:r?"block":"inline-block",position:"static"};if(t.container.css({position:"relative",overflow:"hidden"}),t.slides.css(c),t._currSlide=t.currSlide,o=e('<div class="cycle-carousel-wrap"></div>').prependTo(t.container).css({margin:0,padding:0,top:0,left:0,position:"absolute"}).append(t.slides),t._carouselWrap=o,r||o.css("white-space","nowrap"),t.allowWrap!==!1){for(n=0;(void 0===t.carouselVisible?2:1)>n;n++){for(i=0;t.slideCount>i;i++)o.append(t.slides[i].cloneNode(!0));for(i=t.slideCount;i--;)o.prepend(t.slides[i].cloneNode(!0))}o.find(".cycle-slide-active").removeClass("cycle-slide-active"),t.slides.eq(t.startingSlide).addClass("cycle-slide-active")}t.pager&&t.allowWrap===!1&&(s=t.slideCount-l,e(t.pager).children().filter(":gt("+s+")").hide()),t._nextBoundry=t.slideCount-t.carouselVisible,this.prepareDimensions(t)},prepareDimensions:function(t){var i,n,s,o,r=t.carouselVertical,l=t.carouselVisible||t.slides.length;if(t.carouselFluid&&t.carouselVisible?t._carouselResizeThrottle||this.fluidSlides(t):t.carouselVisible&&t.carouselSlideDimension?(i=l*t.carouselSlideDimension,t.container[r?"height":"width"](i)):t.carouselVisible&&(i=l*e(t.slides[0])[r?"outerHeight":"outerWidth"](!0),t.container[r?"height":"width"](i)),n=t.carouselOffset||0,t.allowWrap!==!1)if(t.carouselSlideDimension)n-=(t.slideCount+t.currSlide)*t.carouselSlideDimension;else for(s=t._carouselWrap.children(),o=0;t.slideCount+t.currSlide>o;o++)n-=e(s[o])[r?"outerHeight":"outerWidth"](!0);t._carouselWrap.css(r?"top":"left",n)},fluidSlides:function(t){function i(){clearTimeout(s),s=setTimeout(n,20)}function n(){t._carouselWrap.stop(!1,!0);var e=t.container.width()/t.carouselVisible;e=Math.ceil(e-r),t._carouselWrap.children().width(e),t._sentinel&&t._sentinel.width(e),l(t)}var s,o=t.slides.eq(0),r=o.outerWidth()-o.width(),l=this.prepareDimensions;e(window).on("resize",i),t._carouselResizeThrottle=i,n()},transition:function(t,i,n,s,o){var r,l={},c=t.nextSlide-t.currSlide,a=t.carouselVertical,d=t.speed;if(t.allowWrap===!1){s=c>0;var u=t._currSlide,p=t.slideCount-t.carouselVisible;c>0&&t.nextSlide>p&&u==p?c=0:c>0&&t.nextSlide>p?c=t.nextSlide-u-(t.nextSlide-p):0>c&&t.currSlide>p&&t.nextSlide>p?c=0:0>c&&t.currSlide>p?c+=t.currSlide-p:u=t.currSlide,r=this.getScroll(t,a,u,c),t.API.opts()._currSlide=t.nextSlide>p?p:t.nextSlide}else s&&0===t.nextSlide?(r=this.getDim(t,t.currSlide,a),o=this.genCallback(t,s,a,o)):s||t.nextSlide!=t.slideCount-1?r=this.getScroll(t,a,t.currSlide,c):(r=this.getDim(t,t.currSlide,a),o=this.genCallback(t,s,a,o));l[a?"top":"left"]=s?"-="+r:"+="+r,t.throttleSpeed&&(d=r/e(t.slides[0])[a?"height":"width"]()*t.speed),t._carouselWrap.animate(l,d,t.easing,o)},getDim:function(t,i,n){var s=e(t.slides[i]);return s[n?"outerHeight":"outerWidth"](!0)},getScroll:function(e,t,i,n){var s,o=0;if(n>0)for(s=i;i+n>s;s++)o+=this.getDim(e,s,t);else for(s=i;s>i+n;s--)o+=this.getDim(e,s,t);return o},genCallback:function(t,i,n,s){return function(){var i=e(t.slides[t.nextSlide]).position(),o=0-i[n?"top":"left"]+(t.carouselOffset||0);t._carouselWrap.css(t.carouselVertical?"top":"left",o),s()}},stopTransition:function(){var e=this.opts();e.slides.stop(!1,!0),e._carouselWrap.stop(!1,!0)},onDestroy:function(){var t=this.opts();t._carouselResizeThrottle&&e(window).off("resize",t._carouselResizeThrottle),t.slides.prependTo(t.container),t._carouselWrap.remove()}}})(jQuery);