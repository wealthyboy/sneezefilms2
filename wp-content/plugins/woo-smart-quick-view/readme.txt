=== WPC Smart Quick View for WooCommerce ===
Contributors: wpclever
Donate link: https://wpclever.net
Tags: woocommerce, woo, smart, quickview, quick view, wpc
Requires at least: 4.0
Tested up to: 5.4
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

WPC Smart Quick View allows users to get a quick look of products without opening the product page.

== Description ==

**WPC Smart Quick View for WooCommerce** allows shop owners to set up a Quick view popup, which enables customers to get a quick summary of the product details without leaving the current page. WPC Smart Quick View brings about an advanced site navigation experience for your visitors and assists people in decision making; thus, turning more visitors into potential customers. It also helps to minimize the bounce rate and improve the site ranking. Besides, WPC Smart Quick View is fully optimized for SEO, compatible with any WordPress themes & WPML plugin for site translation. Especially, even on small screen hand-held devices, your site appearance would still be great thanks to the plugin’s high adaptability.

= Live demo =

Visit our [live demo](https://demo.wpclever.net/woosq/ "live demo") here to see how this plugin works.

= Features =

- Three types: button, link, or Quick view popup
- Diversifying button positions for choice
- Editable & translatable button text
- Navigation buttons: Next/Previous Products
- Beautiful effects: 8 different popup effects for choice
- Truly compatible with all kinds of WordPress themes
- Manually add the button on any page by using shortcodes
- Customizable visibility of Quick view button for certain selected categories
- Highly adaptable view for all screen resolutions, even small-screen devices
- A useful tool for improving your site’s search engine optimization
- WPML integration for building multilingual sites
- Premium: Customizable Quick view content
- Premium: Choose the image source, add lightbox images
- Premium: Product summary fields: Title, Rating, Price, Excerpt, Add to Cart, Meta
- Premium: Add to Cart button can function as a single page or the archive page
- Premium: Customizable the visibility and text for View Product Details button
- Premium: Lifetime update and dedicated support

= Translators =

Available languages: English (Default), German, Vietnamese

If you have created your own language pack, or have an update for an existing one, you can send [gettext PO and MO file](http://codex.wordpress.org/Translating_WordPress "Translating WordPress") to [us](https://wpclever.net/contact?utm_source=pot&utm_medium=woosq&utm_campaign=wporg "WPClever.net") so we can bundle it into WPC Smart Quick View.

= Need more features? =

Please try other plugins from us:

- [WPC Smart Compare](https://wordpress.org/plugins/woo-smart-compare/ "WPC Smart Compare")
- [WPC Smart Wishlist](https://wordpress.org/plugins/woo-smart-wishlist/ "WPC Smart Wishlist")
- [WPC Fly Cart](https://wordpress.org/plugins/woo-fly-cart/ "WPC Fly Cart")

= Need support? =

Visit [plugin documentation website](https://wpclever.net?utm_source=doc&utm_medium=woosq&utm_campaign=wporg "plugin documentation").

== Installation ==

1. Please make sure that you installed WooCommerce
2. Go to plugins in your dashboard and select "Add New"
3. Search for "WPC Smart Quick View", Install & Activate it
4. Go to settings page to choose position and effect as you want

== Frequently Asked Questions ==

= How to integrate with my theme? =

To integrate with a theme, please use bellow filter to hide the default buttons.

`add_filter( 'woosq_button_position', function() {
    return '0';
} );`

After that, use the shortcode to display the button where you want.

`echo do_shortcode('[woosq id="{product_id}"]');`

== Changelog ==

= 2.0.2 =
* Updated: Compatible with WordPress 5.4 & WooCommerce 4.0.1

= 2.0.1 =
* Fixed: Don't redirect to single product page after adding to cart

= 2.0.0 =
* Updated: Compatible with WooCommerce 4.0.0

= 1.3.5 =
* Updated: Optimized the code

= 1.3.4 =
* Updated: Compatible with WordPress 5.3.2 & WooCommerce 3.9.2

= 1.3.3 =
* Updated: Optimized the code

= 1.3.2 =
* Updated: Optimized the code

= 1.3.1 =
* Fixed: Quick view for variation product

= 1.3.0 =
* Updated: Compatible with WordPress 5.3 & WooCommerce 3.8.0

= 1.2.9 =
* Updated: Optimized the code

= 1.2.8 =
* Fixed: Button type
* Fixed: Some minor issues

= 1.2.7 =
* Updated: Optimized the code

= 1.2.6 =
* Added: Auto close after adding to the cart
* Added: Add button before the product's name

= 1.2.5 =
* Updated: Optimized the code

= 1.2.4 =
* Added: Filter for button html 'woosq_button_html'
* Updated: Optimized the code

= 1.2.3 =
* Updated: Optimized the code

= 1.2.2 =
* Fixed: Multiple select categories
* Updated: Compatible with WooCommerce 3.6.x

= 1.2.1 =
* Updated: Optimized the code

= 1.2.0 =
* Added: Only show the Quick View button for products in selected categories
* Fixed: Default button text can be translated

= 1.1.9 =
* Added: Choose the functionally for the add to cart button
* Updated: Optimized the code

= 1.1.8 =
* Fixed: Minor JS issue

= 1.1.7 =
* Compatible with WooCommerce 3.5.3
* Updated: Change the scrollbar style

= 1.1.6 =
* Added: German language (thanks to Rado Rethmann)
* Fixed: Quick view for products loaded by AJAX

= 1.1.5 =
* Updated: Change the plugin name
* Updated: Optimized the code

= 1.1.4 =
* Compatible with WooCommerce 3.5.0

= 1.1.3 =
* Updated: Optimize the code to reduce the loading time

= 1.1.2 =
* Fixed: Error when WooCommerce is not active

= 1.1.1 =
* Fixed: JS trigger
* Compatible with WooCommerce 3.4.5

= 1.1.0 =
* Updated: Settings page style

= 1.0.9 =
* Added JS trigger 'woosq_loaded' and 'woosq_open'

= 1.0.8 =
* Compatible with WooCommerce 3.4.2
* Optimized the code

= 1.0.7 =
* Fixed some minor CSS issues
* Compatible with WordPress 4.9.6

= 1.0.6 =
* Compatible with WooCommerce 3.3.5

= 1.0.5 =
* Compatible with WordPress 4.9.5

= 1.0.4 =
* Compatible with WooCommerce 3.3.3

= 1.0.3 =
* Compatible with WordPress 4.9.4
* Compatible with WooCommerce 3.3.1

= 1.0.2 =
* Update CSS enqueue

= 1.0.1 =
* New: WPML integration

= 1.0 =
* Released