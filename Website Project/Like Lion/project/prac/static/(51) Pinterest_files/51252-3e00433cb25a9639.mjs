(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[51252],{697974:(e,o,t)=>{t.r(o),t.d(o,{exchangeTokenAndSetSession:()=>l,verifyLoggedInStatus:()=>u,registerUser:()=>d,loginUser:()=>g});var n=t(238402),r=t(311866),a=t(702925),s=t(641483),i=t(116955);const c=a.Z.settings.ACCOUNTS_PINTEREST_URL,_=(e,o,t,n)=>{const r=e=>{const o=new Error(e.statusText);throw o.response=e,!o.api_error_code&&o.response&&(o.api_error_code=o.response.code,o.message=o.response.message),o},a={credentials:"include",mode:"cors"};return"POST"===t&&(a.method="POST",a.body=o,a.headers={"Content-type":"application/x-www-form-urlencoded; charset=UTF-8","X-Pinterest-InstallId":n},n||(0,s.ZP)(`unauth.auth_handshake.cross_domain.no_unauth_id.${t}`)),fetch(e,a).then((e=>200===e.status||401===e.status||409===e.status?e:(r(e),{}))).then((e=>e.json())).then((e=>"success"===e.status?Promise.resolve(e):e.code===i.Zn?(e.api_error_code=e.code,Promise.reject(e)):(r(e),{}))).catch((e=>{throw e}))},l=(e,o=!1)=>r.ZP.create("HandshakeSessionResource",{token:e,isRegistration:o}).callCreate(),u=e=>{_(`${c}/v3/handshake/verify/`,"","GET",e).then((e=>{if(e&&e.data){const o=e.data;l(o).then((e=>{window.location.reload()}),(e=>{}))}}),(e=>{}))},d=(e,{facebookToken:o,inviteCode:t,locale:r,referrer:s,unauthId:i})=>{const c=(e.business_name?"partner/handshake":(e.gplus_code||e.gplus_id_token)&&"gplus/handshake")||e.facebook_id&&"facebook/handshake"||"email/handshake",l={};if(l.email=e.email||"",l.username=e.username||"",l.password=e.password||"",l.first_name=e.first_name||"",l.last_name=e.last_name||"",l.country=e.country||"",l.locale=r,l.referrer=s,e.age){const o=new Date;o.setFullYear(o.getFullYear()-e.age);const t=parseInt(o/1e3,10);l.birthday=t.toString()}if(e.custom_gender&&(l.custom_gender=e.custom_gender),e.gender&&(l.gender=e.gender),e.business_name&&(l.account_type=e.account_type,l.business_name=e.business_name,l.first_name=e.business_name),t&&(l.invite_code=t),e.facebook_id){const t=o||e.facebook_token||"";l.facebook_id=e.facebook_id,l.facebook_token=t,l.social_username=e.social_username||""}else(e.gplus_code||e.gplus_id_token)&&(l.password=e.password||"",l.one_time_code=e.gplus_code,l.id_token=e.gplus_id_token,l.redirect_uri=e.gplus_redirect_uri);return e.recaptchaV3Token&&(l.recaptcha_v3_token=e.recaptchaV3Token),_(`${a.Z.settings.ACCOUNTS_PINTEREST_URL}/v3/register/${c}/`,(0,n.Z)(l),"POST",i)},g=(e,{facebookToken:o,recaptchaV3Token:t,referrer:r,unauthId:s})=>{const i=(e.mfa_token?"mfa/handshake":e.gplus_id_token&&"gplus/handshake")||e.facebook_id&&"facebook/handshake"||"handshake",c={};if(e.username_or_email&&(c.username_or_email=e.username_or_email.trim(),c.password=e.password,c.referrer=r),e.facebook_id){const t=o||e.facebook_token||"";c.facebook_id=e.facebook_id,c.facebook_token=t,c.facebook_autologin=e.facebook_autologin||!1}return e.gplus_id_token&&(c.gplus_id_token=e.gplus_id_token,c.gplus_access_token=e.gplus_access_token,c.gplus_expires_at=e.gplus_expires_at,c.gplus_autologin=e.gplus_autologin||!1),e.mfa_token&&(c.mfa_token=e.mfa_token),t&&(c.token=t),_(`${a.Z.settings.ACCOUNTS_PINTEREST_URL}/v3/login/${i}/`,(0,n.Z)(c),"POST",s)}},851252:(e,o,t)=>{t.d(o,{Z:()=>O});var n=t(85038),r=t(311866),a=t(233088),s=t(702925),i=t(349512),c=t(116955),_=t(746517),l=t(538504),u=t(611277),d=t(804652),g=t(641483),h=t(688239),p=t(304988),f=t(250933),m=t(697974),k=t(858875);const w=function(e,o,t="",n="",r="",a="",s=!1){let c="referrer_unknown";try{const e=document.referrer;c=e?e.indexOf("/t.co/")>-1?"twitter":e.indexOf("google.")>-1?"google":e.indexOf("bing.")>-1?"bing":e.indexOf("facebook.")>-1?"facebook":"other":"direct"}catch(E){}const l=(0,_.eD)(e),u=o===Object(o)?o.hybridTier:"tier_unknown",d=o===Object(o)?o.container:"container_unknown";(0,g.ZP)("login.referrer."+c+"."+l),(0,g.ZP)("login.container."+d+"."+l),(0,g.ZP)("login.type."+l);const m=(0,_.eD)(e)||"method_unknown",k=o.page||"page_unknown";e.gplus_autologin?s?((0,g.ZP)("mweb_autologin.google_success"),(0,g.hL)("new_mweb_autologin_google",{page:k,referrer:c,container:d,hybridTier:u})):((0,g.ZP)("web_autologin_google"),(0,g.hL)("new_web_autologin_google",{page:k,referrer:c,container:d,hybridTier:u})):e.facebook_autologin?((0,g.ZP)("web_autologin_facebook"),(0,g.hL)("new_web_autologin_facebook",{page:k,referrer:c,container:d,hybridTier:u})):((0,g.ZP)(`web_login.${m}.success.${k}.${d}.${c}.${u}`),(0,g.hL)(`new_web_login.${m}.success`,{page:k,referrer:c,container:d,hybridTier:u})),(0,f.c_)({country:t,countryFromHostName:n,countryFromIp:r})&&(0,p.yP)({id:i.bJ,eventCategory:"Logins",eventName:"Desktop"}),(0,f.$r)({country:t,countryFromHostName:n,countryFromIp:r,regionFromIp:a})&&(0,p.jw)({id:"flashtalking-d-login",eventCategory:"Logins",eventName:"Desktop"}),(0,f.NR)(t,a)&&(0,p.EN)({pixelId:h.Rj,eventCategory:"Logins",eventName:"Desktop"}),(0,f.Fc)({country:t,countryFromHostName:n,countryFromIp:r})&&(0,p.Be)({pixelId:h.HO,eventCategory:"Logins",eventName:"Desktop"});const w=e.facebook_autologin||e.gplus_autologin||e.autologin?"autologin":"login";(0,g.De)({action:w,event:"success",type:l})},E=(e,o)=>{(0,g.ZP)(`web_cross_domain_login.${e}.${(0,_.eD)(o)}`)},b=(e,o,t="other",n=!1)=>{if(e){const r=e.http_status===l.Ej?l.Ej:e.api_error_code;let a=r;c.qF.has(r)&&(a=c.qF.get(r));const{container:s}=o;n?(0,g.ZP)(`unauth_web_client_cctld_login_api_error.${String(a)}.${s||"unknow_container"}.${t}`):(0,g.ZP)(`unauth_web_client_login_api_error.${String(a)}.${s||"unknow_container"}.${t}`),(0,g.De)({action:"login",event:"fail",type:t})}},O=function(e,o,t={},i=!1,c,l,g=!1){if(function(e){return!e.mfa_resend&&!!e.username_or_email}(e)){if(-1!==s.Z.settings.CORS_HANDSHAKE_DOMAINS.indexOf(o.origin))return function(e,o,t,n){E("attempt",e);const{referrer:r,facebookToken:a,unauthId:s}=n;return(0,m.loginUser)(e,{recaptchaV3Token:o,referrer:r,facebookToken:a,unauthId:s}).then((o=>{if(o&&o.data){E("success_with_token",e);const n=o.data;return(0,m.exchangeTokenAndSetSession)(n).then((o=>(E("success_token_exchanged",e),w(e,t),Promise.resolve())),(o=>{throw E("success_token_not_exchanged",e),o}))}throw E("success_without_token",e),new Error}),(o=>{throw E("failure",e),b(o,t,(0,_.eD)(e),!0),o}))}(e,l,t,o)}const h=i?null:a.ZP.localStorage.getItem("visitedPagesBeforeLogin"),p={...e,get_user:e.get_user||e.switch_account&&i,app_type_from_client:7===o.appType?7:5,visited_pages_before_login:h?JSON.stringify(h):null,recaptchaV2Token:c,recaptchaV3Token:l};return r.ZP.create("UserSessionResource",p).callCreate({showError:!1,async:!0}).then((o=>{const{client_context:r}=o||{},{country:a,country_from_hostname:s,country_from_ip:i,region_from_ip:c,active_experiments:_}=r||{};w(e,t,a,s,i,c,g),(0,u.B)(!1);return _&&_.web_cctld_cookies_cleanup&&"enabled"===_.web_cctld_cookies_cleanup&&(n.zN(k.e7.name),n.zN(k.x3.name)),(0,d.D)("login").then((()=>o))}),(o=>(b(o,t,(0,_.eD)(e)),Promise.reject(o))))}},611277:(e,o,t)=>{t.d(o,{a:()=>r,B:()=>a});var n=t(233088);const r=()=>n.ZP.localStorage.getItem("uoiou")||!1,a=e=>{n.ZP.localStorage.setItem("uoiou",!!e)}},746517:(e,o,t)=>{t.d(o,{Ny:()=>f,ZP:()=>E,lp:()=>b,eD:()=>O});var n=t(85038),r=t(773432),a=t(185062),s=t(205794),i=t(311866),c=t(233088),_=t(702925),l=t(858875),u=t(538504),d=t(899679),g=t(641483),h=t(116955),p=t(785893);const f=Object.freeze({SOFT_BANNED:0,RATE_LIMITED:1,LOGIN_ASSISTANCE:2,PASSWORD_RESET_SENT:3,PREVENT_FACEBOOK_REGISTER:4,PREVENT_GOOGLE_REGISTER:5,SUSPENDED:6}),m=[h.OW,h.bd,h.$j,h.an,h.RL,h.yV,u.Ej],k=(h.nY,h.iK,h.E6,h.oP,h.an,[...m.filter((e=>e!==h.RL&&e!==h.an)),h.oP,h.nf]);class w{static defaultLoginRedirectUrl(){return window.location.pathname===_.Z.settings.PASSWORD_RESET_URL||window.location.pathname===_.Z.settings.LOGIN_URL||window.location.pathname.startsWith(_.Z.settings.ADD_SECONDARY_ACCOUNT_PAGE)?"/":window.location.pathname+window.location.search}static defaultSocialLoginRedirectUrl(){return window.location.pathname.startsWith(_.Z.settings.ADD_SECONDARY_ACCOUNT_PAGE)?"/":window.location.pathname}static isExceedRecaptchaLocalLimit(){const e=c.ZP.localStorage.getItem("urh");if(e&&e.indexOf("|")>-1){const o=e.split("|");return 3===o.length&&(new Date).getTime()/1e3-parseInt(o[0],10)<=3600}return!1}static updateRecaptchaTimeStamp(){const e=c.ZP.localStorage.getItem("urh");let o=[];e&&(o=e.split("|"),3===o.length&&o.shift());const t=((new Date).getTime()/1e3).toString();o.push(t);const n=o.join("|");c.ZP.localStorage.setItem("urh",n)}static isFullyLoggedIn(e,o){return e&&1===o}static handleRedirect(e){if(!e){e="/";const o=(0,a.Z)();if(o){const t=o.next;t&&(e=t,delete o.next),e=(0,r.Z)(e,o)}}(0,s.Z)(e)}static handleRedirectWithFallbackWindowLocation(){this.handleRedirect(this.defaultLoginRedirectUrl())}static handleSignupRedirect(e,o){c.ZP.localStorage.setItem("signupTime",Date.now()),!o&&e&&"/"!==e?w.handleRedirect(e):w.handleRedirect("/")}static storeLoginCredentialsToBrowser(e){if(navigator.credentials&&e.username_or_email)try{const o=new window.PasswordCredential({id:e.username_or_email,password:e.password});navigator.credentials.store(o).then((()=>{(0,g.ZP)("navigatorCredentials.store.success")}))}catch(o){(0,g.ZP)("navigatorCredentials.store.error")}}static retrieveLoginCredentialsFromBrowser(){const e=window.navigator.credentials;if(!e)return new Promise(((e,o)=>{o()}));return e.get({password:!0,mediation:"silent"})}static attemptLoginWithBrowserCredentials(e,o,t){if(!e)return new Promise(((e,o)=>{o("No credentials")}));let n,r;e.password?(r="include",n=new FormData,n.append("username",e.id),n.append("password",e.password)):r=e;return fetch("/resource/UserSessionResource/create/",{method:"POST",body:n,credentials:r,headers:{Accept:"application/json, text/javascript, */*","X-CSRFToken":o||"","X-Pinterest-AppState":t,"X-Requested-With":"XMLHttpRequest"}}).then((e=>{if(200!==e.status){const o=new Error(e.statusText);throw o.response=e,o}return(0,g.ZP)("navigatorCredentials.login.success"),e.json()})).catch((e=>((0,g.ZP)("navigatorCredentials.login.failure"),Promise.reject(e))))}static fetchRecentlyLoggedOutUser(e){if(e)return Promise.reject();const o=i.ZP.create("UnauthUserDataResource");return new Promise(((e,t)=>{o.callGet().then((o=>{const r=o.resource_response.data,a=!!n.U2(l.x3);return r?(r.connected_to_facebook||r.connected_to_google||r.has_password||(0,g.ZP)("unauth.personalized_login.no_login_methods_found"),(0,g.ZP)("unauth.personalized_login.fetch_user_info.info.user_info_found.logged_out_cookie_"+(a?"true":"false")),e(r)):((0,g.ZP)("unauth.personalized_login.fetch_user_info.info.no_user_info.logged_out_cookie_"+(a?"true":"false")),t({}))})).catch((e=>{if(e.message){const o=e.message.replace(/\s/g,"_").toLowerCase();(0,g.ZP)(`unauth.personalized_login.fetch_user_info.error.${o}`)}else(0,g.ZP)("unauth.personalized_login.fetch_user_info.error.unknown");return t(e)}))}))}static handleLoginMfa(e,o,t){(0,g.ZP)("multi_step_login"),w.storeLoginCredentialsToBrowser(e),t?t(e,o):(0,g.ZP)("unauth.login.error.CLIENT_ERROR.null_mfa_handler")}static getLoginErrorState(e,o,t,n,r){let a=null;const s=e.http_status||e.httpStatus;let i,c=e.api_error_code||e.apiErrorCode;if(s===u.Ej&&(c=u.Ej),i=k.includes(c)?(0,p.jsx)(n,{api_error_code:c,errorMessage:e.message,handleTouch:()=>r(f.PASSWORD_RESET_SENT),source:o,userSearch:t}):e.message,i)switch(c){case h.oP:case h.RL:a={passwordValidationError:i};break;case h.nY:a={facebookValidationError:i};break;case h.iK:a={googleValidationError:i};break;case h.hU:a={emailValidationError:i};break;case h._K:a={passwordValidationError:i};break;default:a={emailValidationError:i}}else(0,g.ZP)(`unauth.login.error.SERVER_ERROR.unknown.${c}.${o}`);return a}}const E=w;function b(e){return e.facebook_id?d.sr.FACEBOOK:e.google_open_id_token?d.sr.GOOGLE_ONE_TAP:e.gplus_id_token?d.sr.GOOGLE:e.line_id_token?d.sr.LINE:e.username_or_email?d.sr.EMAIL:d.sr.OTHER}function O(e){return e.mfa_token?"mfa_token":e.mfa_resend?"mfa_resend":b(e)}},899679:(e,o,t)=>{t.d(o,{sr:()=>r,sR:()=>a,NN:()=>s,r4:()=>i});var n=t(702925);const r={FACEBOOK:"facebook",GOOGLE_ONE_TAP:"google_one_tap",GOOGLE:"google",LINE:"line",EMAIL:"email",OTHER:"other"},a=e=>e.facebook_id?r.FACEBOOK:e.google_open_id_token?r.GOOGLE_ONE_TAP:e.gplus_code||e.gplus_id_token?r.GOOGLE:e.line_id_token?r.LINE:e.email?r.EMAIL:r.OTHER,s=(e="")=>e in n.Z.settings.MINIMUM_AGE_BY_EU_COUNTRY,i=e=>n.Z.settings.EN_COUNTRIES_WITH_MANDATORY_AGE.includes(e)||n.Z.settings.LATAM_AGE_COLLECTION.has(e)},538504:(e,o,t)=>{t.d(o,{AB:()=>n,Ej:()=>r,Sf:()=>a});const n=412,r=429,a=500}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/51252-3e00433cb25a9639.mjs.map