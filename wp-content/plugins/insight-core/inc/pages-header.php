<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit();
}
if ( InsightCore::is_theme_support() ) { ?>
    <div class="insight-core-header">
        <h1>Welcome to <?php echo INSIGHT_CORE_THEME_NAME . ' ' . INSIGHT_CORE_THEME_VERSION; ?></h1>
        <div class="about-text">
			<?php echo esc_html( $insight_core_info['desc'] ); ?>
            <br/><a target="_blank" href="<?php echo esc_url( $insight_core_info['support'] ); ?>">Need support?</a> |
            <a href="<?php echo esc_url( admin_url( "admin.php?page=insight-core-update" ) ); ?>">Check Update</a>
        </div>
        <div class="badge">
            <img src="<?php echo esc_url( $insight_core_info['icon'] ); ?>"/>
        </div>
    </div>
<?php } else { ?>
    <div class="box">
        <div class="box-body">
            Ooops! Seem the current theme not compatible with Insight Core plugin, so please <a
                    href="<?php echo admin_url( 'plugins.php' ); ?>">deactivate this plugin</a>.
        </div>
    </div>
<?php } ?>