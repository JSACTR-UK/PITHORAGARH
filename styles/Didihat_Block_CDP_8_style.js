var size = 0;
var placement = 'point';

var style_Didihat_Block_CDP_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size,
                                          points: 4,
                                          radius2: 0,
                                          angle: Math.PI / 4,
                                          stroke: new ol.style.Stroke({color: 'rgba(199,35,227,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),
                                          fill: new ol.style.Fill({color: 'rgba(190,207,80,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
