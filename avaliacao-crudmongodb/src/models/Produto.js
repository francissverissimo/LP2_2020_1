import mongoose from 'mongoose';

const esquema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    qnt: {
        type: Number,
        required: true
    },
    marca: String 
})

const Produto = mongoose.model('Produto', esquema);

export default Produto;