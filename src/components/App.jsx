import './App.css'
import Product from './Product/Product';

import BookList from './BookList/BookList';
import { favBooks } from './BookList/Books';

export default function App() {
  return (
    <>
      <h1>Best selling</h1>
      <Product 
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product 
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product 
        name="Yum-Yum"
        imgUrl="https://cdn.pixabay.com/photo/2024/02/06/10/52/ai-generated-8556730_1280.jpg"
        price={88.88}
      />

      <>============================</>

      
      <>
        <h1>Books of the week</h1>
        <BookList books={favBooks} />
      </>
    </>
  );
}
