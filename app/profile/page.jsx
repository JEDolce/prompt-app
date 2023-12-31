"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

import Profile from '@components/Profile'

const MyProfile = () => {

    const { data: session } = useSession();

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await res.json();

            setPosts(data);
        }

        if (session?.user.id) fetchPost();
    }, [])

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

    return (
        <Profile
            name="My"
            desc="Welcome to your profile"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile