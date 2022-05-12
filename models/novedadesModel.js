import mongoose from 'mongoose'

const NovedadesSchema= new mongoose.Schema({
    descrip: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.novedades || mongoose.model('novedades', NovedadesSchema)
export default Dataset


/* Los atributos que se imprimiran dentro de las cards novedades seran images, name, descrip */