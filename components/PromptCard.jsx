"use client"

import { useState } from "react"
import Image from 'next/image'
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    const [copied, setCopied] = useState("");

    /* Funcionalidad para copiar a portapapeles */
    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setCopied(""), 3000);
    };

    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex flex-1 justify-start items-center gap-3 cursor-pointer">
                    <Image
                        src={post.creator.image}
                        alt="user image"
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                    />

                    <div className="flex flex-col">
                        <h3 className="font-satoshi font-semibold text-gray-900">{post.creator.username}</h3>
                        <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
                    </div>
                </div>

                <div
                    className="copy_btn shadow-[inset_10px_-50px_94px_0_rgb(199, 199, 199, 0.2)]"
                    onClick={handleCopy}
                >
                    <Image
                        src={copied === post.prompt
                            ? '/assets/icons/tick.svg'
                            : '/assets/icons/copy.svg'
                        }
                        alt=""
                        width={18}
                        height={18}
                    />
                </div>
            </div>

            <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
            <p
                className="font-inter text-sm blue_gradient cursor-pointer"
                onClick={() => handleTagClick && handleTagClick(post.tag)}
            >
                #{post.tag}
            </p>

            {/* Si el usuario actual es el creador del post y si esta en la pagina de profile */}
            {session?.user.id === post.creator._id
                && pathName === '/profile'
                && (
                    <div className="mt-5 flex-center gap-4 border-t border-gray-300 pt-3">
                        <p
                            className="font-inter text-sm green_gradient cursor-pointer"
                            onClick={handleEdit}
                        >
                            Edit
                        </p>
                        <p
                            className="font-inter text-sm orange_gradient cursor-pointer"
                            onClick={handleDelete}
                        >
                            Delete
                        </p>
                    </div>
                )}

        </div>

    )
}

export default PromptCard