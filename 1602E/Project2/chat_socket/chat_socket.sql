-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-10-10 10:53:53
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
-- Database: `chat_socket`
--

-- --------------------------------------------------------

--
-- 表的结构 `token`
--

CREATE TABLE `token` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `token` varchar(32) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1 表示有效，0 表示失效',
  `create_time` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `token`
--

INSERT INTO `token` (`id`, `uid`, `token`, `status`, `create_time`) VALUES
(1, 1, 'u1_f26cd81eb73ec', 1, '1539056339990'),
(2, 1, 'u1_8fe8b78d761db', 1, '1539056420277'),
(3, 1, 'u1_983ab4689ed0d', 1, '1539056459354'),
(4, 1, 'u1_3aa02806b97ee', 1, '1539056488441'),
(5, 1, 'u1_0ca27770538e1', 1, '1539056620934'),
(6, 1, 'u1_d0ecef793ca0f', 1, '1539056660560'),
(7, 1, 'u1_385722321b2b4', 1, '1539057452380'),
(8, 1, 'u1_63c27a4fa4f02', 1, '1539057494651'),
(9, 1, 'u1_c470d47a62c53', 1, '1539063798619'),
(10, 1, 'u1_435ebc7ba96ad', 1, '1539063834892'),
(11, 1, 'u1_ed3ecda6d7c1e', 1, '1539064623262'),
(12, 1, 'u1_bdcb8f1fbad1f', 1, '1539161325193'),
(13, 1, 'u1_283ad9c2dc7b9', 1, '1539161404465'),
(14, 1, 'u1_fb92713d39f06', 1, '1539161446515');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `create_time`) VALUES
(1, '1602e', 'e10adc3949ba59abbe56e057f20f883e', '1539055133519');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `token`
--
ALTER TABLE `token`
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
-- 使用表AUTO_INCREMENT `token`
--
ALTER TABLE `token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
