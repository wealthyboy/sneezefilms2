<?php
/**
 * Load Insight Framework.
 *
 * @since 0.9.4
 */

$theme = wp_get_theme();

if ( ! empty( $theme['Template'] ) ) {
	$theme = wp_get_theme( $theme['Template'] );
}

define( 'INSIGHT_SITE_HOME', esc_url( get_home_url( '/' ) ) );
define( 'INSIGHT_THEME_NAME', $theme['Name'] );
define( 'INSIGHT_THEME_SLUG', $theme['Template'] );
define( 'INSIGHT_THEME_VERSION', $theme['Version'] );
define( 'INSIGHT_THEME_DIR', get_template_directory() );
define( 'INSIGHT_THEME_URI', get_template_directory_uri() );
define( 'INSIGHT_CHILD_THEME_URI', get_stylesheet_directory_uri() );
define( 'INSIGHT_CHILD_THEME_DIR', get_stylesheet_directory() );
define( 'INSIGHT_SHORTCODE_CATEGORY', sprintf( esc_html__( 'by %s', 'tm-9studio' ), INSIGHT_THEME_NAME ) );

if ( ! defined( 'DS' ) ) {
	define( 'DS', DIRECTORY_SEPARATOR );
}

require_once INSIGHT_THEME_DIR . '/framework/class-posttypes.php';
require_once INSIGHT_THEME_DIR . '/framework/class-customize.php';
require_once INSIGHT_THEME_DIR . '/framework/class-enqueue.php';
require_once INSIGHT_THEME_DIR . '/framework/class-fonticon.php';
require_once INSIGHT_THEME_DIR . '/framework/class-functions.php';
require_once INSIGHT_THEME_DIR . '/framework/class-helper.php';
require_once INSIGHT_THEME_DIR . '/framework/class-import.php';
require_once INSIGHT_THEME_DIR . '/framework/class-init.php';
require_once INSIGHT_THEME_DIR . '/framework/class-kirki.php';
require_once INSIGHT_THEME_DIR . '/framework/class-metabox.php';
require_once INSIGHT_THEME_DIR . '/framework/class-plugins.php';
require_once INSIGHT_THEME_DIR . '/framework/class-static.php';
require_once INSIGHT_THEME_DIR . '/framework/class-templates.php';
require_once INSIGHT_THEME_DIR . '/framework/class-like.php';
require_once INSIGHT_THEME_DIR . '/framework/class-woo.php';
require_once INSIGHT_THEME_DIR . '/framework/class-kses.php';

require_once INSIGHT_THEME_DIR . '/framework/tgm-plugin-activation.php';
require_once INSIGHT_THEME_DIR . '/framework/tgm-plugin-registration.php';

// Extend VC
if ( class_exists( 'WPBakeryVisualComposerAbstract' ) ) {
	require_once INSIGHT_THEME_DIR . '/vc-extend/index.php';
}

Insight_Init::instance();
