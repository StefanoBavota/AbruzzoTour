-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 22, 2021 alle 18:21
-- Versione del server: 10.4.18-MariaDB
-- Versione PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `abruzzo`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `percorsi`
--

CREATE TABLE `percorsi` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `difficolta` int(11) NOT NULL,
  `info` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `percorsi`
--

INSERT INTO `percorsi` (`id`, `nome`, `difficolta`, `info`, `image`, `latitude`, `longitude`) VALUES
(8, 'Cascata di San Giovanni', 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac elementum magna. Pellentesque mi libero, pharetra sit amet elit dictum, egestas suscipit metus. Donec vulputate posuere tortor, sed dignissim enim sagittis consectetur. Proin consectetur, libero et cursus dignissim, velit eros auctor purus, posuere tempor arcu orci nec velit. Vestibulum eget lorem eget urna ullamcorper maximus vitae sed tortor.', 'https://www.parcomajella.it/foto/grandi/cascata-san-giovanni-3.jpg', 42.16529611416041, 14.151688792061758),
(14, 'Valle dell\'orfento', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac elementum magna. Pellentesque mi libero, pharetra sit amet elit dictum, egestas suscipit metus. Donec vulputate posuere tortor, sed dignissim enim sagittis consectetur. Proin consectetur, libero et cursus dignissim, velit eros auctor purus, posuere tempor arcu orci nec velit. Vestibulum eget lorem eget urna ullamcorper maximus vitae sed tortor.', 'https://www.parcomajella.it/foto/grandi/scalelle_6-2-2-3-1-1-1-1-3-1-2-1-1-2-1-1-2-1-2-1.jpg', 42.1603453945707, 14.010251469318495),
(15, 'Lago San Domenico', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac elementum magna. Pellentesque mi libero, pharetra sit amet elit dictum, egestas suscipit metus. Donec vulputate posuere tortor, sed dignissim enim sagittis consectetur. Proin consectetur, libero et cursus dignissim, velit eros auctor purus, posuere tempor arcu orci nec velit. Vestibulum eget lorem eget urna ullamcorper maximus vitae sed tortor.', 'https://www.visitareabruzzo.it/wp-content/uploads/2020/07/lago-di-san-domenico.jpg', 41.942852564580406, 13.829321429242826);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `percorsi`
--
ALTER TABLE `percorsi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `percorsi`
--
ALTER TABLE `percorsi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
