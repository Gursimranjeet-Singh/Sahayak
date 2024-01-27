import React,{Component} from "react";
import Informationcard from "./Informationcard";
import Search from "./Search";
import Map from "./Map";
export default class Maps2 extends Component{
        closeInfoCard() {
            document.getElementById("service2").style.display = "none";
        }
       

        render() {
            return (
                <>
                    <div id="service2">
                        <div id="searchservice2">
                            <Search />
                        </div>
                        <div id="infsevice2">
                            
                            <Informationcard closeInfoCard={this.closeInfoCard} />
                        </div>
                    </div>
                    <Map  />
                </>
            );
        }
    }
