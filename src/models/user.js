```javascript
const mongoose = require('mongoose');

// Define the user schema
const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    created_at: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);
```
