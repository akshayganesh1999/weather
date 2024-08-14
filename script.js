// const base_url=" http://api.weatherapi.com/v1"
// const api_key="b41d263bb7644b0cb64112151241408"

const getWeather=async()=>{
    let result=""
    const city=winp.value
    const res=await fetch(`http://api.weatherapi.com/v1/current.json?key=b41d263bb7644b0cb64112151241408&q=${city}`)
    const jsres=await res.json()
    console.log(jsres)
    result=`
    <h3>${jsres.location.name},${jsres.location.region},${jsres.location.country}</h3>
    <img src=${jsres.current.condition.icon} alt="icon">
    <h5>${jsres.current.condition.text}</h5>
    `
    cnt.innerHTML=result
}
