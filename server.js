const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main page
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the CDN simulation!</h1> 
        <p>Here is some content:</p>
        <ul>
            <li><a href="/Images/image1.png">Image 1</a></li>
            <li><a href="/Images/image2.png">Image 2</a></li>
            <li><a href="/Images/image3.png">Image 3</a></li>
            <li><a href="/Audio/kiama _ Ijaw Song.mp3">Audio: Kiama Ijaw Song</a></li>
            <li><a href="/Audio/song2.mp3">Audio: Song 2</a></li>
            <li><a href="/Audio/song3.mp3">Audio: Song 3</a></li>
            <li><a href="/Videos/video.mp4">Video 1</a></li>
            <li><a href="/Videos/video2.mp4">Video 2</a></li>
            <li><a href="/Videos/video3.mp4">Video 3</a></li>
            <li><a href="/Documents/health-status-report.pdf">Health Status Report (PDF)</a></li>
            <li><a href="/Documents/uptime_data.csv">Uptime Data (CSV)</a></li>
            <li><a href="/Documents/report.pdf">Report (PDF)</a></li>
        </ul>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
