import axios from "axios"
var messagebird = require('messagebird')('XM7Qv4P6xzebLjyNueNHahiu0');

export default async function testApi(req, res) {
  // const api = `https://numbers.messagebird.com/v1/phone-numbers`
  const api = "https://numbers.messagebird.com/v1/available-phone-numbers/NL?features=sms&features=voice&type=mobile&number=319&search_pattern=start&limit=25"
  try {


    // messagebird.balance.read(function (err, data) {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   console.log(data);
    // });

    const result = await axios.get(api,{
      headers:{
        "Authorization": "AccessKey XM7Qv4P6xzebLjyNueNHahiu0",
        "Content-Type": "application/json"
      }
    })
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json(error)
  }
}
