const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
//set up Reply schema to hold this data:
// The name of the reply writer
// the reply body
// A timestamp of when the commment was created

const ReplySchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment _id
        replyId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        replyBody: {
            type: String,
            required: true,
            trim: true
        },
        writtenBy: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);
//set up comment schema to hold this data:
// The name of the comment writer
// the comment body
// A timestamp of when the commment was created

const CommentSchema = new Schema({
    writtenBy: {
        type: String,
        required: true,
        trim: true
    },
    commentBody: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    replies: [ReplySchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

CommentSchema.virtual('replyCount').get(function () {
    return this.replies.length;
});


const Comment = model('Comment', CommentSchema);

module.exports = Comment;
