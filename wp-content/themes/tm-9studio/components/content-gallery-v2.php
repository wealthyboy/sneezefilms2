<?php
/**
 * Template part for displaying posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package tm-9studio
 */
$terms = get_the_terms( get_the_ID(), 'ic_gallery_category' );

$terms_slugs = array();
$terms_names = array();

foreach ( $terms as $term ) {
	$terms_slugs[] = $term->slug;
	$terms_names[] = $term->name;
}

Insight_Helper::$class_name = 'col-md-4';

if ( Insight_Helper::$current_index == 0 || Insight_Helper::$current_index == 6 ) {
	Insight_Helper::$class_name .= ' h-x2';
} elseif ( Insight_Helper::$current_index == 2 || Insight_Helper::$current_index == 8 ) {
	Insight_Helper::$class_name .= ' h-x1point5';
} elseif ( Insight_Helper::$current_index == 5 ) {
	Insight_Helper::$class_name = 'col-md-8 w-x2 h-x1point5';
} elseif ( Insight_Helper::$current_index == 1 ) {
	Insight_Helper::$class_name .= ' base-item';
}

$img_id = get_post_thumbnail_id( get_the_ID() );
?>
<div
        id="post-<?php the_ID(); ?>" <?php post_class( 'insight-gallery-item isotope-show ' . esc_attr( implode( ' ', $terms_slugs ) ) . ' ' . Insight_Helper::$class_name ); ?>
        data-src="<?php echo esc_url( Insight_Helper::img_fullsize( $img_id ) ) ?>">
    <div class="insight-gallery-image">
		<?php
		if ( Insight_Helper::$current_index == 0 || Insight_Helper::$current_index == 6 ) {
			the_post_thumbnail( 'insight-gallery-masonry01' );
		} elseif ( Insight_Helper::$current_index == 2 || Insight_Helper::$current_index == 8 ) {
			the_post_thumbnail( 'insight-gallery-masonry03' );
		} elseif ( Insight_Helper::$current_index == 5 ) {
			the_post_thumbnail( 'insight-gallery-masonry04' );
		} else {
			the_post_thumbnail( 'insight-gallery-masonry02' );
		}
		?>
        <div class="desc-wrap">
            <div class="desc">
                <div class="title rd-font">
					<?php the_title() ?>
                </div>
                <div class="gallery-separator"></div>
                <div class="cats nd-font">
					<?php echo esc_html( implode( ', ', $terms_names ) ); ?>
                </div>
            </div>
        </div>
    </div>
</div><!-- #post-## -->
