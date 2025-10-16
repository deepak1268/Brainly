import {Schema, model} from "mongoose"

const userSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

const tagSchema = new Schema({
    title: {type: String, unique: true, required: true}
})

const linkSchema = new Schema({
    hash: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
})

const contentTypes = ["tweet","video","documnet","link"]
const contentSchema = new Schema({
    title: {type: String, required: true},
    type: {type: String, enum: contentTypes, required: true},
    link: {type: String, required: true},
    tags: [{type: Schema.Types.ObjectId, ref: "tags"}],
    userId: {type: Schema.Types.ObjectId, ref: "users", required: true}
})

export const UserModel = model("users",userSchema)
export const ContentModel = model("content",contentSchema)
export const LinkModel = model("link",linkSchema)
export const TagModel = model("tags",tagSchema)