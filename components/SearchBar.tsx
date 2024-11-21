"use client"
import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react";

const isValidAmazonProductUrl=(url:string)=>{
try{
    const parsedURL= new URL(url);
const hostname=parsedURL.hostname;

//check if hostname contains amazon.com
if(hostname.includes('amazon.com')
  || hostname.includes('amazon.')||
hostname.endsWith('amazon')
){

  return true;
}
}catch(error){
  return false;
}
return false;
}
const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
    const handleSubmit=async(event:FormEvent<HTMLFormElement>)=>{
      event.preventDefault();

      const isValidLink=isValidAmazonProductUrl(searchPrompt)
    if(!isValidLink) return alert ('Please provide a valid Amazon link')
      
      
      try{
setIsLoading(true);

//scrape the product page

const product=await scrapeAndStoreProduct(searchPrompt);

    }catch(error){
console.log(error)
    }
    finally{
      setIsLoading(false);
    }
    }
  return (
  <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
    <input type="text"
    value={searchPrompt}
    placeholder="Enter product link" 
    onChange={(e)=>setSearchPrompt(e.target.value)}
    className="searchbar-input"/>
    <button type="submit" className="searchbar-btn"
    disabled={searchPrompt===''}
    >
      {isLoading? 'Searching...':'Search'}
        Search
    </button>
  </form>
  )
}

export default SearchBar