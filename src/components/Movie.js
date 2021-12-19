import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
const Movie = () => {
    const[posts,setPosts]=useState([])
    const [basicFirst, setBasicFirst] = useState(0);
    const [basicRows, setBasicRows] = useState(10);
    
    const columns=[
        {field: 'title', header: 'Title'},
        {field: 'releaseDate', header: 'Year'},
        {field: 'length', header: 'Ranning Time'},
        {field: 'director', header: 'Director'},
        {field: 'certification', header: 'Certification'},
        {field: 'rating', header: 'Rating'},
        
    ];
    
    useEffect(()=>{
        fetch('https://skyit-coding-challenge.herokuapp.com/movies')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    })
    const movieColumns=columns.map((col)=>{
        return (
        
        <Column key={col.field} field={col.field} header={col.header}/>
        
        
        )
    })
    // Radio button
    
    return (
        <div className='container'>
            <h2>Favourite Movie List</h2>
            <div className='card' >
                
                <DataTable value={posts} responsiveLayout='scroll'
                
                >
                    {movieColumns}

                    </DataTable>
                
            </div>
        </div>
    )
}

export default Movie
