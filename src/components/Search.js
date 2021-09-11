import React, {useState,useEffect} from 'react'
import Result from './Result'

const Search = () => {
    const [searchQuery, setSearchQuery]=useState('')
    const [searchResults, setSearchResults]=useState([])
    let temp=''
    const searchPolicy = (e) =>{
        e.preventDefault()
        if(temp!==searchQuery){
            temp=searchQuery
            fetch('http://localhost:3004/data')
            .then(res=>{
                return res.json()
            }).then(data=>{
                setSearchResults(data)
            })
        }
    }
   
    
    return (
        <>
            <form onSubmit={searchPolicy}>
            <input value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}} placeholder="start typing..." type="text" />
            <button type="submit">Find</button>
            </form>
            <div>
                {searchResults.length!==0&&<Result searchResults={searchResults} />}
            </div>
        </>
    )
}

export default Search
