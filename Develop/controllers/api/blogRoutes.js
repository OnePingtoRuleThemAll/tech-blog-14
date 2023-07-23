// renamed from 'projectRoutes' to 'blogRoutes'
const router = require('express').Router();
const { Blog } = require('../../models'); //changed from 'project' to 'Blog'

router.post('/', async (req, res) => {
    try { 
        const newBlogPost = await Blog.create({ //changed from 'newProject' to 'newBlogPost'
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlogPost); //changed from 'project' to 'newBlogPost'
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const blogData = await Blog.destroy({ //changed from 'projectData' to 'blogData' and 'await Blog.destroy'
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) { //changed from 'projectData' to 'blogData'
            res.status(404).json({ message: 'No blog found with this id!' });
            return;
        }

        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;