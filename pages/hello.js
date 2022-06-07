import axios from "axios";
import { useState, useEffect } from "react"

const Hello = ({ data }) => {
    console.log(process.env.CURRENT_SITE_LINK);
    return (
        <div id="hello">
            Hello
        </div>
    )
}

export default Hello

export async function getServerSideProps(context) {

    const result = await fetch('http://localhost:3000/api/hello')
    const value = await result.json()

    return {
        props: {
            data: value || null
        }
    }
}