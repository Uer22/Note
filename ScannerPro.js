{"payload":{"allShortcutsEnabled":true,"fileTree":{"":{"items":[{"name":"Cad.js","path":"Cad.js","contentType":"file"},{"name":"CamScanner.js","path":"CamScanner.js","contentType":"file"},{"name":"Onexilie.js","path":"Onexilie.js","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"ScannerPro.js","path":"ScannerPro.js","contentType":"file"},{"name":"Xmind.js","path":"Xmind.js","contentType":"file"},{"name":"arqjt.js","path":"arqjt.js","contentType":"file"},{"name":"bohejiankang.js","path":"bohejiankang.js","contentType":"file"},{"name":"evevt.js","path":"evevt.js","contentType":"file"},{"name":"goodn6.js","path":"goodn6.js","contentType":"file"},{"name":"goodnotes6.js","path":"goodnotes6.js","contentType":"file"},{"name":"m3u8.js","path":"m3u8.js","contentType":"file"},{"name":"mgbody.js","path":"mgbody.js","contentType":"file"},{"name":"mgheader.js","path":"mgheader.js","contentType":"file"},{"name":"mtxx.js","path":"mtxx.js","contentType":"file"},{"name":"notability.js","path":"notability.js","contentType":"file"},{"name":"scannerPro.js","path":"scannerPro.js","contentType":"file"},{"name":"xunji61109.js","path":"xunji61109.js","contentType":"file"}],"totalCount":18}},"fileTreeProcessingTime":9.350157,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":669113988,"defaultBranch":"main","name":"Script","ownerLogin":"Yu9191","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2023-07-21T19:25:27.000+08:00","ownerAvatar":"https://avatars.githubusercontent.com/u/132221547?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":true,"treeExpanded":true,"refInfo":{"name":"main","listCacheKey":"v0:1689939648.0","canEdit":true,"refType":"branch","currentOid":"878c6085ce41c6d0e76628e287636f9a3d22ddcf"},"path":"ScannerPro.js","currentUser":{"id":142463474,"login":"Uer22","userEmail":"2902294002@qq.com"},"blob":{"rawLines":["/*************************************","","项目名称：ScannerPro","使用说明：失败就下载重新安装","特别说明：开规则进 直接解锁 永久版","","**************************************","","[rewrite_local]","^https?:\\/\\/api\\.revenuecat\\.com\\/.+\\/(receipts$|subscribers\\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Yu9191/Script/main/ScannerPro.js","","^https?:\\/\\/api\\.revenuecat\\.com\\/.+\\/(receipts$|subscribers\\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Yu9191/Script/main/ScannerPro.js","","","[mitm]","hostname = api.revenuecat.com","","*************************************/","const baby = {};","const lovebaby = JSON.parse(typeof $response != \"undefined\" && $response.body || null);","","const name = \"plus\";","const love = \"com.premium.yearly\";","","if (typeof $response == \"undefined\") {","  delete $request.headers[\"x-revenuecat-etag\"];","  delete $request.headers[\"X-RevenueCat-ETag\"];","  baby.headers = $request.headers;","} else if (lovebaby && lovebaby.subscriber) {","  data = {","    \"expires_date\": \"9999-02-18T07:52:54Z\",","    \"product_identifier\": \"com.premium.yearly\",","    \"purchase_date\": \"2020-02-11T07:52:54Z\"","  };","  lovebaby.subscriber.subscriptions[(love)] = {","    \"is_sandbox\": false,","    \"period_type\": \"normal\",","    \"billing_issues_detected_at\": null,","    \"unsubscribe_detected_at\": null,","    \"expires_date\": \"9999-02-18T07:52:54Z\",","    \"original_purchase_date\": \"2020-02-11T07:52:55Z\",","    \"purchase_date\": \"2020-02-11T07:52:54Z\",","    \"store\": \"app_store\"","  };","  lovebaby.subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));","  baby.body = JSON.stringify(lovebaby);","}","","$done(baby);"],"stylingDirectives":[[{"start":0,"end":38,"cssClass":"pl-c"}],[{"start":0,"end":0,"cssClass":"pl-c"}],[{"start":0,"end":15,"cssClass":"pl-c"}],[{"start":0,"end":14,"cssClass":"pl-c"}],[{"start":0,"end":18,"cssClass":"pl-c"}],[{"start":0,"end":0,"cssClass":"pl-c"}],[{"start":0,"end":38,"cssClass":"pl-c"}],[{"start":0,"end":0,"cssClass":"pl-c"}],[{"start":0,"end":15,"cssClass":"pl-c"}],[{"start":0,"end":163,"cssClass":"pl-c"}],[{"start":0,"end":0,"cssClass":"pl-c"}],[{"start":0,"end":164,"cssClass":"pl-c"}],[{"start":0,"end":0,"cssClass":"pl-c"}],[{"start":0,"end":0,"cssClass":"pl-c"}],[{"start":0,"end":6,"cssClass":"pl-c"}],[{"start":0,"end":29,"cssClass":"pl-c"}],[{"start":0,"end":0,"cssClass":"pl-c"}],[{"start":0,"end":38,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":34,"cssClass":"pl-k"},{"start":35,"end":44,"cssClass":"pl-s1"},{"start":45,"end":47,"cssClass":"pl-c1"},{"start":48,"end":59,"cssClass":"pl-s"},{"start":60,"end":62,"cssClass":"pl-c1"},{"start":63,"end":72,"cssClass":"pl-s1"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":77,"cssClass":"pl-c1"},{"start":78,"end":80,"cssClass":"pl-c1"},{"start":81,"end":85,"cssClass":"pl-c1"},{"start":85,"end":86,"cssClass":"pl-kos"},{"start":86,"end":87,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":19,"cssClass":"pl-s"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":33,"cssClass":"pl-s"},{"start":33,"end":34,"cssClass":"pl-kos"}],[],[{"start":0,"end":2,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":20,"cssClass":"pl-s1"},{"start":21,"end":23,"cssClass":"pl-c1"},{"start":24,"end":35,"cssClass":"pl-s"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":45,"cssClass":"pl-s"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":45,"cssClass":"pl-s"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-s1"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":33,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":2,"end":6,"cssClass":"pl-k"},{"start":7,"end":9,"cssClass":"pl-k"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":19,"cssClass":"pl-s1"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":23,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":42,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":4,"end":18,"cssClass":"pl-s"},{"start":20,"end":42,"cssClass":"pl-s"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":4,"end":24,"cssClass":"pl-s"},{"start":26,"end":46,"cssClass":"pl-s"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":4,"end":19,"cssClass":"pl-s"},{"start":21,"end":43,"cssClass":"pl-s"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":2,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":35,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":4,"end":16,"cssClass":"pl-s"},{"start":18,"end":23,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":4,"end":17,"cssClass":"pl-s"},{"start":19,"end":27,"cssClass":"pl-s"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":4,"end":32,"cssClass":"pl-s"},{"start":34,"end":38,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":4,"end":29,"cssClass":"pl-s"},{"start":31,"end":35,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":4,"end":18,"cssClass":"pl-s"},{"start":20,"end":42,"cssClass":"pl-s"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":4,"end":28,"cssClass":"pl-s"},{"start":30,"end":52,"cssClass":"pl-s"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":4,"end":19,"cssClass":"pl-s"},{"start":21,"end":43,"cssClass":"pl-s"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-s"},{"start":13,"end":24,"cssClass":"pl-s"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":2,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-c1"},{"start":45,"end":49,"cssClass":"pl-c1"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":55,"cssClass":"pl-en"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":60,"cssClass":"pl-c1"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":70,"cssClass":"pl-en"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":71,"end":75,"cssClass":"pl-s1"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":76,"end":77,"cssClass":"pl-kos"},{"start":77,"end":78,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-s1"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-en"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/Yu9191/Script/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/Yu9191/Script/security/dependabot","repoSecurityAndAnalysisPath":"/Yu9191/Script/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"ScannerPro.js","displayUrl":"https://github.com/Yu9191/Script/blob/main/ScannerPro.js?raw=true","headerInfo":{"blobSize":"1.61 KB","deleteInfo":{"deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"b8ba396","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2FYu9191%2FScript%2Fblob%2Fmain%2FScannerPro.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"49","truncatedSloc":"39"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","languageID":183,"large":false,"loggedIn":true,"newDiscussionPath":"/Yu9191/Script/discussions/new","newIssuePath":"/Yu9191/Script/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/Yu9191/Script/blob/main/ScannerPro.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/Yu9191/Script/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"Yu9191","repoName":"Script","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[]}},"copilotInfo":null,"csrf_tokens":{"/Yu9191/Script/branches":{"post":"0qqu6o-Qj_35RW8PQXuUm_Zfyy8_1n0ZMVXJStiNH0ZwnN4YQqTn2hsZy6eSIJv9fvFADKQsESeucQ8AM2Oqag"},"/repos/preferences":{"post":"JtNYo4OLrHw_W-JBaH1E2LopJFzcsEJyKUFUhRPE1H8M2sWtrJhflgOU7Fv3r42YMjXi1S1rZblc1Lq6rmGlYA"}}},"title":"Script/ScannerPro.js at main · Yu9191/Script"}