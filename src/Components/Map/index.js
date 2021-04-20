import React from 'react';
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { connect } from 'react-redux';

import './map.css'


const Container = styled.div`
    position:absolute;
    width:100%;
    height:80vh;
    border-radius:4px;
`
const ImageContainer = styled.div`
    height:40px;
    width:40px;
    cursor:pointer;
    border-radius:50%;
`

const Image = styled.img`
    height:100%;
    width:100%;
    border-radius:50%;
`


const Map =({data})=>{
    return(
        <Container>
            <MapContainer center={[43.6532, -79.3832]} zoom={5} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                 data.map((item,index)=>{
                        return <Marker position={item.latLong} key={index}>
                            <Popup>
                            <ImageContainer>
                                    <Image alt="puppy" src={item.img}/>
                            </ImageContainer>  
                                {item.description}
                                
                            </Popup>
                        </Marker>
                    })
                }
            </MapContainer>
        </Container>
    )
}

const mapStateToProps =(state)=>{
    return{
        data:state.mapReducer
    }
}

const ConnectedMap = connect(mapStateToProps)(Map)

export default ConnectedMap