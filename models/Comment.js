const { Schema, model} = require('mongoose');

//set up comment schema to hold this data:
    // The name of the comment writer
    // the comment body
    // A timestamp of when the commment was created
    
const CommentSchema = new Schema({
    writtenBy: {
        type: String
    },
    commentBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Comment = model('Comment',CommentSchema);

module.exports = Comment;
