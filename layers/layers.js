var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_3000m_CapLine_1 = new ol.format.GeoJSON();
var features_3000m_CapLine_1 = format_3000m_CapLine_1.readFeatures(json_3000m_CapLine_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3000m_CapLine_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3000m_CapLine_1.addFeatures(features_3000m_CapLine_1);
var lyr_3000m_CapLine_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3000m_CapLine_1, 
                style: style_3000m_CapLine_1,
                interactive: true,
                title: '<img src="styles/legend/3000m_CapLine_1.png" /> 3000m_CapLine'
            });
var format_3000m_Drainage_Pithoragarh_2 = new ol.format.GeoJSON();
var features_3000m_Drainage_Pithoragarh_2 = format_3000m_Drainage_Pithoragarh_2.readFeatures(json_3000m_Drainage_Pithoragarh_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3000m_Drainage_Pithoragarh_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3000m_Drainage_Pithoragarh_2.addFeatures(features_3000m_Drainage_Pithoragarh_2);
var lyr_3000m_Drainage_Pithoragarh_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3000m_Drainage_Pithoragarh_2, 
                style: style_3000m_Drainage_Pithoragarh_2,
                interactive: true,
                title: '<img src="styles/legend/3000m_Drainage_Pithoragarh_2.png" /> 3000m_Drainage_Pithoragarh'
            });
var format_Pithoragarh_Block_CDP_3 = new ol.format.GeoJSON();
var features_Pithoragarh_Block_CDP_3 = format_Pithoragarh_Block_CDP_3.readFeatures(json_Pithoragarh_Block_CDP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pithoragarh_Block_CDP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pithoragarh_Block_CDP_3.addFeatures(features_Pithoragarh_Block_CDP_3);
var lyr_Pithoragarh_Block_CDP_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pithoragarh_Block_CDP_3, 
                style: style_Pithoragarh_Block_CDP_3,
                interactive: true,
                title: '<img src="styles/legend/Pithoragarh_Block_CDP_3.png" /> Pithoragarh_Block_CDP'
            });
var format_Munsiyari_Block_CDP_4 = new ol.format.GeoJSON();
var features_Munsiyari_Block_CDP_4 = format_Munsiyari_Block_CDP_4.readFeatures(json_Munsiyari_Block_CDP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Munsiyari_Block_CDP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Munsiyari_Block_CDP_4.addFeatures(features_Munsiyari_Block_CDP_4);
var lyr_Munsiyari_Block_CDP_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Munsiyari_Block_CDP_4, 
                style: style_Munsiyari_Block_CDP_4,
                interactive: true,
                title: '<img src="styles/legend/Munsiyari_Block_CDP_4.png" /> Munsiyari_Block_CDP'
            });
var format_Munakot_Block_CDP_5 = new ol.format.GeoJSON();
var features_Munakot_Block_CDP_5 = format_Munakot_Block_CDP_5.readFeatures(json_Munakot_Block_CDP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Munakot_Block_CDP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Munakot_Block_CDP_5.addFeatures(features_Munakot_Block_CDP_5);
var lyr_Munakot_Block_CDP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Munakot_Block_CDP_5, 
                style: style_Munakot_Block_CDP_5,
                interactive: true,
                title: '<img src="styles/legend/Munakot_Block_CDP_5.png" /> Munakot_Block_CDP'
            });
var format_KanaliChhina_Block_CDP_6 = new ol.format.GeoJSON();
var features_KanaliChhina_Block_CDP_6 = format_KanaliChhina_Block_CDP_6.readFeatures(json_KanaliChhina_Block_CDP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KanaliChhina_Block_CDP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KanaliChhina_Block_CDP_6.addFeatures(features_KanaliChhina_Block_CDP_6);
var lyr_KanaliChhina_Block_CDP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KanaliChhina_Block_CDP_6, 
                style: style_KanaliChhina_Block_CDP_6,
                interactive: true,
                title: '<img src="styles/legend/KanaliChhina_Block_CDP_6.png" /> Kanali Chhina_Block_CDP'
            });
var format_Gangolihat_Block_CDP_7 = new ol.format.GeoJSON();
var features_Gangolihat_Block_CDP_7 = format_Gangolihat_Block_CDP_7.readFeatures(json_Gangolihat_Block_CDP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gangolihat_Block_CDP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gangolihat_Block_CDP_7.addFeatures(features_Gangolihat_Block_CDP_7);
var lyr_Gangolihat_Block_CDP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gangolihat_Block_CDP_7, 
                style: style_Gangolihat_Block_CDP_7,
                interactive: true,
                title: '<img src="styles/legend/Gangolihat_Block_CDP_7.png" /> Gangolihat_Block_CDP'
            });
var format_Didihat_Block_CDP_8 = new ol.format.GeoJSON();
var features_Didihat_Block_CDP_8 = format_Didihat_Block_CDP_8.readFeatures(json_Didihat_Block_CDP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Didihat_Block_CDP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Didihat_Block_CDP_8.addFeatures(features_Didihat_Block_CDP_8);
var lyr_Didihat_Block_CDP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Didihat_Block_CDP_8, 
                style: style_Didihat_Block_CDP_8,
                interactive: true,
                title: '<img src="styles/legend/Didihat_Block_CDP_8.png" /> Didihat_Block_CDP'
            });
var format_Dharchula_Block_CDP_9 = new ol.format.GeoJSON();
var features_Dharchula_Block_CDP_9 = format_Dharchula_Block_CDP_9.readFeatures(json_Dharchula_Block_CDP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dharchula_Block_CDP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dharchula_Block_CDP_9.addFeatures(features_Dharchula_Block_CDP_9);
var lyr_Dharchula_Block_CDP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dharchula_Block_CDP_9, 
                style: style_Dharchula_Block_CDP_9,
                interactive: true,
                title: '<img src="styles/legend/Dharchula_Block_CDP_9.png" /> Dharchula_Block_CDP'
            });
var format_Berinag_Block_CDP_10 = new ol.format.GeoJSON();
var features_Berinag_Block_CDP_10 = format_Berinag_Block_CDP_10.readFeatures(json_Berinag_Block_CDP_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Berinag_Block_CDP_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Berinag_Block_CDP_10.addFeatures(features_Berinag_Block_CDP_10);
var lyr_Berinag_Block_CDP_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Berinag_Block_CDP_10, 
                style: style_Berinag_Block_CDP_10,
                interactive: true,
                title: '<img src="styles/legend/Berinag_Block_CDP_10.png" /> Berinag_Block_CDP'
            });
var format_FOREST_CDP_11 = new ol.format.GeoJSON();
var features_FOREST_CDP_11 = format_FOREST_CDP_11.readFeatures(json_FOREST_CDP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOREST_CDP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOREST_CDP_11.addFeatures(features_FOREST_CDP_11);
var lyr_FOREST_CDP_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FOREST_CDP_11, 
                style: style_FOREST_CDP_11,
                interactive: true,
                title: '<img src="styles/legend/FOREST_CDP_11.png" /> FOREST_CDP'
            });
var format_Pithoragarh_Boundary_12 = new ol.format.GeoJSON();
var features_Pithoragarh_Boundary_12 = format_Pithoragarh_Boundary_12.readFeatures(json_Pithoragarh_Boundary_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pithoragarh_Boundary_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pithoragarh_Boundary_12.addFeatures(features_Pithoragarh_Boundary_12);
var lyr_Pithoragarh_Boundary_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pithoragarh_Boundary_12, 
                style: style_Pithoragarh_Boundary_12,
                interactive: true,
                title: '<img src="styles/legend/Pithoragarh_Boundary_12.png" /> Pithoragarh_Boundary'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_3000m_CapLine_1.setVisible(true);lyr_3000m_Drainage_Pithoragarh_2.setVisible(true);lyr_Pithoragarh_Block_CDP_3.setVisible(true);lyr_Munsiyari_Block_CDP_4.setVisible(true);lyr_Munakot_Block_CDP_5.setVisible(true);lyr_KanaliChhina_Block_CDP_6.setVisible(true);lyr_Gangolihat_Block_CDP_7.setVisible(true);lyr_Didihat_Block_CDP_8.setVisible(true);lyr_Dharchula_Block_CDP_9.setVisible(true);lyr_Berinag_Block_CDP_10.setVisible(true);lyr_FOREST_CDP_11.setVisible(true);lyr_Pithoragarh_Boundary_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_3000m_CapLine_1,lyr_3000m_Drainage_Pithoragarh_2,lyr_Pithoragarh_Block_CDP_3,lyr_Munsiyari_Block_CDP_4,lyr_Munakot_Block_CDP_5,lyr_KanaliChhina_Block_CDP_6,lyr_Gangolihat_Block_CDP_7,lyr_Didihat_Block_CDP_8,lyr_Dharchula_Block_CDP_9,lyr_Berinag_Block_CDP_10,lyr_FOREST_CDP_11,lyr_Pithoragarh_Boundary_12];
lyr_3000m_CapLine_1.set('fieldAliases', {'NAME': 'NAME', });
lyr_3000m_Drainage_Pithoragarh_2.set('fieldAliases', {'GM_LAYER': 'GM_LAYER', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'IN_FLOW': 'IN_FLOW', 'OUT_FLOW': 'OUT_FLOW', 'DRAIN_AREA': 'DRAIN_AREA', 'STRAHLER': 'STRAHLER', });
lyr_Pithoragarh_Block_CDP_3.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'DRAIN_AREA': 'DRAIN_AREA', 'STRAHLER': 'STRAHLER', 'SOI_NAME': 'SOI_NAME', 'TEHSIL': 'TEHSIL', 'VILLAGE': 'VILLAGE', 'BLOCK_NAME': 'BLOCK_NAME', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'POINT_SYMB': 'POINT_SYMB', });
lyr_Munsiyari_Block_CDP_4.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'DRAIN_AREA': 'DRAIN_AREA', 'STRAHLER': 'STRAHLER', 'SOI_NAME': 'SOI_NAME', 'TEHSIL': 'TEHSIL', 'VILLAGE': 'VILLAGE', 'BLOCK_NAME': 'BLOCK_NAME', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'POINT_SYMB': 'POINT_SYMB', });
lyr_Munakot_Block_CDP_5.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'DRAIN_AREA': 'DRAIN_AREA', 'STRAHLER': 'STRAHLER', 'SOI_NAME': 'SOI_NAME', 'TEHSIL': 'TEHSIL', 'VILLAGE': 'VILLAGE', 'BLOCK_NAME': 'BLOCK_NAME', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'POINT_SYMB': 'POINT_SYMB', });
lyr_KanaliChhina_Block_CDP_6.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'DRAIN_AREA': 'DRAIN_AREA', 'STRAHLER': 'STRAHLER', 'SOI_NAME': 'SOI_NAME', 'TEHSIL': 'TEHSIL', 'VILLAGE': 'VILLAGE', 'BLOCK_NAME': 'BLOCK_NAME', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'POINT_SYMB': 'POINT_SYMB', });
lyr_Gangolihat_Block_CDP_7.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'DRAIN_AREA': 'DRAIN_AREA', 'STRAHLER': 'STRAHLER', 'SOI_NAME': 'SOI_NAME', 'TEHSIL': 'TEHSIL', 'VILLAGE': 'VILLAGE', 'BLOCK_NAME': 'BLOCK_NAME', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'POINT_SYMB': 'POINT_SYMB', });
lyr_Didihat_Block_CDP_8.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'DRAIN_AREA': 'DRAIN_AREA', 'STRAHLER': 'STRAHLER', 'SOI_NAME': 'SOI_NAME', 'TEHSIL': 'TEHSIL', 'VILLAGE': 'VILLAGE', 'BLOCK_NAME': 'BLOCK_NAME', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'POINT_SYMB': 'POINT_SYMB', });
lyr_Dharchula_Block_CDP_9.set('fieldAliases', {'GM_TYPE': 'GM_TYPE', 'GM_LAYER': 'GM_LAYER', 'LAYER': 'LAYER', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'DRAIN_AREA': 'DRAIN_AREA', 'STRAHLER': 'STRAHLER', 'SOI_NAME': 'SOI_NAME', 'TEHSIL': 'TEHSIL', 'VILLAGE': 'VILLAGE', 'BLOCK_NAME': 'BLOCK_NAME', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'POINT_SYMB': 'POINT_SYMB', });
lyr_Berinag_Block_CDP_10.set('fieldAliases', {'GM_TYPE': 'GM_TYPE', 'GM_LAYER': 'GM_LAYER', 'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ELEVATION': 'ELEVATION', 'DRAIN_AREA': 'DRAIN_AREA', 'STRAHLER': 'STRAHLER', 'SOI_NAME': 'SOI_NAME', 'TEHSIL': 'TEHSIL', 'VILLAGE': 'VILLAGE', 'BLOCK_NAME': 'BLOCK_NAME', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'POINT_SYMB': 'POINT_SYMB', });
lyr_FOREST_CDP_11.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'NAME': 'NAME', 'ELEVATION': 'ELEVATION', 'STRAHLER': 'STRAHLER', 'STREAM_ID': 'STREAM_ID', 'DRAIN_AREA': 'DRAIN_AREA', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'SLOPE_DEG': 'SLOPE_DEG', 'SLOPE_PCT': 'SLOPE_PCT', 'SLOPE_DIR': 'SLOPE_DIR', 'CIRCLE': 'CIRCLE', 'DIVISION': 'DIVISION', 'NEW_RANGE': 'NEW_RANGE', 'POINT_SYMB': 'POINT_SYMB', 'FONT_SIZE': 'FONT_SIZE', 'FONT_COLOR': 'FONT_COLOR', 'FONT_CHARS': 'FONT_CHARS', 'FONT_WEIGH': 'FONT_WEIGH', });
lyr_Pithoragarh_Boundary_12.set('fieldAliases', {'NAME': 'NAME', });
lyr_3000m_CapLine_1.set('fieldImages', {'NAME': 'TextEdit', });
lyr_3000m_Drainage_Pithoragarh_2.set('fieldImages', {'GM_LAYER': 'TextEdit', 'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'IN_FLOW': 'Range', 'OUT_FLOW': 'Range', 'DRAIN_AREA': 'TextEdit', 'STRAHLER': 'Range', });
lyr_Pithoragarh_Block_CDP_3.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'DRAIN_AREA': 'TextEdit', 'STRAHLER': 'Range', 'SOI_NAME': 'TextEdit', 'TEHSIL': 'TextEdit', 'VILLAGE': 'TextEdit', 'BLOCK_NAME': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'POINT_SYMB': 'TextEdit', });
lyr_Munsiyari_Block_CDP_4.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'DRAIN_AREA': 'TextEdit', 'STRAHLER': 'Range', 'SOI_NAME': 'TextEdit', 'TEHSIL': 'TextEdit', 'VILLAGE': 'TextEdit', 'BLOCK_NAME': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'POINT_SYMB': 'TextEdit', });
lyr_Munakot_Block_CDP_5.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'DRAIN_AREA': 'TextEdit', 'STRAHLER': 'Range', 'SOI_NAME': 'TextEdit', 'TEHSIL': 'TextEdit', 'VILLAGE': 'TextEdit', 'BLOCK_NAME': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'POINT_SYMB': 'TextEdit', });
lyr_KanaliChhina_Block_CDP_6.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'DRAIN_AREA': 'TextEdit', 'STRAHLER': 'Range', 'SOI_NAME': 'TextEdit', 'TEHSIL': 'TextEdit', 'VILLAGE': 'TextEdit', 'BLOCK_NAME': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'POINT_SYMB': 'TextEdit', });
lyr_Gangolihat_Block_CDP_7.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'DRAIN_AREA': 'TextEdit', 'STRAHLER': 'Range', 'SOI_NAME': 'TextEdit', 'TEHSIL': 'TextEdit', 'VILLAGE': 'TextEdit', 'BLOCK_NAME': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'POINT_SYMB': 'TextEdit', });
lyr_Didihat_Block_CDP_8.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'DRAIN_AREA': 'TextEdit', 'STRAHLER': 'Range', 'SOI_NAME': 'TextEdit', 'TEHSIL': 'TextEdit', 'VILLAGE': 'TextEdit', 'BLOCK_NAME': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'POINT_SYMB': 'TextEdit', });
lyr_Dharchula_Block_CDP_9.set('fieldImages', {'GM_TYPE': 'TextEdit', 'GM_LAYER': 'TextEdit', 'LAYER': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'DRAIN_AREA': 'TextEdit', 'STRAHLER': 'Range', 'SOI_NAME': 'TextEdit', 'TEHSIL': 'TextEdit', 'VILLAGE': 'TextEdit', 'BLOCK_NAME': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'POINT_SYMB': 'TextEdit', });
lyr_Berinag_Block_CDP_10.set('fieldImages', {'GM_TYPE': 'TextEdit', 'GM_LAYER': 'TextEdit', 'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ELEVATION': 'TextEdit', 'DRAIN_AREA': 'TextEdit', 'STRAHLER': 'Range', 'SOI_NAME': 'TextEdit', 'TEHSIL': 'TextEdit', 'VILLAGE': 'TextEdit', 'BLOCK_NAME': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'POINT_SYMB': 'TextEdit', });
lyr_FOREST_CDP_11.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'NAME': 'Range', 'ELEVATION': 'TextEdit', 'STRAHLER': 'Range', 'STREAM_ID': 'Range', 'DRAIN_AREA': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'SLOPE_DEG': 'TextEdit', 'SLOPE_PCT': 'TextEdit', 'SLOPE_DIR': 'TextEdit', 'CIRCLE': 'TextEdit', 'DIVISION': 'TextEdit', 'NEW_RANGE': 'TextEdit', 'POINT_SYMB': 'TextEdit', 'FONT_SIZE': 'Range', 'FONT_COLOR': 'TextEdit', 'FONT_CHARS': 'Range', 'FONT_WEIGH': 'Range', });
lyr_Pithoragarh_Boundary_12.set('fieldImages', {'NAME': 'TextEdit', });
lyr_3000m_CapLine_1.set('fieldLabels', {'NAME': 'header label', });
lyr_3000m_Drainage_Pithoragarh_2.set('fieldLabels', {'GM_LAYER': 'no label', 'LAYER': 'no label', 'ELEVATION': 'no label', 'STREAM_ID': 'no label', 'IN_FLOW': 'no label', 'OUT_FLOW': 'no label', 'DRAIN_AREA': 'no label', 'STRAHLER': 'no label', });
lyr_Pithoragarh_Block_CDP_3.set('fieldLabels', {'LAYER': 'no label', 'GM_TYPE': 'no label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'ELEVATION': 'header label', 'STREAM_ID': 'inline label', 'DRAIN_AREA': 'header label', 'STRAHLER': 'header label', 'SOI_NAME': 'header label', 'TEHSIL': 'header label', 'VILLAGE': 'header label', 'BLOCK_NAME': 'header label', 'DISTRICT': 'header label', 'STATE': 'header label', 'POINT_SYMB': 'no label', });
lyr_Munsiyari_Block_CDP_4.set('fieldLabels', {'LAYER': 'no label', 'GM_TYPE': 'no label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'ELEVATION': 'header label', 'STREAM_ID': 'inline label', 'DRAIN_AREA': 'header label', 'STRAHLER': 'header label', 'SOI_NAME': 'header label', 'TEHSIL': 'header label', 'VILLAGE': 'header label', 'BLOCK_NAME': 'header label', 'DISTRICT': 'header label', 'STATE': 'header label', 'POINT_SYMB': 'no label', });
lyr_Munakot_Block_CDP_5.set('fieldLabels', {'LAYER': 'no label', 'GM_TYPE': 'no label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'ELEVATION': 'header label', 'STREAM_ID': 'inline label', 'DRAIN_AREA': 'header label', 'STRAHLER': 'header label', 'SOI_NAME': 'header label', 'TEHSIL': 'header label', 'VILLAGE': 'header label', 'BLOCK_NAME': 'header label', 'DISTRICT': 'header label', 'STATE': 'header label', 'POINT_SYMB': 'no label', });
lyr_KanaliChhina_Block_CDP_6.set('fieldLabels', {'LAYER': 'no label', 'GM_TYPE': 'no label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'ELEVATION': 'header label', 'STREAM_ID': 'inline label', 'DRAIN_AREA': 'header label', 'STRAHLER': 'header label', 'SOI_NAME': 'header label', 'TEHSIL': 'header label', 'VILLAGE': 'header label', 'BLOCK_NAME': 'header label', 'DISTRICT': 'header label', 'STATE': 'header label', 'POINT_SYMB': 'no label', });
lyr_Gangolihat_Block_CDP_7.set('fieldLabels', {'LAYER': 'no label', 'GM_TYPE': 'no label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'ELEVATION': 'header label', 'STREAM_ID': 'inline label', 'DRAIN_AREA': 'header label', 'STRAHLER': 'header label', 'SOI_NAME': 'header label', 'TEHSIL': 'header label', 'VILLAGE': 'header label', 'BLOCK_NAME': 'header label', 'DISTRICT': 'header label', 'STATE': 'header label', 'POINT_SYMB': 'no label', });
lyr_Didihat_Block_CDP_8.set('fieldLabels', {'LAYER': 'no label', 'GM_TYPE': 'no label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'ELEVATION': 'header label', 'STREAM_ID': 'inline label', 'DRAIN_AREA': 'header label', 'STRAHLER': 'header label', 'SOI_NAME': 'header label', 'TEHSIL': 'header label', 'VILLAGE': 'header label', 'BLOCK_NAME': 'header label', 'DISTRICT': 'header label', 'STATE': 'header label', 'POINT_SYMB': 'no label', });
lyr_Dharchula_Block_CDP_9.set('fieldLabels', {'GM_TYPE': 'no label', 'GM_LAYER': 'no label', 'LAYER': 'no label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'ELEVATION': 'header label', 'STREAM_ID': 'inline label', 'DRAIN_AREA': 'header label', 'STRAHLER': 'header label', 'SOI_NAME': 'header label', 'TEHSIL': 'header label', 'VILLAGE': 'header label', 'BLOCK_NAME': 'header label', 'DISTRICT': 'header label', 'STATE': 'header label', 'POINT_SYMB': 'no label', });
lyr_Berinag_Block_CDP_10.set('fieldLabels', {'GM_TYPE': 'no label', 'GM_LAYER': 'no label', 'LAYER': 'no label', 'STREAM_ID': 'header label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'ELEVATION': 'header label', 'DRAIN_AREA': 'header label', 'STRAHLER': 'header label', 'SOI_NAME': 'header label', 'TEHSIL': 'header label', 'VILLAGE': 'header label', 'BLOCK_NAME': 'header label', 'DISTRICT': 'header label', 'STATE': 'header label', 'POINT_SYMB': 'no label', });
lyr_FOREST_CDP_11.set('fieldLabels', {'LAYER': 'no label', 'GM_TYPE': 'no label', 'NAME': 'no label', 'ELEVATION': 'header label', 'STRAHLER': 'header label', 'STREAM_ID': 'header label', 'DRAIN_AREA': 'header label', 'LONGITUDE': 'header label', 'LATITUDE': 'header label', 'SLOPE_DEG': 'header label', 'SLOPE_PCT': 'header label', 'SLOPE_DIR': 'header label', 'CIRCLE': 'header label', 'DIVISION': 'header label', 'NEW_RANGE': 'header label', 'POINT_SYMB': 'no label', 'FONT_SIZE': 'no label', 'FONT_COLOR': 'no label', 'FONT_CHARS': 'no label', 'FONT_WEIGH': 'no label', });
lyr_Pithoragarh_Boundary_12.set('fieldLabels', {'NAME': 'no label', });
lyr_Pithoragarh_Boundary_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});