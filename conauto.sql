-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-04-2022 a las 20:51:16
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `conauto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informationusers`
--

CREATE TABLE `informationusers` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `datesOfBirth` date NOT NULL,
  `phone` varchar(15) NOT NULL,
  `vaccinationStatus` int(11) NOT NULL,
  `vaccinationType` varchar(20) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `informationusers`
--

INSERT INTO `informationusers` (`id`, `idUser`, `datesOfBirth`, `phone`, `vaccinationStatus`, `vaccinationType`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2022-04-06', '0969194787', 1, 'Sputnik', '2022-04-09 00:43:08', '2022-04-09 00:43:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `dni` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `lasname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `rol` int(1) NOT NULL,
  `password` varchar(200) NOT NULL,
  `status` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `userName`, `dni`, `name`, `lasname`, `email`, `rol`, `password`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Mario123', '1004027718', 'Mario Eduardo', 'Alarcon Angulo', 'admin@gmail.com', 1, '$2a$04$dBEdX/RZSCuKyX975Ygmpu1BVnTL7.1FF6jX3jmlsSfRcsmJfp7.i', 0, '2022-04-08 02:58:16', '2022-04-09 06:33:42'),
(6, 'Mario123', '1004027718', 'Marco', 'Alarcon Angulo', 'empleado@gmail.com', 2, '$2a$04$vC200OzXCCmOhAltajVCYOI5rqgAf6xAfH./fP57tdY7EQcLThQd6', 1, '2022-04-09 01:45:56', '2022-04-09 01:45:56'),
(7, 'Mario123', '1004027718', 'Pedro', 'Alarcon Angulo', 'empleado3@gmail.com', 2, '$2a$04$fdGVwMY6mkD.OZywkSUYOOvYTdJSOu.4cEQEEqsxCfv4DXIzm2HOe', 1, '2022-04-09 01:46:50', '2022-04-09 01:46:50'),
(8, 'Empleado4', '1004027718', 'Jose', 'Perez', 'perez@gmail.com', 1, '$2a$04$0MkY31A.LzpV4wqSqTWpyehXlu9olURvJ0uAWWyh.pL3GdldgIEgW', 1, '2022-04-09 18:27:45', '2022-04-09 18:27:45'),
(9, 'Empleado4', '1004027718', 'Jose', 'Perez', 'perez2@gmail.com', 1, '$2a$04$Qn.ycjoczcb6TaCjPERL/.UL.5VePq9ddT.nmt/LGJ21ifjiMwI6.', 1, '2022-04-09 18:30:54', '2022-04-09 18:30:54');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `informationusers`
--
ALTER TABLE `informationusers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Information` (`idUser`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `informationusers`
--
ALTER TABLE `informationusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `informationusers`
--
ALTER TABLE `informationusers`
  ADD CONSTRAINT `Information` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
