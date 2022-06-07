import axios from "axios"

export default async function (req, res) {
    const api = `https://api.sms-activate.org/stubs/handler_api.php?api_key=${process.env.SMS_API_SECRET}c&action=getRentList`

    try {
        const result = await axios.get(api)
        return res.status(200).json(result.data)
    } catch (error) {
        return res.status(500).json(error)
    }
}