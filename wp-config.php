<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'forge');
/** MySQL database username */
define('DB_USER', 'forge');
/** MySQL database password */
define('DB_PASSWORD', 'bf6iKkbw8SVVVLabAoem');
/** MySQL hostname */
define('DB_HOST', 'localhost');
/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');
/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');
/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'e2xkq7us9y4k7rzylrsnvx3opj97rwhyr5r0daormpbsgrctbw2y7b47kdps26h5');
define('SECURE_AUTH_KEY',  'wqwht510sq66oi4gqnweqpnqfiup5meikgnq53ldpdtqhvxfrmv10vjzwl65jbr8');
define('LOGGED_IN_KEY',    'rkrl0odosjeaiyptiqepewftfpmg9krd5jn0hqwii118izyiivtjsjtc1wesx3ha');
define('NONCE_KEY', '7ygfjuzg1wp24ppqvdnealu2nhokeypdltm06guzl9ziyy30dnsbarrljxjcqpya');
define('AUTH_SALT',        'ilw8xuhkakm1urrzqqpdmeolt3ovsfnvgluyw6paffkj3lpab4yc33qbqs9ak3ey');
define('SECURE_AUTH_SALT', 'jcwjhtejiplqoq1f3qwg1nc9wgfbrbdu0z3dwaaz28oarqbwkrtpl8i83w8c6enn');
define('LOGGED_IN_SALT',   'tlx9g6wldtyrgelgjxkctcewespoqzunlrcpx9e4z553cwawlij9epoa93adcbt5');
define('NONCE_SALT',       '4xxmqtrsynm0wbclp6xpcrtxy2htrfx8zdxjahcjthd3cienro9rrshlaqnka2bm');
/**#@-*/
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpwn_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
//define('WP_DEBUG', true);

//define('WP_DEBUG_DISPLAY', true);


//define('WP_DEBUG_LOG', true);


/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
