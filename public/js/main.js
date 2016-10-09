$(function () {

    // Random backgorund color
    var color = function () {
        var key = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        switch (key) {
            case 1:
                return "#30ca97";
            case 2:
                return "#00caca";
            case 3:
                return "#0085a1";
        }
        return "#0085a1";
    };

    // Loader
    setTimeout(function () {
        $('.dimmable').dimmer('hide');
    }, 50);

    // Background color
    setInterval(function () {
        $("body").css("background", color());
    }, 10000)

    Smooch.init({ appToken: 'ayf6o8zx5mb9d23s101nik8sw' });
});