import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type} Post</span>
            </h1>
            <p className="desc max-w-md text-left">
                {type} and share amazing prompts with the world, and let your imagination run wild with AI-powered platforms.
            </p>

            <form
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism shadow-[inset_10_-50px_94px_0x_rgba(199,199,199,0.2)]"
            >
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>
                    <textarea
                        value={post.prompt}
                        onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        placeholder="Write your prompt here"
                        className="form_textarea"
                        required
                    />
                </label>
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Tag {` `}
                        <span className="font-normal">(#product, #webdevelopment, #idea)</span>
                    </span>
                    <input
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        type="text"
                        placeholder="#tag"
                        className="form_input"
                        required
                    />
                </label>

                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className="text-gray-400 text-sm">
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
                    >
                        {submitting ? `${type}ing...` : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form