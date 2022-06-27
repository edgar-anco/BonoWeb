//Exported to controllers/bonds.js

import mongoose from 'mongoose';

const bondSchema = mongoose.Schema({
    nombreEmpresa: String,
    logoEmpresa: String,
    tipoMoneda: {
        type: String,
        default: 'Nuevo Sol'
    },
    valorNominal: Number,
    nAnios: Number,
    frecCupon: {
        type: String,
        default: 'Semestral'
    },
    diasXAnio: {
        type: Number,
        default: 360
    },
    tipoTasa: {
        type: String,
        default: 'Efectiva'
    },
    capitalizacion: {
        type: String,
        default: 'Bimestral'
    },
    tasaInteres: Number,
    tasaAnualDcto: Number,
    impRenta: {
        type: Number,
        default: 0.30
    },
    fechaEmision: {
        type: Date,
        default: new Date()
    },
    pPrima: {
        type: Number,
        default: 0.01000
    },
    pEstructuracion: {
        type: Number,
        default: 0.01000
    },
    pColocacion: {
        type: Number,
        default: 0.00250
    },
    pFlotacion: {
        type: Number,
        default: 0.00450
    },
    pCavali: {
        type: Number,
        default: 0.00500
    },
    creator: String,
    name: String,
});

const BondMessage = mongoose.model('BondMessage', bondSchema);

export default BondMessage;