import { useRouter } from "next/router"
import { useEffect } from "react"

const Custom404Page = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.replace('/')
        }, 1500)
    }, [])
    return (
        <div>
            <section className="d-flex justify-content-center align-items-center" style={{
                // textAlign: 'center',
                height: "90vh",
            }}>
                <img src="/image/error-page.png" style={{
                    maxWidth: "100vw"
                }}></img>
            </section>
        </div>
    )
}


export default Custom404Page