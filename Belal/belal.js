async function getData(data, id=""){

  try {
    const apiUrl = `http://localhost:3000/${data}/${id}`
    const response = await fetch(apiUrl)


    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
      
    const jsonData = await response.json();
    console.log(jsonData)
    return jsonData;

  } catch (error) {
    console.log(error)
  }
}


async function addEvent(){

  try {
    const apiUrl = `http://localhost:3000/users`
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          "username": "lolo",
          "email": "lolo@lolo.com",
          "publishedEvents": [],
          "password": "password",
          "registeredEvents": []
      })
    })

    if (!response.ok) {
      console.log("error")
    }
  } catch (error) {
    
  }

}



// addEvent()

