const express = require('express');
const router = express.Router();
const checkAuth = require('../checkAuth.js');
const youtube_controller = require("../controllers/youtube_controller.js");
const linkedin_controller = require("../controllers/linkedin_controller.js");
const instagram_controller = require("../controllers/instagram_controller.js");
const facebook_controller = require("../controllers/facebook_controller.js");
const twitter_controller = require("../controllers/twitter_controller.js");
const email_controller = require("../controllers/email_controller.js");

router.post('/chat', checkAuth, youtube_controller.chat);

router.post('/youtubeTitle', checkAuth, youtube_controller.youtube_title);
router.post('/youtubeScript', checkAuth, youtube_controller.youtube_script);
router.post('/youtubeDescription', checkAuth, youtube_controller.youtube_description);
router.post('/youtubeChannelDescription', checkAuth, youtube_controller.youtube_channelDescription);
router.post('/youtubeLongKeyword', checkAuth, youtube_controller.youtube_longKeyword);
router.post('/youtubeShortKeyword', checkAuth, youtube_controller.youtube_shortKeyword);

router.post('/linkedinPost', checkAuth, linkedin_controller.linkedin_post);
router.post('/linkedinOutreach', checkAuth, linkedin_controller.linkedin_outreach);
router.post('/linkedinResponse', checkAuth, linkedin_controller.linkedin_response);
router.post('/linkedinGrowthStrategy', checkAuth, linkedin_controller.linkedin_growthStrategy);
router.post('/linkedinAd', checkAuth, linkedin_controller.linkedin_adCopy);

router.post('/instagramProfileDescription', checkAuth, instagram_controller.instagram_profile_description);
router.post('/instragramCalendar', checkAuth, instagram_controller.instagram_content_calendar);
router.post('/instragramStrategy', checkAuth, instagram_controller.instagram_content_strategy);
router.post('/instragramOutreach', checkAuth, instagram_controller.instagram_outreach_influencer);
router.post('/instragramProduct', checkAuth, instagram_controller.instagram_promote_product);

router.post('/facebookAdEngage', checkAuth, facebook_controller.facebook_ad_engage);
router.post('/facebookAdFomo', checkAuth, facebook_controller.facebook_ad_fomo);
router.post('/facebookAdAuthority', checkAuth, facebook_controller.facebook_ad_authority);
router.post('/facebookPost', checkAuth, facebook_controller.facebook_write_post);
router.post('/facebookProfileDescription', checkAuth, facebook_controller.facebook_profile_description);
router.post('/facebookStrategy', checkAuth, facebook_controller.facebook_content_strategy);

router.post('/twitterValuableThread', checkAuth, twitter_controller.twitter_valuable_thread);
router.post('/twitterViralProduct', checkAuth, twitter_controller.twitter_viral_thread);
router.post('/twitterOvercomeObjections', checkAuth, twitter_controller.twitter_overcome_objections);

router.post('/generalWelcomeEmail', checkAuth, email_controller.email_welcome);
router.post('/generalNewsletter', checkAuth, email_controller.email_newsletter);
router.post('/generalEventPromotion', checkAuth, email_controller.email_event_promotion);
router.post('/generalColdOutreach', checkAuth, email_controller.email_cold_outreach);
router.post('/generalLaunchinSoon', checkAuth, email_controller.email_launching_soon);
router.post('/generalGiveaway', checkAuth, email_controller.email_giveaway);
router.post('/generalConfirmPurchase', checkAuth, email_controller.email_confirm_purchase);
router.post('/generalReferrals', checkAuth, email_controller.email_referral);
router.post('/generalCrisis', checkAuth, email_controller.email_crisis_management);
router.post('/generalPainPoint', checkAuth, email_controller.email_pain_point);
router.post('/generalPromotion', checkAuth, email_controller.email_product_promotion);

module.exports = router;