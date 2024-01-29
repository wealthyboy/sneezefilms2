<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}
// This is needed to extract $font_container_data and $google_fonts_data
extract( $this->getAttributes( $atts ) );

$atts = vc_map_get_attributes( $this->getShortcode(), $atts );
extract( $atts );

extract( $this->getStyles( $el_class, $css, $google_fonts_data, $font_container_data, $atts ) );

$settings = get_option( 'wpb_js_google_fonts_subsets' );
if ( is_array( $settings ) && ! empty( $settings ) ) {
	$subsets = '&subset=' . implode( ',', $settings );
} else {
	$subsets = '';
}

if ( isset( $google_fonts_data['values']['font_family'] ) ) {
	wp_enqueue_style( 'vc_google_fonts_' . vc_build_safe_css_class( $google_fonts_data['values']['font_family'] ), '//fonts.googleapis.com/css?family=' . $google_fonts_data['values']['font_family'] . $subsets );
}

if ( empty( $styles ) ) {
	$styles = array();
}

if ( ! empty( $font_weight ) ) {
	$styles[] = 'font-weight: ' . $font_weight;
}
if ( ! empty( $text_transform ) ) {
	$styles[] = 'text-transform: ' . $text_transform;
}
if ( ! empty( $letter_spacing ) ) {
	$styles[] = 'letter-spacing: ' . $letter_spacing;
}

if ( ! empty( $styles ) ) {
	$style = esc_attr( implode( ';', $styles ) );
} else {
	$style = '';
}

if ( 'post_title' === $source ) {
	$text = get_the_title( get_the_ID() );
}

if ( ! empty( $link ) ) {
	$link = vc_build_link( $link );
	$text = '<a href="' . esc_attr( $link['url'] ) . '"'
	        . ( $link['target'] ? ' target="' . esc_attr( $link['target'] ) . '"' : '' )
	        . ( $link['title'] ? ' title="' . esc_attr( $link['title'] ) . '"' : '' )
	        . '>' . $text . '</a>';
}

if ( ! empty( $extending_style ) ) {
	$css_class .= ' ' . $extending_style;
}
if ( ! empty( $cst_color ) ) {
	$css_class .= ' ' . $cst_color;
}

$output = '';

$uid = uniqid( 'heading-' );
Insight_Helper::apply_style( $style, '#' . $uid );

if ( apply_filters( 'vc_custom_heading_template_use_wrapper', false ) ) {
	$output .= '<div id="' . esc_attr( $uid ) . '" class="' . esc_attr( $css_class ) . '">';
	$output .= '<' . $font_container_data['values']['tag'] . '>';
	$output .= $text;
	$output .= '</' . $font_container_data['values']['tag'] . '>';
	$output .= '</div>';
} else {
	$output .= '<' . $font_container_data['values']['tag'] . ' id="' . esc_attr( $uid ) . '" class="' . esc_attr( $css_class ) . '">';
	$output .= do_shortcode( $text );
	$output .= '</' . $font_container_data['values']['tag'] . '>';
}

echo '' . ( $output );
