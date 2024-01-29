<?php
/**
 * The template for displaying comments.
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package tm-9studio
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<div id="comments" class="comments-area">

	<?php
	// You can start editing here -- including this comment!
	if ( have_comments() ) : ?>
        <h2 class="comments-title">
			<?php
			printf( // WPCS: XSS OK.
				esc_html( _nx( 'Comment (1)', 'Comments (%1$s)', get_comments_number(), 'comments title', 'tm-9studio' ) ),
				number_format_i18n( get_comments_number() ),
				''
			);
			?>
        </h2>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
            <nav id="comment-nav-above" class="navigation comment-navigation">
                <h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', 'tm-9studio' ); ?></h2>
                <div class="nav-links">

                    <div
                            class="nav-previous"><?php previous_comments_link( esc_html__( 'Older Comments', 'tm-9studio' ) ); ?></div>
                    <div
                            class="nav-next"><?php next_comments_link( esc_html__( 'Newer Comments', 'tm-9studio' ) ); ?></div>

                </div>
            </nav>
		<?php endif; // Check for comment navigation. ?>

        <ol class="comment-list">
			<?php
			wp_list_comments( array(
				'style'       => 'ol',
				'short_ping'  => true,
				'avatar_size' => 60
			) );
			?>
        </ol>
		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
            <nav id="comment-nav-below" class="navigation comment-navigation">
                <h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', 'tm-9studio' ); ?></h2>
                <div class="nav-links">

                    <div
                            class="nav-previous"><?php previous_comments_link( esc_html__( 'Older Comments', 'tm-9studio' ) ); ?></div>
                    <div
                            class="nav-next"><?php next_comments_link( esc_html__( 'Newer Comments', 'tm-9studio' ) ); ?></div>

                </div>
            </nav>
		<?php
		endif; // Check for comment navigation.

	endif; // Check for have_comments().


	// If comments are closed and there are comments, let's leave a little note, shall we?
	if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) : ?>

        <p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'tm-9studio' ); ?></p>
	<?php
	endif;
	?>

	<?php
	$commenter     = wp_get_current_commenter();
	$req           = get_option( 'require_name_email' );
	$fields        = array(
		'author' => '<div class="row"><div class="col-md-4"><p class="comment-form-author"><input id="author" placeholder="' . esc_html__( 'Name *', 'tm-9studio' ) . '" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) . '" size="30"/></p></div>',
		'email'  => '<div class="col-md-4"><p class="comment-form-email"><input id="email" placeholder="' . esc_html__( 'Email *', 'tm-9studio' ) . '" name="email" type="text" value="' . esc_attr( $commenter['comment_author_email'] ) . '" size="30"/></p></div>',
		'url'    => '<div class="col-md-4"><p class="comment-form-url"><input id="url" placeholder="' . esc_html__( 'Website', 'tm-9studio' ) . '" name="url" type="text" value="' . esc_attr( $commenter['comment_author_url'] ) . '" size="30"/></p></div></div>',
	);
	$comments_args = array(
		'label_submit'         => esc_html__( 'Submit', 'tm-9studio' ),
		'title_reply'          => esc_html__( 'Leave your thought', 'tm-9studio' ),
		'comment_notes_after'  => '',
		'comment_notes_before' => '',
		'fields'               => apply_filters( 'comment_form_default_fields', $fields ),
		'comment_field'        => '<div class="row"><div class="col-md-12"><p class="comment-form-comment"><textarea id="comment" placeholder="' . esc_html__( 'Comment *', 'tm-9studio' ) . '" name="comment"></textarea></p></div></div>',
	);
	comment_form( $comments_args ); ?>

</div><!-- #comments -->
