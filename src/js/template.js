let template = document.createElement("div");
template.innerHTML = (

    '<div class=winbox>' +

        '<div class=bar-n></div>' +
        '<div class=bar-s></div>' +
        '<div class=bar-w></div>' +
        '<div class=bar-e></div>' +
        '<div class=bar-nw></div>' +
        '<div class=bar-ne></div>' +
        '<div class=bar-se></div>' +
        '<div class=bar-sw></div>' +

        '<div class=winbox-header>' +
            '<div class=winbox-title><span> </span></div>' +
            '<div class=winbox-icon>' +
                '<span class=icon-min></span>' +
                '<span class=icon-max></span>' +
                '<span class=icon-fullscreen></span>' +
                '<span class=icon-close></span>' +
            '</div>' +
        '</div>' +

        '<div class=winbox-body></div>' +

    '</div>'
);

template = template.firstChild;

export default function(){

    return template.cloneNode(true);
}
