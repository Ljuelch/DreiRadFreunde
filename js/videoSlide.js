const VIDEO_ID_PREFIX = "youtubeVideo-"

$.getJSON("data/videos.json").done(
    /**
     * @param {{
     *     image: string,
     *     video: string
     * }[]} videos
     */
    async videos => {
    await new Promise(resolve => $(document).ready(resolve))

    const imageContainer = $(".videos"),
          videoContainer = $(".video-box")

    for (const id in videos) {
        imageContainer.append(`
            <div class="item vid">
                <div class="image">
                    <img alt data-id="${id}" class="link-id" src="${videos[id].image}">
                </div>
            </div>
        `)

        stopAllYouTubeVideos = () => {
            let iframes = document.querySelectorAll('iframe');
            Array.prototype.forEach.call(iframes, iframe => {
                iframe.contentWindow.postMessage(JSON.stringify({ event: 'command',
                    func: 'stopVideo' }), '*');
            });
        }


        const video = $(videos[id].video)
              video.addClass("youtubeVideo")
              video.attr("id", VIDEO_ID_PREFIX + id)
              video.hide()
        videoContainer.append(video)
    }

    $(".link-id").click(event=>{
        stopAllYouTubeVideos();
        $(".youtubeVideo").hide()
        $(`.youtubeVideo#${VIDEO_ID_PREFIX}${event.currentTarget.dataset.id}`).show()
    })

    imageContainer.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        speed: 1500,
        adaptiveHeight: false,
    })

    $(`.youtubeVideo#${VIDEO_ID_PREFIX}0`).show()
})
