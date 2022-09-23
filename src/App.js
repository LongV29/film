import './App.css';
import  Navbar from './components/navbar' ;
import Intro from './components/Intro';
import Content from './components/Content';
import Movie from './components/Movierow/Movie';
import Moviee from './components/Movierow/Moviee';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Content />
      <Movie title = "PHIM LẺ MỚI CẬP NHẬT "
             element_1 = "Hành động "  
             element_2 = "Hoạt hình " 
             element_3 = "Kinh dị " 
             element_4 = "Hài hước " 
      />
      <Movie title = "PHIM CHIẾU RẠP" 
             element_1 = "2021 "  
             element_2 = "2020 " 
             element_3 = "2019 " 
             element_4 = "2018 " 
      />
      <Movie title = "PHIM BỘ MỚI CẬP NHẬT"
             element_1 = "Hàn Quốc "  
             element_2 = "Trung Quốc " 
             element_3 = "Âu-Mỹ " 
             element_4 = "Phim Bộ Full " 
      
      />
      <Moviee title = "PHIM THỊNH HÀNH"
              element_1 = 'Phim Lẻ Thịnh Hành'
              element_2 = 'Phim Bộ Thịnh Hành'
      />
              
    </div>
  );
}

export default App;
