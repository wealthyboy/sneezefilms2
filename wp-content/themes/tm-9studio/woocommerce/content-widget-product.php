<?php
/**
 * The template for displaying product widget entries.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-widget-product.php.
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.5.5
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $product;
?>
<li class="product_list_item">
	<?php do_action( 'woocommerce_widget_product_item_start', $args ); ?>
    <div class="product_list_item_left">
        <a href="<?php echo esc_url( $product->get_permalink() ); ?>">
			<?php echo wp_kses( $product->get_image(), 'insight-image' ); ?>
        </a>
    </div>
    <div class="product_list_item_right">
        <a href="<?php echo esc_url( $product->get_permalink() ); ?>">
            <span class="product-title"><?php echo esc_html( $product->get_name() ); ?></span>
        </a>
		<?php if ( ! empty( $show_rating ) ) : ?>
			<?php echo wc_get_rating_html( $product->get_average_rating() ); ?>
		<?php endif; ?>
		<?php echo wp_kses( $product->get_price_html(), 'insight-price' ); ?>
    </div>
	<?php do_action( 'woocommerce_widget_product_item_end', $args ); ?>
</li>
