const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3002; // Using a different port from json-server

// Allow requests from your React app
app.use(cors());

// Create the 'public/photos' directory if it doesn't exist
const photosDir = path.join(__dirname, 'public', 'photos');
if (!fs.existsSync(photosDir)) {
    fs.mkdirSync(photosDir, { recursive: true });
}

// Configure how files are stored
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, photosDir); // Save files to public/photos
    },
    filename: function (req, file, cb) {
        const { id, photoIndex } = req.body;
        if (!id || !photoIndex) {
            return cb(new Error("Missing ID or photo index for filename"));
        }
        // Get the file extension (e.g., .jpg, .png)
        const ext = path.extname(file.originalname) || '.jpg';
        // Create the new filename: e.g., F100001_1.jpg
        const newFilename = `${id}_${photoIndex}${ext}`;
        cb(null, newFilename);
    }
});

const upload = multer({ storage: storage });

// The upload endpoint
app.post('/upload-photo', upload.single('photo'), (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'Please upload a file.' });
    }
    
    console.log(`File saved: ${req.file.filename}`);
    res.status(200).send({ 
        message: 'File uploaded successfully!',
        path: `/photos/${req.file.filename}` 
    });
});

app.listen(PORT, () => {
    console.log(`File upload server is running on http://localhost:${PORT}`);
});
