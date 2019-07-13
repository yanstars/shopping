/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.5.62 : Database - shopping
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`shopping` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `shopping`;

/*Table structure for table `goods` */

DROP TABLE IF EXISTS `goods`;

CREATE TABLE `goods` (
  `goods_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(50) NOT NULL COMMENT '商品名字',
  `category_id` int(11) unsigned DEFAULT NULL COMMENT '分类Id',
  `brand` varchar(50) DEFAULT NULL COMMENT '品牌',
  `color` varchar(10) DEFAULT NULL COMMENT '颜色',
  `memory` varchar(20) DEFAULT NULL COMMENT '内存大小',
  `stock` int(11) DEFAULT NULL COMMENT '库存',
  `hot` tinyint(2) DEFAULT '0' COMMENT '0-非热门 1-热门',
  `is_new` tinyint(2) DEFAULT '0' COMMENT '0-非新机 1-新机',
  `price` int(11) DEFAULT '0' COMMENT '价格',
  `thumb_url` varchar(500) DEFAULT NULL COMMENT '缩略图',
  PRIMARY KEY (`goods_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `goods_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

/*Data for the table `goods` */

insert  into `goods`(`goods_id`,`goods_name`,`category_id`,`brand`,`color`,`memory`,`stock`,`hot`,`is_new`,`price`,`thumb_url`) values (1,'小巧包',1,'拉夏贝尔','天空之境','A4',44,1,1,13900,'https://img14.360buyimg.com/n7/jfs/t1/20382/39/12581/229510/5c98ccd9E16dec112/8ecf0cb424de1349.jpg'),(2,'小方包',1,'迪奥','馥蕾红','A4',12,1,0,13900,'https://img.alicdn.com/bao/uploaded/i2/119662482/O1CN01V08CM21UCnYDSO85y_!!0-item_pic.jpg_180x180.jpg'),(3,'方形包',1,'提拉米苏','冰川蓝','A4',32,1,0,13900,'https://img.alicdn.com/bao/uploaded/i2/119662482/O1CN01284vDZ1UCnYFHjRTu_!!0-item_pic.jpg_180x180.jpg'),(4,'手提包',1,'清凉一夏','魅焰红','A4',111,0,0,13900,'https://img.alicdn.com/bao/uploaded/i4/119662482/O1CN012Ry2dO1UCnYFIH50U_!!0-item_pic.jpg_180x180.jpg'),(5,'拉杆包',1,'inshoping','白色','A4',24,1,0,13900,'https://img.alicdn.com/bao/uploaded/i1/119662482/O1CN01F9051B1UCnYI0W2fO_!!0-item_pic.jpg_180x180.jpg'),(6,'夏天一夏',1,'天空之城','金色','A4',16,0,1,13900,'https://img.alicdn.com/bao/uploaded/i4/119662482/O1CN01sbKFzl1UCnY886Fvk_!!0-item_pic.jpg_180x180.jpg'),(7,'双肩包',1,'特步','极光','A4',50,0,1,13900,'https://img.alicdn.com/bao/uploaded/i1/119662482/O1CN013Yg1yt1UCnY88oER8_!!0-item_pic.jpg_180x180.jpg'),(8,'春季新款',1,'鸿星尔克','星雾蓝','A4',123,1,0,13900,'https://img.alicdn.com/bao/uploaded/i1/119662482/O1CN01y7JSkz1UCnYGG19tB_!!0-item_pic.jpg_180x180.jpg'),(9,'麦包包',1,'海澜之家','星云紫','A4',99,1,1,13900,'https://img.alicdn.com/bao/uploaded/i4/119662482/O1CN01L09pbq1UCnYHzqYW9_!!0-item_pic.jpg_180x180.jpg'),(10,'Z1青春包',1,'贵人鸟','黑金','A4',140,0,0,13900,'https://img.alicdn.com/bao/uploaded/i3/119662482/O1CN01Oafr8P1UCnYFHkqvq_!!0-item_pic.jpg_180x180.jpg'),(11,'MateBook 包',2,'没有品牌','银','A4',41,1,1,13900,'https://img.alicdn.com/bao/uploaded/i1/119662482/O1CN01UgFB9X1UCnYFHiuMJ_!!0-item_pic.jpg_180x180.jpg'),(12,'Y7000P 包',2,'说了个字','黑','A4',22,1,1,13900,'https://img.alicdn.com/bao/uploaded/i3/119662482/O1CN01teXjK21UCnY890VwL_!!0-item_pic.jpg_180x180.jpg'),(13,'时尚包',2,'不知道啊','银','A4',51,1,1,13900,'https://img.alicdn.com/bao/uploaded/i2/119662482/O1CN018Tk2HS1UCnYG622Tr_!!0-item_pic.jpg_180x180.jpg'),(14,'防盗包',2,'一生一世','深空灰','A4',73,1,1,13900,'https://img.alicdn.com/bao/uploaded/i3/119662482/TB1XmMnXaagSKJjy0FcXXcZeVXa_!!0-item_pic.jpg_180x180.jpg'),(15,'单肩斜挎包',2,'麦包包','棕色','A4',23,1,1,13900,'https://img.alicdn.com/bao/uploaded/i2/119662482/O1CN01ojjidk1UCnYEvcDL3_!!0-item_pic.jpg_180x180.jpg'),(16,'头层牛皮包',2,'阿尔法','黑色','A4',25,1,1,13900,'https://img.alicdn.com/bao/uploaded/i3/119662482/O1CN011UCnVLrklo2wdjo_!!0-item_pic.jpg_180x180.jpg'),(17,'花朵双肩包',2,'波士顿','粉色','A4',35,0,0,13900,'https://img.alicdn.com/bao/uploaded/i1/119662482/O1CN01MDEFEv1UCnX54oHoi_!!0-item_pic.jpg_180x180.jpg'),(18,'女韩版包',2,'麦包包1','棕色','A4',36,0,0,13900,'https://img.alicdn.com/bao/uploaded/i4/119662482/O1CN017agHN81UCnYHzrE6D_!!0-item_pic.jpg_180x180.jpg'),(19,'乖包包',2,'moboo','橙色','A4',37,0,0,13900,'https://img.alicdn.com/bao/uploaded/i4/119662482/O1CN01Wd47UP1UCnYEaGWYb_!!0-item_pic.jpg_180x180.jpg'),(20,'辣包包',2,'麦包包2','蓝色','A4',38,0,0,13900,'https://img.alicdn.com/bao/uploaded/i2/TB1X_lMLVXXXXcbXpXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
