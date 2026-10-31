const audio = document.querySelector('.audio-element');
const titleElement = document.querySelector('.song-info h1');
const artistElement = document.querySelector('.song-info p');
const playlistItems = document.querySelectorAll('.playlist li');

// Lista de canciones (puedes cambiar los enlaces 'src' por tus propios audios)
const songs = [
    {
        title: "SoundHelix Song 1",
        artist: "Demo Artista 1",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        title: "SoundHelix Song 2",
        artist: "Demo Artista 2",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        title: "SoundHelix Song 3",
        artist: "Demo Artista 3",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }
];

function loadSong(index) {
    const song = songs[index];
    
    // Actualizar textos en la interfaz
    titleElement.textContent = song.title;
    artistElement.textContent = song.artist;
    
    // Actualizar fuente del reproductor
    audio.src = song.src;
    
    // Cambiar la clase 'active' en la lista visual
    playlistItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Agregar evento de clic a cada elemento de la lista
playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        loadSong(index);
        audio.play(); // Reproduce automáticamente al hacer clic en la lista
    });
});

// Cargar la primera canción por defecto al abrir la página
loadSong(0);