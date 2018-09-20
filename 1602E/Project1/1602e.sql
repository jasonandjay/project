-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-09-18 10:39:35
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
-- Database: `1602e`
--

-- --------------------------------------------------------

--
-- 表的结构 `access`
--

CREATE TABLE `access` (
  `id` int(11) NOT NULL,
  `accessname` char(10) NOT NULL,
  `create_time` char(15) NOT NULL,
  `descript` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户权限信息表';

--
-- 转存表中的数据 `access`
--

INSERT INTO `access` (`id`, `accessname`, `create_time`, `descript`) VALUES
(1, '权限管理', '1537259447', '为角色分配权限和修改权限'),
(2, '角色管理', '1537259447', '为用户分配角色和修改角色'),
(3, '点名', '1537259447', '给讲师点名'),
(4, '记录成绩', '1537259447', '给每个学生登成绩');

-- --------------------------------------------------------

--
-- 表的结构 `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `rolername` char(20) NOT NULL,
  `create_time` varchar(15) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色信息表';

--
-- 转存表中的数据 `role`
--

INSERT INTO `role` (`id`, `rolername`, `create_time`, `description`) VALUES
(1, '班长', '1537259447', '为班级背锅'),
(2, '学委', '1537259447', '收作业，做成绩单'),
(3, '生委', '1537259447', '三表，网管，打扫卫生'),
(4, '安委', '1537259447', '拉闸'),
(5, '文书', '1537259447', '洗脑'),
(6, 'admin', '1537259447', '超级管理员');

-- --------------------------------------------------------

--
-- 表的结构 `role_access`
--

CREATE TABLE `role_access` (
  `id` int(11) NOT NULL,
  `rid` int(11) NOT NULL,
  `aid` int(11) NOT NULL,
  `create_time` char(15) NOT NULL,
  `update_time` char(15) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` char(30) NOT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `create_time`) VALUES
(1, '马惠龙是猪', '7fa8282ad93047a4d6fe6111c93b308a', '1537255213635'),
(2, 'chenmanjie', 'e10adc3949ba59abbe56e057f20f883e', '1537255214178'),
(3, 'liubiao', '21218cca77804d2ba1922c33e0151105', '1537255215210'),
(4, 'admin', '7fa8282ad93047a4d6fe6111c93b308a', '1537255217139'),
(5, 'wuwenting', '9e4bdb543b4afae8a7cdeb63c860b369', '1537255220945'),
(6, 'wangxuetin', 'e10adc3949ba59abbe56e057f20f883e', '1537255223854'),
(7, 'chenlin', 'ad2e59a61539ae9f4080a172d396d42d', '1537255224231'),
(8, 'admin', '7fa8282ad93047a4d6fe6111c93b308a', '1537255225238'),
(9, 'muxiaowei', 'a8f5f167f44f4964e6c998dee827110c', '1537255227596'),
(10, 'maHuiLongI', '7fa8282ad93047a4d6fe6111c93b308a', '1537255228177'),
(11, 'chengxin', 'e10adc3949ba59abbe56e057f20f883e', '1537255229295'),
(12, 'chenggong', 'e10adc3949ba59abbe56e057f20f883e', '1537255230827'),
(13, 'liwang', 'a27dd46f4b7ade0ef5b361ee14f72701', '1537255232944'),
(14, 'nishizhume', '0d7699c7614107e4881dfb00dfbab172', '1537255235851'),
(15, 'zhangjie', 'e10adc3949ba59abbe56e057f20f883e', '1537255237038'),
(16, 'zhangsongz', '1c46762fad972981a5d4958243704469', '1537255237350'),
(17, 'majian', 'e10adc3949ba59abbe56e057f20f883e', '1537255238946'),
(18, 'lili', 'e10adc3949ba59abbe56e057f20f883e', '1537255240330'),
(19, 'nanbeibei', 'e10adc3949ba59abbe56e057f20f883e', '1537255240478'),
(20, 'lilixiao', 'da7505b1dc2532582e2e8a8da84cb0b2', '1537255240933'),
(21, 'yaolinlin', '808775aa8bc246ccd6decc259ab83576', '1537255244756'),
(22, 'rainbow', 'e10adc3949ba59abbe56e057f20f883e', '1537255245149'),
(23, 'hanpeng', 'e10adc3949ba59abbe56e057f20f883e', '1537255245350'),
(24, 'xuejie', '110cf74e51ecb0981d9881d639e8b9aa', '1537255246413'),
(25, 'liwenhui', 'a3739f59e5d850e1ce7de65010d9028c', '1537255246444'),
(26, 'abcdef', 'e10adc3949ba59abbe56e057f20f883e', '1537255250434'),
(27, 'rainbow', 'e10adc3949ba59abbe56e057f20f883e', '1537255250613'),
(28, 'zs', '21218cca77804d2ba1922c33e0151105', '1537255251091'),
(29, 'mahuilong', '25f9e794323b453885f5181f1b624d0b', '1537255255414'),
(30, 'gechaoqun', 'e5b7a4ea498e41fce23659f0d4d1f224', '1537255255589'),
(31, 'admin', '7fa8282ad93047a4d6fe6111c93b308a', '1537255278504'),
(32, 'weixing', 'e807f1fcf82d132f9bb018ca6738a19f', '1537255304181'),
(33, 'wangjuan', 'e10adc3949ba59abbe56e057f20f883e', '1537255304429'),
(35, 'liangbiana', 'e10adc3949ba59abbe56e057f20f883e', '1537255317807'),
(36, '慧马龙拳-(づ￣3￣', 'e10adc3949ba59abbe56e057f20f883e', '1537255372518'),
(37, 'chenmanjie', 'e10adc3949ba59abbe56e057f20f883e', '1537256024627'),
(38, 'chenmanjie', 'e10adc3949ba59abbe56e057f20f883e', '1537256027581'),
(39, 'chenmanjie', 'e10adc3949ba59abbe56e057f20f883e', '1537256066869'),
(40, 'chenmanjie', 'e10adc3949ba59abbe56e057f20f883e', '1537256115199'),
(41, 'chenmanjie', '7fa8282ad93047a4d6fe6111c93b308a', '1537256229229'),
(42, 'chenmanjie', '7fa8282ad93047a4d6fe6111c93b308a', '1537256237002'),
(43, 'chenmanjie4', '7fa8282ad93047a4d6fe6111c93b308a', '1537256280033'),
(44, '马慧龙的鼻子有两个孔', 'e10adc3949ba59abbe56e057f20f883e', '1537256413189'),
(45, '马慧龙的鼻子有两个洞', 'e10adc3949ba59abbe56e057f20f883e', '1537256423913'),
(46, '朱明路', 'bb49f226bf2b2d4e592580bd0f0e14b8', '1537256452812');

-- --------------------------------------------------------

--
-- 表的结构 `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `rid` int(11) NOT NULL,
  `status` int(1) NOT NULL,
  `create_time` char(15) NOT NULL,
  `update_time` char(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户角色关系表';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access`
--
ALTER TABLE `access`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_access`
--
ALTER TABLE `role_access`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `access`
--
ALTER TABLE `access`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用表AUTO_INCREMENT `role_access`
--
ALTER TABLE `role_access`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- 使用表AUTO_INCREMENT `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
