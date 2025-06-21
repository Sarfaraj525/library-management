import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: { type: String, required: [true, "Title is required"] },
    author: { type: String, required: [true, "Author is required"] },
    genre: {
      type: String,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
      required: [true, "Genre is required"],
    },
    isbn: { type: String, required: true, unique: true },
    description: String,
    copies: {
      type: Number,
      required: [true, "Copies is required"],
      min: [0, "Copies must be a non-negative number"],
    },
    available: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// ✅ Instance method
bookSchema.methods.decrementCopies = async function (quantity: number) {
  if (this.copies < quantity) {
    throw new Error("Not enough copies available");
  }

  this.copies -= quantity;
  if (this.copies === 0) {
    this.available = false;
  }

  await this.save();
};

export const Book = model("Book", bookSchema);
