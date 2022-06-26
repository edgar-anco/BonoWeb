//Functions exported to routes/bonds.js

import mongoose from 'mongoose';
import BondMessage from '../models/bondMessage.js';

export const getBonds = async (req, res) => {
    try {
        const bondMessages = await BondMessage.find();

        res.status(200).json(bondMessages);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createBond = async (req, res) => {
    const bond = req.body;

    const newBond = new BondMessage(bond);

    try {
        await newBond.save();
        res.status(201).json(newBond);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateBond = async (req, res) => {
    const { id: _id } = req.params;
    const bond = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No hay bonos con ese id');

    const updatedBond = await BondMessage.findByIdAndUpdate(_id, { ...bond, id }, { new: true });

    res.json(updatedBond);
}