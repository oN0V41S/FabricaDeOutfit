import mongoose from 'mongoose'

// Modelo do objeto de Produto que será utilizado no banco
const Product = mongoose.model('Film', {
  name:         String,
  preco:        String,
  link_buy:     String,
  images:       [String]
});

export default Product;