(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1608:function(e,n,a){Promise.resolve().then(a.bind(a,3504))},3504:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return i}});var s=a(3827),r=a(345),t=a.n(r),c=a(4090);function i(){let[e,n]=(0,c.useState)("Loading..."),[a,r]=(0,c.useState)("Loading...");return(0,c.useEffect)(()=>{let e=async e=>{let n=await fetch("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fiat:"BOB",page:1,rows:1,tradeType:e,asset:"USDT",countries:[],proMerchantAds:!1,shieldMerchantAds:!1,publisherType:null,payTypes:[],classifies:["mass","profession"]})});return(await n.json()).data[0].adv.price};e("BUY").then(e=>n(e)),e("SELL").then(e=>r(e))},[]),(0,s.jsx)("main",{className:t().main,children:(0,s.jsxs)("div",{className:t().grid,children:[(0,s.jsxs)("a",{href:"https://p2p.binance.com/en/trade/all-payments/USDT?fiat=BOB",className:t().card,target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsxs)("h2",{children:["Buy ",(0,s.jsx)("span",{children:"->"})]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:e})," ",(0,s.jsx)("span",{style:{fontSize:"smaller"},children:"BOB"})]})]}),(0,s.jsxs)("a",{href:"https://p2p.binance.com/en/trade/sell/USDT?fiat=BOB&payment=all-payments",className:t().card,target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsxs)("h2",{children:["Sell ",(0,s.jsx)("span",{children:"->"})]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:a})," ",(0,s.jsx)("span",{style:{fontSize:"smaller"},children:"BOB"})]})]})]})})}},345:function(e){e.exports={main:"page_main__GlU4n",description:"page_description__86bsR",code:"page_code__9lUUd",grid:"page_grid__f5Kdy",card:"page_card__QV0Om",center:"page_center__5oHG7",logo:"page_logo__7fc9l",content:"page_content__kDoxQ",vercelLogo:"page_vercelLogo__rOY_u",rotate:"page_rotate__durgN"}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=1608)}),_N_E=e.O()}]);