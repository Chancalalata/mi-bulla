* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body {
    background-color: #000000;
    color: #f5f5f7;
    height: 100vh;
    overflow: hidden;
    display: flex;
}

.app-container {
    display: flex;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #1c1c1e, #000000);
}

/* Sidebar con Liquid Glass */
.sidebar {
    width: 240px;
    background: rgba(25, 25, 25, 0.45);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border-right: 1px solid rgba(255, 255, 255, 0.08);
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
}

.logo {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 40px;
    color: #fa233b; /* Rojo característico de Apple Music */
    letter-spacing: -0.5px;
}

.sidebar ul {
    list-style: none;
}

.sidebar li {
    padding: 10px 14px;
    border-radius: 8px;
    margin-bottom: 6px;
    cursor: pointer;
    color: #a1a1a6;
    font-size: 0.95rem;
    transition: all 0.2s ease;
}

.sidebar li:hover, .sidebar li.active {
    background: rgba(250, 35, 59, 0.15);
    color: #fa233b;
}

/* Contenido Principal */
.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 40px;
    overflow-y: auto;
    padding-bottom: 140px;
}

.top-bar h1 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -0.5px;
}

.content-body {
    display: flex;
    gap: 30px;
    align-items: flex-start;
    flex-wrap: wrap;
}

/* Tarjeta principal de música (Efecto Liquid Glass) */
.album-card {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 22px;
    padding: 30px;
    width: 280px;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

.artwork {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #fa233b, #ff5e3a);
    border-radius: 16px;
    margin: 0 auto 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    box-shadow: 0 10px 25px rgba(250, 35, 59, 0.35);
}

.track-details h2 {
    font-size: 1.1rem;
    margin-bottom: 6px;
    font-weight: 600;
}

.track-details p {
    color: #a1a1a6;
    font-size: 0.85rem;
}

/* Sección de Lista con Glassmorphism */
.playlist-section {
    flex: 1;
    min-width: 300px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 22px;
    padding: 25px;
}

.playlist-section h3 {
    font-size: 1.05rem;
    margin-bottom: 15px;
    color: #f5f5f7;
    font-weight: 600;
}

.song-list {
    list-style: none;
}

.song-list li {
    padding: 12px 16px;
    border-radius: 10px;
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    color: #a1a1a6;
    background: rgba(255, 255, 255, 0.02);
    transition: all 0.2s;
    border: 1px solid transparent;
}

.song-list li:hover, .song-list li.active {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.08);
}

/* Reproductor inferior flotante tipo Apple Music Dock */
.glass-player {
    position: fixed;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    max-width: 750px;
    background: rgba(35, 35, 40, 0.6);
    backdrop-filter: blur(35px);
    -webkit-backdrop-filter: blur(35px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 18px;
    padding: 15px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 20px 40px rgba(0,0,0,0.7);
}

.player-info {
    display: flex;
    flex-direction: column;
}

#current-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
}

.sub {
    font-size: 0.75rem;
    color: #a1a1a6;
}

.audio-element {
    accent-color: #fa233b;
    width: 55%;
}