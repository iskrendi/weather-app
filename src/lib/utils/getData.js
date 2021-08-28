export async function getData() {
  let data;
  
  try {
    let response = await fetch('./data/weather_data_riverdogfarm.json');
    if(!response.ok) {
      console.log("File error: ", response.status)
    }
    data = await response.json();
  } catch (e) {
    console.log(e)
  }

  return data;
}

