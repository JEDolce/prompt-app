import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required!']
    },
    tag: {
        type: String,
        required: [true, 'Tag is required!'],
    }
});

// Al igual que en el modelo de Users, primero vemos si existe el prompr
// y lo tomamos, o si no existe, creamos el modelo de prompr basado en el
// esquema de prompt

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;