import React,{Component} from "react";
import Informationcard from "./Informationcard";
import Search from "./Search";
import Map from "./Map";
export default class Maps2 extends Component{
    constructor(){
        super();
        this.state={
            apidata:[]
        }
    }
    async componentDidMount(){
        console.log('cdm')
        const data=await fetch("https://api.geoapify.com/v2/places?categories=public_transport&conditions=wheelchair&filter=place:51b8455bb0e067534059c023893d75fb2940f00101f901389b780000000000c0020592030945617374205a6f6e65&limit=20&country=IN&apiKey=bcd1dd82c5d4489d85f0d5b5936461cd");
        const apidata=await data.json();
        console.log(apidata);
        const featuresapi=apidata.features;
        console.log(featuresapi);
        const finalapidatearray=featuresapi.map((element)=>{
            return element.properties;
        })
        console.log(finalapidatearray);
    }
      
        render() {
            return (
                <>
                    
                    <Map  />
                </>
            );
        }
    }
