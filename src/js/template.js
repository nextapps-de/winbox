const template = document.createElement("div");
//template.className = "winbox";
template.innerHTML = (

    //'<div class=winbox>' +

        '<div class=wb-header>' +
            '<div class=wb-title> </div>' +
            '<div class=wb-icon>' +
                '<span class=wb-min></span>' +
                '<span class=wb-max></span>' +
                '<span class=wb-full></span>' +
                '<span class=wb-close></span>' +
            '</div>' +
        '</div>' +

        '<div class=wb-body></div>' +

        '<div class=wb-n></div>' +
        '<div class=wb-s></div>' +
        '<div class=wb-w></div>' +
        '<div class=wb-e></div>' +
        '<div class=wb-nw></div>' +
        '<div class=wb-ne></div>' +
        '<div class=wb-se></div>' +
        '<div class=wb-sw></div>'

    //'</div>'
);

//template = template.firstChild;

export default function(){

    return template.cloneNode(true);
}
