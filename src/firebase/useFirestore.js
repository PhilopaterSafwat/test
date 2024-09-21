import { useEffect, useState } from "react"
import { db } from "./firebase"

export const useFirestore = () => {
    const [items, setitems] = useState([])

    useEffect(() => {
        const hey = db.collection('items').onSnapshot(snap => {
            let fetched = snap.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
            setitems(fetched)
        })

        return hey
    }, [])

    return { items }

}