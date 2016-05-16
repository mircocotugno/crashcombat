window.onload = init;

var product;
function init(){
    var $slider = $('.slider-360');
    var dimension = $(window).height();
    var ninetypc = (100 * dimension) / 100;

    $slider.ThreeSixty({
        totalFrames: 72, // Total no. of image you have for 360 slider
        endFrame: 72, // end frame for the auto spin animation
        currentFrame: 52, // This the start frame for auto spin
        imgList: '.threesixty_images', // selector for image list
        progress: '.spinner', // selector to show the loading progress
        imagePath: $slider.data('images'), // path of the image assets
        filePrefix: '', // file prefix if any
        ext: '.jpg', // extention for the assets
        height: ninetypc,
        width: ('100%'),
        navigation: false,
        disableSpin: false // Default false
    });

}
;
