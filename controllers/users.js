
const express = require('express');
const User = require('../models/Users');


const getUsers = async (req, res) => {

    let users = await User.find();
    return res.status(201).json({
        ok: true,
        users
    })
};

const createUsers = async (req, res) => {
    const dbUser = new User(req.body);
    console.log(dbUser);

    await dbUser.save();
    return res.status(201).json({
        ok: true,
        user: dbUser
    })
};


const updateUsers = async (req, res) => {
    const { id } = req.body;
    console.log(id);
    // buscar por id
    let user = await User.findOne({ _id: id });
    console.log(user);

    await user.update(req.body);
    return res.status(201).json({
        ok: true,
        user
    })
};


const deleteUsers = async (req, res) => {
    const { id } = req.body;
    console.log(id);
    // buscar por id
    let user = await User.findOne({ _id: id });
    console.log(user);

    await user.delete(user);
    return res.status(201).json({
        ok: true,
        user
    })
};



module.exports = {
    getUsers,
    updateUsers,
    createUsers,
    deleteUsers
};