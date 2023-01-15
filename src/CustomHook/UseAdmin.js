import { useEffect, useState } from "react"

const UseAdmin = (email) => {
    const [admin, setAdmin] = useState(false)
    const [adLoading, setAdLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://srilanka-tourist-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.isAdmin);
                    setAdLoading(false);
                })
        }
    }, [email])

    return [admin, adLoading]
}

export default UseAdmin;