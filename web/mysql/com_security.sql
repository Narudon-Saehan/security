-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 10, 2022 at 05:00 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `com_security`
--

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `log_id` int(11) NOT NULL,
  `log_date` date NOT NULL,
  `log_time` time NOT NULL,
  `ipv4` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `log_email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_email` tinyint(1) NOT NULL,
  `status_login` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `log`
--

INSERT INTO `log` (`log_id`, `log_date`, `log_time`, `ipv4`, `country`, `latitude`, `longitude`, `log_email`, `status_email`, `status_login`) VALUES
(26, '2022-10-08', '01:44:12', '158.108.229.160', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(27, '2022-10-09', '01:44:43', '158.108.229.160', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(28, '2022-10-09', '01:44:50', '158.108.229.160', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(29, '2022-10-09', '01:45:10', '118.175.243.254', 'Thailand(TH)', 13.75, 100.467, 'natdanai.kra@ku.th', 1, 1),
(30, '2022-10-09', '01:45:38', '158.108.229.160', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(31, '2022-10-09', '02:07:54', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(32, '2022-10-09', '02:11:25', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(33, '2022-10-09', '02:12:15', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(34, '2022-10-09', '02:12:38', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(35, '2022-10-09', '02:12:59', '158.108.230.44', 'Thailand(TH)', 13.75, 100.467, 'thitaree.n@ku.th', 1, 0),
(36, '2022-10-09', '02:14:10', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.kl@ku.th', 0, 0),
(37, '2022-10-09', '02:15:22', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(38, '2022-10-09', '02:15:27', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(39, '2022-10-09', '02:15:47', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(40, '2022-10-09', '02:16:36', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(41, '2022-10-09', '02:32:35', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(42, '2022-10-09', '02:37:18', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(43, '2022-10-09', '02:37:21', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(44, '2022-10-09', '02:37:41', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(45, '2022-10-09', '02:41:37', '158.108.229.160', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(46, '2022-10-09', '02:41:51', '158.108.229.160', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(47, '2022-10-09', '02:45:01', '118.175.243.254', 'Thailand(TH)', 13.75, 100.467, 'natdanai.kra@ku.th', 1, 1),
(48, '2022-10-09', '02:53:26', '158.108.229.160', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(49, '2022-10-09', '02:56:52', '158.108.230.44', 'Thailand(TH)', 13.75, 100.467, 'thitaree.n@ku.th', 1, 1),
(50, '2022-10-09', '02:57:19', '158.108.229.160', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(51, '2022-10-09', '02:57:27', '158.108.229.160', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(52, '2022-10-09', '02:58:42', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(53, '2022-10-09', '03:04:31', '158.108.230.44', 'Thailand(TH)', 13.75, 100.467, 'thitaree.n@ku.th', 1, 1),
(54, '2022-10-09', '03:06:26', '158.108.230.44', 'Thailand(TH)', 13.75, 100.467, 'thitaree.n@ku.th', 1, 1),
(55, '2022-10-09', '03:08:01', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 0, 0),
(56, '2022-10-09', '03:08:46', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 1, 1),
(57, '2022-10-09', '03:08:56', '158.108.229.160', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(58, '2022-10-09', '03:10:08', '158.108.230.44', 'Thailand(TH)', 13.75, 100.467, 'thitaree.n@ku.th', 1, 1),
(59, '2022-10-09', '03:10:09', '159.192.33.250', 'Thailand(TH)', 13.75, 100.467, 'lokigame2014@gmail.com', 1, 1),
(60, '2022-10-09', '03:12:07', '119.76.153.214', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 1, 1),
(61, '2022-10-09', '03:21:38', '158.108.229.160', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(62, '2022-10-09', '03:24:31', '158.108.229.160', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(63, '2022-10-09', '14:49:59', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(64, '2022-10-09', '14:50:07', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(65, '2022-10-09', '14:50:13', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(66, '2022-10-09', '14:51:41', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(67, '2022-10-09', '15:51:31', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(68, '2022-10-09', '16:54:36', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(69, '2022-10-09', '20:47:45', '159.192.33.250', 'Thailand(TH)', 13.75, 100.467, 'lokigame2014@gmail.com', 1, 1),
(70, '2022-10-09', '21:20:41', '159.192.33.250', 'Thailand(TH)', 13.75, 100.467, 'lokigame2014@gmail.com', 1, 1),
(71, '2022-10-09', '21:22:45', '159.192.33.250', 'Thailand(TH)', 13.75, 100.467, 'lokigame2014@gmail.com', 1, 1),
(72, '2022-10-09', '21:25:47', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(73, '2022-10-09', '21:29:24', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(74, '2022-10-09', '21:35:02', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(75, '2022-10-09', '21:43:36', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(76, '2022-10-09', '21:45:12', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(77, '2022-10-09', '21:47:46', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(78, '2022-10-09', '22:32:42', '119.76.28.115', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 1, 1),
(79, '2022-10-09', '22:37:45', '118.174.212.149', 'Thailand(TH)', 14.5333, 100.917, 'natdanai.kra@ku.th', 1, 1),
(80, '2022-10-09', '22:50:42', '118.174.212.149', 'Thailand(TH)', 14.5333, 100.917, 'natdanai.kra@ku.th', 1, 1),
(81, '2022-10-09', '22:55:37', '202.176.129.174', 'Thailand(TH)', 13.7333, 100.533, 'thitaree.n@ku.th', 1, 1),
(82, '2022-10-09', '23:06:16', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(83, '2022-10-09', '23:09:34', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(84, '2022-10-09', '23:13:16', '118.174.212.149', 'Thailand(TH)', 14.5333, 100.917, 'natdanai.kra@ku.th', 1, 1),
(85, '2022-10-09', '23:14:53', '159.192.33.250', 'Thailand(TH)', 13.75, 100.467, 'lokigame2014@gmail.com', 1, 0),
(86, '2022-10-09', '23:15:05', '159.192.33.250', 'Thailand(TH)', 13.75, 100.467, 'lokigame2014@gmail.com', 1, 1),
(87, '2022-10-09', '23:15:50', '118.174.212.149', 'Thailand(TH)', 14.5333, 100.917, 'natdanai.kra@ku.th', 1, 1),
(88, '2022-10-09', '23:16:38', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(89, '2022-10-09', '23:18:12', '119.76.28.115', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 1, 1),
(90, '2022-10-09', '23:25:58', '119.76.28.115', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 1, 1),
(91, '2022-10-09', '23:32:05', '118.174.212.149', 'Thailand(TH)', 14.5333, 100.917, 'natdanai.kra@ku.th', 1, 1),
(92, '2022-10-09', '23:32:07', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(93, '2022-10-10', '00:00:54', '119.76.28.115', 'Thailand(TH)', 13.8167, 100.75, 'pichayada.k@ku.th', 1, 1),
(94, '2022-10-10', '00:10:48', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(95, '2022-10-10', '00:34:08', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(96, '2022-10-10', '00:58:52', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(97, '2022-10-10', '00:59:06', '159.192.33.250', 'Thailand(TH)', 13.75, 100.467, 'lokigame2014@gmail.com', 1, 1),
(98, '2022-10-10', '00:59:45', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(99, '2022-10-10', '00:59:52', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(100, '2022-10-10', '01:14:25', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(101, '2022-10-10', '01:14:31', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(102, '2022-10-10', '01:16:30', '158.108.228.30', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(103, '2022-10-10', '02:42:07', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'jirawat.boo@ku.th', 1, 1),
(104, '2022-10-10', '04:00:25', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(105, '2022-10-10', '04:02:37', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(106, '2022-10-10', '04:02:41', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(107, '2022-10-10', '04:02:49', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(108, '2022-10-10', '04:02:54', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(109, '2022-10-10', '04:04:47', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(110, '2022-10-10', '04:04:53', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon08014@gmail.com', 0, 0),
(111, '2022-10-10', '04:05:26', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon08014@gmail.com', 0, 0),
(112, '2022-10-10', '04:05:30', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon08014@gmail.com', 0, 0),
(113, '2022-10-10', '04:05:37', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon08014@gmail.com', 0, 0),
(114, '2022-10-10', '04:05:47', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(115, '2022-10-10', '04:06:55', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(116, '2022-10-10', '04:21:40', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(117, '2022-10-10', '04:45:07', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(118, '2022-10-10', '05:28:00', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(119, '2022-10-10', '05:28:07', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(120, '2022-10-10', '06:00:04', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(121, '2022-10-10', '06:02:16', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(122, '2022-10-10', '06:02:27', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(123, '2022-10-10', '06:02:34', '1.46.220.138', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(124, '2022-10-10', '14:34:40', '158.108.229.171', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(125, '2022-10-10', '14:34:45', '158.108.229.171', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(126, '2022-10-10', '14:34:51', '158.108.229.171', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(127, '2022-10-10', '14:35:09', '158.108.229.171', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(128, '2022-10-10', '15:37:03', '158.108.230.127', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(129, '2022-10-10', '16:55:39', '158.108.230.107', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(130, '2022-10-10', '16:55:46', '158.108.230.107', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(131, '2022-10-10', '16:56:00', '158.108.230.107', 'Thailand(TH)', 13.75, 100.467, 'narudon.s@ku.th', 1, 1),
(132, '2022-10-10', '17:40:37', '158.108.230.127', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(133, '2022-10-10', '17:54:41', '158.108.230.127', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(134, '2022-10-10', '20:07:01', '158.108.228.119', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(135, '2022-10-10', '20:31:00', '158.108.228.119', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(136, '2022-10-10', '20:46:14', '101.109.23.155', 'Thailand(TH)', 13.05, 100.933, 'natdanai.kra@ku.th', 1, 1),
(137, '2022-10-10', '20:49:58', '202.176.130.198', 'Thailand(TH)', 13.7333, 100.533, 'thitaree.n@ku.th', 1, 1),
(138, '2022-10-10', '20:50:00', '101.109.23.155', 'Thailand(TH)', 13.05, 100.933, 'natdanai.kra@ku.th', 1, 1),
(139, '2022-10-10', '20:54:12', '101.109.23.155', 'Thailand(TH)', 13.05, 100.933, 'natdanai.kra@ku.th', 1, 0),
(140, '2022-10-10', '20:54:36', '101.109.23.155', 'Thailand(TH)', 13.05, 100.933, 'natdanai.kra@ku.th', 1, 1),
(141, '2022-10-10', '21:04:25', '101.109.23.155', 'Thailand(TH)', 13.05, 100.933, 'natdanai.kra@ku.th', 1, 0),
(142, '2022-10-10', '21:04:40', '101.109.23.155', 'Thailand(TH)', 13.05, 100.933, 'natdanai.kra@ku.th', 1, 1),
(143, '2022-10-10', '21:18:33', '1.46.24.110', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(144, '2022-10-10', '21:18:43', '1.46.24.110', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(145, '2022-10-10', '21:20:00', '101.109.23.155', 'Thailand(TH)', 13.05, 100.933, 'natdanai.kra@ku.th', 1, 1),
(146, '2022-10-10', '21:28:00', '202.176.130.198', 'Thailand(TH)', 13.7333, 100.533, 'thitaree.n@ku.th', 0, 0),
(147, '2022-10-10', '21:31:07', '202.176.130.198', 'Thailand(TH)', 13.7333, 100.533, 'thitaree.n@ku.th', 1, 1),
(148, '2022-10-10', '21:36:14', '202.176.130.198', 'Thailand(TH)', 13.7333, 100.533, 'thitaree.n@ku.th', 1, 1),
(149, '2022-10-10', '21:36:30', '101.109.23.155', 'Thailand(TH)', 13.05, 100.933, 'natdanai.kra@ku.th', 1, 1),
(150, '2022-10-10', '21:52:41', '1.46.24.110', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 0),
(151, '2022-10-10', '21:52:48', '1.46.24.110', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1),
(152, '2022-10-10', '21:56:18', '1.46.24.110', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `log_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `data_log` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`data_log`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`log_id`, `date`, `data_log`) VALUES
(2, '2022-10-08', '[{\"log_datetime\":\"2022-10-08T16:23:10.029Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:24:05.003Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:25:54.738Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:02.223Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:04.159Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:09.341Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:10.862Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:12.534Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:13.944Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:20.905Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:21.771Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:22.207Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:22.447Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:22.693Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:22.951Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:23.207Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:23.439Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:31.761Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:32.597Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:32.814Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:33.622Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:33.857Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true},{\"log_datetime\":\"2022-10-08T16:26:34.028Z\",\"ipv4\":\"158.108.228.133\",\"country\":\"Thailand\",\"latitude\":13.75,\"longitude\":100.4667,\"log_email\":\"test@email.com\",\"status_email\":true,\"status_login\":true}]');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `question` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_time` datetime NOT NULL,
  `password_history` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`password_history`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `lastName`, `question`, `answer`, `role`, `password_time`, `password_history`) VALUES
(2, 'narudon080144@gmail.com', '$2b$10$ZsPDciYARXVqsi6zYwNGeuC0gFi4hT82MOABtFZx1WSLIh1FHSHey', 'Narudon', 'Saehan', 'what\'s your favorite food', 'test', 'user', '2022-10-10 21:55:55', '[\"$2b$10$P1BNz5JU2O2saiJXNXy6YeSfF/mazREBfm0qfGMP99s2r3xVKVKby\",\"$2b$10$L2xmzoPrCJpwv2KDEccv/eKi6K7DkRuLxJwYMb4craTS3hUeoPL02\",\"$2b$10$UO3FZWgMr4T1W4dJbpFVv.6Eegx2CUuHsE/vVS6L56UVRnzqzy6qG\",\"$2b$10$so2lq2UYA.251WwG41XCCuWPcMMHU2oHLWnnr7T8nsXFYuqUNE8A2\",\"$2b$10$h.bO2l2baFu2cJBggcH9COytSjPZXI9XFpZjjqPtKPxsqp4.kgK0O\",\"$2b$10$n4bzp6AqCY711SwNkFi.i.40HgS6BDAh.tgzSMHAi4ctJz4.umAGO\",\"$2b$10$Oy/qnyFvOHNV21LywMsqwOgQaXI6lEKLEa60LfgFvUhMLoG85KfHu\",\"$2b$10$LFOiJbnv2Nf1iDkR0HQQ..ZL3DnAgbmIQ5GSfMNcZGFahbIpXwX5.\",\"$2b$10$Eu3UPJYlc7pm.2f6rzVZyOckLNddjjmXDqxaiRWcBz7kAEv.eZoOC\",\"$2b$10$le5JtysD0lUjRV31jf4SYeqyh0i3fU75eVOcmSoiyscT0clONWQp.\",\"$2b$10$ZsPDciYARXVqsi6zYwNGeuC0gFi4hT82MOABtFZx1WSLIh1FHSHey\"]'),
(3, 'lokigame2014@gmail.com', '$2b$10$51fJd2MBDlRmklmASFzMPeIQxaitrxy7g/cLKipacEgvGeaPsgQjO', 'www', 'www', 'คุณชอบสีอะไร', 'red', 'user', '2022-09-13 23:47:09', '[\"$2b$10$51fJd2MBDlRmklmASFzMPeIQxaitrxy7g/cLKipacEgvGeaPsgQjO\"]'),
(8, 'pichayada.k@ku.th', '$2b$10$.mYFQUN.4S/bgc07k.0eXOYYnxsYP.xeVJtbN0/e8tQ/eODv.ozae', 'Pichayada', 'KRITTAWATIN', 'what\'s your favorite food', 'noodle', 'user', '2022-10-09 03:08:20', '[\"$2b$10$.mYFQUN.4S/bgc07k.0eXOYYnxsYP.xeVJtbN0/e8tQ/eODv.ozae\"]'),
(9, 'jirawat.boo@ku.th', '$2b$10$XaQ6xpQ/eDFEx.NSCCaN5e6N6NIxYHcf47fhMCA5QvjldC8Oaxomy', 'jirawat', 'boonya', 'what\'s your favorite food', 'pizza', 'user', '2022-10-10 02:39:22', '[\"$2b$10$XaQ6xpQ/eDFEx.NSCCaN5e6N6NIxYHcf47fhMCA5QvjldC8Oaxomy\"]'),
(10, 'narudon.s@ku.th', '$2b$10$kooZOgrdshZk7TrsBHNdlOcATv4G93wTQDg9E3I5TBQTpq4fjrR02', 'Narudon', 'Saehan', 'what\'s your favorite food', 'AA', 'user', '2022-10-10 16:56:40', '[\"$2b$10$qdDJsJz0rFkvZHHmKIdRV.mDwyGbiEi7OOpiJkr/svy3qcrgLM0EG\",\"$2b$10$I5uqhkuSG0w2C0i36Zax7uZOg1kdgJeA10eEz7hI2FTeC3KEZO8Le\",\"$2b$10$kooZOgrdshZk7TrsBHNdlOcATv4G93wTQDg9E3I5TBQTpq4fjrR02\"]'),
(11, 'thitaree.n@ku.th', '$2b$10$nWaZXvO76NEABejBzTtI7.100X1Az0Grhx4ZUDfBbAsWFH67CiNTu', 'thitaree', 'Nirotsilrapachai', 'what\'s your favorite food', 'ข้าวผัดกุ้ง', 'user', '2022-10-10 21:35:35', '[\"$2b$10$9GSaFHD9KYGv9ZJzapjeiO3e3Bp41W9JpTkZAbvPKMNcMIKOOrdDW\",\"$2b$10$r7pXdYxdlF3cFTh.jJMXdesPoxcJDatnb2Fc7g8LigXkbZGHZh2t2\",\"$2b$10$nWaZXvO76NEABejBzTtI7.100X1Az0Grhx4ZUDfBbAsWFH67CiNTu\"]'),
(12, 'natdanai.kra@ku.th', '$2b$10$AGKEaEtYBKyNX81FrZgXPOz7LUKonITpknNfw1CDW5e7RbTBslUay', 'teelekleklek', 'lekleklek', 'what\'s your favorite food', 'kaitod', 'user', '2022-10-10 21:36:17', '[\"$2b$10$3HwzUYLLBMKWAfTxqkKcTeRjx0jBvkPXQ4w0OHhNE5sPQwyCEzi56\",\"$2b$10$AGKEaEtYBKyNX81FrZgXPOz7LUKonITpknNfw1CDW5e7RbTBslUay\"]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `log`
--
ALTER TABLE `log`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
