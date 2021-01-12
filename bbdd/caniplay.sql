-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-01-2021 a las 20:11:25
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `caniplay`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `charlas`
--

CREATE TABLE `charlas` (
  `id_charla` int(11) NOT NULL,
  `titulo_charla` varchar(60) NOT NULL,
  `fecha_charla` date NOT NULL,
  `descripcion_charla` mediumtext NOT NULL,
  `resumen_charla` varchar(120) NOT NULL,
  `lugar_charla` mediumtext NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `charlas`
--

INSERT INTO `charlas` (`id_charla`, `titulo_charla`, `fecha_charla`, `descripcion_charla`, `resumen_charla`, `lugar_charla`, `id_usuario`) VALUES
(7, 'Videojuegos para un mundo mejor.', '2020-12-28', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '¡Imaginad aprovechar el poder de los videojuegos para resolver problemas diarios!', 'https://www.google.es/', 1),
(8, 'Mejores ciudades con Cities: Skylines', '2021-01-05', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '¡Aprendamos con Karoliina y Cities: Skylines a mejorar las ciudades del mañana!', 'https://www.google.es/', 2),
(9, 'Tu cerebro en los videojuegos', '2021-01-21', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '¿Cómo afectan los videojuegos al ritmo del cerebro? ¡Descúbrelo con Daphne!', 'https://www.google.es/', 3),
(10, 'Coaching sessions #2: \"The Binding of Isaac\"', '2021-01-18', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '¿Te atreves a luchar contra tus mayores miedos? No te preocupes, ya lo hace Xavi por ti.', 'https://www.google.es/', 4),
(11, 'Sobrevive el 2020 al más puro estilo \"Lara Croft\"', '2020-12-11', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'El 2020 aún no ha terminado. Yaiza nos explicará las mejores técnicas para aguantar lo que queda de año.', 'https://www.google.es/', 5),
(12, 'Aprende inglés con los videojuegos', '2020-12-28', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '¿Se te da regular el inglés? ¡Patrícia te recomienda los mejores (y peores) juegos para aprender mientras juegas!', 'https://www.google.es/', 6),
(17, 'Coaching sessions #2: \"The Binding of Isaac\"', '2021-01-18', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '¿Te atreves a luchar contra tus mayores miedos? No te preocupes, ya lo hace Xavi por ti.', 'https://www.google.es/', 4),
(18, 'Sobrevive el 2020 al más puro estilo \"Lara Croft\"', '2020-12-11', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'El 2020 aún no ha terminado. Yaiza nos explicará las mejores técnicas para aguantar lo que queda de año.', 'https://www.google.es/', 5),
(19, 'Aprende inglés con los videojuegos', '2020-12-28', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '¿Se te da regular el inglés? ¡Patrícia te recomienda los mejores (y peores) juegos para aprender mientras juegas!', 'https://www.google.es/', 6),
(20, 'Mejores ciudades con Cities: Skylines', '2021-01-04', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '¡Aprendamos con Karoliina y Cities: Skylines a mejorar las ciudades del mañana!', 'https://www.google.es/', 2),
(21, '¿Es realmente Link una mujer?', '2020-12-04', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'd', 'a', 9),
(22, 'Jugar la FIFA te hace más listo', '2020-12-31', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'resumen', 'https://discord.gg/4YF5JDWn', 7),
(23, 'Como borrar las partidas de tu hijo si se porta mal', '2020-12-09', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'asdfadsf', 'Discord', 9),
(24, 'Como no jugar', '2020-12-31', 'coasa', 'asd', 'www.google.es', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chat`
--

CREATE TABLE `chat` (
  `id_chat` int(11) NOT NULL,
  `id_usuario1` int(11) NOT NULL,
  `id_usuario2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `id_juego` int(11) NOT NULL,
  `titulo_juego` varchar(60) NOT NULL,
  `genero` enum('Acción','Aventura','Deportes','Estrategia','Educativo','Plataformas','Puzzles','Shooter','Simulación','Carreras','Musical') NOT NULL,
  `pegi` enum('3','7','12','16','18') NOT NULL,
  `tarjeta_jugador` enum('Single Player','Single/multiplayer','Multiplayer offline','Multiplayer online') NOT NULL,
  `tarjeta_pagos` enum('Contiene pagos online opcionales','No contiene pagos online','Requiere suscripción (con opción a pagos)','') NOT NULL,
  `tarjeta_contenido` enum('Contenido apto para niños','Contenido moderado','Contenido adulto','') NOT NULL,
  `tarjeta_internet` enum('No requiere conexión a internet','Requiere conexión a internet','Mejor experiencia con conexión a internet','') NOT NULL,
  `caratula_juego` longtext NOT NULL,
  `pantallazo1` longtext NOT NULL,
  `pantallazo2` longtext NOT NULL,
  `pantallazo3` longtext NOT NULL,
  `pantallazo4` longtext NOT NULL,
  `votos` int(11) NOT NULL,
  `puntuacionTotal` int(11) NOT NULL,
  `web_oficial` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`id_juego`, `titulo_juego`, `genero`, `pegi`, `tarjeta_jugador`, `tarjeta_pagos`, `tarjeta_contenido`, `tarjeta_internet`, `caratula_juego`, `pantallazo1`, `pantallazo2`, `pantallazo3`, `pantallazo4`, `votos`, `puntuacionTotal`, `web_oficial`) VALUES
(1, 'Animal Crossing: New Horizons', 'Simulación', '3', 'Single Player', 'No contiene pagos online', 'Contenido apto para niños', 'Mejor experiencia con conexión a internet', 'https://es.static.webuy.com/product_images/Juegos/Switch%20Juegos/045496425395_l.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61pWdBI3y2L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81wO%2BuQmqiL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81csRna%2ByNL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71ZXAED1WmL._AC_SL1500_.jpg', 20, 60, 'https://www.animal-crossing.com/new-horizons/es/'),
(2, 'Super Mario Party', 'Estrategia', '3', 'Single/multiplayer', 'No contiene pagos online', 'Contenido apto para niños', 'Mejor experiencia con conexión a internet', 'https://es.static.webuy.com/product_images/Juegos/Switch%20Juegos/045496423001_l.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81%2BcBA7dl8L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51I73x2xepL._AC_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51-MvD4ODoL._AC_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51sjKEzXzDL._AC_.jpg', 30, 70, 'https://www.nintendo.es/Juegos/Nintendo-Switch/Super-Mario-Party-1388641.html'),
(3, 'Crash Team Racing Nitro-Fueled', 'Carreras', '3', 'Single/multiplayer', 'Contiene pagos online opcionales', 'Contenido apto para niños', 'Mejor experiencia con conexión a internet', 'https://es.static.webuy.com/product_images/Juegos/PS4%20Juegos/5030917269752_l.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81G3g72nTLL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81d3BJexD8L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81g0yoUiB5L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81Bnjr4PGNL._AC_SL1500_.jpg', 10, 50, 'https://www.crashbandicoot.com/es/crashteamracing'),
(4, 'Just Dance 2021', 'Musical', '3', 'Single/multiplayer', 'Contiene pagos online opcionales', 'Contenido apto para niños', 'Mejor experiencia con conexión a internet', 'https://es.static.webuy.com/product_images/Juegos/PS5%20Juegos/3307216177227_l.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91gsNRJPBhL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71Vxds%2BQRIL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71YDp%2BGGZmL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81DifeE6LEL._AC_SL1500_.jpg', 20, 60, 'https://www.justdancenow.com/?lang=es'),
(5, 'FIFA 21', 'Deportes', '3', 'Single/multiplayer', 'Contiene pagos online opcionales', 'Contenido apto para niños', 'Mejor experiencia con conexión a internet', 'https://es.static.webuy.com/product_images/Juegos/Xbox%20One%20Juegos/5030937124420_l.jpg', 'https://images-na.ssl-images-amazon.com/images/I/814EnfkacKL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81WDE7ibZzL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/815pa2mTrbL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71bvhH7tuJL._AC_SL1500_.jpg', 20, 60, 'https://www.ea.com/es-es/games/fifa/fifa-21/buy?gclid=EAIaIQobChMI2Ois5bnh7QIVCbTtCh2b3Q-MEAAYASAAEgKXI_D_BwE&gclsrc=aw.ds'),
(6, 'Spyro Reignited Trilogy', 'Plataformas', '7', 'Single/multiplayer', 'Contiene pagos online opcionales', 'Contenido apto para niños', 'Mejor experiencia con conexión a internet', 'https://es.static.webuy.com/product_images/Juegos/PS4%20Juegos/5030917242205_l.jpg', 'https://cdn.pocket-lint.com/r/s/660x/assets/images/144874-games-review-hands-on-spyro-before-and-after-image1-qrxwnm4tl6-jpg.webp?v1', 'https://cdn.pocket-lint.com/r/s/660x/assets/images/144874-games-review-hands-on-spyro-before-and-after-image2-kec0ym5qrn-jpg.webp?v1', 'https://cdn.pocket-lint.com/r/s/970x/assets/images/144874-games-review-hands-on-spyro-reignited-trilogy-initial-review-the-most-lovingly-created-remaster-image4-haoub5zety-jpg.webp', 'https://cdn.pocket-lint.com/r/s/970x/assets/images/144874-games-review-hands-on-spyro-reignited-trilogy-initial-review-the-most-lovingly-created-remaster-image8-t8hbyed2aw-jpg.webp', 20, 60, 'https://www.spyrothedragon.com/es'),
(7, 'Among Us', 'Plataformas', '7', 'Multiplayer online', 'Contiene pagos online opcionales', 'Contenido apto para niños', 'Requiere conexión a internet', 'https://cdn2.unrealengine.com/egs-amongus-innersloth-s6-1200x1600-675403712.jpg', 'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/ss_c80d2f3fab624b18d9531adc6957767a7fede100.1920x1080.jpg?t=1607727748', 'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/ss_649e19ff657fa518d4c2b45bed7ffdc4264a4b3a.1920x1080.jpg?t=1607727748', 'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/ss_eab32f16b59c005489c10f9063227ed7b54b31ec.1920x1080.jpg?t=1607727748', 'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/ss_a0f2416e11bf5b47788eaa3617e092b73962b145.1920x1080.jpg?t=1607727748', 20, 60, 'https://www.epicgames.com/store/es-ES/product/among-us/home'),
(8, 'Crash Bandicoot N. Sane Trilogy', 'Plataformas', '7', 'Single/multiplayer', 'Contiene pagos online opcionales', 'Contenido apto para niños', 'Mejor experiencia con conexión a internet', 'https://es.static.webuy.com/product_images/Juegos/PS4%20Juegos/5030917211072_l.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91-2Wj4EPaL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81rGZqlgbjL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91XJ6bwyA8L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91HU4qGTrhL._AC_SL1500_.jpg', 20, 60, 'https://www.crashbandicoot.com/es/hub'),
(9, 'Ratchet & Clank', 'Acción', '7', 'Single Player', 'No contiene pagos online', 'Contenido apto para niños', 'Mejor experiencia con conexión a internet', 'https://images-na.ssl-images-amazon.com/images/I/913V%2BirTARL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61lxafgWusL._AC_SL1280_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71fKgB4HPtL._AC_SL1280_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/716ZsKhlJSL._AC_SL1280_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71PYsd4FqaL._AC_SL1280_.jpg', 20, 60, 'https://ratchet-galaxy.com/en/'),
(10, 'Minecraft', 'Simulación', '7', 'Single/multiplayer', 'Contiene pagos online opcionales', 'Contenido apto para niños', 'Mejor experiencia con conexión a internet', 'https://images-na.ssl-images-amazon.com/images/I/61T5Ijw0hQL._AC_SL1100_.jpg', 'https://m.media-amazon.com/images/I/41yAB0lxCQL._AC_.jpg', 'https://m.media-amazon.com/images/I/51V83J7oN0L._AC_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71s8Kzc-iJL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/710T1uYrP1L._AC_SL1500_.jpg', 20, 60, 'https://www.minecraft.net/es-es'),
(11, 'Kingdom Hearts 3', 'Acción', '12', 'Single/multiplayer', 'No contiene pagos online', 'Contenido apto para niños', 'Mejor experiencia con conexión a internet', 'https://m.media-amazon.com/images/I/81sbCzUlrML._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81sbCzUlrML._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/813-Yid7tzL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71iZzNGrUsL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71KAf01cmoL._AC_SL1500_.jpg', 20, 60, 'https://www.kingdomhearts.com/3/es/home/'),
(12, 'League of Legends', 'Estrategia', '12', 'Multiplayer online', 'Contiene pagos online opcionales', 'Contenido moderado', 'Requiere conexión a internet', 'https://i.redd.it/n3gfgw157rc41.jpg', 'https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2016/03/22/68E80F24-9A51-49B0-A09E-13BE8809DCA7/58.jpg', 'https://k33.kn3.net/taringa/E/2/4/A/5/3/baltazar14/64C.jpg', 'https://www.muycomputer.com/wp-content/uploads/2019/05/LeagueofLegends_m%C3%B3vil.jpg', 'https://sm.ign.com/ign_es/screenshot/default/portada_7fes.jpg', 20, 60, 'https://na.leagueoflegends.com/es-es/'),
(13, 'Aeterno Blade II', 'Plataformas', '12', 'Single Player', 'No contiene pagos online', 'Contenido apto para niños', 'Requiere conexión a internet', 'https://images-na.ssl-images-amazon.com/images/I/81saNnc4LUL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81wn8lO3ibL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91Xhrjh1BLL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71AiihWQJsL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81-oDUhSrTL._AC_SL1500_.jpg', 20, 60, 'https://areajugones.sport.es/videojuegos/analisis-aeternoblade-ii/'),
(14, 'The Legend Of Zelda: Breath Of The Wild', 'Plataformas', '12', 'Single Player', 'Contiene pagos online opcionales', 'Contenido apto para niños', 'No requiere conexión a internet', 'https://images-na.ssl-images-amazon.com/images/I/91jvZUxquKL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/811pf6pN7RL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71GdQsZyE8L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81Czz%2BhSxZL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81Zq-iX3CRL._AC_SL1500_.jpg', 20, 60, 'https://www.zelda.com/breath-of-the-wild/es/'),
(15, 'Sid Meier\'s Civilization VI ', 'Estrategia', '12', 'Single/multiplayer', 'Contiene pagos online opcionales', 'Contenido apto para niños', 'Mejor experiencia con conexión a internet', 'https://images-na.ssl-images-amazon.com/images/I/81JeqskUs2L._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81bfy%2B%2BQOKL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81esad6V%2BNL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81XCGzhFL5L._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81-iXcnRjOL._SL1500_.jpg', 20, 60, 'https://civilization.com/es-ES/'),
(16, 'Marvel´s Spider-Man: Miles Morales', 'Acción', '16', 'Single Player', 'No contiene pagos online', 'Contenido apto para niños', 'Mejor experiencia con conexión a internet', 'https://images-na.ssl-images-amazon.com/images/I/81njBIZp9PL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81RJ8xYn20L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81W2a3PtAjL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81voLMv8RQL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81L0X99ZEOL._AC_SL1500_.jpg', 20, 60, 'https://vandal.elespanol.com/juegos/ps5/spiderman-miles-morales/86451#p-89'),
(17, 'Valorant', 'Shooter', '16', 'Multiplayer online', 'Contiene pagos online opcionales', 'Contenido moderado', 'Requiere conexión a internet', 'https://cdn.game.tv/game-tv-content/images_3/07e71c74484a1cedd92dbc35fa0c0304/GameTile.jpg', 'https://files.antena2.com/antena2/public/styles/imagen_despliegue/public/2020-05/valorant-2_1_0.jpg?itok=3Wvz5Pc0', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hHEk6kr1N3jVvGQoAVTGjZOU7BZm-gCYjg&usqp=CAU', 'https://www.egamingmexico.com/wp-content/uploads/2020/08/3679063-val_t2_cinematic_day_1_banner.jpg', 'https://locuragaming.com/wp-content/uploads/2020/03/Untitled-4-e1583173454181.jpg', 20, 60, 'https://playvalorant.com/es-es/'),
(18, 'Horizon: Zero Dawn', 'Aventura', '16', 'Single Player', 'No contiene pagos online', 'Contenido moderado', 'Mejor experiencia con conexión a internet', 'https://cdn-products.eneba.com/resized-products/zTTVb_NAle18D-5snqycIAeGQ7e94IVqNXi1jFi2ljs_350x200_1x-0.jpeg', 'https://www.alfabetajuega.com/wp-content/uploads/2019/10/horizon.jpg', 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/10/horizon-zero-dawn-nuevas-imagenes_0.jpg', 'https://www.alfabetajuega.com/wp-content/uploads/2020/10/Aloy-780x405.jpg', 'https://pbs.twimg.com/media/C7eHbVPXwAAWAYG.jpg', 20, 60, 'https://vandal.elespanol.com/juegos/ps4/horizon-zero-dawn/26118#p-73'),
(19, 'Control', 'Acción', '16', 'Single Player', 'No contiene pagos online', 'Contenido moderado', 'Mejor experiencia con conexión a internet', 'https://images-na.ssl-images-amazon.com/images/I/718oh6QAJ-L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81oRXZZUYJL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71aCjk62aCL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/710%2BwG1CwAL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81vM8iczkSL._AC_SL1500_.jpg', 20, 60, 'https://www.remedygames.com/games/control/'),
(20, 'Uncharted 2: El Reino De Los Ladrones', 'Aventura', '16', 'Single Player', 'No contiene pagos online', 'Contenido moderado', 'No requiere conexión a internet', 'https://images-na.ssl-images-amazon.com/images/I/71n85DXlQPL._AC_SL1085_.jpg', 'https://as.com/meristation/imagenes/2015/10/13/guia_pagina/1444719612_632620_1532430293_sumario_normal.jpg', 'https://http2.mlstatic.com/uncharted-2-among-thieves-ps3-original-nuevo-fisico-sellado-D_Q_NP_994357-MLA42013969529_052020-F.webp', 'https://img.zonared.com/images/noticias/62100/62114/uncharted-2-sigue-siendo-mejores-juegos-naughty-dog_1.jpg', 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/09/uncharted-4_0.jpg?itok=GoqPTL42', 20, 60, 'https://www.unchartedthegame.com/es-es/'),
(21, 'The Last of Us Part II', 'Aventura', '18', 'Single Player', 'No contiene pagos online', 'Contenido adulto', 'Mejor experiencia con conexión a internet', 'https://images-na.ssl-images-amazon.com/images/I/81OFTUvFX4L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51afOwvM7PL._AC_SL1000_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51qafj3dLPL._AC_SL1000_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81DTTp0OeHL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91tig0FhonL._AC_SL1500_.jpg', 20, 60, 'https://www.naughtydog.com/blog/the_last_of_us_part_ii'),
(22, 'Tomb Raider: Shadow of the Tomb Raider', 'Aventura', '18', 'Single Player', 'Contiene pagos online opcionales', 'Contenido adulto', 'Mejor experiencia con conexión a internet', 'https://images-na.ssl-images-amazon.com/images/I/917q49DeTgL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71KWYSrd7TL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81yIfvvtgRL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81a4DLsgovL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71s75jkvcRL._AC_SL1500_.jpg', 20, 60, 'https://tombraider.square-enix-games.com/en-us'),
(23, ' Resident Evil 3 ', 'Acción', '18', 'Single Player', 'No contiene pagos online', 'Contenido adulto', 'Mejor experiencia con conexión a internet', 'https://images-na.ssl-images-amazon.com/images/I/81dkv99OHwL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71D5bHWOWoL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61vYhnsyJvL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71LabCg563L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61fFySMSPtL._AC_SL1500_.jpg', 20, 60, 'https://www.residentevil.com/re3/es/'),
(24, 'Mortal Kombat', 'Acción', '18', 'Single/multiplayer', 'No contiene pagos online', 'Contenido adulto', 'Mejor experiencia con conexión a internet', 'https://images-na.ssl-images-amazon.com/images/I/81IYymJXt%2BL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61xPpYXpePL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71jxRkUc0LL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71HfL-x1jVL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61C-Tjw61SL._AC_SL1500_.jpg', 20, 60, 'https://www.mortalkombat.com/'),
(25, 'Hellblade Senua\'s Sacrifice', 'Aventura', '18', 'Single/multiplayer', 'No contiene pagos online', 'Contenido adulto', 'Mejor experiencia con conexión a internet', 'https://images-na.ssl-images-amazon.com/images/I/81UfMKqh-YL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/813rgb11U3L._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/810a61UlgGL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71-E4QVAnUL._AC_SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81R00SXtU3L._AC_SL1500_.jpg', 20, 60, 'https://www.hellblade.com/'),
(26, 'titulo', 'Aventura', '3', 'Single/multiplayer', 'No contiene pagos online', 'Contenido moderado', 'Requiere conexión a internet', 'asdasdasd', 'asd', 'asd', 'asd', 'asd', 0, 0, 'asdsadas'),
(27, 'titulo', 'Aventura', '3', 'Single/multiplayer', 'No contiene pagos online', 'Contenido moderado', 'Requiere conexión a internet', 'asdasdasd', 'asd', 'asd', 'asd', 'asd', 0, 0, 'asdsadas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos_plataforma`
--

CREATE TABLE `juegos_plataforma` (
  `id_juego` int(11) NOT NULL,
  `ps4` tinyint(1) NOT NULL,
  `ps5` tinyint(1) NOT NULL,
  `xbox_series` tinyint(1) NOT NULL,
  `xbox_one` tinyint(1) NOT NULL,
  `switch` tinyint(1) NOT NULL,
  `pc` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `juegos_plataforma`
--

INSERT INTO `juegos_plataforma` (`id_juego`, `ps4`, `ps5`, `xbox_series`, `xbox_one`, `switch`, `pc`) VALUES
(1, 0, 0, 0, 0, 1, 0),
(2, 0, 0, 0, 0, 1, 0),
(3, 1, 0, 0, 1, 1, 0),
(4, 1, 1, 1, 1, 1, 0),
(5, 1, 1, 1, 1, 1, 1),
(6, 1, 0, 0, 1, 1, 1),
(7, 0, 0, 0, 0, 0, 1),
(8, 1, 0, 0, 1, 1, 1),
(9, 1, 0, 0, 0, 0, 0),
(10, 1, 0, 0, 1, 1, 1),
(11, 1, 0, 0, 1, 0, 0),
(12, 0, 0, 0, 0, 0, 1),
(13, 1, 0, 0, 1, 1, 1),
(14, 0, 0, 0, 0, 1, 0),
(15, 1, 0, 0, 1, 0, 1),
(16, 1, 1, 0, 0, 0, 0),
(17, 0, 0, 0, 0, 0, 1),
(18, 1, 0, 0, 0, 0, 1),
(19, 1, 1, 1, 1, 0, 1),
(20, 1, 0, 0, 0, 0, 0),
(21, 1, 0, 0, 0, 0, 0),
(22, 1, 0, 0, 1, 0, 1),
(23, 1, 0, 0, 1, 0, 1),
(24, 1, 0, 0, 1, 1, 1),
(25, 1, 0, 0, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `likes_usuario`
--

CREATE TABLE `likes_usuario` (
  `id_like_usario` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_juego` int(11) NOT NULL,
  `voto` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `id_mensajes` int(11) NOT NULL,
  `mensaje` longtext NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_chat` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sugerencias`
--

CREATE TABLE `sugerencias` (
  `id_sugerencia` int(11) NOT NULL,
  `titulo_juego` varchar(60) NOT NULL,
  `plataforma` varchar(60) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `apellido` varchar(60) NOT NULL,
  `hijos` enum('1','2','3','+4') NOT NULL,
  `email` varchar(120) NOT NULL,
  `password` varchar(120) NOT NULL,
  `tipo_usuario` enum('usuario','admin','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `hijos`, `email`, `password`, `tipo_usuario`) VALUES
(1, 'Dámaso', 'Orta ', '2', 'damasoOrtaMadera@superrito.com', '1234', 'usuario'),
(2, 'Andrea', 'Martinez', '1', 'andre40@gmail.com', '1234', 'usuario'),
(3, 'Julia', 'Manzanares', '+4', 'JManzanares@gustr.com', '1234', 'usuario'),
(4, 'Mario', 'Acosta', '3', 'acosta37@hotmail.es', '1234', 'usuario'),
(5, 'Isabel ', 'Bermúdez', '1', 'isaBer@gmail.com', '1234', 'admin'),
(6, 'Juan', 'Palomo', '+4', 'juanito@gmail.com', '1234', 'admin'),
(7, 'Javier', 'Campos', '1', 'javierhyws@gmail.com', 'a6pSztU5etJqsDWidxigdvu3hVtmtxhYhnJU3n7nN2Y=', 'usuario'),
(8, 'Javier', 'Campos', '1', 'j@gmail.com', 'a6pSztU5etJqsDWidxigdvu3hVtmtxhYhnJU3n7nN2Y=', 'admin'),
(9, 'Maria', 'Magdalena', '', 'mm@gmail.com', 'eJ4G6EXmxoC1+8KjCr+D9ApmBzmTo9cI4hHGglrDc7w=', 'usuario'),
(10, 'Maria', 'Campos', '3', 'javierhyws@gmail.com', 'a6pSztU5etJqsDWidxigdvu3hVtmtxhYhnJU3n7nN2Y=', 'usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_charla`
--

CREATE TABLE `usuario_charla` (
  `id_usuario` int(11) NOT NULL,
  `id_charla` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario_charla`
--

INSERT INTO `usuario_charla` (`id_usuario`, `id_charla`) VALUES
(2, 7),
(5, 7),
(6, 7),
(1, 10),
(5, 10),
(3, 10),
(6, 9),
(1, 9),
(1, 19),
(1, 7),
(9, 10),
(9, 10),
(7, 9),
(9, 17),
(9, 10),
(9, 9);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `charlas`
--
ALTER TABLE `charlas`
  ADD PRIMARY KEY (`id_charla`),
  ADD KEY `charlas_ibfk_1` (`id_usuario`);

--
-- Indices de la tabla `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id_chat`),
  ADD KEY `id_usuario1` (`id_usuario1`),
  ADD KEY `id_usuario2` (`id_usuario2`);

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`id_juego`);

--
-- Indices de la tabla `juegos_plataforma`
--
ALTER TABLE `juegos_plataforma`
  ADD KEY `id_juego` (`id_juego`);

--
-- Indices de la tabla `likes_usuario`
--
ALTER TABLE `likes_usuario`
  ADD PRIMARY KEY (`id_like_usario`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_juego` (`id_juego`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id_mensajes`),
  ADD KEY `id_chat` (`id_chat`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `sugerencias`
--
ALTER TABLE `sugerencias`
  ADD PRIMARY KEY (`id_sugerencia`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `usuario_charla`
--
ALTER TABLE `usuario_charla`
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_charla` (`id_charla`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `charlas`
--
ALTER TABLE `charlas`
  MODIFY `id_charla` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `chat`
--
ALTER TABLE `chat`
  MODIFY `id_chat` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `juegos`
--
ALTER TABLE `juegos`
  MODIFY `id_juego` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `likes_usuario`
--
ALTER TABLE `likes_usuario`
  MODIFY `id_like_usario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id_mensajes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sugerencias`
--
ALTER TABLE `sugerencias`
  MODIFY `id_sugerencia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `charlas`
--
ALTER TABLE `charlas`
  ADD CONSTRAINT `charlas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `chat`
--
ALTER TABLE `chat`
  ADD CONSTRAINT `chat_ibfk_1` FOREIGN KEY (`id_usuario1`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `chat_ibfk_2` FOREIGN KEY (`id_usuario2`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `juegos_plataforma`
--
ALTER TABLE `juegos_plataforma`
  ADD CONSTRAINT `juegos_plataforma_ibfk_1` FOREIGN KEY (`id_juego`) REFERENCES `juegos` (`id_juego`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `likes_usuario`
--
ALTER TABLE `likes_usuario`
  ADD CONSTRAINT `likes_usuario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `likes_usuario_ibfk_2` FOREIGN KEY (`id_juego`) REFERENCES `juegos` (`id_juego`);

--
-- Filtros para la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD CONSTRAINT `mensajes_ibfk_1` FOREIGN KEY (`id_chat`) REFERENCES `chat` (`id_chat`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mensajes_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sugerencias`
--
ALTER TABLE `sugerencias`
  ADD CONSTRAINT `sugerencias_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `usuario_charla`
--
ALTER TABLE `usuario_charla`
  ADD CONSTRAINT `usuario_charla_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_charla_ibfk_2` FOREIGN KEY (`id_charla`) REFERENCES `charlas` (`id_charla`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
