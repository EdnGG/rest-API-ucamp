const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const guitarSchema = new Schema({
  name: { 
    type: String, 
    required: [true, "Name is required"], 
  },
  color: { 
    type: String,
    required: [true, "color is required"], 
  },
  brand: {
    type: String,
    required: [true, "Brand is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"], 
  },
  Date: { 
    type: Date, 
    default: Date.now 
  },
  
});

/* { PATH } Sera reemplazado por el campo con el atributo 'unique' declarado
en este caso seria 'email'
*/
userSchema.plugin(uniqueValidator, {
  message: "Error, waiting for unique {PATH} ",
});

const Guitar = mongoose.model("Guitar", guitarSchema);

module.exports = Guitar;
