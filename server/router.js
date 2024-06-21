import express from 'express';
import { User } from './schema/User.js';
import { EyeCart } from './schema/eyeCart.js';
import jwt from 'jsonwebtoken';

const secret = 'qoiuehwbhecehbc';
export const router = express.Router();

router.get('/user', async (req, res) => {
    try {
        console.log("read user");
        const data = await User.find({});
        console.log(data);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/signup', async (req, res) => {
    try {
        // console.log('Request body:', req.body);
        const newUser = new User(req.body);
        await newUser.save();
        jwt.sign(req.body, secret, (err, token) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ message: "something went wrong" });
            }
            res.status(201).send({ user: newUser, token });
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ message: 'Error creating user', error });
    }
});

router.post('/login', async (req, res) => {
    try {
        console.log('Request body:', req.body);
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        // Check if the password matches (this assumes you have a password hashing and comparison logic)
        // const isMatch = await user.comparePassword(password);
        // if (!isMatch) {
        //     return res.status(401).send({ message: "Invalid credentials" });
        // }

        // Sign the JWT token
        jwt.sign({ userId: user._id, email: user.email }, secret, (err, token) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ message: "something went wrong" });
            }
            res.status(200).send({ user, token });
        });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).send({ message: 'Error logging in user', error });
    }
});

router.put('/updateUser/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;

        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

        if (!updatedUser) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send({ message: 'Error updating user', error });
    }
});

router.delete('/deleteUser/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ message: 'Error deleting user', error });
    }
});

router.get('/eye', async (req, res) => {
    try {
        const data = await EyeCart.find({});
        console.log(data);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
