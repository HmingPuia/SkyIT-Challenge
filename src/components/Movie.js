import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

const Movie = () => {
    const[posts,setPosts]=useState([])
    const[value,setValue]=useState('')
    
    useEffect(()=>{
        fetch('https://skyit-coding-challenge.herokuapp.com/movies')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[posts])
    // const movieColumns=columns.map((col)=>{
    //     return (
        
    //     <Column key={col.field} field={col.field} header={col.header}/>
        
        
    //     )
    // })
    // Radio button
    
    return (
        <div className='container'>
            <h2>Favourite Movie List</h2>
            <div className='card' >
                
                <DataTable value={posts} responsiveLayout='scroll'>
                     
                    <Column filter filterPlaceholder='Search by Title' style={{ minWidth:'12rem' }} field='title' header='Title'>
                    </Column>
                    <Column filter filterPlaceholder='Search by Year' style={{ minWidth: '12rem' }}  field='releaseDate' header='Year'></Column>
                    <Column filter filterPlaceholder='Search by Time' style={{ minWidth: '12rem' }}  field='length' header='Ranning Time'></Column>
                    <Column filter filterPlaceholder='Seven item selected' style={{ minWidth: '12rem' }}  field='director' header='Director'></Column>
                    <Column filter filterPlaceholder='Selec a status' style={{ minWidth: '12rem' }}  field='certification' header='Certification'></Column>
                    <Column filter filterPlaceholder='Search by Rating' style={{ minWidth: '12rem' }}  field='rating' header='Rating'></Column>
                </DataTable>
                
            </div>
        </div>
    )
}

export default Movie
