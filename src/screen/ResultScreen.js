import React, { useEffect, useState } from 'react'
import { Map, Marker, Overlay } from "pigeon-maps"
import { createPath } from "pigeon-maps/providers"
import Nav from '../components/Nav'
const ResultScreen = ({data}) => {
    const log = localStorage.getItem('data');
    const path = localStorage.getItem('path');
    const Jlog = JSON.parse(log);
    console.log("result test",path);
    const [source, setSource] = useState(Jlog.source);
    const [destination, setDestination] = useState(Jlog.destination);
    let color = "#FF0000";
    const coordinates = [
        [13.01, 80.21],
        [13.01, 80.21],
        [12.99, 80.20],
        [12.99, 80.19],
        [12.99, 80.18],
        [12.98, 80.18],
        [12.98, 80.17],
        [12.97, 80.17],
        [12.97, 80.16],
        [12.97, 80.15],
        [12.96, 80.15],
        [12.96, 80.14],
        [12.96, 80.14],
        [12.96, 80.13],
        [12.95, 80.13],
        [12.94, 80.12],
        [12.94, 80.12],
        [12.93, 80.11],
        [12.93, 80.12],
        [12.92, 80.12],
        [12.91, 80.10]
    ];
    
    return (
        <div>
            <Nav />
            <div className=' absolute w-[60vw] h-[70vh] ml-[20vw] overflow-hidden mt-[10vh] border-4 border-[#4E4B5C] rounded-xl'>
                <Map height={570} defaultCenter={source} defaultZoom={15}>
                    <Marker width={50} anchor={source} color="#366399"/>
                    <Marker width={50} anchor={destination} color="#366399"/>
                    {
                        coordinates.map((e)=>{
                            console.log(e);
                            return (
                                <Marker width={25} anchor={e.reverse()} color="#366399"/>
                            )
                        })
                    }

                </Map>
            </div>
            <div className='bg-[#AECDF7] h-[50vh] mt-[40vh]'></div>
        </div>
    )
}

export default ResultScreen
