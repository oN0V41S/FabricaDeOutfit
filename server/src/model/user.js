const mongoose = require("mongoose");

// Modelo do objeto de Usuário
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
  itens_saved: [String],
  itens_card: [String]
});

module.exports = User;
