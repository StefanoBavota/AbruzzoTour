-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 18, 2021 alle 19:30
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
(8, 'Cascata di San Giovanni', 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac elementum magna. Pellentesque mi libero, pharetra sit amet elit dictum, egestas suscipit metus. Donec vulputate posuere tortor, sed dignissim enim sagittis consectetur. Proin consectetur, libero et cursus dignissim, velit eros auctor purus, posuere tempor arcu orci nec velit. Vestibulum eget lorem eget urna ullamcorper maximus vitae sed tortor.', 'https://www.parcomajella.it/foto/grandi/cascata-san-giovanni-3.jpg', 0, 0),
(14, 'Percorso 2', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac elementum magna. Pellentesque mi libero, pharetra sit amet elit dictum, egestas suscipit metus. Donec vulputate posuere tortor, sed dignissim enim sagittis consectetur. Proin consectetur, libero et cursus dignissim, velit eros auctor purus, posuere tempor arcu orci nec velit. Vestibulum eget lorem eget urna ullamcorper maximus vitae sed tortor.', '', 0, 0),
(15, 'Percorso 3', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac elementum magna. Pellentesque mi libero, pharetra sit amet elit dictum, egestas suscipit metus. Donec vulputate posuere tortor, sed dignissim enim sagittis consectetur. Proin consectetur, libero et cursus dignissim, velit eros auctor purus, posuere tempor arcu orci nec velit. Vestibulum eget lorem eget urna ullamcorper maximus vitae sed tortor.', '', 0, 0);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;


--
-- Struttura della tabella `utenti`
--


CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
