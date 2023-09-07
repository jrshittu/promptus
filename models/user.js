import { Schema, model, models } from 'mongoose';

const UserSchema = newSchema({
    email: {
        type: String,
        unique: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, Should contain 8-20 alphanumeric letters and be unique!"]
    }
});