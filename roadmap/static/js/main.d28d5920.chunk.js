(this["webpackJsonp@publicgoods-scripts/roadmap"]=this["webpackJsonp@publicgoods-scripts/roadmap"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(7),r=a.n(i),o=(a(14),a(8)),c=a(3),m=a(2),s=a.n(m),u=a(5),d=(a(16),a(17)),p=a(18),h="1DOQ_NRcX5myEx9FWSjqszfVpJmFQVeuUvVLKHMyLZ9s",E=function(){var e=Object(u.a)(s.a.mark((function e(t,a){var l,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("https://docs.google.com/spreadsheets/u/1/d/".concat(t,"/export?format=csv&id=").concat(t,"&gid=").concat(a));case 2:return l=e.sent,e.next=5,l.text();case 5:return n=e.sent,e.next=8,p().fromString(n);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var g=function(){var e=Object(l.useState)([]),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(l.useState)(["Organization","Activity"]),m=Object(c.a)(r,1)[0],d=Object(l.useState)(""),p=Object(c.a)(d,2),g=p[0],f=p[1],b=Object(l.useState)(["All"]),v=Object(c.a)(b,2),y=v[0],D=v[1];function w(e){return e.filter((function(e){return e.Organization==y||"All"==y?m.some((function(t){return e[t].toString().toLowerCase().indexOf(g.toLowerCase())>-1})):void 0}))}function P(e,t){if(e.length+17>t){var a="".concat(e.substring(0,t-18),"...").length,l=t-a;return"".concat(l>15.1&&l<15.16?e.substring(0,a+10):e.substring(0,a-3),"...")}return e}function S(e){e.target.parentElement.querySelectorAll("ul").forEach((function(e){"none"!==e.style.display?e.style.display="none":e.style.removeProperty("display")}))}function G(e,t,a){var l,i,r;return t[1]?(l=200+190*(1-t[1]),r=190*t[1],t[2]&&(r+=10+190*t[2],t[3]&&(r+=10+190*t[3],t[4]&&(r+=10+190*t[4])))):t[2]?(l=400+190*(1-t[2]),r=190*t[2],t[3]&&(r+=10+190*t[3],t[4]&&(r+=10+190*t[4]))):t[3]?(l=600+190*(1-t[3]),r=190*t[3],t[4]&&(r+=10+190*t[4])):t[4]&&(l=800+190*(1-t[4]),r=190*t[4]),i=l+r/2,n.a.createElement(n.a.Fragment,null,n.a.createElement("rect",{x:l,y:"".concat(80+40*(a+1)),width:r,height:"30",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(0,0,0)"}}),function(e,t,a,l){var i=0;if(!(t>0&&e[t-1].Organization===a)){for(;e[t+i]&&e[t+i].Organization===a;)i++;var r=a.split("\\n");return n.a.createElement(n.a.Fragment,null,n.a.createElement("rect",{x:"0",y:"".concat(80+40*(t+1)),width:"190",height:30*i+10*(i-1),fill:"#2AA8A8"}),n.a.createElement("text",{fontSize:"16px",textAnchor:"middle"},r.map((function(e,a){return l&&(e=n.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",style:{fill:"white"}},e)),n.a.createElement("tspan",{x:"100",y:"".concat(100+40*(t+1)+20*(i-1)+20*(a-1*(r.length-1)/2)),style:{fill:"white"}},e)}))))}}(e,a,t.Organization,t.OrgLink),n.a.createElement("text",{x:"300",y:"".concat(80+40*(a+1)+22),fontSize:"14px",textAnchor:"middle"},function(e,t,a,l){return t?n.a.createElement("tspan",{x:a},n.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",fill:"#212180",style:{textDecoration:"underline"}},P(e,l)),n.a.createElement("title",null,e)):n.a.createElement("tspan",{x:a},P(e,l),n.a.createElement("title",null,e))}(t.Activity,t.Link,i,function(e){var t="Lorem ipsum dolor sit amet",a=document.createElement("span");a.style.fontSize="12px",a.style.fontFamily="sans-serif",a.textContent=t,document.body.appendChild(a);var l=a.getBoundingClientRect().width;return document.body.removeChild(a),e/(l/t.length)}(r))),function(e,t,a){var l=0;if(t>0&&e[t-1].Category===a);else for(;e[t+l]&&e[t+l].Category===a;)l++}(e,a,t.Category))}return Object(l.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(h,0);case 2:t=e.sent,console.log(t),console.log("Data loaded from GSheets"),i(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n.a.createElement("div",null,n.a.createElement("div",{className:"hide-on-desktop-block"},n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"BMGF"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.codevelop.fund/"},"Support DPGs for DPI via Co-Develop Fund")),n.a.createElement("li",null,"Direct funding and local capacity for G2PX"),n.a.createElement("li",null,"Direct funding for DPGs: MOSIP, Mojaloop, DHIS2 (core platform)"),n.a.createElement("li",null,"Scaling the Digital Stack in Africa"),n.a.createElement("li",null,"Support for Health DPGs, Global Goods via Digital Square"),n.a.createElement("li",null,"Support identification for development through the ID4D initiative"))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"data.org"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://data.org/initiatives/epiverse/"},"Contribute to Epidemic Analysis DPGs via Epiverse Initiative")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://data.org/initiatives/challenge/"},"Invests in Creating and Scaling Data Analytics DPGs")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://data.org/initiatives/capacity/"},"Support Building Data Science & Analytics Capacity via CAN")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://data.org/library/"},"The Data Resource Libary")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"DIAL"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://dial.global/work/communities-of-practice/"},"\u201cGood\u201d DPI Advocacy")),n.a.createElement("li",null,n.a.createElement("a",{href:"http://dpgcharter.org"},"Co-Leading the Digital Public Goods Charter")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.govstack.global"},"GovStack Leadership")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://dial.global/our-research/"},"Research to support the DPG for DPI Agenda")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Digital Square at PATH"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://digitalsquare.org/market-analytics"},"Develop Digital Square Ownership Costing Tool")),n.a.createElement("li",null,"Informatics Savvy Health Organization"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://digitalsquare.org/resourcesrepository/2023/5/25/global-goods-guidebook-version-40"},"Launch Digital Square Global Goods Guidebook V4")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"DPGA Secretariat"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,"Advocacy for UN, Government & Institutional Alignment Around DPGs"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://dial.global/charter/"},"Co-Coordinate DPG Charter to Mobilise High-Level Commitments to DPGs")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://digitalpublicgoods.net/what-we-do/#cop"},"Convene Communities of Practice on Priority Topics")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://digitalpublicgoods.net/standard/"},"Increase Adoption of DPG Definition & Standard")),n.a.createElement("li",null,"Mobilise Relevant Policy Pledges for DPGs"),n.a.createElement("li",null,"Mobilize & Coordinating Funding for DPGs"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://digitalpublicgoods.net/standard/"},"Steward & Evolve the DPG Definition and Standard")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://digitalpublicgoods.net/registry/"},"Stregthen DPG Registry & Nomination")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"eGovernments Foundation"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,"Advocate for DPGs for Governance with State Governments in India"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.digit.org/"},"Ensure more diverse participation in DIGIT platform")),n.a.createElement("li",null,"Health campaigns management on DIGIT"),n.a.createElement("li",null,"Integrate DIGIT Sanitation wih NUDM"),n.a.createElement("li",null,"Integrate DIGIT Sanitation with IoT, GIS, vehicle tracking"),n.a.createElement("li",null,"Integrated real time service delivery on iFIX"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://nudm.mohua.gov.in/"},"Platform for National Urban Digital Mission India (NUDM)")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://divoc.egov.org.in/"},"Support LMICs with vaccine credentialing via DIVOC")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://lnkd.in/gf47EFPd"},"Usecases for open credentialing in health")),n.a.createElement("li",null,"Works management platform development"))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"FAO"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,"Co-Chair Food Security Community Of Practice"),n.a.createElement("li",null,"Create an FAO Digital Public Goods Framework"),n.a.createElement("li",null,"Identify Existing and Potential DPGs within the FAO Digital Portfolio"))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Foundation for Public Code"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://publiccode.net/codebase-stewardship/"},"Provide Codebase Stewardship Services to DPGs")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://standard.publiccode.net/"},"Steward the Standard for Public Code")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Germany (BMZ)"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"#SmartDevelopmentFund - Eight digital solutions to counter COVID\u201119 (d4dhub.eu)"},"#SmartDevelopmentFund: Support 9 digital initiatives")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://health.bmz.de/stories/bringing-the-power-of-digital-data-to-rural-nepal/"},"Country Technical Support for Health DPGs-DHIS2, OpenSRP")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://digilab.bmz-digital.global/projekte/digital-payment-infrastructure-mojaloop/"},"Digilab: Pilot of DPGs for digital ID and payments (Mojaloop in Rwanda, MOSIP in Mauretania)")),n.a.createElement("li",null,n.a.createElement("a",{href:"Home Page | openIMIS"},"Direct funding & management of DPGs-OpenIMIS, TruBudget")),n.a.createElement("li",null,n.a.createElement("a",{href:"FAIR Forward \u2013 Open data for AI (bmz-digital.global)"},"FAIR Forward - Artificial Intelligence for All")),n.a.createElement("li",null,n.a.createElement("a",{href:"Home - GovStack"},"GovStack: Develop more building blocks specs, sandbox, prototype use cases, country capacity")),n.a.createElement("li",null,n.a.createElement("a",{href:"Digital Convergence Initiative - DCI - Social Protection (spdci.org)"},"GV SPIL: Convergence Initiative under USP 2030")),n.a.createElement("li",null,n.a.createElement("a",{href:"Digital pandemic control | BMZ Digital.Global (bmz-digital.global)"},"Product suite for vaccine logistics based on mature DPGs and WHO SMART")),n.a.createElement("li",null,"Sourcing EU funded DPI potential DPGs"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.ilo.org/newyork/at-the-un/social-protection-inter-agency-cooperation-board/lang--en/index.htm"},"SV SoSi SPIAC-B working group on digital social protection")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"GitHub"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://socialimpact.github.com/insights/social-sector-oss-lmics-research-project/"},"Contribute to UNSG\u2019s Roadmap for Digital Cooperation")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://socialimpact.github.com/insights/"},"Develop Resources on using Open Source for MERL")),n.a.createElement("li",null,"Developing Standardized Metrics with GitHub Data for the Social Sector"),n.a.createElement("li",null,"DPG Advocacy & Awareness through Social Impact Team"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://socialimpact.github.com/tech-for-social-good/"},"DPG Advocacy & Awareness via Social Impact Team")),n.a.createElement("li",null,"Easier access to GitHub tools for DPGs"),n.a.createElement("li",null,"GitHub <> Registry Integration"),n.a.createElement("li",null,"GitHub <> Registry Integration"),n.a.createElement("li",null,n.a.createElement("a",{href:"Introducing Activating Developers and the new Digital Public Goods Open Source Community Manager Program | The GitHub Blog"},"GitHub Activating Developers Program")),n.a.createElement("li",null,"Open Source in the Social Sector Training"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://socialimpact.github.com/insights/"},"Pilots of Skill-Based Volunteering via Social Impact Program")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.blog/2022-09-08-research-open-source-software-in-india-kenya-egypt-and-mexico/"},"Research Initiative on DPGs")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://socialimpact.github.com/insights/oss-india-kenya-egypt-mexico/"},"Research Initiative on DPGs")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Government of Bangladesh"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://ssn4psi.com/"},"Advocacy via the South-South Network for Public Service Innovations (SSN4PSI)")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.ekshop.gov.bd/"},"Build and maintain new software DPGs (ex. EkShop & NISE)")),n.a.createElement("li",null,"Introduce DPGs into Bangladesh's DPI via the MyGov platform"))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Government of Ethiopia"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,"Apply OpenG2P Based Service for PSNP(as a DPG)"),n.a.createElement("li",null,"Build a DPI Sandbox"),n.a.createElement("li",null,"Develop DPI Based Reference Architecture for Ethiopian Public Service"),n.a.createElement("li",null,n.a.createElement("a",{href:"Partnership with MOSIP"},"Implementing National ID to enhance service delivery using MOSIP")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Government of Guatemala"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,"Advance interoperability and data exchange using X-Road and CKAN"),n.a.createElement("li",null,"Advancing DPG-based digital payment solutions"),n.a.createElement("li",null,"Build DPG capacity to strengthen a National System for Legal Digital Identity"))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Government of Sri Lanka"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,"Adoption and scaling of DHIS2 for education by the Ministry of Education"),n.a.createElement("li",null,"Adoption of MOSIP as the foundational identity platform for Sri Lanka Unique Digital Identity (SLUDI) Project:"),n.a.createElement("li",null,"Building DPG knowledge and capacity at the Ministry of Technology and ICTA, also to the benefit of other DPGA member countries:"),n.a.createElement("li",null,"Conducting awareness sessions to the local ICT vendor ecosystem to build capacity on DPGs and Open Source"),n.a.createElement("li",null,"Creating awareness on cross-sectoral use of DHIS2 for government IT Staff"),n.a.createElement("li",null,"Creating awareness targeting both the domestic and global DPG community about the use of DPGs by the Government of Sri Lanka through case studies, whitepapers, blogs, newspaper articles and social media"),n.a.createElement("li",null,"Exploration and evaluation of new DPGs for adoption by the Government of Sri Lanka"),n.a.createElement("li",null,"Inclusion of an open source and DPGs-first approach in the Digital Government Policy"))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Inter-American Development Bank"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://code.iadb.org/en/tools"},"Code for Development repository for Open-Source Software")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://code.iadb.org/en/code4dev "},"Code4Dev Network")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://code.iadb.org/en/tools"},"Development of IDB open-source tools")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"iSPIRT"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://pn.ispirt.in/virtual-meeting-on-data-empowerment-august-31-2021/"},"D6 - Data Empowerment Multilateral Meeting")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.orfonline.org/research/data-empowerment-and-protection-architecture-concept-and-assessment/"},"Data Empowerement and Protection Architecture (DEPA)")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://developers.ispirt.in/#/healthstack"},"HealthStack")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://developers.ispirt.in/#/"},"Incubating DPGS for Infrastructure in India (i.e. OCEN)")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"ITU"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,"Establishing an ITU wide Open-Source Programme Office (OSPO)"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.govstack.global/"},"GovStack Initiative")),n.a.createElement("li",null,"Open-source Ecosystem Enablement for Public Services Innovation"))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Norwegian Agency for Development Cooperation (Norad)"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,"Direct Development of DPGs (Global Digital Library, MET Norway,...)"),n.a.createElement("li",null,"Direct funding for DPGs (DHIS2, MOSIP, OpenCRVS)"),n.a.createElement("li",null,"Engage in donor coordination around DPI"),n.a.createElement("li",null,"Explore DPGs for women\u2019s empowerment and strengthening of human rights"),n.a.createElement("li",null,"Explore DPGs in data platforms for climate and environment"),n.a.createElement("li",null,"Extension of Global Digital Library from literacy to maths"),n.a.createElement("li",null,"Fund Multilateral Agencies for Implementing the DPG Agenda"),n.a.createElement("li",null,"Funding Multilateral Agencies for Implementing the DPG Agenda"),n.a.createElement("li",null,"Source DPGs for DPI"),n.a.createElement("li",null,"Support country capacity building by leveraging academia (with HISP/University of Oslo)"),n.a.createElement("li",null,"Support DPGs against information pollution"),n.a.createElement("li",null,"Support individual DPGs on security dependencies"))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Open Source Initiative"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://deepdive.opensource.org/"},"\u201cDeep Dive AI\u201d education series")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://opensource.org/node/654"},"Open Source License Clinics - public sector")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://opensource.org/StateOfTheSource"},"State of the Source event")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Rockefeller Foundation"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://mojaloop.io"},"Advocating for and mobilizing around DPGs")),n.a.createElement("li",null,n.a.createElement("a",{href:"Home (g2p connect.global)"},"Funding the sustainable development of G2P Connect")),n.a.createElement("li",null,n.a.createElement("a",{href:"Co-Develop (codevelop.fund)"},"Setting up the Co-Develop Fund")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Rwanda Ministry of ICT and Innovation"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://africabusinesscommunities.com/tech/tech-news/government-of-rwanda-and-google-collaborate-to-accelerate-digital-transformation/"},"Cashless Accelerator Program")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/rwandaict/status/1340959442439983105"},"Innovation Policy Lab - developing digital policies to support adoption of DPGs and DPIs")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.minict.gov.rw/open-data-portal"},"Open Data Portal for Citizens")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Sierra Leone (DSTI)"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"OpenG2P Docs / https://docs.google.com/document/d/1lne5SQsqxD-n-AmD3KIVv7rszNrK1Eic/edit?usp=sharing&ouid=115183423997508672803&rtpof=true&sd=true"},"Creating & Managing New DPGs (i.e. OpenG2P, Prestrack)")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.dsti.gov.sl/10-things-to-learn-from-dsti-and-unicefs-hackathon/"},"Districts DPG 3D Printing Hackathon")),n.a.createElement("li",null,"Innovation and Career Guidance Seminar: DPGs for Sustainable Development"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://docs.google.com/document/d/1AV2LFreqHw-bqJoEJQaCjwsYhhd8vNFt/edit"},"Launch and operationalise a National DPG coordination committee")))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"Thoughtworks"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"www.bahmni.org"},"Bahmni for Clinics")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.thoughtworks.com/en-ca/insights/topic/open-source/epirust"},"Epirust for Disease Modelling")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://blog.thoughtworks.net/rajesh-rajagopalan/evolving-color%27s-of-indias-commerce"},"Local Language Support for Digital Commerce")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.cloudcarbonfootprint.org/"},"On Prem - Cloud Carbon Footprint")),n.a.createElement("li",null,"Simplifying Product Catalog Digitization"))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"UN Global Pulse"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.unglobalpulse.org/2021/10/using-digital-public-goods-to-help-save-the-lives-of-mothers-and-babies/"},"Advancing DPGs in maternal, newborn and child health")),n.a.createElement("li",null,"Co-Chair the Open Data Community of Practice"))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"UNDP"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,"Empower UNDP's global network of staff and local partners on DPGs"),n.a.createElement("li",null,"Identify transformative DPGs within UNDPs network"),n.a.createElement("li",null,"Thought-leadership on deploying inclusive DPGs at scale"))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"UNICEF"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,"Advocate for Government & UN Alignment Around DPGs"),n.a.createElement("li",null,"Co-Chair: Health Community of Practice"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.unicef.org/innovation/dpg-pathfinding-countries/ghana"},"Continuation of Pathfinder Pilot: Ghana")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.unicef.org/innovation/dpg-pathfinding-countries/kazakhstan"},"Continuation of Pathfinder Pilot: Kazakhstan")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/DSTISierraLeone/status/1621452622052851712?cxt=HHwWgICw2bSkx4AtAAAA"},"Continuation of Pathfinder Pilot: Sierra Leone")),n.a.createElement("li",null,"Crypto and Innovative Financing Experiments to fund DPGs"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/unicef/publicgoods-toolkit"},"Deliver DPG Operational Toolkit for Governments")),n.a.createElement("li",null,"Digital Centre of Excellence (DCOE)"),n.a.createElement("li",null,"Global Data & Digital Implementation Guidelines"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.un.org/techenvoy/global-digital-compact"},"Global Digital Compact DPG Advocacy")),n.a.createElement("li",null,"Pilot youth-enabled DPG incubators in select countries"),n.a.createElement("li",null,"Standardizing Data and Data Use for Health"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://digitalpublicgoods.net/eligibility/"},"Streamlining DPG Nominations")),n.a.createElement("li",null,"UNICEF Technology Planning, Procurement & Deployment Playbook"),n.a.createElement("li",null,"UNICEF Venture Fund - Frontier Technology DPG Investmets"))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"United Nations Office of the Secretary-General\u2019s Envoy on Technology"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,"Facilitate collaborations between DPGA and other initiatives"),n.a.createElement("li",null,"Promote DPG work to relevant parties, including member states"),n.a.createElement("li",null,"Support open source capacity building within the UN System"))),n.a.createElement("div",{className:"mobile-member"},n.a.createElement("div",{className:"mobile-member-container",onClick:S},"USAID"),n.a.createElement("ul",{className:"mobile-actionitems",style:{display:"none"}},n.a.createElement("li",null,n.a.createElement("a",{href:"https://digitalsquare.org/"},"Funding DPGs for health through Digital Square")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.jsi.com/project/country-health-information-systems-and-data-use-chisu/"},"Support country capacity to use health information systems")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.dpgcharter.org/"},"Support the DPG Charter"))))),n.a.createElement("div",{className:"hide-on-mobile-block"},n.a.createElement("div",{width:"1020",margin:"auto",className:"flex-container-roadmap"},n.a.createElement("select",{className:"search-select",onChange:function(e){D(e.target.value)},"aria-label":"Filter Roadmap By Organization"},n.a.createElement("option",{value:"All"},"Filter By Organization"),Object(o.a)(new Set(a.map((function(e){return e.Organization})))).sort().map((function(e,t,a){return n.a.createElement("option",{key:t,value:e},e)}))),n.a.createElement("div",{className:"search-wrapper"},n.a.createElement("label",{htmlFor:"search-form"},n.a.createElement("input",{type:"search",name:"search-form",id:"search-form",className:"search-input",placeholder:"Search for...",value:g,onChange:function(e){return f(e.target.value)}}),n.a.createElement("span",{className:"sr-only"},"Search countries here")))),n.a.createElement("div",{style:{width:"100%"}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1020",height:"100",style:{marginBottom:"10px"}},console.log("length",w(a).length),n.a.createElement("g",{id:"roadmap"},n.a.createElement("rect",{x:"0",y:"0",width:"190",height:"50",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"#2AA8A8"}}),n.a.createElement("rect",{x:"0",y:"50",width:"190",height:"50",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"#2AA8A8"}}),n.a.createElement("rect",{x:"200",y:"0",width:"190",height:"100",fill:"#212180"}),n.a.createElement("rect",{x:"400",y:"0",width:"190",height:"100",fill:"#212180"}),n.a.createElement("rect",{x:"600",y:"0",width:"190",height:"100",fill:"#212180"}),n.a.createElement("rect",{x:"800",y:"0",width:"190",height:"100",fill:"#212180"}),n.a.createElement("text",{textAnchor:"middle",style:{fill:"#2AA8A8"}},n.a.createElement("tspan",{x:"100",y:"20"},"DPGA"),n.a.createElement("tspan",{x:"100",dy:"1em"},"Strategic Objectives"),n.a.createElement("tspan",{x:"100",y:"70"},"DPGA"),n.a.createElement("tspan",{x:"100",dy:"1em"},"Organizations")),n.a.createElement("text",{x:"300",y:"0",fontSize:"13px",textAnchor:"middle",style:{fill:"white"}},n.a.createElement("tspan",{x:"295",dy:"3em"},"1) DPGs are discoverable,"),n.a.createElement("tspan",{x:"295",dy:"1.2em"},"sustainably managed, and"),n.a.createElement("tspan",{x:"295",dy:"1.2em"},"accessible")),n.a.createElement("text",{x:"500",y:"0",fontSize:"13px",textAnchor:"middle",style:{fill:"white"}},n.a.createElement("tspan",{x:"495",dy:"1.5em"},"2) UN-institutions, multilateral"),n.a.createElement("tspan",{x:"495",dy:"1.2em"},"development banks and other"),n.a.createElement("tspan",{x:"495",dy:"1.2em"},"public and private institutions"),n.a.createElement("tspan",{x:"495",dy:"1.2em"},"have capacity to promote and"),n.a.createElement("tspan",{x:"495",dy:"1.2em"},"support DPG adoption")),n.a.createElement("text",{x:"700",y:"0",fontSize:"13px",textAnchor:"middle",style:{fill:"white"}},n.a.createElement("tspan",{x:"695",dy:"2em"},"3) LMIC Governments have"),n.a.createElement("tspan",{x:"695",dy:"1.2em"},"capacity to deploy, maintain"),n.a.createElement("tspan",{x:"695",dy:"1.2em"},"and evolve DPGs for"," "),n.a.createElement("tspan",{x:"695",dy:"1.2em"},"digital public infrastructure")),n.a.createElement("text",{x:"900",y:"0",fontSize:"13px",textAnchor:"middle",style:{fill:"white"}},n.a.createElement("tspan",{x:"895",dy:"2em"},"4) LMICs have vibrant"),n.a.createElement("tspan",{x:"895",dy:"1.2em"},"commercial ecosystems"),n.a.createElement("tspan",{x:"895",dy:"1.2em"},"capacity to create, maintain,"),n.a.createElement("tspan",{x:"895",dy:"1.2em"},"and implement DPGs locally")))),n.a.createElement("div",{style:{maxHeight:"800",width:"1020",marginBottom:"50px",marginLeft:"auto",marginRight:"auto",overflowY:"scroll"}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1020",height:150+40*w(a).length,style:{marginTop:"-100px"}},console.log("length",w(a).length),n.a.createElement("g",{id:"roadmap-scroll"},w(a).map((function(e,t,a){return n.a.createElement(l.Fragment,{key:t},n.a.createElement("rect",{x:"200",y:"".concat(80+40*(t+1)),width:"190",height:"30",fill:"#C2C3CC"}),n.a.createElement("rect",{x:"400",y:"".concat(80+40*(t+1)),width:"190",height:"30",fill:"#C2C3CC"}),n.a.createElement("rect",{x:"600",y:"".concat(80+40*(t+1)),width:"190",height:"30",fill:"#C2C3CC"}),n.a.createElement("rect",{x:"800",y:"".concat(80+40*(t+1)),width:"190",height:"30",fill:"#C2C3CC"}),G(a,a[t],t))}))))))))};a(19);r.a.render(n.a.createElement(g,null),document.querySelector("#form-content"))},9:function(e,t,a){e.exports=a(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.d28d5920.chunk.js.map