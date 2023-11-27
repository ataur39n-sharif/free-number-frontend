export default async function Login(req, res) {
    try {
        const { username, password } = req.body;
        if (username === 'asik' && password === '@@asik@@') {
            return res.status(200).json({
                success: true,
            })
        } else {
            return res.status(401).json({
                success: false,
                message: 'Invalid username or password'
            })
        }

    } catch (e) {
        return res.status(500).json({ message: error.message })
    }
}