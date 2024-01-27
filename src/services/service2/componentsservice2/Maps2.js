import React,{Component} from "react";
import Informationcard from "./Informationcard";
import Search from "./Search";
export default class Maps2 extends Component{
        closeInfoCard() {
            document.getElementById("service2").style.display = "none";
        }
        features= [
            {
                "type": "Feature",
                "properties": {
                    "name": "Bangalore Cantonment",
                    "ref": "BNC",
                    "country": "India",
                    "country_code": "in",
                    "state": "Karnataka",
                    "state_district": "Bengaluru Urban District",
                    "county": "Bangalore North",
                    "city": "Bengaluru",
                    "postcode": "560046",
                    "district": "East Zone",
                    "suburb": "Jayamahal",
                    "street": "Cantonment Station Road",
                    "lon": 77.5980003,
                    "lat": 12.9936865,
                    "state_code": "KA",
                    "formatted": "Bangalore Cantonment, Cantonment Station Road, Jayamahal, Bengaluru - 560046, Karnataka, India",
                    "address_line1": "Bangalore Cantonment",
                    "address_line2": "Cantonment Station Road, Jayamahal, Bengaluru - 560046, Karnataka, India",
                    "categories": [
                        "internet_access",
                        "public_transport",
                        "public_transport.train",
                        "wheelchair",
                        "wheelchair.yes"
                    ],
                    "details": [
                        "details",
                        "details.facilities",
                        "details.wiki_and_media"
                    ],
                    "datasource": {
                        "sourcename": "openstreetmap",
                        "attribution": "© OpenStreetMap contributors",
                        "license": "Open Database Licence",
                        "url": "https://www.openstreetmap.org/copyright",
                        "raw": {
                            "ref": "BNC",
                            "name": "Bangalore Cantonment",
                            "osm_id": 246397026,
                            "name:kn": "ಬೆಂಗಳೂರು (ಕಂಟೊನ್ಮೆಂಟ್)",
                            "name:ml": "ബെംഗളൂരു കന്റോൺമെന്റ്",
                            "network": "IR",
                            "railway": "station",
                            "operator": "SWR",
                            "osm_type": "n",
                            "wikidata": "Q17049564",
                            "wikipedia": "en:Bangalore Cantonment railway station",
                            "wheelchair": "yes",
                            "internet_access": "wlan"
                        }
                    },
                    "place_id": "51e1df0ca345665340593331157ac4fc2940f00103f90162b8af0e0000000092031442616e67616c6f72652043616e746f6e6d656e74"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        77.59800029999998,
                        12.993686499678551
                    ]
                }
            }]

        render() {
            return (
                <>
                    <div id="service2">
                        <div id="searchservice2">
                            <Search />
                        </div>
                        <div id="infsevice2">
                            {this.features.map((feature) =>{
                                console.log(feature);
                            })}
                            <Informationcard closeInfoCard={this.closeInfoCard} />
                        </div>
                    </div>
                    <img
                        src="https://developers.google.com/maps/documentation/urls/images/search-latlng-only-centurylink.png"
                        style={{
                            height: "900px",
                            width: "1400px",
                        }}
                    />
                </>
            );
        }
    }
