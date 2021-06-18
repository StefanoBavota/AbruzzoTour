-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 17, 2021 alle 14:10
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
  `difficolta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `percorsi`
--

INSERT INTO `percorsi` (`id`, `nome`, `difficolta`) VALUES
(8, 'Percorso 1', 4),
(14, 'Percorso 2', 3),
(15, 'Percorso 3', 5);

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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
