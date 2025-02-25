import multer from "multer";
import path from "path";
import fs from "fs";

// Define the upload directory
const uploadDir = "./uploads";

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

/**
 * Configure Multer storage engine:
 * - `destination`: Specifies the folder where uploaded files will be stored.
 * - `filename`: Ensures unique filenames by appending the current timestamp.
 */
const storage = multer.diskStorage({
  /**
   * Sets the destination folder for storing uploaded files.
   * If the folder doesn't exist, Multer will not create it automatically.
   */
  destination: (_req, _file, callback) => {
    callback(null, uploadDir);
  },

  /**
   * Generates a unique filename for each uploaded file.
   * - Uses `Date.now()` to ensure uniqueness.
   * - Appends the original filename while preserving its extension.
   */
  filename: (_req, file, callback) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const fileExtension = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, fileExtension);

    callback(null, `${baseName}-${uniqueSuffix}${fileExtension}`);
  },
});

// Export the Multer upload instance
export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
  },
  fileFilter: (_req, file, callback) => {
    // Allowed file types
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg", "application/pdf"];

    if (allowedMimeTypes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Invalid file type. Only PNG, JPEG, JPG, and PDF are allowed."));
    }
  },
});
