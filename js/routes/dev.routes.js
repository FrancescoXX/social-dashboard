const controller = require('../controllers/dev.controller');
const router = require('express').Router();

// /dev endpoints
router.get('/', controller.test);

router.get('/github', controller.getGithub);
router.get('/twitter', controller.getTwitter);
router.get('/twitch', controller.getTwitch);
router.get('/youtube', controller.getYoutube);
router.get('/instagram', controller.getInstagram);
router.get('/linkedin', controller.getLinkedin);

module.exports = router;