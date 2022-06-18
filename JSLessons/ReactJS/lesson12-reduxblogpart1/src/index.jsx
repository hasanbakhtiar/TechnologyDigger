import React from "react";
import ReactDOM from "react-dom/client";
import configureStore from "./store/configureStore";
import { addBlog,removeBlog } from "./actions/actionBlog";
const store = configureStore();





store.subscribe(() => {
  console.log(store.getState());
});

const blog1 = store.dispatch(addBlog({basliq:"Applein yeni m2 prosessoru", aciqlama:"qiymeti 3000$"}));
const blog2 = store.dispatch(addBlog({basliq:"Asus un yeni rog seriyasi", aciqlama:"qiymeti 4000$"}));
console.log(blog1.blog.id);
store.dispatch(removeBlog({id:blog1.blog.id}))

const App = () => {
  return <h1>Hello</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
