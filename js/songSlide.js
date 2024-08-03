$.getJSON("data/songs.json").done(
    /**
     * @param {{
     *     image: string,
     *     title: string,
     *     artists: string,
     *     spotify: string,
     *     apple: string
     * }[]} songs
     */
    async songs => {
    await new Promise(resolve => $(document).ready(resolve))

    const songContainer = $(".songs")

    for (const song of songs)
        songContainer.append(`
            <div class="item">
                <div class="image">
                    <img alt src="assets/img/${song.image}">
                </div>
                <div class="text">
                    <h3>${song.title}</h3>
                    <p>${song.artists}</p>
                    <div class="streaming-services">
                        <div class="spotify-logo">
                            <a class="spotify-text" target="_blank" href="${song.spotify}">
                                <div class="spotify-logo1">
                                    <br>Spotify
                                </div>
                            </a>
                        </div>
                        <div class="apple-logo">
                            <a class="apple-text" target="_blank" href="${song.apple}">
                                <div class="apple-logo1">
                                    <br>Apple Music
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `)



    $('.sec2-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1500,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 900,
                    adaptiveHeight: false,
                    mobileFirst:true,
                }
            },
            {
                breakpoint: 796,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 800,
                    adaptiveHeight: false,
                    mobileFirst:true,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 600,
                    adaptiveHeight: false,
                    mobileFirst:true,
                }
            },
        ]
    })
})