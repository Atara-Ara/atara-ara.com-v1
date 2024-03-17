import './Follow.sass';
import title from './assets/title.svg';
import Instagram from './assets/instagram.svg';
import Bandcamp from './assets/bandcamp.svg';
import Spotify from './assets/spotify.svg';
import AppleMusic from './assets/apple-music.svg';
import Soundcloud from './assets/soundcloud.svg';
import Youtube from './assets/youtube.svg';
import TikTok from './assets/tiktok.svg';
import AmazonMusic from './assets/amazon-music.svg';

export const Follow = () => {
    return (
        <section id='follow' className='follow'>
            <div className="header">
                <img className='title' src={title} alt="Follow" />
                <div className='line' ></div>
            </div>
            <div className='socials'>
                <a
                    href='https://open.spotify.com/artist/14OyPLu62THKH6fGLtjowq?si=F8Ka9GxPRheSR2fRNXQkKQ'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={Spotify} alt='Spotify' />
                </a>
                <a
                    href='https://www.instagram.com/atara_ara/'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={Instagram} alt='Instagram' />
                </a>
                <a
                    href='https://www.tiktok.com/@atara_ara'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={TikTok} alt='TikTok' />
                </a>
                <a
                    href='https://www.youtube.com/channel/UCRQ8erI1G9Ubp-v1nFBsrbA'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={Youtube} alt='Youtube' />
                </a>
                <a
                    href='https://atara-ara.bandcamp.com/'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={Bandcamp} alt='Bandcamp' />
                </a>
                <a
                    href='https://music.apple.com/us/artist/atara-ara/1644218162'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={AppleMusic} alt='Apple Music' />
                </a>
                <a
                    href='https://soundcloud.com/atara_ara'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={Soundcloud} alt='Soundcloud' />
                </a>
                <a
                    href='https://music.amazon.com.au/artists/B0BDR9KLBG/atara-ara?marketplaceId=A39IBJ37TRP1C6&musicTerritory=AU&ref=dm_sh_GVkt6RXZgimhHKejFX0B3KcXK'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={AmazonMusic} alt='Amazon Music' />
                </a>
            </div>
            <footer>
                <p>© 2024 Atara Ara</p>
            </footer>
        </section >
    );
};
