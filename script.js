// Script para controle do botão de música
// Este arquivo contém a lógica para reproduzir e pausar o áudio
// quando o botão é clicado, bem como atualizar o estado visual do botão.

document.addEventListener('DOMContentLoaded', () => {
    // Obter elementos do DOM
    const playBtn = document.getElementById('playBtn');
    const audioPlayer = document.getElementById('audio-player');

    // Função para toggler entre play e pause
    const togglePlay = () => {
        if (audioPlayer.paused) {
            // Tentar reproduzir o áudio
            audioPlayer.play()
                .then(() => {
                    // Atualizar botão para estado de pausa
                    playBtn.textContent = '⏸ Pausar';
                    playBtn.classList.add('playing');
                })
                .catch(error => {
                    console.error('Erro ao reproduzir áudio:', error);
                    alert('Não foi possível reproduzir o áudio. Verifique se o navegador permite autoplay.');
                });
        } else {
            // Pausar o áudio
            audioPlayer.pause();
            playBtn.textContent = '▶ Play';
            playBtn.classList.remove('playing');
        }
    };

    // Evento de clique no botão
    playBtn.addEventListener('click', togglePlay);

    // Evento quando o áudio termina naturalmente
    audioPlayer.addEventListener('ended', () => {
        playBtn.textContent = '▶ Play';
        playBtn.classList.remove('playing');
    });

    // Opcional: permitir que a tecla Espaço também controle a reprodução
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault(); // Evitar rolagem da página
            togglePlay();
        }
    });
});

/*
Observações sobre o código:
- O script espera o DOM estar completamente carregado antes de manipular os elementos
- Usamos promisses para lidar com a reprodução assíncrona do áudio
- Adicionamos/removemos a classe 'playing' para estilização visual quando o áudio está tocando
- Incluímos tratamento de erro para casos em que o navegador bloqueia autoplay
- Adicionamos suporte opcional à tecla Espaço para controlar a reprodução
*/