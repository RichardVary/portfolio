function preloadImages(srcs) {
    if (!preloadImages.cache) {
        preloadImages.cache = [];
    }
    var img;
    for (var i = 0; i < srcs.length; i++) {
        img = new Image();
        img.src = srcs[i];
        preloadImages.cache.push(img);
    }
}

// then to call it, you would use this
var imageSrcs = ["../images/bgHeader.jpg",
                 "../images/bgsand.jpg",
                 "../images/bgX.png",
                 "../images/bgXLeft.png",
                 "../images/headshot.png",
                 "../images/cardImage_amt.jpg", // begin card images
                 "../images/cardImage_amtLg.jpg",
                 "../images/cardImage_autoy.jpg",
                 "../images/cardImage_autoyLg.jpg",
                 "../images/cardImage_dandh.jpg",
                 "../images/cardImage_dotnews.jpg",
                 "../images/cardImage_kylo.jpg",
                 "../images/cardImage_Tvami.jpg",
                 "../images/cardImage_wcg.jpg",
                "../images/cardImage_dandhLg.jpg",
                "../images/cardImage_dotNewsLg.jpg",
                "../images/cardImage_kyloLg.jpg",
                "../images/cardImage_tvamiLg.jpg",
                "../images/cardImage_wcgLg.jpg",
                 "../images/comps/dandh_main.jpg", // begin D and H screen shots
                 "../images/comps/dandh_attorneyHorgan.jpg",
                 "../images/comps/dandh_practiceAntiDumping.jpg",
                 "../images/comps/wexfordMain.jpg", // begin Wexford screen shots
                 "../images/comps/tvAmi_login.png", // begin tvAmi screen shots
                 "../images/comps/tvAmi_addriend.png",
                 "../images/comps/tvAmi_password.png",
                 "../images/comps/tvAmi_signUp.png",
                 "../images/comps/tvAmi_terms.png",
                 "../images/comps/tvAmi_voteNow.png",
                 "../images/comps/tvAmi_yourFriends.png",
                 "../images/comps/IA_amt/amtPostIt.jpg", // begin IA Amt screen shots
                 "../images/comps/IA_amt/amtSitemap.jpg",
                 "../images/comps/IA_amt/personaJamie.jpg",
                 "../images/comps/IA_amt/wireframe1_Welcome.jpg",
                 "../images/comps/IA_amt/wireframe2_Services.jpg",
                 "../images/comps/IA_amt/wireframe3_Therapists.jpg",
                 "../images/comps/IA_amt/wireframe4_WellnessCenter.jpg",
                 "../images/comps/IA_amt/wireframe5_Location.jpg",
                 "../images/comps/IA_autoy/autoySitemap.jpg", // begin IA Amt screen shots
                 "../images/comps/IA_autoy/autoyWireframe_Events.jpg",
                 "../images/comps/IA_autoy/autoyWireframe_Location.jpg",
                 "../images/comps/IA_autoy/autoyWireframe_Main.jpg",
                 "../images/comps/IA_autoy/autoyWireframe_Services.jpg",
                 "../images/comps/IA_autoy/autoyWireframe_Staff.jpg",
                 "../images/comps/IA_autoy/personaSusan.jpg"];

preloadImages(imageSrcs);