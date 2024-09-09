import http from 'http' // add "type": "module",  in package.json
import express from 'express'
import path from 'path'
import { spawn } from 'child_process'
import { Server as SocketIO } from 'socket.io'
import { error } from 'console'

const app = express();
const server = http.createServer(app);
const io = new SocketIO(server);

const options = [
    '-i',
    '-',
    '-c:v', 'libx264',
    '-preset', 'ultrafast',
    '-tune', 'zerolatency',
    '-r', `${25}`,
    '-g', `${25 * 2}`,
    '-keyint_min', 25,
    '-crf', '25',
    '-pix_fmt', 'yuv420p',
    '-sc_threshold', '0',
    '-profile:v', 'main',
    '-level', '3.1',
    '-c:a', 'aac',
    '-b:a', '128k',
    '-ar', 100000 / 4,
    '-f', 'flv',
    `rtmp://a.rtmp.youtube.com/live2/`,
];

const ffmpegProcess = spawn('ffmpeg', options);

ffmpegProcess.stdout.on('data' , (data) => {
    console.log(`ffmpeg stdout: ${data}`);
});

ffmpegProcess.stderr.on('error' , (data) => {
    console.error(`ffmpeg stdout: ${data}`);
});

ffmpegProcess.on('close' , (code) => {
    console.log(`ffmpeg process exited with code: ${code}`);
});

app.use(express.static(path.resolve('./public')))

io.on('connection' , socket => {
    console.log('Socket Connected' , socket.id);
    socket.on('binarystream' , stream => {
        console.log('Binary Stream is coming....')
        ffmpegProcess.stdin.write(stream , (error) =>{
            console.log('Error' , error)
        })
    })
})

server.listen(3000 , () => {
    console.log('Server is running on port 3000');
})