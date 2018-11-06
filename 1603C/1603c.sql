-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-11-01 02:45:27
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
(2, 'adm', '管理员权限', '1540273946652');

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
(9, '13522757621', 675473, 0, '1540196931341'),
(10, '13522757621', 507811, 0, '1540196976593'),
(11, '13522757621', 598330, 0, '1540197037810'),
(12, '13522757621', 853525, 0, '1540197169872'),
(13, '17621526605', 415389, 0, '1540256411560'),
(14, '17621526605', 225302, 0, '1540257157641'),
(15, '13522757621', 755984, 0, '1540281386318'),
(16, '15313136838', 758674, 1, '1540281513260');

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
(9, 26, 'u26_bec471ff312d', 1, '1540274977622'),
(10, 10, 'u10_20ac40545a31', 1, '1540281403103'),
(11, 26, 'u26_869b09c97b68', 1, '1540342994774'),
(12, 26, 'u26_232996867d24', 1, '1540345749556'),
(13, 26, 'u26_167c53de842f', 1, '1540345785223'),
(14, 26, 'u26_2814222aaa73', 1, '1540345836202'),
(15, 26, 'u26_3a266cfd4b02', 1, '1540345903624'),
(16, 26, 'u26_807a8a55b3d6', 1, '1540345903783'),
(17, 26, 'u26_fb4500576db0', 1, '1540345989943'),
(18, 26, 'u26_9face3f7f19b', 1, '1540346025888'),
(19, 26, 'u26_1bdf5d13eab7', 1, '1540346037175'),
(20, 26, 'u26_6f7fe9efca9f', 1, '1540346066418'),
(21, 26, 'u26_045418358373', 1, '1540346143393'),
(22, 10, 'u10_59b98fec7315', 1, '1540346346378'),
(23, 10, 'u10_651f251a255f', 1, '1540346350139'),
(24, 10, 'u10_c33643f015b0', 1, '1540346354702'),
(25, 10, 'u10_70776b9547e1', 1, '1540346368740'),
(26, 14, 'u14_005a32ae8d70', 1, '1540346374241'),
(27, 10, 'u10_87c10a0943fb', 1, '1540346381135'),
(28, 14, 'u14_948de6e17750', 1, '1540346385667'),
(29, 14, 'u14_c458f4bc2eac', 1, '1540346547913'),
(30, 8, 'u8_fc7315f64ce55', 1, '1540346553147'),
(31, 8, 'u8_d99ef2c0a892e', 1, '1540346574496'),
(32, 14, 'u14_47c17288917c', 1, '1540346581986'),
(33, 14, 'u14_e383cd8dcada', 1, '1540346596143'),
(34, 14, 'u14_c811ba1e174e', 1, '1540346716924'),
(35, 14, 'u14_6a738d1573b4', 1, '1540346718284'),
(36, 14, 'u14_127d13bb4036', 1, '1540346719563'),
(37, 10, 'u10_3598f4912f33', 1, '1540346796993'),
(38, 14, 'u14_378cb30a56ab', 1, '1540346797257'),
(39, 10, 'u10_a89833985b42', 1, '1540346819919'),
(40, 14, 'u14_e34090f34bc8', 1, '1540346852944'),
(41, 14, 'u14_b566a225f6b8', 1, '1540346857129'),
(42, 14, 'u14_2edb3d7eb802', 1, '1540346857812'),
(43, 14, 'u14_c922878cec57', 1, '1540346859524'),
(44, 3, 'u3_7a58db7a9afb7', 1, '1540346894736'),
(45, 26, 'u26_12aad1e57921', 1, '1540346929105'),
(46, 10, 'u10_151c71593f5e', 1, '1540346933940'),
(47, 14, 'u14_c964b4d18615', 1, '1540346948581'),
(48, 10, 'u10_4d09861eb249', 1, '1540347021399'),
(49, 14, 'u14_630df2a63459', 1, '1540347023546'),
(50, 14, 'u14_a3595ab57ccb', 1, '1540347024301'),
(51, 12, 'u12_18af0b253346', 1, '1540347052515'),
(52, 17, 'u17_82a0fe007b90', 1, '1540347055456'),
(53, 8, 'u8_e44cc9b1d5aa8', 1, '1540347109465'),
(54, 22, 'u22_1a350f5e8905', 1, '1540347468617'),
(55, 26, 'u26_e0919b4a8124', 1, '1540359515063'),
(56, 26, 'u26_1ac2b7c37ebe', 1, '1540359561746'),
(57, 26, 'u26_c7fd1032717d', 1, '1540359642080'),
(58, 17, 'u17_0f18255da1a2', 1, '1540360001223'),
(59, 10, 'u10_5b7c03b08b1b', 1, '1540360011128'),
(60, 3, 'u3_0b52e37c8528e', 1, '1540360020950'),
(61, 22, 'u22_b53396c1fe79', 1, '1540360028016'),
(62, 14, 'u14_7bf032641877', 1, '1540360044571'),
(63, 10, 'u10_54a72ef1e4b4', 1, '1540360060639'),
(64, 22, 'u22_7fcfb894e287', 1, '1540360063312'),
(65, 14, 'u14_3a61bdee28b2', 1, '1540360066400'),
(66, 16, 'u16_84f077d7f3d1', 1, '1540360077628'),
(67, 26, 'u26_cead20f8171e', 1, '1540360158661'),
(68, 16, 'u16_bf6b39da132d', 1, '1540360193869'),
(69, 26, 'u26_ae7dd359dee6', 1, '1540360212930'),
(70, 26, 'u26_aa933236ecae', 1, '1540360343557'),
(71, 16, 'u16_693a55eec0c0', 1, '1540360407883'),
(72, 26, 'u26_ce9b0bfccf6e', 1, '1540360494197'),
(73, 26, 'u26_8d34c461a861', 1, '1540360510224'),
(74, 26, 'u26_9e31c93d81df', 1, '1540993712064'),
(75, 26, 'u26_f85858f71d79', 1, '1540993841427'),
(76, 26, 'u26_1ec4b39ce294', 1, '1540993906907'),
(77, 26, 'u26_6bd16088ac62', 1, '1540993947563'),
(78, 26, 'u26_eeaec7d314f0', 1, '1540993964777'),
(79, 26, 'u26_b611e79ec29e', 1, '1540994096947'),
(80, 26, 'u26_b66b4b6846a5', 1, '1540995001497'),
(81, 26, 'u26_c22fee2fb4a4', 1, '1540995322659'),
(82, 26, 'u26_ee762ee7df35', 1, '1540995670887'),
(83, 26, 'u26_f003efc8d33c', 1, '1540995700283'),
(84, 26, 'u26_4d9c41e0b50a', 1, '1540995755667'),
(85, 26, 'u26_bb1a430266a5', 1, '1540996030543'),
(86, 26, 'u26_bb27b2e322a7', 1, '1540996077820'),
(87, 26, 'u26_2fdb5418db68', 1, '1540996079225'),
(88, 26, 'u26_e9df07744527', 1, '1540996201628'),
(89, 26, 'u26_0c3811e44d66', 1, '1540996261854'),
(90, 26, 'u26_0dd82b83a178', 1, '1540997582714'),
(91, 26, 'u26_c797e55a396c', 1, '1540997861927'),
(92, 26, 'u26_6f9309ec1400', 1, '1541032134434'),
(93, 26, 'u26_71a289a17761', 1, '1541032189059'),
(94, 26, 'u26_d2423f7dfb65', 1, '1541032207384'),
(95, 26, 'u26_c390dc0479e5', 1, '1541032286967'),
(96, 26, 'u26_7ada4d2ef9e3', 1, '1541032431364'),
(97, 26, 'u26_5917062f40ac', 1, '1541032797038'),
(98, 26, 'u26_a0849a6c1892', 1, '1541032833351'),
(99, 26, 'u26_1dbc448b9bf9', 1, '1541032967408'),
(100, 26, 'u26_e360ebe733ca', 1, '1541033009159'),
(101, 26, 'u26_48a0bb3717ee', 1, '1541033035990'),
(102, 26, 'u26_35dc4cbb3cd1', 1, '1541033065608'),
(103, 26, 'u26_b55b4d80fdab', 1, '1541033089009'),
(104, 26, 'u26_05606b50fdd8', 1, '1541033732725'),
(105, 26, 'u26_33e9beae3d03', 1, '1541033917640'),
(106, 26, 'u26_18053e4fdfcc', 1, '1541034063816'),
(107, 26, 'u26_909c66c6fd46', 1, '1541034243944'),
(108, 26, 'u26_49aa48aa8706', 1, '1541034545272'),
(109, 26, 'u26_a8023ca50f9a', 1, '1541034659254');

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
  `avatar` varchar(500) NOT NULL,
  `introduction` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '1表示有效，0表示无效',
  `create_time` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `phone`, `email`, `avatar`, `introduction`, `status`, `create_time`) VALUES
(1, '栗阳', 'b41578a32f594cf0c6c2d0b9ef3fbf5b', '17610119157', '11@qq.com', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541044556657&di=da4cfdb492d82c6', '', 0, '1539932754767'),
(2, '刘承明', 'a407f21847ceff8ad17f233a6adc9357', '17601634044', '22113303200@qq.com', '', '', 0, '1539932754813'),
(3, '富二代小李', 'bdfb0efc405381d7e7e07d9752779bc9', '17634975869', '', '', '', 0, '1539932771577'),
(4, '王盛群', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '13331044569', '', '', '', 0, '1539932780426'),
(5, 'fzk', 'f2e05a318e9f17d9f6476e91c76f8f00', '15135798649', '', '', '', 0, '1539932781107'),
(6, 'wyx', 'ecd54019c3bd11f8d8efe78304a80b5d', '13436834792', '', '', '', 0, '1539932781648'),
(7, '旺旺', '389af8a321a967f67338675d31a3d855', '15011410132', '', '', '', 1, '1539932781991'),
(8, '蓝心', 'ae5873b7058f7829048b3525d805474b', '18811302462', '2739094851@qq.com', '', '', 1, '1539932784101'),
(9, 'zhouzhou', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '15011518243', '', '', '', 1, '1539932784290'),
(10, 'Zoe', '4c6b88e570ec98365dcc69fb08a46d34', '13522757621', '', '', '', 1, '1539932784668'),
(11, 'haocaixia', '2bb88a63e3477b6659be713ef48b88f6', '15810707091', '', '', '', 1, '1539932791374'),
(12, '往后余生', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '13701124921', '', '', '', 1, '1539932792845'),
(13, '贺凯caibencai1', 'ee5593026852ee412aa7ee7656aa0519', '17600067044', '', '', '', 1, '1539932800165'),
(14, '王晗菲', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '15512984890', '', '', '', 1, '1539932801105'),
(15, '赌侠1999', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '15313136838', '', '', '', 1, '1539932805605'),
(16, '王文乐123', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '13673412645', '', '', '', 1, '1539932813030'),
(17, '农村小孩', 'a05e54cd32d8d491703212804ef2cd50', '13691096512', '', '', '', 1, '1539932816829'),
(18, '张舒童', '3151f1931696b6bd406d67e6ba04e718', '17600903076', '', '', '', 1, '1539932825136'),
(19, 'lvjintao1998', '0e051f980ce1d39fc77082d8d220e556', '13716049965', '', '', '', 1, '1539932825848'),
(20, '许阳', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '15010625139', '', '', '', 1, '1539932830948'),
(21, '张瑞迪caibencai2', '838e76898d20bc6b4a18da30f0aa0242', '15210420735', '', '', '', 1, '1539932834140'),
(22, '张云', 'ed8cdcb5b508a775541bf45b002e24ce', '18210718143', '', '', '', 1, '1539932849749'),
(23, '的无奈好', '9e888f9dc2e699965ced5026d26b9bf0', '15063211584', '', '', '', 1, '1539932859038'),
(24, '李志辉', '29b585b2279dfce77b7166e545a470b1', '13120050167', '', '', '', 1, '1539932886919'),
(25, '顾1999', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '15313136839', '', '', '', 1, '1539932887355'),
(26, 'chenmanjie', '4bc4ca0bffe3f12b0a71369a8b0bcb79', '17621526605', '', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541044556657&di=da4cfdb492d82c6199f62603e0dd36c3&imgtype=0&src=http%3A%2F%2Fwww.jf258.com%2Fuploads%2F2013-08-01%2F184221792.jpg', '', 1, '1540189715161');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 使用表AUTO_INCREMENT `roler_access`
--
ALTER TABLE `roler_access`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `token`
--
ALTER TABLE `token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

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
