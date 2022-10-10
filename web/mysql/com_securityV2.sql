-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 10, 2022 at 12:59 PM
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
CREATE DATABASE IF NOT EXISTS `com_security` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `com_security`;

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
(133, '2022-10-10', '17:54:41', '158.108.230.127', 'Thailand(TH)', 13.75, 100.467, 'narudon080144@gmail.com', 1, 1);

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
(2, 'narudon080144@gmail.com', '$2b$10$Oy/qnyFvOHNV21LywMsqwOgQaXI6lEKLEa60LfgFvUhMLoG85KfHu', 'Narudon', 'Saehan', 'what\'s your favorite food', 'test', 'user', '2022-10-10 17:54:09', '[\"$2b$10$P1BNz5JU2O2saiJXNXy6YeSfF/mazREBfm0qfGMP99s2r3xVKVKby\",\"$2b$10$L2xmzoPrCJpwv2KDEccv/eKi6K7DkRuLxJwYMb4craTS3hUeoPL02\",\"$2b$10$UO3FZWgMr4T1W4dJbpFVv.6Eegx2CUuHsE/vVS6L56UVRnzqzy6qG\",\"$2b$10$so2lq2UYA.251WwG41XCCuWPcMMHU2oHLWnnr7T8nsXFYuqUNE8A2\",\"$2b$10$h.bO2l2baFu2cJBggcH9COytSjPZXI9XFpZjjqPtKPxsqp4.kgK0O\",\"$2b$10$n4bzp6AqCY711SwNkFi.i.40HgS6BDAh.tgzSMHAi4ctJz4.umAGO\",\"$2b$10$Oy/qnyFvOHNV21LywMsqwOgQaXI6lEKLEa60LfgFvUhMLoG85KfHu\"]'),
(3, 'lokigame2014@gmail.com', '$2b$10$51fJd2MBDlRmklmASFzMPeIQxaitrxy7g/cLKipacEgvGeaPsgQjO', 'www', 'www', 'คุณชอบสีอะไร', 'red', 'user', '2022-09-13 23:47:09', '[\"$2b$10$51fJd2MBDlRmklmASFzMPeIQxaitrxy7g/cLKipacEgvGeaPsgQjO\"]'),
(4, 'thitaree.n@ku.th', '$2b$10$2PQV86CcRGP23GNQSxEKNuTXdHkl4Bf1Axx4Zeh3JM6kxpabRQgyi', 'Bam_4eve', 'xoxo', 'คุณชอบอาหารอะไร', 'ข้าวผัดกุ้ง', 'user', '2022-10-09 02:56:11', '[\"$2b$10$2PQV86CcRGP23GNQSxEKNuTXdHkl4Bf1Axx4Zeh3JM6kxpabRQgyi\"]'),
(6, 'natdanai.kra@ku.th', '$2b$10$NQfKcVYg50jeMTmO7/mmhelCcaodb7pRK/cRf5r5QZ/A/yKNtOz62', 'นายณัฐดนัย', 'ไกรรอด', 'what\'s your favorite food', 'oikkk', 'user', '2022-10-08 04:08:35', '[\"$2b$10$NQfKcVYg50jeMTmO7/mmhelCcaodb7pRK/cRf5r5QZ/A/yKNtOz62\"]'),
(8, 'pichayada.k@ku.th', '$2b$10$.mYFQUN.4S/bgc07k.0eXOYYnxsYP.xeVJtbN0/e8tQ/eODv.ozae', 'Pichayada', 'KRITTAWATIN', 'what\'s your favorite food', 'noodle', 'user', '2022-10-09 03:08:20', '[\"$2b$10$.mYFQUN.4S/bgc07k.0eXOYYnxsYP.xeVJtbN0/e8tQ/eODv.ozae\"]'),
(9, 'jirawat.boo@ku.th', '$2b$10$XaQ6xpQ/eDFEx.NSCCaN5e6N6NIxYHcf47fhMCA5QvjldC8Oaxomy', 'jirawat', 'boonya', 'what\'s your favorite food', 'pizza', 'user', '2022-10-10 02:39:22', '[\"$2b$10$XaQ6xpQ/eDFEx.NSCCaN5e6N6NIxYHcf47fhMCA5QvjldC8Oaxomy\"]'),
(10, 'narudon.s@ku.th', '$2b$10$kooZOgrdshZk7TrsBHNdlOcATv4G93wTQDg9E3I5TBQTpq4fjrR02', 'Narudon', 'Saehan', 'what\'s your favorite food', 'AA', 'user', '2022-10-10 16:56:40', '[\"$2b$10$qdDJsJz0rFkvZHHmKIdRV.mDwyGbiEi7OOpiJkr/svy3qcrgLM0EG\",\"$2b$10$I5uqhkuSG0w2C0i36Zax7uZOg1kdgJeA10eEz7hI2FTeC3KEZO8Le\",\"$2b$10$kooZOgrdshZk7TrsBHNdlOcATv4G93wTQDg9E3I5TBQTpq4fjrR02\"]');

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
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Database: `employeesystem`
--
CREATE DATABASE IF NOT EXISTS `employeesystem` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `employeesystem`;
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Table structure for table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin DEFAULT NULL,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Table structure for table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

--
-- Dumping data for table `pma__column_info`
--

INSERT INTO `pma__column_info` (`id`, `db_name`, `table_name`, `column_name`, `comment`, `mimetype`, `transformation`, `transformation_options`, `input_transformation`, `input_transformation_options`) VALUES
(2, 'com_security', 'users', 'answer', '', '', '', '', '', 'role'),
(3, 'com_security', 'users', 'role', '', '', '', '', '', 'password');

-- --------------------------------------------------------

--
-- Table structure for table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Table structure for table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Table structure for table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Dumping data for table `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"com_security\",\"table\":\"users\"},{\"db\":\"com_security\",\"table\":\"log\"},{\"db\":\"com_security\",\"table\":\"test\"},{\"db\":\"com_security\",\"table\":\"allusers\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Table structure for table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin DEFAULT NULL,
  `data_sql` longtext COLLATE utf8_bin DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2022-10-10 10:59:50', '{\"Console\\/Mode\":\"collapse\",\"NavigationWidth\":0}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
