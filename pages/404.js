import { useRouter } from "next/router"
import { useEffect } from "react"

const Custom404Page = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.replace('/')
        },1500)
    },[])
    return (
        <div>
            <section style={{
                textAlign:'center'
            }}>
                <img src="/image/error-page.png" style={{
                    height:"100vh",
                }}></img>
            </section>
        </div>
    )
}


export default Custom404Page