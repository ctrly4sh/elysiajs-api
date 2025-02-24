import multer from "multer";
import  Path  from  "path";

const uploadDir = "./uploads";

const storage = multer.diskStorage({
    destination: (_req, __filename, callback) => {
        callback(null, uploadDir);
    },

    filename: (_req, file, callback) => {
        callback(null, `${Date.now} - ${file.originalname}`);
    },
});

export const upload = multer({storage});