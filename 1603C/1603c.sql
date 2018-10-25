-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-10-23 09:36:32
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
-- 表的结构 `access`
--

CREATE TABLE `access` (
  `id` int(11) NOT NULL,
  `accessname` varchar(10) NOT NULL,
  `info` varchar(20) NOT NULL,
  `create_time` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `access`
--

INSERT INTO `access` (`id`, `accessname`, `info`, `create_time`) VALUES
(1, 'edit', '文章编辑功能', '1540273946652'),
(2, 'admin', '管理员权限', '1540273946652');

-- --------------------------------------------------------

--
-- 表的结构 `phone_code`
--

CREATE TABLE `phone_code` (
  `id` int(11) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `code` int(6) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '1表示有效，0表示失效',
  `create_time` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `phone_code`
--

INSERT INTO `phone_code` (`id`, `phone`, `code`, `status`, `create_time`) VALUES
(2, '17621526605', 878421, 0, '1540188239509'),
(3, '17621526605', 842499, 0, '1540188825224'),
(4, '17621526605', 545845, 0, '1540188843808'),
(5, '17621526605', 674544, 0, '1540189719917'),
(6, '15011512222', 253005, 1, '1540194850880'),
(7, '15011512222', 527338, 1, '1540195138463'),
(8, '13522757621', 803743, 0, '1540196629532'),
(9, '13522757621', 675473, 1, '1540196931341'),
(10, '13522757621', 507811, 1, '1540196976593'),
(11, '13522757621', 598330, 1, '1540197037810'),
(12, '13522757621', 853525, 1, '1540197169872'),
(13, '17621526605', 415389, 0, '1540256411560'),
(14, '17621526605', 225302, 0, '1540257157641');

-- --------------------------------------------------------

--
-- 表的结构 `roler`
--

CREATE TABLE `roler` (
  `id` int(11) NOT NULL,
  `rolername` varchar(10) NOT NULL,
  `info` varchar(20) NOT NULL,
  `create_time` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `roler`
--

INSERT INTO `roler` (`id`, `rolername`, `info`, `create_time`) VALUES
(1, 'admin', '超级管理员', '1540273946652');

-- --------------------------------------------------------

--
-- 表的结构 `roler_access`
--

CREATE TABLE `roler_access` (
  `id` int(11) NOT NULL,
  `rid` int(11) NOT NULL,
  `aid` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `create_time` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `roler_access`
--

INSERT INTO `roler_access` (`id`, `rid`, `aid`, `status`, `create_time`) VALUES
(1, 1, 1, 1, '1540273946652'),
(2, 1, 2, 1, '1540273946652');

-- --------------------------------------------------------

--
-- 表的结构 `token`
--

CREATE TABLE `token` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `token` varchar(16) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `create_time` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `token`
--

INSERT INTO `token` (`id`, `uid`, `token`, `status`, `create_time`) VALUES
(1, 26, 'u26_38ba55fe7fbc', 1, '1540256424253'),
(2, 26, 'u26_d4bff7430d35', 1, '1540257190683'),
(3, 26, 'u26_2762e0f7a615', 1, '1540257333706'),
(4, 26, 'u26_76b25fc8d971', 1, '1540257395660'),
(5, 26, 'u26_689bd0d82690', 1, '1540257416768'),
(6, 26, 'u26_f03924b9eb54', 1, '1540274792479'),
(7, 26, 'u26_f456e96df842', 1, '1540274880562'),
(8, 26, 'u26_b8ba9ce918a2', 1, '1540274908709'),
(9, 26, 'u26_bec471ff312d', 1, '1540274977622');

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
(25, '顾1999', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '15313136839', '', 1, '1539932887355'),
(26, 'chenmanjie', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '17621526605', '', 1, '1540189715161');

-- --------------------------------------------------------

--
-- 表的结构 `user_roler`
--

CREATE TABLE `user_roler` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `rid` int(11) NOT NULL,
  `status` int(11) DEFAULT '1',
  `create_time` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user_roler`
--

INSERT INTO `user_roler` (`id`, `uid`, `rid`, `status`, `create_time`) VALUES
(1, 26, 1, 1, '1540273946652'),
(2, 26, 1, 1, '1540273946652');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access`
--
ALTER TABLE `access`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phone_code`
--
ALTER TABLE `phone_code`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roler`
--
ALTER TABLE `roler`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roler_access`
--
ALTER TABLE `roler_access`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `user_roler`
--
ALTER TABLE `user_roler`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `access`
--
ALTER TABLE `access`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `phone_code`
--
ALTER TABLE `phone_code`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用表AUTO_INCREMENT `roler_access`
--
ALTER TABLE `roler_access`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `token`
--
ALTER TABLE `token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- 使用表AUTO_INCREMENT `user_roler`
--
ALTER TABLE `user_roler`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
