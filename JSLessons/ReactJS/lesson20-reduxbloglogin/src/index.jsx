import React from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import configureStore from "./store/configureStore";
import './assets/sass/style.css';
import { addBlog } from "./actions/actionBlog";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import 'aos/dist/aos.css';
const store = configureStore();






store.dispatch(addBlog({img:"https://notecomp.az/image/cache/catalog/Notebook/Asus/90NB0WC1-M009Z0/ASUS%20ZenBook%20UX3402ZA-KM018W%2090NB0WC1-M009Z0-baku-640x640.jpg",title:"Acer un yeni rog seriyasi", desk:"qiymeti 14000$"}));
store.dispatch(addBlog({img:"https://aztech.az/wp-content/uploads/2022/03/ASUS-ZenBook-14-UX425EA-KI918-90NB0SM1-M00BA0-6.png",title:"Acer un yeni rog seriyasi", desk:"qiymeti 14000$"}));
store.dispatch(addBlog({img:"https://aztech.az/wp-content/uploads/2022/03/ASUS-ZenBook-14-UX425EA-KI918-90NB0SM1-M00BA0-6.png",title:"Acer un yeni rog seriyasi", desk:"qiymeti 14000$"}));
store.dispatch(addBlog({img:"https://aztech.az/wp-content/uploads/2022/03/ASUS-ZenBook-14-UX425EA-KI918-90NB0SM1-M00BA0-6.png",title:"Acer un yeni rog seriyasi", desk:"qiymeti 14000$"}));
store.dispatch(addBlog({img:"https://aztech.az/wp-content/uploads/2022/03/ASUS-ZenBook-14-UX425EA-KI918-90NB0SM1-M00BA0-6.png",title:"Acer un yeni rog seriyasi", desk:"qiymeti 14000$"}));
store.dispatch(addBlog({img:"https://aztech.az/wp-content/uploads/2022/03/ASUS-ZenBook-14-UX425EA-KI918-90NB0SM1-M00BA0-6.png",title:"Acer un yeni rog seriyasi", desk:"qiymeti 14000$"}));
store.dispatch(addBlog({img:"https://aztech.az/wp-content/uploads/2022/03/ASUS-ZenBook-14-UX425EA-KI918-90NB0SM1-M00BA0-6.png",title:"Acer un yeni rog seriyasi", desk:"qiymeti 14000$"}));
store.dispatch(addBlog({img:"https://aztech.az/wp-content/uploads/2022/03/ASUS-ZenBook-14-UX425EA-KI918-90NB0SM1-M00BA0-6.png",title:"Acer un yeni rog seriyasi", desk:"qiymeti 14000$"}));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppRouter />
    </Provider>
    
  </React.StrictMode>
);
