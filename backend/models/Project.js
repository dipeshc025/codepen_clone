const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  html: { type: String, required: true },
  css: { type: String, required: true },
  js: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Project', projectSchema);
