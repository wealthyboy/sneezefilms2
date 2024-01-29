<?php
/**
 * Product loop sale flash
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/sale-flash.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see        https://docs.woocommerce.com/document/template-structure/
 * @package    WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $post, $product;

echo '<div class="woo-badges">';
if ( ! $product->is_in_stock() ) {
	//outofstock
	echo '<span class="outofstock">' . esc_html__( 'Out of stock', 'tm-9studio' ) . '</span>';
} else {
	//hot
	if ( $product->is_featured() ) {
		echo '<span class="hot">' . esc_html__( 'Hot', 'tm-9studio' ) . '</span>';
	}
	//sale
	if ( $product->is_on_sale() ) {
		echo apply_filters( 'woocommerce_sale_flash', '<span class="sale">' . esc_html__( 'Sale', 'tm-9studio' ) . '</span>', $post, $product );
	}
	//new
	$postdate       = get_the_time( 'Y-m-d', $post->ID );
	$postdate_stamp = strtotime( $postdate );
	$new_days       = Insight::setting( 'shop_archive_new_days' );
	if ( ( time() - ( 60 * 60 * 24 * $new_days ) ) < $postdate_stamp ) {
		echo '<span class="new">' . esc_html__( 'New', 'tm-9studio' ) . '</span>';
	}
}
echo '</div>';