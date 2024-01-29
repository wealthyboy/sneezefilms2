/*
 * Script for our theme
 * Written By: Insight
 * */

// define insight
'use strict';

window.insight = {};

jQuery( document ).ready( function( $ ) {
	$( '.insight-project-video, .insight-light-video, .insight-video, .insight-one-page .video-inner, .insight-video-button' ).lightGallery();

	$( '.insight-dot-style01' ).on( 'click', function() {
		$( this ).addClass( 'active' ).closest( '.tp-parallax-wrap' ).siblings().find( '.insight-dot-style01' ).removeClass( 'active' );
	} );

	// Team filter
	jQuery( '.insight-team-filter' ).insightFilter();
	jQuery( '.insight-filter-scroll' ).insightFilterScroll();

	// Project masonry filter
	jQuery( '.insight-project-masonry' ).insightFilter();

	// Project filter
	jQuery( '.insight-project-filter' ).insightFilter();

	setTimeout( function() { // Project Justified
		jQuery( '.insight-project-justified-items' ).justifiedGallery( {
			rowHeight: 450,
			margins: 20,
			border: 0
		} );
	}, 300 );

	jQuery( '.insight-post-slider .post-slider' ).slick();
	$( '.insight-post-slider .post-slider' ).on( 'beforeChange', function( event, slick, currentSlide, nextSlide ) {
		var nav = $( this ).next( '.slider-nav-container' ).find( 'li[data-slide=' + nextSlide + ']' );
		nav.css( {display: 'none'} ).siblings().css( {display: 'block'} );
	} );
	jQuery( '.slider-nav-container li' ).on( 'click', function() {
		jQuery( '.insight-post-slider .post-slider' ).slick( 'slickGoTo', $( this ).data( 'slide' ), false );
	} );

	// One page scroll
	if ( jQuery( '.insight-one-page' ).length > 0 ) {
		if ( jQuery( window ).width() > 969 ) {
			onePageScroll();
		}
	}

	// Set height for onepage-scroll
	function onePageScroll() {
		var $opScroll = jQuery( '.insight-one-page' );
		var $hWindows = jQuery( window ).height();
		$opScroll.onepage_scroll( {
			sectionContainer: '.insight-one-page-item',
			loop: false
		} );
		$opScroll.css( 'height', $hWindows + 'px' );
	}

	// Open right
	$( '#open-right, .open-right-close' ).on( 'click', function() {
		$( 'body' ).toggleClass( 'body-open-right' );
		$( '.open-right-content' ).toggleClass( 'open' );
	} );

	// Counter
	$( '[data-counter]' ).each( function() {
		var el = document.getElementById( $( this ).attr( 'id' ) );
		var v = $( this ).data( 'counter' );
		var o = new Odometer( {
			el: this,
			value: 0,
			format: $( this ).data( 'format' ),
		} );
		o.render();
		var waypoint = new Waypoint( {
			element: el,
			handler: function() {
				o.update( v );
			},
			duration: 0,
			offset: '100%',
			animation: 'count'
		} );
	} );

	// Counter w/ class
	$( '.counter' ).each( function() {
		var el = document.getElementById( $( this ).attr( 'id' ) );
		var v = $( this ).html();
		var o = new Odometer( {
			el: this,
			value: 0,
		} );
		o.render();
		var waypoint = new Waypoint( {
			element: el,
			handler: function() {
				o.update( v );
			},
			duration: 0,
			offset: '100%',
			animation: 'count'
		} );
	} );

	// Search
	var topSearch = $( '.top-search' );
	var topSearchMobile = $( '.top-search-mobile' );
	jQuery( '#open-search' ).on( 'click', function() {
		if ( ! topSearch.hasClass( 'open' ) ) {
			topSearch.addClass( 'open' );
			topSearch.slideDown();
			topSearch.find( '.top-search-input' ).focus();
		} else {
			topSearch.slideUp();
			topSearch.removeClass( 'open' );
		}
	} );
	jQuery( '#open-search-mobile' ).on( 'click', function() {
		if ( ! topSearchMobile.hasClass( 'open' ) ) {
			topSearchMobile.addClass( 'open' );
			topSearchMobile.slideDown();
			topSearchMobile.find( '.top-search-input' ).focus();
		} else {
			topSearchMobile.slideUp();
			topSearchMobile.removeClass( 'open' );
		}
	} );
	jQuery( document ).on( 'click', function( e ) {
		if ( (
			     jQuery( e.target ).closest( topSearch ).length == 0
		     ) && (
			     jQuery( e.target ).closest( '#open-search' ).length == 0
		     ) && (
			     jQuery( e.target ).closest( topSearchMobile ).length == 0
		     ) && (
			     jQuery( e.target ).closest( '#open-search-mobile' ).length == 0
		     ) ) {
			if ( topSearch.hasClass( 'open' ) ) {
				topSearch.slideUp();
				topSearch.removeClass( 'open' );
			}
			if ( topSearchMobile.hasClass( 'open' ) ) {
				topSearchMobile.slideUp();
				topSearchMobile.removeClass( 'open' );
			}
		}
	} );

	// Like
	jQuery( '.jm-post-like' ).on( 'click', function( event ) {
		event.preventDefault();
		var heart = jQuery( this );
		var post_id = heart.data( 'post_id' );
		heart.addClass( 'loading' );
		jQuery.ajax( {
			type: 'post',
			url: ajax_var.url,
			data: 'action=jm-post-like&nonce=' + ajax_var.nonce + '&jm_post_like=&post_id=' + post_id,
			success: function( count ) {
				if ( count.indexOf( 'already' ) !== - 1 ) {
					var lecount = count.replace( 'already', '' );
					if ( lecount === '0' ) {
						lecount = '0 Like';
					}
					heart.prop( 'title', 'Like' );
					heart.removeClass( 'liked' );
					heart.removeClass( 'loading' );
					heart.html( lecount );
				} else {
					heart.prop( 'title', 'Unlike' );
					heart.addClass( 'liked' );
					heart.removeClass( 'loading' );
					heart.html( count );
				}
			}
		} );
	} );

	// Scroll to top
	jQuery( '#backtotop' ).on( 'click', function( evt ) {
		$( 'html, body' ).animate( {scrollTop: 0}, 600 );
		evt.preventDefault();
	} );

	// fitVids
	if ( jQuery().fitVids ) {
		$( '.container' ).fitVids();
	}

	jQuery( '.footer-newsletter' ).each( function() {
		jQuery( this ).css( 'background-image', 'url("' + jQuery( this ).attr( 'data-bg' ) + '")' )
	} );

	jQuery( 'body' ).each( function() {
		if ( jQuery( this ).attr( 'data-bg' ) != '' ) {
			jQuery( this ).css( 'background-image', 'url("' + jQuery( this ).attr( 'data-bg' ) + '")' )
		}
	} );

	// Member skill
	jQuery( '.insight-member-skill' ).inViewport( function( px ) {
		if ( px ) {
			jQuery( this ).find( '.line-inner' ).each( function() {
				jQuery( this ).css( 'width', jQuery( this ).attr( 'data-width' ) + '%' );
			} );
		} else {
			jQuery( this ).find( '.line-inner' ).each( function() {
				jQuery( this ).css( 'width', '0%' );
			} );
		}
	} );

	// Typed
	jQuery( '.vc_custom_heading.typed' ).each( function() {
		var _this_id = jQuery( this ).attr( 'id' );
		var _this_mark = jQuery( this ).find( 'mark' );
		var texts = _this_mark.text().split( ',' );
		_this_mark.html( '' );
		new Typed( '#' + _this_id + ' mark', {
			strings: texts,
			loop: true,
			typeSpeed: 50,
			backDelay: 1500,
			cursorChar: '_'
		} );
	} );

	// Instagram
	jQuery( '.insight-instagram-feed-items' ).slick( {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		dots: false,
		arrows: false
	} );

	insightGalleryFullScreen();
} );

jQuery( window ).on( 'resize', function() {
	insightGalleryFullScreen();
} );

function insightGalleryFullScreen() {
	// Gallery Full Screen
	var ww = jQuery( window ).width();
	var wh = jQuery( window ).height();
	if ( jQuery( window ).width() >= 1024 ) {
		jQuery( '.insight-gallery-fullscreen' ).width( ww ).height( wh );
	} else {
		jQuery( '.insight-gallery-fullscreen' ).width( 'auto' ).height( 'auto' );
	}
	jQuery( '.insight-gallery-fullscreen' ).lightGallery( {
		selector: 'a'
	} );
}

// About shortcode
(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			AboutShortcode: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					$( '.insight-about--carousel' ).slick( {
						infinite: true,
						slidesToShow: 4,
						slidesToScroll: 1,
						autoplay: true,
						nextArrow: '<span class="about-next ion-ios-arrow-thin-right"></span>',
					} );
					$( '.insight-about--carousel .slick-track' ).lightGallery( {
						thumbnail: true,
						animateThumb: false,
						showThumbByDefault: false
					} );
				},

			}
		} );
	}
).apply( this, [window.insight, jQuery] );

// Masonry Blog
(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			MasonryBlog: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					var $masonry = $( '.blog-grid' );

					$masonry.isotope( {
						itemSelector: '.post',
						percentPosition: true,
					} ).imagesLoaded().progress( function() {
						$masonry.isotope( 'layout' );
					} );
				},

			}
		} );
	}
).apply( this, [window.insight, jQuery] );

// GalleryLight
(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			GalleryLight: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					var tmGalleryGrid = $( '.insight-gallery .insight-gallery-images' );
					var $optionSets = $( '.insight-gallery-filter ul' );
					var tmGalleryLb = tmGalleryGrid.lightGallery( {
						selector: '.isotope-show',
						thumbnail: true,
						animateThumb: false,
						showThumbByDefault: false
					} );

					$( window ).resize( function() {
						var bh = tmGalleryGrid.find( '.base-item .insight-gallery-image' ).height();
						var mrgBottom = 30;
						if ( tmGalleryGrid.closest( '.gallery-v1' ).length > 0 ) {
							mrgBottom = 10;
						}
						tmGalleryGrid.find( '.x2, .h-x2' ).height( bh * 2 + mrgBottom );
						tmGalleryGrid.find( '.w-x2' ).height( bh );
						tmGalleryGrid.find( '.h-x1point5' ).height( bh + (
							bh / 2
						) );
					} );

					tmGalleryGrid.imagesLoaded().progress( function() {
						setTimeout( function() {
							tmGalleryGrid.isotope();
						}, 300 );
					} );

					if ( typeof Isotope != 'undefined' ) {
						var itemReveal = Isotope.Item.prototype.reveal,
							itemHide = Isotope.Item.prototype.hide;

						Isotope.Item.prototype.reveal = function() {
							itemReveal.apply( this, arguments );
							$( this.element ).removeClass( 'isotope-hide' ).addClass( 'isotope-show' );
						}

						Isotope.Item.prototype.hide = function() {
							itemHide.apply( this, arguments );
							$( this.element ).addClass( 'isotope-hide' ).removeClass( 'isotope-show' );
						}
					}

					$optionSets.find( 'a' ).on( 'click', function() {
						var $this = $( this );
						var $optionSet = $this.parents( '.insight-gallery-filter ul' );
						$optionSet.find( '.active' ).removeClass( 'active' );
						$this.addClass( 'active' );
						// make option object dynamically, i.e. { filter: '.my-filter-class' }
						var options = {},
							key = $optionSet.attr( 'data-option-key' ),
							value = $this.attr( 'data-option-value' );

						// parse 'false' as false boolean
						value = value === 'false' ? false : value;
						options[key] = value;
						if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
							changeLayoutMode( $this, options );
						} else {
							// otherwise, apply new options
							$this.closest( '.insight-gallery' ).find( '.insight-gallery-images' ).isotope( options );
						}
						if ( tmGalleryLb.data( 'lightGallery' ) ) {
							tmGalleryLb.data( 'lightGallery' ).destroy( true );
							tmGalleryLb = tmGalleryGrid.lightGallery( {
								selector: '.isotope-show',
								thumbnail: true,
								animateThumb: false,
								showThumbByDefault: false
							} );
						}
						return false;
					} );
				}
			}
		} );
	}
).apply( this, [window.insight, jQuery] );

// Vimenu
(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			MenuMobile: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {

					$( '#open-left' ).vimenu();

					//show submenu
					var $menu = $( '#mobile .menu-item-has-children' );

					$menu.append( '<i class="sub-menu-toggle"></i>' );
					$menu.addClass( 'hello-shank' );
					$menu.find( '.sub-menu-toggle' ).on( 'click', function( e ) {
						var subMenu = $( this ).prev();

						if ( subMenu.css( 'display' ) == 'block' ) {
							subMenu.css( 'display', 'block' ).slideUp().parent().removeClass( 'expand' );
						} else {
							subMenu.css( 'display', 'none' ).slideDown().parent().addClass( 'expand' );
						}
						e.stopPropagation();
					} );
				},
			}
		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		function insightOnReady() {
			// Menu mobile
			if ( typeof insight.MenuMobile !== 'undefined' ) {
				insight.MenuMobile.init();
			}
			// Carousel
			if ( typeof insight.Carousel !== 'undefined' ) {
				insight.Carousel.init();
			}
			// AboutShortcode
			if ( typeof insight.AboutShortcode !== 'undefined' ) {
				insight.AboutShortcode.init();
			}
			// MasonryBlog
			if ( typeof insight.MasonryBlog !== 'undefined' ) {
				insight.MasonryBlog.init();
			}
			// GalleryLight
			if ( typeof insight.GalleryLight !== 'undefined' ) {
				insight.GalleryLight.init();
			}
			// Woo
			if ( typeof insight.Woo !== 'undefined' ) {
				insight.Woo.init();
			}
			// OnepageScroll
			if ( typeof insight.OnepageScroll !== 'undefined' ) {
				insight.OnepageScroll.init();
			}
		}

		$( document ).ready( function() {
			insightOnReady();
		} );
	}.apply( this, [window.insight, jQuery] )
);

// Carousel
(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			Carousel: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					$( '.insight-carousel' ).slick( {
						responsive: [
							{
								breakpoint: 1024,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 3,
									infinite: true,
									dots: true
								}
							}, {
								breakpoint: 800,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2
								}
							}, {
								breakpoint: 480,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1
								}
							}
						],
						infinite: true,
						draggable: true,
					} );
				},
			}
		} );
	}
).apply( this, [window.insight, jQuery] );

// Accordion
(
	function( $ ) {
		$.fn.insightAccordion = function() {
			var thisAcc = this;
			thisAcc.find( '.title' ).on( 'click', function() {
				thisAcc.find( '.item' ).removeClass( 'active' );
				$( this ).parent().addClass( 'active' );
			} );
		};
	}( jQuery )
);

// Filter
(
	function( $ ) {
		$.fn.insightFilter = function() {
			var thisFilter = this;
			thisFilter.find( '.insight-filter a' ).on( 'click', function() {
				thisFilter.find( '.insight-filter a' ).removeClass( 'active' );
				$( this ).addClass( 'active' );
				var dataFilter = $( this ).attr( 'data-filter' );
				if ( dataFilter == 'insight-all' ) {
					thisFilter.find( '.insight-filter-item' ).removeClass( 'insight-hide' );
				} else {
					thisFilter.find( '.insight-filter-item' ).each( function() {
						if ( $( this ).hasClass( dataFilter ) ) {
							$( this ).removeClass( 'insight-hide' );
						} else {
							$( this ).addClass( 'insight-hide' );
						}
					} );
				}
			} );
		};
	}( jQuery )
);

// Horizontal scroll
(
	function( $ ) {
		$.fn.insightFilterScroll = function() {
			var thisFilter = this;
			var thisFilterUl = thisFilter.find( 'ul' );
			var thW = 0;
			thisFilterUl.find( 'li' ).each( function() {
				thW += $( this ).outerWidth();
			} );

			thisFilter.mousemove( function( e ) {
				var blW = thisFilter.outerWidth();
				if ( thW > blW ) {
					var offset = thisFilter.offset();
					var mX = e.pageX - offset.left;
					var mM = (
						         thW - blW
					         ) * mX / blW;
					thisFilterUl.css( {marginLeft: - mM} );
				}
			} );
		};
	}( jQuery )
);

// inViewport
(
	function( $, win ) {
		$.fn.inViewport = function( cb ) {
			return this.each( function( i, el ) {
				function visPx() {
					var H = $( this ).height(),
						r = el.getBoundingClientRect(), t = r.top, b = r.bottom;
					return cb.call( el, Math.max( 0, t > 0 ? H - t : (
						b < H ? b : H
					) ) );
				}

				visPx();
				$( win ).on( "resize scroll", visPx );
			} );
		};
	}( jQuery, window )
);

// WooCommerce
(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			Woo: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					jQuery( '.woo-single-images .woocommerce-main-image' ).lightGallery( {
						selector: 'a',
						thumbnail: true,
						animateThumb: false,
						showThumbByDefault: false
					} );

					jQuery( '.woo-single-images .woocommerce-main-image' ).slick( {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: true,
						fade: true,
						asNavFor: '.woo-single-images .thumbnails'
					} );

					jQuery( '.woo-single-images .thumbnails' ).slick( {
						slidesToShow: 4,
						slidesToScroll: 1,
						asNavFor: '.woo-single-images .woocommerce-main-image',
						dots: false,
						arrows: false,
						centerMode: false,
						focusOnSelect: true
					} );

					jQuery( '.related .woo-products, .up-sells .woo-products' ).slick( {
						slidesToShow: 3,
						slidesToScroll: 1,
						dots: true,
						arrows: false,
						responsive: [
							{
								breakpoint: 1024,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 3,
									infinite: true,
									dots: true
								}
							}, {
								breakpoint: 800,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2
								}
							}, {
								breakpoint: 480,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1
								}
							}
						]
					} );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

// Onepage Scroll
(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			OnepageScroll: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					// One page scroll
					if ( jQuery( 'body' ).hasClass( 'onepage-scroll' ) ) {
						if ( jQuery( 'body' ).hasClass( 'onepage-responsive' ) ) {
							if ( jQuery( window ).width() >= 1024 ) {
								onepageScroll();
							}
						} else {
							onepageScroll();
						}
					}

					// Set height for onepage-scroll
					function onepageScroll() {
						var $opScroll = jQuery( '.entry-content' );
						var $hWindows = jQuery( window ).height();
						$opScroll.onepage_scroll( {
							sectionContainer: '.onepage',
							loop: false
						} );
						$opScroll.css( 'height', $hWindows + 'px' );
						jQuery( window ).trigger( 'resize' );
					}
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );
