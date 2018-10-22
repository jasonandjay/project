-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-10-19 09:08:51
-- 服务器版本： 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `1603c`
--

-- --------------------------------------------------------

--
-- 表的结构 `phone_code`
--

CREATE TABLE `phone_code` (
  `id` int(11) NOT NULL,
  `phone` int(11) NOT NULL,
  `code` int(6) NOT NULL,
  `status` int(1) NOT NULL COMMENT '1表示有效，0表示失效',
  `create_time` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(32) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '1表示有效，0表示无效',
  `create_time` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `phone`, `email`, `status`, `create_time`) VALUES
(1, '栗阳栗', 'b41578a32f594cf0c6c2d0b9ef3fbf5b', '17610119157', '', 1, '1539932754767'),
(2, 'liuchengming', 'a407f21847ceff8ad17f233a6adc9357', '17601634044', '', 1, '1539932754813'),
(3, '富二代小李', 'bdfb0efc405381d7e7e07d9752779bc9', '17634975869', '', 1, '1539932771577'),
(4, '王盛群', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '13331044569', '', 1, '1539932780426'),
(5, 'fzk', 'f2e05a318e9f17d9f6476e91c76f8f00', '15135798649', '', 1, '1539932781107'),
(6, 'wyx', 'ecd54019c3bd11f8d8efe78304a80b5d', '13436834792', '', 1, '1539932781648'),
(7, '旺旺', '389af8a321a967f67338675d31a3d855', '15011410132', '', 1, '1539932781991'),
(8, '蓝心aa', 'ae5873b7058f7829048b3525d805474b', '18811302462', '', 1, '1539932784101'),
(9, 'zhouzhou', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '15011518243', '', 1, '1539932784290'),
(10, 'Zoe', '4c6b88e570ec98365dcc69fb08a46d34', '13522757621', '', 1, '1539932784668'),
(11, 'haocaixia', '2bb88a63e3477b6659be713ef48b88f6', '15810707091', '', 1, '1539932791374'),
(12, '往后余生', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '13701124921', '', 1, '1539932792845'),
(13, '贺凯caibencai1', 'ee5593026852ee412aa7ee7656aa0519', '17600067044', '', 1, '1539932800165'),
(14, '王晗菲', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '15512984890', '', 1, '1539932801105'),
(15, '赌侠1999', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '15313136838', '', 1, '1539932805605'),
(16, '王文乐123', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '13673412645', '', 1, '1539932813030'),
(17, '农村小孩', 'a05e54cd32d8d491703212804ef2cd50', '13691096512', '', 1, '1539932816829'),
(18, '张舒童', '3151f1931696b6bd406d67e6ba04e718', '17600903076', '', 1, '1539932825136'),
(19, 'lvjintao1998', '0e051f980ce1d39fc77082d8d220e556', '13716049965', '', 1, '1539932825848'),
(20, '许阳', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '15010625139', '', 1, '1539932830948'),
(21, '张瑞迪caibencai2', '838e76898d20bc6b4a18da30f0aa0242', '15210420735', '', 1, '1539932834140'),
(22, '张云', 'ed8cdcb5b508a775541bf45b002e24ce', '18210718143', '', 1, '1539932849749'),
(23, '的无奈好', '9e888f9dc2e699965ced5026d26b9bf0', '15063211584', '', 1, '1539932859038'),
(24, '李志辉', '29b585b2279dfce77b7166e545a470b1', '13120050167', '', 1, '1539932886919'),
(25, '顾1999', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '15313136839', '', 1, '1539932887355');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `phone_code`
--
ALTER TABLE `phone_code`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `phone_code`
--
ALTER TABLE `phone_code`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
