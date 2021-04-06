import axios from "axios"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req, res) => {
  var baseURL = 'https://api.spacexdata.com/v3/launches?limit=100'
   req.body.filters.successfulLaunch ? baseURL+='&launch_success=true':''
   req.body.filters.successfulLanding ? baseURL+='&land_success=true':''
   req.body.filters.year ? baseURL+=`&launch_year=${req.body.filters.year}`:''

  console.log(baseURL)

  try {
    const data = await axios.get(baseURL)
   
    res.status(200).json(data.data)
   
  } catch (error) {
    res.status(400)
  }

}
