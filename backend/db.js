const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dipeshc025:dipesh4444@cluster0.v2nnxco.mongodb.net//codepen-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));
