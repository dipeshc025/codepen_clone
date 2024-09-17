const express = require('express');
const Project = require('../models/Project');
const { verifyToken } = require('./auth');

const router = express.Router();

router.post('/save', verifyToken, async (req, res) => {
  const { html, css, js, slug } = req.body;

  try {
    const project = new Project({ html, css, js, slug });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: 'Error saving project', error: err });
  }
});

router.get('/:slug', async (req, res) => {
  const { slug } = req.params;

  try {
    const project = await Project.findOne({ slug });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching project', error: err });
  }
});


router.post('/fork/:slug', verifyToken, async (req, res) => {
  const { slug } = req.params;

  try {
    const originalProject = await Project.findOne({ slug });
    if (!originalProject) return res.status(404).json({ message: 'Project not found' });

    const forkedProject = new Project({
      html: originalProject.html,
      css: originalProject.css,
      js: originalProject.js,
      slug: `forked-${Date.now()}`  // Generate a new slug for the forked project
    });

    await forkedProject.save();
    res.status(201).json(forkedProject);
  } catch (err) {
    res.status(500).json({ message: 'Error forking project', error: err });
  }
});


module.exports = router;
