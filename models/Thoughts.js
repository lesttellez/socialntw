const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Create a schema for the Thought model
const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,         
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);  

thoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
