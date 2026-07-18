
export async function getSubstations(){

    const response = await fetch(
      "http://localhost:8000/substations"
    );
        
    if(!response.ok){
      throw new Error(
          `HTTP ${response.status}`
      );
    }
        
    return response.json();

}