<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package primerodemayo
 */



// global $_wp_additional_image_sizes; 
// print '<pre>'; 
// print_r( $_wp_additional_image_sizes ); 
// print '</pre>';
 /*
 Template Name: Home
 */

	// $rand_number = rand( 1, 2000 );

	// $main_site = "localhost/no-agencia/vitutienda/www/";
	// $site_name = 'site-'.$rand_number;
	// $title = 'Esto es un titulo';

    //  # Create a new user
	
	//  $username = 'user-' . $rand_number;
	//  $password = 'fake-password';
	//  // $password = wp_generate_password( 12, false );
	//  $email = "email+$rand_number@example.com";
	//  $user_id = wpmu_create_user( $username, $password, $email );
	//  // wp_new_user_notification( $user_id, $password );
 
	//  # Create site

	// 	 $newdomain = $main_site;
	// 	 $path = "/$site_name/";
	 

	//  echo $newdomain. '<br>';
	//  echo $path . '<br>';
	//  echo $title . '<br>';
	//  echo $user_id . '<br>';
 
	//  $title = $site_name;
	//  $blog_id = wpmu_create_blog( $newdomain, $path, $title, $user_id , array( 'public' => 1 ) );
	//  echo "New blog with ID = $blog_id";
 
// 	$author = get_role( 'administrator' );
// 	$author->add_cap( 'manage_woocommerce' );

// 	var_dump($admin_role_set);
// die;


$current_site = get_current_blog_id();
$custom_logo_id = get_theme_mod( 'custom_logo' );
$custom_logo_data = wp_get_attachment_image_src( $custom_logo_id , 'logo_size' );
$custom_logo_url = $custom_logo_data[0];

$blog_info = get_bloginfo('name');
$blog_description_short = get_bloginfo('description');
$blog_descripcion_long = get_theme_mod( 'descripcion_larga' ) ;

//encabezado
$encabezado_imagen = wp_get_attachment_url( get_theme_mod( 'encabezado_imagen_1' ) );
$encabezado_texto = get_theme_mod( 'encabezado_texto' );

//logo 
$logo_imagen_id = get_theme_mod( 'logo_imagen' ) ;
$logo_imagen = wp_get_attachment_url( $logo_imagen_id );


//redes sociiales
$instagram = get_theme_mod('instagram');
$facebook = get_theme_mod('facebook');
$linkedin = get_theme_mod('linkedin');
$twitter = get_theme_mod('twitter');

//Información adicional
$ubicacion = get_theme_mod('ubicacion');
$mensaje_destacado = get_theme_mod('mensaje_destacado');

//categorias
$categories = get_terms( ['taxonomy' => 'product_cat'] );	

get_header();
?>

	<main id="primary" class="site-main">

	<div class="snap-drawers">
            
            <div class="snap-drawer snap-drawer-left">
			</div>


			<div class="snap-drawer snap-drawer-right">
            </div>
        </div>
        

	<div id="content-snap" class="scrollable snap-content">
		<div>

	<header>
			<div class="container">
				<div class="banner">
					
					<?php if($encabezado_imagen):?>
						<img src="<?= $encabezado_imagen ?>" alt="Banner">
					<?php endif ?>

					<?php if($encabezado_texto):?>
						<span><?= $encabezado_texto ?></span>
					<?php endif ?>
					
					
				</div>
				<div class="data">
					<div class="data-left">
						<div class="img-author">

							<?php if($logo_imagen_id == 0): ?>
								<?= $blog_info[0] ?>
							<?php else: ?>
								<img src="<?= $logo_imagen?>" alt="Logo">
							<?php endif ?>
						 	

						</div>
						<div class="socials">
					
							<?php if($instagram): ?>
								<a href="<?= $instagram ?>" target="_blank"><i class="fa fa-instagram"></i></a>
							<?php endif ?>

							<?php if($facebook): ?>
								<a href="<?= $facebook ?>" target="_blank"><i class="fa fa-facebook"></i></a>
							<?php endif ?>

							<?php if($twitter): ?>
								<a href="<?= $twitter ?>" target="_blank"><i class="fa fa-twitter"></i></a>
							<?php endif ?>

							<?php if($linkedin): ?>
								<a href="<?= $linkedin ?>" target="_blank"><i class="fa fa-linkedin"></i></a>
							<?php endif ?>
						</div>
						<h1><?= $blog_info?><?= ( $blog_description_short ) ? ' - '.$blog_description_short :'';?></h1>

						<?php if($blog_descripcion_long): ?>
							<div class="description">
								<?= $blog_descripcion_long ?>
							</div>
						<?php endif ?>

						<?php if($ubicacion):?>
						<div class="desc_secondary">
							<span>
								<i class="fa fa-map-marker"></i>
								<?= $ubicacion ?>
							</span>
						</div>
						<?php endif ?>


						<?php if($mensaje_destacado):?>
						<div class="message_important">
							<?= $mensaje_destacado ?>
						</div>
						<?php endif ?>
					</div>
				</div>
			</div>
		</header>

		<section id="content">
			<div class="container">
				<div class="filters row">
					<div class="col-md-12">
						<form id="filter-form" class="form-inline" action='' method="POST">
							<input type="hidden" name="action" value="get_products">
							<input type="hidden" name="search" value="1">
							<div class="form-row">
								
		
									<select name="cats" class="form-control form-control-sm" id="cats">
										<option value="0">Categorías</option>
										<?php foreach($categories as $k => $q):?>
											<option value="<?= $q->term_id ?>"><?= $q->name ?></option>	
										<?php endforeach ?>
									</select>
									<input type="text" name="string_search" placeholder="Buscar" class="search-input" title="Buscar" />	

									<input type="submit" value="Buscar" class="btn-send"/>
								
							</div>
						</form>
					</div>
				</div>
				<div id="all-products" class="row all-products">
					<div class="loading-button">
						<button id="load-more" class=""><i class="fa fa-spinner fa-pulse "></i></button>
					</div>
				</div>

			</div>
		</section>



<?php
get_footer();
