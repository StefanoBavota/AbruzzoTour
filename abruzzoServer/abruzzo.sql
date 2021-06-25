-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 25, 2021 alle 12:05
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
  `info` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `percorsi`
--

INSERT INTO `percorsi` (`id`, `nome`, `info`, `image`, `latitude`, `longitude`) VALUES
(8, 'Cascata di San Giovanni', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lacus dignissim ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'https://www.parcomajella.it/foto/grandi/cascata-san-giovanni-3.jpg', 42.16529611416041, 14.151688792061758),
(14, 'Valle dell orfento', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lacus dignissim ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'https://www.parcomajella.it/foto/grandi/scalelle_6-2-2-3-1-1-1-1-3-1-2-1-1-2-1-1-2-1-2-1.jpg', 42.1603453945707, 14.010251469318495),
(15, 'Lago San Domenico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lacus dignissim ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'https://www.visitareabruzzo.it/wp-content/uploads/2020/07/lago-di-san-domenico.jpg', 41.942852564580406, 13.829321429242826),
(27, 'Grotta Cavaliera', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lacus dignissim ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'https://s1.wklcdn.com/image_46/1389176/13139021/8101072Master.jpg', 42.15897462148801, 14.178026776703765),
(28, 'Eremo di Aan Bartolomeo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lacus dignissim ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'https://abruzzoturismo.it/sites/default/files/2018-02/Eremo%20di%20San%20Bartolomeo_Roccamorice.jpg', 42.18259962143855, 14.038796923296236),
(29, 'Gole dell Alento', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lacus dignissim ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'http://majexperience.it/wp-content/uploads/2020/03/gole-fiume-alento-serramonacesca.jpg', 42.23366501349698, 14.101685769318497),
(30, 'Gole di Celano', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lacus dignissim ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'https://bussola.s3.eu-west-1.amazonaws.com/385781/percorso-delle-gole-di-aielli-celano.jpg', 42.08600220961506, 13.567899638636987),
(31, 'Monte Blockhaus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lacus dignissim ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'https://www.yesabruzzo.com/wp-content/uploads/2017/04/cime-della-Maiella-4.jpg', 42.16087254946252, 14.132687686418368),
(32, 'Monte Camicia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lacus dignissim ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'http://abruzzomountainswild.com/wp/wp-content/uploads/2017/06/MONTE-CAMICIA-LE-BALCONATE.jpg', 42.42470005000752, 13.743021901766113),
(33, 'Gole del Salinello', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lacus dignissim ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'https://www.abruzzocamping.it/imm/parchieborghi/5_viedellacqua_pentolone_oneday-resize.jpg', 42.751699877125056, 13.62212558465925),
(34, 'Sorgenti del Pescara', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lacus dignissim ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'https://vitaminaproject.com/wp-content/uploads/sorgenti-del-pescara.jpg', 42.16182160781324, 13.822815153977741),
(35, 'Rocca Calascio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lacus dignissim ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'https://www.tesoridabruzzo.com/wp-content/uploads/2018/07/apertura-1.jpg', 42.32996897069803, 13.68903326136301),
(36, 'Grotte di Stiffe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lacus dignissim ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'https://www.grottestiffe.it/wp-content/uploads/cabecera.jpg', 42.25494822826573, 13.541076269318493);

-- --------------------------------------------------------

--
-- Struttura della tabella `preferiti`
--

CREATE TABLE `preferiti` (
  `id_preferiti` int(11) NOT NULL,
  `id_percorso` int(11) NOT NULL,
  `id_utente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struttura della tabella `recensioni`
--

CREATE TABLE `recensioni` (
  `id` int(11) NOT NULL,
  `titolo` varchar(100) NOT NULL,
  `descrizione` text NOT NULL,
  `id_utente` int(11) NOT NULL,
  `id_percorso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `recensioni`
--

INSERT INTO `recensioni` (`id`, `titolo`, `descrizione`, `id_utente`, `id_percorso`) VALUES
(6, 'bello', 'sdfgagagafgadgghjfghj', 3, 14),
(7, 'Recensione2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id cursus lacus, non aliquam ex. In sed leo mauris. Quisque varius tincidunt libero in lacinia.', 3, 8),
(8, 'Recensione 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id cursus lacus, non aliquam ex. In sed leo mauris. Quisque varius tincidunt libero in lacinia.', 3, 8);

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cognome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`id`, `nome`, `cognome`, `email`, `password`, `is_admin`) VALUES
(3, 'Stefano', 'Bavota', 'test@test.com', '1234', 1),
(10, 'Matteo', 'Del Papa', 'test@test2.com', '1234', 0),
(11, 'Luca', 'Evangelista', 'test@test3.com', '1234', 0);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `percorsi`
--
ALTER TABLE `percorsi`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `preferiti`
--
ALTER TABLE `preferiti`
  ADD PRIMARY KEY (`id_preferiti`),
  ADD KEY `id_utente` (`id_utente`),
  ADD KEY `id_percorso` (`id_percorso`);

--
-- Indici per le tabelle `recensioni`
--
ALTER TABLE `recensioni`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_utente` (`id_utente`),
  ADD KEY `id_percorso` (`id_percorso`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `percorsi`
--
ALTER TABLE `percorsi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT per la tabella `preferiti`
--
ALTER TABLE `preferiti`
  MODIFY `id_preferiti` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT per la tabella `recensioni`
--
ALTER TABLE `recensioni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `preferiti`
--
ALTER TABLE `preferiti`
  ADD CONSTRAINT `preferiti_ibfk_1` FOREIGN KEY (`id_utente`) REFERENCES `utenti` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `preferiti_ibfk_2` FOREIGN KEY (`id_percorso`) REFERENCES `percorsi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `recensioni`
--
ALTER TABLE `recensioni`
  ADD CONSTRAINT `recensioni_ibfk_1` FOREIGN KEY (`id_utente`) REFERENCES `utenti` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recensioni_ibfk_2` FOREIGN KEY (`id_percorso`) REFERENCES `percorsi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
