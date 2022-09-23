import React from 'react';
import './navbar.css';
import {BiSearchAlt2, } from 'react-icons/bi' ;

function Navbar(props) {  
    return (
      <div className="nav_container-1 d-flex">
      <div className="nav_logo">
        <img src="https://phimmoichills.net/dev/images/logo.png" alt="Phimchill" />
      </div>
      <ul className="nav_menu d-flex">
        <li><a href="#">PHIMMOI</a> </li>
        <li><a href="#">PHIM LẺ</a>  </li>
        <li><a href="#">PHIM BỘ</a> </li>
        <li className='nav_category'><a href="#">THỂ LOẠI</a> 
        <div className="nav_menu-category">
          <div className="d-flex category ">
          <ul>
            <li><a href="#">Phim hành động</a> </li>
            <li><a href="#">Phim tình cảm</a> </li>
            <li><a href="#">Phim hài hước</a> </li>
            <li><a href="#">Phim cổ trang</a> </li>
            <li><a href="#">Phim tâm lý</a> </li>
            <li><a href="#">Phim hình sự</a> </li>
            <li><a href="#">Phim chiến tranh</a> </li>
            <li><a href="#">Phim thể thao</a> </li>
            <li><a href="#">Game Show</a> </li>
            <li><a href="#">Phim chiếu rạp</a> </li>
            <li><a href="#">Phim sắp chiếu</a> </li>
          </ul>
          <ul>
            <li><a href="#">Phim võ thuật</a> </li>
            <li><a href="#">Phim hoạt hình </a> </li>
            <li><a href="#">Phim viễn tưởng</a> </li>
            <li><a href="#">Phim phiêu lưu</a> </li>
            <li><a href="#">Phim khoa học</a> </li>
            <li><a href="#">Phim ma-kinh dị</a> </li>
            <li><a href="#">Phim âm nhạc</a> </li>
            <li><a href="#">Phim thần thoại</a> </li>
            <li><a href="#">Phim truyền hình</a> </li>
            <li><a href="#">Phim anime</a> </li>
            <li><a href="#">Phim thuyết minh</a> </li>
          </ul>
          </div>

          </div></li>
        <li className="nav_menu-national"><a href="#">QUỐC GIA</a> 
            <div className="nav_national ">
                <div className="national d-flex">
                <ul>
                    <li><a href = "#">Phim Trung Quốc </a></li>
                    <li><a href = "#">Phim Nhật Bản </a></li>
                    <li><a href = "#">Phim Thái Lan </a></li>
                    <li><a href = "#">Phim Tổng Hợp </a></li>
                    <li><a href = "#">Phim Ấn Độ </a> </li>
                    
                </ul>
                <ul>
                    <li><a href = "#">Phim Hàn Quốc </a></li>
                    <li><a href = "#">Phim Âu Mỹ </a> </li>
                    <li><a href = "#">Phim Đài Loan </a> </li>
                    <li><a href = "#">Phim HongKong </a></li>
                </ul>
                </div>

            </div>            
        </li>
        <li className="nav_release"><a href="#">NĂM PHÁT HÀNH</a>
            <div className ="nav_menu-release">
                <div className="release d-flex">\
                <ul>
                    <li><a href ="#">Phim 2022</a> </li>
                    <li><a href ="#">Phim 2020</a> </li>
                    <li><a href ="#">Phim 2018</a> </li>
                    <li><a href ="#">Phim 2016</a> </li>
                    <li><a href ="#">Phim 2014</a> </li>
                    <li><a href ="#">Phim 2012</a> </li>
                    <li><a href ="#">Phim 2010</a> </li>
                    <li><a href ="#">Phim 2008</a> </li>
                    <li><a href ="#">Phim trước 2007</a></li>
                </ul>
                <ul>
                    <li><a href ="#">Phim 2021</a></li>
                    <li><a href ="#">Phim 2019</a></li>
                    <li><a href ="#">Phim 2017</a></li>
                    <li><a href ="#">Phim 2015</a></li>
                    <li><a href ="#">Phim 2013</a></li>
                    <li><a href ="#">Phim 2011</a></li>
                    <li><a href ="#">Phim 2009</a></li>
                    <li><a href ="#">Phim 2007</a></li>

                </ul></div>
            </div> </li>
        <li><a href="#"> PHIM CHIẾU RẠP</a></li>
        <li><a href="#">TRAILER</a> </li>
        <li className=" nav_top"><a href="#" style={{color: '#ff9601'}}>TOP PHIM</a>
        <div className="nav_menu-top">
            <div className="top d-flex">
                    <ul>
                        <li> <a href ="#">Top IMDB </a></li>
                        <li> <a href ="#">Phim Netflix </a></li>
                        <li> <a href ="#">Phim Marvel </a></li>
                        
                    </ul>
                    <ul>
                        <li> <a href ="#">Phim hot </a></li>
                        <li> <a href ="#">Phim DC Comic </a></li>
                        <li> <a href ="#">Phim HD </a></li>
                       
                    </ul>
                </div></div> </li>
      </ul>
      <div className="nav_input">
      <input type="text" placeholder="Tìm tên phim, diễn viên..." className='input' />
      <BiSearchAlt2 className="nav_search" />

      </div>


    </div>
    );
}
export default Navbar