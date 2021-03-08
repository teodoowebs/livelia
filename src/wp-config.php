<?php

// Configuration common to all environments
include_once __DIR__ . '/wp-config.common.php';


// Configuration common to all environments
include_once __DIR__ . '/wp-config.common.php';

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
define( 'DB_NAME', 'livelia' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'r[W9NSRvxYVR<UQSfMR#)z8Q`mcf.c#tcYqh>Gr#:osu?#F}0kE0a G>-e_<SSk_' );
define( 'SECURE_AUTH_KEY',  '>pt&%Bw|[ =[,iq JlF_8PL|8}=7q3AuZx%`,I`[rx7kz|0.sdv<n(5S^UC4-DPy' );
define( 'LOGGED_IN_KEY',    'w8Z?/)=o=s@zrKhYOD,c/(]K;4|A]o$Z(+TVMc]A&=hc_[o;&`b1;0=>Ld95ijS/' );
define( 'NONCE_KEY',        ')mU4?1tE# Tw E,]VixX;vx2U;LH,xDf9^7DGVFt263eKC>#=[]D#y:ygKMMahXI' );
define( 'AUTH_SALT',        '3I(mu}i&)X`1!/(4!Oa&IHs|Q~]X0~;VGe$AcS)@`1?uJu^$ZURj]jK):;P,5p^5' );
define( 'SECURE_AUTH_SALT', 'nCqx>PL&_Trz*=G!U*[T*Zmn,jdrWN?M+8(;)SJrJZq@=5JUb|aoPjPWbY>?oAd ' );
define( 'LOGGED_IN_SALT',   '*2`mIB_TFG#vJCm+&/o+R{ e~ u5B1:2d^9`SfOJ)M8_w_}OG3y&;|(Y-K=(0:,+' );
define( 'NONCE_SALT',       'FDD[,{~)1sF$+b TgIDD6X:U0y>~x$qX5t3/iip,|&oUdSM`_  ?Mxn<g[?%p}3d' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'lv_';

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
// define( 'WP_DEBUG', false );

// Enable WP_DEBUG mode
define( 'WP_DEBUG', true );

// Enable Debug logging to the /wp-content/debug.log file
define( 'WP_DEBUG_LOG', true );

// Disable display of errors and warnings 
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );

// Use dev versions of core JS and CSS files (only needed if you are modifying these core files)
define( 'SCRIPT_DEBUG', true );



define('VP_ENVIRONMENT', 'default');
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
