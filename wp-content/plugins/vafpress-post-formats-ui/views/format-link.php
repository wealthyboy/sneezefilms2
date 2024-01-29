<div class="vp-pfui-tab-content vp-pfui-elm-block" id="vp-pfui-format-link-url" style="display: none;">
	<?php do_action( 'vp_pfui_before_link_meta' ); ?>
	<label><?php _e( 'URL', 'vp-post-formats-ui' ); ?></label>
	<input type="text" name="_format_link_url"
	       value="<?php echo esc_attr( get_post_meta( $post->ID, '_format_link_url', true ) ); ?>"
	       id="vp-pfui-format-link-url-field" tabindex="1"/>
	<?php do_action( 'vp_pfui_after_link_meta' ); ?>
</div>
