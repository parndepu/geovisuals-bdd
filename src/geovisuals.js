import * as components from './components';
import mapboxgl from 'mapbox-gl';

export var Geovisuals_map = undefined;
var db_name = 'geovisuals_bdd';
var total_trips = 0;

window.onload = function () {

    Geovisuals_map = components.Map_initialize('map');
    Geovisuals_map.on('load', function () {

        // Fit map
        Geovisuals_map.fitBounds([[
            -66.9513812,
            24.7433195
            ], [
                -124.7844079,49.3457868
        ]]);

        // Connect to database
        components.Query_connect_db(db_name);
        var train_schema = components.Query_schema_train;
        var train_model = components.Query_model('train', train_schema);
        var train_cursor = components.Query_select_all(train_model);

        var trains = [];
        var index = 0;

        // 1. Create feature collections
        var feature_collections = components.Map_feature_collections();
        // 2. Create source
        components.Map_add_source(Geovisuals_map, 'rides', feature_collections);
        // 3. Create shape and add to source
        var layer = components.Map_create_layer('rides-line', 'line', 'rides', { 'line-color': 'red', 'line-width': 3, 'line-opacity': 0.5 }, { 'line-join': 'round', 'line-cap': 'round' });
        // 4. Add layer to map
        components.Map_add_layer(Geovisuals_map, layer);

        //var layer = components.Map_create_layer('rides-point', 'point', '')

        train_cursor.on('data', function (doc) {
            trains.push(doc);

            var loc = doc.locations;
            var path = [];

            // Create path
            for (var i = 0; i < loc.length; i++) {
                var longitude = loc[i].longitude,
                    latitude = loc[i].latitude,
                    timestamp = loc[i].timestamp;
                path.push([longitude, latitude]);
            }

            total_trips++;

            document.getElementById('total-trips').innerHTML = 'Query Total: ' + total_trips + ' trips';

            // Start projecting on map
            // 5. Create new feature
            var feature = components.Map_feature('LineString', path, { data: doc.locations });
            // 6. Add feature to collection
            feature_collections.features.push(feature);

            if (total_trips % 2000 == 0) {
                components.Map_update_source(Geovisuals_map, 'rides', feature_collections);
            }
        });

        train_cursor.on('error', function (error) {
            console.log(error);
        });

        train_cursor.on('close', function (doc) {
            console.log('Finished query');
            //console.log(trains);
            // 7. Update source of collection
            components.Map_update_source(Geovisuals_map, 'rides', feature_collections);
            // Create marker for newyork
            // Create marker for sanfan
        });
    });
    
    return;
}