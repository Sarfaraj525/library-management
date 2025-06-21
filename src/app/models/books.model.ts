import { model, Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    genre: {
      type: String,
      enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'],
      required: [true, 'Genre is required and must be one of the allowed values'],
    },
    isbn: {
      type: String,
      required: [true, 'ISBN is required'],
      unique: true,
    },
    description: {
      type: String,
    },
    copies: {
      type: Number,
      required: [true, 'Copies is required'],
      min: [0, 'Copies must be a non-negative number'],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
    versionKey: false, // removes __v field
  },
  
);


export const Book = model('Book', bookSchema)