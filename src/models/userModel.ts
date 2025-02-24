import mongoose, { Schema, Document } from 'mongoose';

export interface Iuser extends Document {
  name: string;
  email: string;
  password?: string;
  age?: number;

}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true, 
    trim: true,     
    lowercase: true, 
  },
  password: {type: String, required: true},
  age: { type: Number, default: 20},

},{timestamps: true});

export default mongoose.model<Iuser>('User', userSchema);