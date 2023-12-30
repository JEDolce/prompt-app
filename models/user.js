import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!']
    },
    username: {
        type: String,
        required: [true, 'Usermail is required!'],
        // match: [/^(?=.{8,30}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
        unique: [true, 'Usermail already exists!'],
    },
    image: {
        type: String
    }
});

// En NextJS el backend solo funciona cuando se lo necesita (no esta corriendo continuamente)
// Por eso tenemos que hacer un chqueo adicional: 
// Primero fijate si existe models.User y, si no esta, entonces crealo
// Esto es asi porque la ruta es llamada cada vez que la conexion se establece

const User = models.User || model("User", UserSchema);

export default User;