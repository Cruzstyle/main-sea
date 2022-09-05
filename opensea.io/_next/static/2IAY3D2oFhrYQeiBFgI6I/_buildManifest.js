self.__BUILD_MANIFEST = (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G) {
    return {
        __rewrites: {
            beforeFiles: [{
                source: "\u002F:nextInternalLocale(en\\-US|zh\\-CN)\u002Ffavicon.ico",
                destination: x
            }, {
                source: "\u002F:nextInternalLocale(en\\-US|zh\\-CN)\u002Fapple-touch-icon-precomposed.png",
                destination: x
            }],
            afterFiles: [{
                source: "\u002F:nextInternalLocale(en\\-US|zh\\-CN)\u002Fassets\u002F:collectionSlug",
                destination: "\u002F:nextInternalLocale\u002Fassets"
            }, {
                source: "\u002F:nextInternalLocale(en\\-US|zh\\-CN)\u002Factivity\u002F:collectionSlug",
                destination: "\u002F:nextInternalLocale\u002Factivity"
            }],
            fallback: []
        },
        "/": [a, b, m, o, p, r, s, t, u, y, "static\u002Fchunks\u002Fpages\u002Findex-baf05f7cce56d79d22b0.js"],
        "/_app.spec": ["static\u002Fchunks\u002F07e27881.6139faac358d074c3ae1.js", "static\u002Fchunks\u002Fpages\u002F_app.spec-dbb5a998ea4ea4052d73.js"],
        "/_error": ["static\u002Fchunks\u002Fpages\u002F_error-103251c20e5b5f028356.js"],
        "/about": ["static\u002Fchunks\u002Fpages\u002Fabout-851dc169b697e43c9719.js"],
        "/account": [a, c, b, d, e, f, g, h, i, j, k, l, "static\u002Fchunks\u002Fpages\u002Faccount-d90424ecfff1c5e9fd7d.js"],
        "/account/settings": [a, b, "static\u002Fchunks\u002Fpages\u002Faccount\u002Fsettings-cfbb3ea6577d16710674.js"],
        "/account/verify-email": ["static\u002Fchunks\u002Fpages\u002Faccount\u002Fverify-email-041f5782eac6e00da97b.js"],
        "/account/[collectionSlug]": [a, c, b, d, e, f, g, h, i, j, k, l, "static\u002Fchunks\u002Fpages\u002Faccount\u002F[collectionSlug]-87ea2cba2f2e6855dd20.js"],
        "/activity": [a, c, b, d, g, i, z, "static\u002Fchunks\u002Fpages\u002Factivity-e0aab0bde8983465128e.js"],
        "/asset/create": [c, q, v, A, "static\u002Fchunks\u002Fpages\u002Fasset\u002Fcreate-5efbe1b31ac607e0eaae.js"],
        "/assets": [a, c, b, d, e, f, g, h, i, j, k, l, "static\u002Fchunks\u002Fpages\u002Fassets-30cbf94c55ba72739f00.js"],
        "/assets/solana/[mint]": [a, c, b, d, e, f, g, h, i, j, l, n, "static\u002Fchunks\u002Fpages\u002Fassets\u002Fsolana\u002F[mint]-e5799cddbae3f5df23d2.js"],
        "/assets/solana/[mint]/sell": [e, h, n, B, "static\u002Fchunks\u002Fpages\u002Fassets\u002Fsolana\u002F[mint]\u002Fsell-d9538d22a7f15c66fe29.js"],
        "/assets/[chain]/[assetContractAddress]/[tokenId]": [a, c, b, d, e, f, g, h, i, j, l, n, "static\u002Fchunks\u002Fpages\u002Fassets\u002F[chain]\u002F[assetContractAddress]\u002F[tokenId]-df70dcf3162ae0094508.js"],
        "/assets/[chain]/[assetContractAddress]/[tokenId]/sell": [e, h, n, B, "static\u002Fchunks\u002Fpages\u002Fassets\u002F[chain]\u002F[assetContractAddress]\u002F[tokenId]\u002Fsell-77c58c820f295962ec9d.js"],
        "/assets/[chain]/[assetContractAddress]/[tokenId]/transfer": [e, j, C, "static\u002Fchunks\u002Fpages\u002Fassets\u002F[chain]\u002F[assetContractAddress]\u002F[tokenId]\u002Ftransfer-30a36dff0c861ffbc72e.js"],
        "/bundle/[chain]/sell": [e, h, n, "static\u002Fchunks\u002Fpages\u002Fbundle\u002F[chain]\u002Fsell-96c9c2057de3569276fa.js"],
        "/bundle/[chain]/transfer": [e, j, C, "static\u002Fchunks\u002Fpages\u002Fbundle\u002F[chain]\u002Ftransfer-fb5e18fadc13f311dd78.js"],
        "/bundles/[chain]/[slug]": [a, c, b, d, e, f, g, h, l, n, "static\u002Fchunks\u002Fpages\u002Fbundles\u002F[chain]\u002F[slug]-dcbe68a8e9c79b6b3e7b.js"],
        "/callback/bitski": ["static\u002Fchunks\u002Fpages\u002Fcallback\u002Fbitski-5cc7f15c3cb8a210c681.js"],
        "/careers": [p, D, "static\u002Fchunks\u002Fpages\u002Fcareers-c3a66363a6520967046a.js"],
        "/category/[categorySlug]": [a, f, k, w, "static\u002Fchunks\u002Fpages\u002Fcategory\u002F[categorySlug]-678aebb414c49fa542d8.js"],
        "/collection/create": [c, d, e, E, "static\u002Fchunks\u002Fpages\u002Fcollection\u002Fcreate-c56d9a5dc555cafa2398.js"],
        "/collection/[collectionSlug]": [a, c, b, d, e, f, g, h, i, j, k, l, "static\u002Fchunks\u002Fpages\u002Fcollection\u002F[collectionSlug]-f862290e8048fd13364d.js"],
        "/collection/[collectionSlug]/activity": [a, c, b, d, f, g, i, z, F, G, "static\u002Fchunks\u002Fpages\u002Fcollection\u002F[collectionSlug]\u002Factivity-617683b42c20f64cab52.js"],
        "/collection/[collectionSlug]/analytics": [c, d, f, F, G, "static\u002Fchunks\u002Fpages\u002Fcollection\u002F[collectionSlug]\u002Fanalytics-b37c091cc7785f5d112a.js"],
        "/collection/[collectionSlug]/asset/[chain]/[assetContractAddress]/[tokenId]/edit": [c, q, v, "static\u002Fchunks\u002Fpages\u002Fcollection\u002F[collectionSlug]\u002Fasset\u002F[chain]\u002F[assetContractAddress]\u002F[tokenId]\u002Fedit-78d29ffc0533fd86d834.js"],
        "/collection/[collectionSlug]/assets/create": [c, q, v, A, "static\u002Fchunks\u002Fpages\u002Fcollection\u002F[collectionSlug]\u002Fassets\u002Fcreate-ea3e4ab42c041bb76a95.js"],
        "/collection/[collectionSlug]/drop": [c, d, r, t, u, "static\u002Fchunks\u002Fpages\u002Fcollection\u002F[collectionSlug]\u002Fdrop-7bf570f388d2b5a69e8a.js"],
        "/collection/[collectionSlug]/edit": [c, d, e, E, "static\u002Fchunks\u002Fpages\u002Fcollection\u002F[collectionSlug]\u002Fedit-a839b75efa189de042d5.js"],
        "/collection/[collectionSlug]/mint": [q, s, "static\u002Fchunks\u002Fpages\u002Fcollection\u002F[collectionSlug]\u002Fmint-f56cd47ac05fd2ea2a86.js"],
        "/collection/[collectionSlug]/payouts": [a, c, b, d, g, "static\u002Fchunks\u002Fpages\u002Fcollection\u002F[collectionSlug]\u002Fpayouts-b38e103c867eb5643da3.js"],
        "/collections": ["static\u002Fchunks\u002Fpages\u002Fcollections-f5b4a976127cf2c5220c.js"],
        "/connected-socials/account-instagram-callback": ["static\u002Fchunks\u002Fpages\u002Fconnected-socials\u002Faccount-instagram-callback-cfe500348e234ccc6760.js"],
        "/connected-socials/account-twitter-callback": ["static\u002Fchunks\u002Fpages\u002Fconnected-socials\u002Faccount-twitter-callback-9ef93c96bfe481496b03.js"],
        "/connected-socials/collection-instagram-callback": ["static\u002Fchunks\u002Fpages\u002Fconnected-socials\u002Fcollection-instagram-callback-11992ace46662b095289.js"],
        "/connected-socials/twitter-callback": ["static\u002Fchunks\u002Fpages\u002Fconnected-socials\u002Ftwitter-callback-688a5a986cda9e255e9f.js"],
        "/explore-collections": [a, k, w, "static\u002Fchunks\u002Fpages\u002Fexplore-collections-87e0d8d77efb5748d03b.js"],
        "/explore-solana": [a, b, m, o, p, r, s, t, u, y, "static\u002Fchunks\u002Fpages\u002Fexplore-solana-a5d4473df35d9f3aac67.js"],
        "/internal/footer": ["static\u002Fchunks\u002Fpages\u002Finternal\u002Ffooter-5094144d97300a51dfa0.js"],
        "/login": ["static\u002Fchunks\u002Fpages\u002Flogin-09a73be72eac767a5427.js"],
        "/my-watchlist": [a, b, m, "static\u002Fchunks\u002Fpages\u002Fmy-watchlist-574bca285b063475ab4e.js"],
        "/opensea-grants": ["static\u002Fchunks\u002Fpages\u002Fopensea-grants-d9577e535a4f9473380e.js"],
        "/opensea-ventures": ["static\u002Fchunks\u002Fpages\u002Fopensea-ventures-869ad4f1060bbd25998c.js"],
        "/partners": [p, D, "static\u002Fchunks\u002Fpages\u002Fpartners-78cda0e5e9d67c350351.js"],
        "/privacy": ["static\u002Fchunks\u002Fpages\u002Fprivacy-8f2c9720f5552cb2d016.js"],
        "/rankings": [a, b, m, o, "static\u002Fchunks\u002Fpages\u002Frankings-eced495dc8b14aa73c94.js"],
        "/rankings/trending": [a, b, m, o, "static\u002Fchunks\u002Fpages\u002Frankings\u002Ftrending-d2b62b07b0a2cb7e8cb1.js"],
        "/rankings/watchlist": [a, b, m, o, "static\u002Fchunks\u002Fpages\u002Frankings\u002Fwatchlist-dd2498b6c22e550ca2af.js"],
        "/solana-collections": [a, f, k, w, "static\u002Fchunks\u002Fpages\u002Fsolana-collections-dc25d7816eee3289c8ad.js"],
        "/tax-resources": ["static\u002Fchunks\u002Fpages\u002Ftax-resources-bae1491b925dac403a6a.js"],
        "/tos": ["static\u002Fchunks\u002Fpages\u002Ftos-551a90c1f92f7414fe01.js"],
        "/[identifier]": [a, c, b, d, e, f, g, h, i, j, k, l, "static\u002Fchunks\u002Fpages\u002F[identifier]-0b9b28eaa613bdd4ca6f.js"],
        "/[identifier]/[collectionSlug]": [a, c, b, d, e, f, g, h, i, j, k, l, "static\u002Fchunks\u002Fpages\u002F[identifier]\u002F[collectionSlug]-8903f05aa3ea1a9893fe.js"],
        sortedPages: ["\u002F", "\u002F_app", "\u002F_app.spec", "\u002F_error", "\u002Fabout", "\u002Faccount", "\u002Faccount\u002Fsettings", "\u002Faccount\u002Fverify-email", "\u002Faccount\u002F[collectionSlug]", "\u002Factivity", "\u002Fasset\u002Fcreate", "\u002Fassets", "\u002Fassets\u002Fsolana\u002F[mint]", "\u002Fassets\u002Fsolana\u002F[mint]\u002Fsell", "\u002Fassets\u002F[chain]\u002F[assetContractAddress]\u002F[tokenId]", "\u002Fassets\u002F[chain]\u002F[assetContractAddress]\u002F[tokenId]\u002Fsell", "\u002Fassets\u002F[chain]\u002F[assetContractAddress]\u002F[tokenId]\u002Ftransfer", "\u002Fbundle\u002F[chain]\u002Fsell", "\u002Fbundle\u002F[chain]\u002Ftransfer", "\u002Fbundles\u002F[chain]\u002F[slug]", "\u002Fcallback\u002Fbitski", "\u002Fcareers", "\u002Fcategory\u002F[categorySlug]", "\u002Fcollection\u002Fcreate", "\u002Fcollection\u002F[collectionSlug]", "\u002Fcollection\u002F[collectionSlug]\u002Factivity", "\u002Fcollection\u002F[collectionSlug]\u002Fanalytics", "\u002Fcollection\u002F[collectionSlug]\u002Fasset\u002F[chain]\u002F[assetContractAddress]\u002F[tokenId]\u002Fedit", "\u002Fcollection\u002F[collectionSlug]\u002Fassets\u002Fcreate", "\u002Fcollection\u002F[collectionSlug]\u002Fdrop", "\u002Fcollection\u002F[collectionSlug]\u002Fedit", "\u002Fcollection\u002F[collectionSlug]\u002Fmint", "\u002Fcollection\u002F[collectionSlug]\u002Fpayouts", "\u002Fcollections", "\u002Fconnected-socials\u002Faccount-instagram-callback", "\u002Fconnected-socials\u002Faccount-twitter-callback", "\u002Fconnected-socials\u002Fcollection-instagram-callback", "\u002Fconnected-socials\u002Ftwitter-callback", "\u002Fexplore-collections", "\u002Fexplore-solana", "\u002Finternal\u002Ffooter", "\u002Flogin", "\u002Fmy-watchlist", "\u002Fopensea-grants", "\u002Fopensea-ventures", "\u002Fpartners", "\u002Fprivacy", "\u002Frankings", "\u002Frankings\u002Ftrending", "\u002Frankings\u002Fwatchlist", "\u002Fsolana-collections", "\u002Ftax-resources", "\u002Ftos", "\u002F[identifier]", "\u002F[identifier]\u002F[collectionSlug]"]
    }
}("static\u002Fchunks\u002Feab893a1c2e16e448a00e8dc819de234cfc9c930.3b4c879ecec8dab1ade8.js", "static\u002Fchunks\u002F22933bcf0def70abbb24a68cb0c62ca5e7404c2b.044dd06a71b93168a757.js", "static\u002Fchunks\u002F843a8f9dbbb0d35366325b5b2cc09f1ba7fea1af.7b5a7c54f8a01366dd9a.js", "static\u002Fchunks\u002F1f9cb98eaf1ab0593dd8d45c45a66b437c13a4d3.3dece86943fe335e65d5.js", "static\u002Fchunks\u002F53eccbe98c589031b1ecb5aca87eb6add07221a9.5a2e8fa214519c194d12.js", "static\u002Fchunks\u002Fb8b59a17ea6273646c9aa1280f7b51deb2690b4b.f9f645eb2290cec837f5.js", "static\u002Fchunks\u002F144d2ed1cccd31ee76d91383f82691c48863bc72.aae9b15737871bd621d8.js", "static\u002Fchunks\u002F22c203fa81a2d8e9e6c795f6b49d7c6d5ec3b542.7d962da6c045f487ba29.js", "static\u002Fchunks\u002F1dab6529eac53f2d0791fd0013e38e28c27cbbe1.801e827d45eafe241c3a.js", "static\u002Fchunks\u002F4e044d6d797df751250b2f73de6a7e275667d5b6.af8e5c0784affff6224a.js", "static\u002Fchunks\u002F7a7f56af2be865b70cda20c89d11bded25779f78.4c110d72b96fa4e17ae9.js", "static\u002Fchunks\u002Fbbbd7526e94e4aaca354bb13d6000c14af00f086.37f1cc4208ac37981ab0.js", "static\u002Fchunks\u002Fbdcbd56a99138d2f9d7cdf09720b1e5cbf6ebebd.8d0669192649ad967d1e.js", "static\u002Fchunks\u002F4dd2cbe7ad4226fbb7be7b1769bf172a0ec94ab7.878ce4f6f90516f56424.js", "static\u002Fchunks\u002F3ad2a615a1356bf08cccb5b47eb85547bfc80bf1.947411e182c23d65543b.js", "static\u002Fchunks\u002Fdf4eb5deb1772d1d52fd6bb261c7d4c6165b3b60.42d87acf424644a182a1.js", "static\u002Fchunks\u002F82bab12640c126be839c0ca73c0898d742723bf5.f61191d28175c3a82586.js", "static\u002Fchunks\u002F0842887b8fc3c79c482ab6453361c2ed93b1e96f.5f496166253a85a4d6aa.js", "static\u002Fchunks\u002Fc25f288053d84fcdb959ace53890f66097cf1118.9266feca6df30eedd3ec.js", "static\u002Fcss\u002Ff909a8c92b0ecb6beffd.css", "static\u002Fchunks\u002F0842887b8fc3c79c482ab6453361c2ed93b1e96f_CSS.b3b6164fe7f1066fcab5.js", "static\u002Fchunks\u002Fea893a6f4a1c4895a88194f2bc49a076b697bcf2.a88bcfb8041f607658ce.js", "static\u002Fchunks\u002F8a540f25edb357261176e84123a92e0d3ac141e6.2a80b3f19d0759dbe68c.js", "\u002F:nextInternalLocale\u002Fstatic\u002Fimages\u002Ffavicon\u002Ffavicon.ico", "static\u002Fchunks\u002F13dfdec8b04796b03cf1465f71ff88caa17e741f.68f735595ea1186df17f.js", "static\u002Fchunks\u002F188984cb486d6731c5c024691196cee2b03ba9fd.351ce5a004b2489bd151.js", "static\u002Fchunks\u002Ffa04e2c2da5f442f63edf0ab58e2fe90b99c2683.99c0d9615f5972012185.js", "static\u002Fchunks\u002F353456ae299b80a0d5b2dd5f90e12bab6c1d5d0d.47e0cc29c2fe742b8b12.js", "static\u002Fchunks\u002Ffe5d372d1bb4c9e95738ed021dfa6f56af05b321.400e1d6bfe67ce9a711a.js", "static\u002Fchunks\u002F5937d157861af37aa983b19c742bb22b6fba7cd1.fd1b625b7932ddede53b.js", "static\u002Fchunks\u002Fe45b51771f4218fc2b28ba289af3d5edda30b703.d6fcf4b57f00d284d80e.js", "static\u002Fchunks\u002F8dd3b17536ecab702bc3f4ee29d68bcc70848282.2d8b7a8d9045d1cee404.js", "static\u002Fchunks\u002Fa8b0b9d1a4e1e1121982595dfaa24dcb1545883e.611d36709955ede39069.js"));
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()