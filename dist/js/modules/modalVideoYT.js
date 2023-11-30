export function modalVideoYT() {

  if (jQuery('.btn-play').length >= 1) {

    const modalHTML = `<!--youtube modal-->  
    <div id="youtubem" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header justify-content-end">
                <button type="button" class="btn btn-x btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="videoWrapper">
                        <div class="modal-player" id="modalPlayer"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    jQuery('body').append(modalHTML);

    if (document.getElementById('iframe_api') === null) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      tag.id = "iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      tag.onload = runplayer;
    } else {
      jQuery(document).ready(function () {
        runplayer();
      });
    }



    let player = null;
    var done = false;

    function runplayer() {
      window.YT.ready(function () {
        player = new window.YT.Player('modalPlayer', {
          height: '480',
          width: '853',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          },
          playerVars: {
            controls: 1,
            rel: 0

          }
        });
      });
    }
    function onYouTubeIframeAPIReady() {
      runplayer();
    }
    function onPlayerReady(event) {

    }
    function starter(video) {
      player.loadVideoById(video, 0, "large");
    }
    function onPlayerStateChange(event) {
      if (player.getPlayerState() == 1) {
        if (player.isMuted() == true) {
          player.unMute();
        }
      }
      if (event.data == window.YT.PlayerState.PLAYING && !done) {

      }
      if (event.data === 0) {
      }
    }
    jQuery('.btn-play').click(function (e) {
      e.preventDefault();
      var v = jQuery(this).attr('href');
      if (v == undefined) {
        var v = jQuery(this).parent().attr('href');
      }
      var videoid = v.split("?v=");
      if (videoid.length == 1) {
        videoid = v.split(".be/");
      }
      starter(videoid[1]);
      jQuery('#youtubem').modal('show');

    });
    jQuery('#youtubem.modal.fade.in').on('click', function () {
      player.stopVideo();
    });
    jQuery('#youtubem button,#youtubem').on('click', function () {
      player.stopVideo();
    });
  }
}