import { v4 as uuidv4 } from 'uuid';

// Action Start
export const addBlog = ({title,desk,img}) => ({
  type: "ADD_BLOG",
  blog: {
    id:uuidv4(),
    title: title,
    desk: desk,
    img: img,
  },
});

export const removeBlog = ({id})=>({
    type:"REMOVE_BLOG",
    id:id
})

export const editBlog=(id,update)=>({
  type: "EDIT_BLOG",
  id,
  update
})


// Action END