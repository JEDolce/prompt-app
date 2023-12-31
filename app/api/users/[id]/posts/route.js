import { connectToDB } from "@utils/db";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {

    try {
        await connectToDB();

        const prompts = await Prompt.find({
            creator: params.id                  /* Solo hago este cambio para que me busque los posts del usuario */
        }).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 201 });
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
}