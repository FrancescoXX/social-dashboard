const controller = require('../controllers/socials.controller');
const router = require('express').Router();

// /socials
// router.get('/', controller.test);

router.get('/github', controller.getGithub);
router.get('/twitter', controller.getTwitter);
router.get('/twitch', controller.getTwitch);
router.get('/youtube', controller.getYoutube);
router.get('/instagram', controller.getInstagram);
router.get('/hashnode', controller.getHashnode);

module.exports = router;