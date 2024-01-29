<?php
/*
Template Name: Blogger
*/

get_header();
if ( ( Insight_Helper::get_post_meta( 'page_layout' ) === 'default' ) || ( Insight_Helper::get_post_meta( 'page_layout' ) === '' ) ) {
	$page_layout = Insight::setting( 'page_layout' );
} else {
	$page_layout = Insight_Helper::get_post_meta( 'page_layout' );
}
?>
<?php Insight::page_title(); ?>
    <div class="container-fluid blogger-template">
        <div class="container">
			<?php
			while ( have_posts() ) : the_post();
				the_content();
			endwhile; // End of the loop.
			wp_reset_postdata();
			?>
        </div>
        <div id="primary" class="content-area row">
			<?php if ( $page_layout === 'sidebar-content' ) {
				get_sidebar();
			} ?>
            <div id="main"
                 class="main <?php echo esc_attr( $page_layout === 'content-sidebar' || $page_layout === 'sidebar-content' ? 'col-md-9' : 'col-md-12' ); ?>">
				<?php
				$paged  = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;
				$paged  = get_query_var( 'page' ) ? get_query_var( 'page' ) : $paged;
				$ic_cat = ( isset( $_GET['category'] ) && ! empty( $_GET['category'] ) ) ? sanitize_key( $_GET['category'] ) : '';
				$args   = array(
					'post_type' => 'post',
					'paged'     => $paged
				);
				if ( $ic_cat ) {
					$args['category_name'] = $ic_cat;
				}
				$the_query = new WP_Query( $args );
				if ( $the_query->have_posts() ) {
					echo '<div class="blog-grid row">';
					while ( $the_query->have_posts() ) {
						$the_query->the_post();
						get_template_part( 'components/content', 'blogger' );
					}
					echo '</div>';
					Insight::paging_nav( $the_query );
					wp_reset_postdata();
				} else {
					get_template_part( 'components/content', 'none' );
				}
				?>
            </div>
			<?php if ( $page_layout === 'content-sidebar' ) {
				get_sidebar( 'blogger' );
			} ?>
        </div>
    </div>
<?php
get_footer();
