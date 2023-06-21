const express = require('express');
const router = express.Router();
const checkAuth = require('../checkAuth.js');
const youtube_controller = require("../controllers/youtube_controller.js");
const linkedin_controller = require("../controllers/linkedin_controller.js");
const instagram_controller = require("../controllers/instagram_controller.js");
const facebook_controller = require("../controllers/facebook_controller.js");
const twitter_controller = require("../controllers/twitter_controller.js");
const email_controller = require("../controllers/email_controller.js");
const copywriter_controller = require("../controllers/copywriter_controller.js");
const facetoface_sales_controller = require("../controllers/facetoface_sales_controller.js");
const business_coach_controller = require("../controllers/business_coach_controller.js");
const relationship_coach_controller = require("../controllers/relationship_coach_controller.js");

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

router.post('/salePageHeadlines', checkAuth, copywriter_controller.sales_page_headlines);
router.post('/productDescriptions', checkAuth, copywriter_controller.product_descriptions);
router.post('/ctaPhrases', checkAuth, copywriter_controller.cta_phrases);
router.post('/adCopy', checkAuth, copywriter_controller.ad_copy);
router.post('/blogPostSEO', checkAuth, copywriter_controller.blog_post_SEO);
router.post('/blogPostTitles', checkAuth, copywriter_controller.blog_post_titles);
router.post('/blogPostOutlines', checkAuth, copywriter_controller.blog_post_outlines);
router.post('/contentUpgrades', checkAuth, copywriter_controller.blog_content_upgrades);
router.post('/guestPostPitches', checkAuth, copywriter_controller.guest_post_pitches);
router.post('/promoteBlog', checkAuth, copywriter_controller.promote_blog);
router.post('/homepageCopy', checkAuth, copywriter_controller.homepage_copy);
router.post('/aboutUsCopy', checkAuth, copywriter_controller.about_us_copy);
router.post('/servicesPage', checkAuth, copywriter_controller.services_copy);
router.post('/reviewsPage', checkAuth, copywriter_controller.reviews_copy);
router.post('/contactPage', checkAuth, copywriter_controller.contact_page_copy);
router.post('/pressHeadlines', checkAuth, copywriter_controller.press_headlines);
router.post('/pressBody', checkAuth, copywriter_controller.press_body);

router.post('/salesOpening', checkAuth, facetoface_sales_controller.opening_techniques);
router.post('/salesQuestioning', checkAuth, facetoface_sales_controller.questioning_techniques);
router.post('/salesClosing', checkAuth, facetoface_sales_controller.closing_techniques);
router.post('/handlingObjections', checkAuth, facetoface_sales_controller.handling_objections);
router.post('/salesUpselling', checkAuth, facetoface_sales_controller.sales_upselling);
router.post('/salespersonsLanguage', checkAuth, facetoface_sales_controller.salespersons_body_language);
router.post('/mirrorTechniques', checkAuth, facetoface_sales_controller.mirror_techniques);
router.post('/rapportBuilding', checkAuth, facetoface_sales_controller.rapport_building);
router.post('/establishTrust', checkAuth, facetoface_sales_controller.establish_trust);
router.post('/maintainRelationships', checkAuth, facetoface_sales_controller.maintain_relationships);
router.post('/presentationStructure', checkAuth, facetoface_sales_controller.presentation_structure);

router.post('/ideaFinetuning', checkAuth, business_coach_controller.idea_finetuning);
router.post('/createTeam', checkAuth, business_coach_controller.create_team);
router.post('/startupStrategy', checkAuth, business_coach_controller.startup_strategy);
router.post('/ideaGenerator', checkAuth, business_coach_controller.idea_generator);
router.post('/pricingStrategy', checkAuth, business_coach_controller.pricing_strategy);
router.post('/createBrand', checkAuth, business_coach_controller.create_brand);
router.post('/marketStrategy', checkAuth, business_coach_controller.goto_market_strategy);
router.post('/digitalMarketingStrategy', checkAuth, business_coach_controller.digital_marketing_strategy);
router.post('/contentMarketing', checkAuth, business_coach_controller.content_marketing);
router.post('/scarcityPrinciple', checkAuth, business_coach_controller.scarcity_principle);
router.post('/leanStartup', checkAuth, business_coach_controller.lean_startup);
router.post('/positiveConditioning', checkAuth, business_coach_controller.positive_conditioning);
router.post('/businessNames', checkAuth, business_coach_controller.business_names);
router.post('/businessIdeaGenerator', checkAuth, business_coach_controller.business_idea_generator);
router.post('/planDevelopment', checkAuth, business_coach_controller.plan_development);
router.post('/productForecasting', checkAuth, business_coach_controller.product_forecasting);

router.post('/newFriends', checkAuth, relationship_coach_controller.making_new_friends);
router.post('/maintainFriendships', checkAuth, relationship_coach_controller.making_new_friends);
router.post('/resolveConflicts', checkAuth, relationship_coach_controller.resolve_conflicts);
router.post('/writeLetter', checkAuth, relationship_coach_controller.write_letter);
router.post('/findPartner', checkAuth, relationship_coach_controller.find_partner);
router.post('/improveRelationship', checkAuth, relationship_coach_controller.improve_relationship);
router.post('/resolveRomanticConflict', checkAuth, relationship_coach_controller.resolve_romantic_conflict);
router.post('/dealingWithBreakup', checkAuth, relationship_coach_controller.dealing_with_breakup);
router.post('/improveCommunication', checkAuth, relationship_coach_controller.improve_communication);
router.post('/handleConversation', checkAuth, relationship_coach_controller.handle_conversation);
router.post('/nonverbalCommunication', checkAuth, relationship_coach_controller.nonverbal_communication);
router.post('/createMessage', checkAuth, relationship_coach_controller.create_message);


module.exports = router;