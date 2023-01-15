import { useEffect, useState } from "react"

const UseAdmin = (email) => {
    const [admin, setAdmin] = useState(false)
    const [adLoading, setAdLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
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