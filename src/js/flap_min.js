"use strict";var FLAPPER_ABI=[{"inputs":[{"internalType":"address","name":"vat_","type":"address"},{"internalType":"address","name":"gem_","type":"address"}],"payable":!1,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":!1,"inputs":[{"indexed":!1,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":!1,"internalType":"uint256","name":"lot","type":"uint256"},{"indexed":!1,"internalType":"uint256","name":"bid","type":"uint256"}],"name":"Kick","type":"event"},{"anonymous":!0,"inputs":[{"indexed":!0,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":!0,"internalType":"address","name":"usr","type":"address"},{"indexed":!0,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":!0,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":!1,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"constant":!0,"inputs":[],"name":"beg","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bids","outputs":[{"internalType":"uint256","name":"bid","type":"uint256"},{"internalType":"uint256","name":"lot","type":"uint256"},{"internalType":"address","name":"guy","type":"address"},{"internalType":"uint48","name":"tic","type":"uint48"},{"internalType":"uint48","name":"end","type":"uint48"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!1,"inputs":[{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"cage","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"deal","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"deny","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"file","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!0,"inputs":[],"name":"gem","outputs":[{"internalType":"contract GemLike","name":"","type":"address"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!1,"inputs":[{"internalType":"uint256","name":"lot","type":"uint256"},{"internalType":"uint256","name":"bid","type":"uint256"}],"name":"kick","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!0,"inputs":[],"name":"kicks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"live","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!1,"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"rely","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!0,"inputs":[],"name":"tau","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!1,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"lot","type":"uint256"},{"internalType":"uint256","name":"bid","type":"uint256"}],"name":"tend","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"tick","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!0,"inputs":[],"name":"ttl","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"vat","outputs":[{"internalType":"contract VatLike","name":"","type":"address"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!1,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"yank","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"}];var MEDIANIZER_ABI=[{"constant":!1,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"","type":"bytes32"}],"name":"poke","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[],"name":"poke","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!0,"inputs":[],"name":"compute","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bool"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!1,"inputs":[{"name":"wat","type":"address"}],"name":"set","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"wat","type":"address"}],"name":"unset","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!0,"inputs":[{"name":"","type":"address"}],"name":"indexes","outputs":[{"name":"","type":"bytes12"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"next","outputs":[{"name":"","type":"bytes12"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"read","outputs":[{"name":"","type":"bytes32"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[],"name":"peek","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bool"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[{"name":"","type":"bytes12"}],"name":"values","outputs":[{"name":"","type":"address"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!1,"inputs":[{"name":"min_","type":"uint96"}],"name":"setMin","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!0,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!1,"inputs":[],"name":"void","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"pos","type":"bytes12"},{"name":"wat","type":"address"}],"name":"set","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!0,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!1,"inputs":[{"name":"pos","type":"bytes12"}],"name":"unset","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!1,"inputs":[{"name":"next_","type":"bytes12"}],"name":"setNext","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"},{"constant":!0,"inputs":[],"name":"min","outputs":[{"name":"","type":"uint96"}],"payable":!1,"stateMutability":"view","type":"function"},{"anonymous":!1,"inputs":[{"indexed":!1,"name":"val","type":"bytes32"}],"name":"LogValue","type":"event"},{"anonymous":!0,"inputs":[{"indexed":!0,"name":"sig","type":"bytes4"},{"indexed":!0,"name":"guy","type":"address"},{"indexed":!0,"name":"foo","type":"bytes32"},{"indexed":!0,"name":"bar","type":"bytes32"},{"indexed":!1,"name":"wad","type":"uint256"},{"indexed":!1,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"}];var FLAP_ADDRESS="0xdfE0fb1bE2a52CDBf8FB962D5701d7fd0902db9f";var MEDIANIZER_ADDRESS="0x99041F808D598B782D5a3e498681C2452A31da08";var web3;if(typeof window.web3!=="undefined"&&window.web3.currentProvider&&window.web3.currentProvider.networkVersion==="1"&&window.web3.currentProvider.connection&&window.web3.currentProvider.connection.url.slice(0,3)==="wss"){web3=new Web3(window.web3.currentProvider)}else{var infura="wss://mainnet.infura.io/ws/v3/24537662f67d4531a1e43e486ea45eca";var provider=new Web3.providers.WebsocketProvider(infura);web3=new Web3(provider)}
var flapContract=new web3.eth.Contract(FLAPPER_ABI,FLAP_ADDRESS);var osmContract=new web3.eth.Contract(MEDIANIZER_ABI,MEDIANIZER_ADDRESS);var events=[];var getFlipEvents=function getFlipEvents(fromBlockNumber){console.log(`Get auction events from block: ${fromBlockNumber}`);return flapContract.getPastEvents("allEvents",{fromBlock:fromBlockNumber,toBlock:"latest"},function(err,result){if(!err){console.log("Received Events:",result.length);events=result}else{console.log(err)}})};var medianizerPrice=0;var getMedianizerPrice=function getOsmPrice(blockNumber){return osmContract.getPastEvents("LogValue",{fromBlock:blockNumber-1500,toBlock:blockNumber},function(err,result){if(!err){var logEvent=result[result.length-1];if(!logEvent){return 0}
var priceInWei=web3.utils.toBN(logEvent.returnValues[0]);var price=web3.utils.fromWei(priceInWei);medianizerPrice=parseFloat(price).toFixed(2);return price}else{console.log(err)}})};var TEND="0x4b43ed1200000000000000000000000000000000000000000000000000000000";var DEAL="0xc959c42b00000000000000000000000000000000000000000000000000000000";var TICK="0xfc7b6aee00000000000000000000000000000000000000000000000000000000";var auctions={};var eventsLoaded=!1;var showEvents=async function showEvents(someID){if(Object.keys(auctions).length===0){document.getElementById("app").innerHTML=""}
if(events.length>0){hideFilterSearch()}
for(let i=0;i<events.length;i++){let event=events[i];var values="";var blockDate=void 0;await web3.eth.getBlock(event.blockNumber).then(function(block){if(block){var blockTime=block.timestamp;blockDate=new Date(blockTime*1000);values=blockDate.toLocaleString()+" | "}else{values=new Date().toLocaleString()+" | "}});var eventType="Unknown";var flipId=0;if(event.event==="Kick"){eventType="KICK";flipId=parseInt(event.returnValues.id,10);values+="ID: <b>"+flipId+"</b> | ";var lot=event.returnValues.lot/10**27/10**18;values+="lot: "+lot.toFixed(2)+" dai | ";var tab=event.returnValues.bid/10**18;values+="bid: "+tab.toFixed(3)+" mkr | ";medianizerPrice=0;await getMedianizerPrice(event.blockNumber);auctions[flipId]={id:flipId,kickDate:blockDate.toUTCString().slice(5),kickDay:blockDate.getUTCDate(),kickMonth:blockDate.getUTCMonth()+1,kickPrice:medianizerPrice.toString(),kickLot:lot.toFixed(5),tends:0,dents:0,bid:tab.toFixed(5),lot:null,tab:0,guy:null,dealPrice:null,paidPrice:null,state:"OPEN"}}else if(event.raw.topics[0]===TEND){eventType="TEND";flipId=parseInt(event.raw.topics[2],16);if(!auctions[flipId]){return"continue"}
values+="ID: <b>"+flipId+"</b> | ";var lot=parseInt(event.raw.topics[3],16)/10**27/10**18;values+="lot: "+lot.toFixed(2)+" dai | ";var raw=event.raw.data.slice(289,-248);var bid=parseInt(raw,16)/10**18;values+="bid: "+bid.toFixed(3)+" mkr | ";auctions[flipId].tends+=1;auctions[flipId].bid=bid.toFixed(4);auctions[flipId].lot=lot.toFixed(4);auctions[flipId].paidPrice=(lot/bid).toFixed(2)}else if(event.raw.topics[0]===DEAL){eventType="DEAL";flipId=parseInt(event.raw.topics[2],16);if(!auctions[flipId]){return"continue"}
values+="ID: <b>"+flipId+"</b> | ";medianizerPrice=0;await getMedianizerPrice(event.blockNumber);auctions[flipId].dealPrice=medianizerPrice.toString();auctions[flipId].state="CLOSE";if(!medianizerPrice){values+="Rate: $"+auctions[flipId].paidPrice+" dai/mkr | "}else{values+="Rate: $"+auctions[flipId].paidPrice+" dai/mkr - ";values+="Price: $"+auctions[flipId].dealPrice+" | "}}else if(event.raw.topics[0]===TICK){eventType="TICK";flipId=parseInt(event.raw.topics[2],16);values+="ID: <b>"+flipId+"</b> | ";values+="Time extended! | "}else{console.log("Uknown event");console.log(event)}
await web3.eth.getTransaction(event.transactionHash).then(function(tx){var from=tx.from;var txHref=`https://etherscan.io/tx/${event.transactionHash}`;var txLink=`<a target="_blank" href="${txHref}">Tx Info</a>`;values+=`from: ${from} | ${txLink}`;auctions[flipId].guy=from});var oldPage=document.getElementById("app").innerHTML;var newLine="";if(someID===0||someID===flipId){newLine="<div class=\"row flip-"+flipId+" "+eventType.toLowerCase()+"\">"+eventType+" >> "+values+"</div>"}
var newPage=newLine+oldPage;document.getElementById("app").innerHTML=newPage}
if(Object.keys(auctions).length>0){showFilter()}else{showEmptyMessage()}
eventsLoaded=!0};var lastBlockfetch=0;var fetchAuctions=async function fetchAuctions(someID){lastBlockfetch=await web3.eth.getBlockNumber();var fromBlock=lastBlockfetch-18095;await getFlipEvents(fromBlock);await showEvents(someID)};async function newBlock(error,result){if(result){var newBlockNumber=result.number;if(!eventsLoaded)return;eventsLoaded=!1;await getFlipEvents(newBlockNumber);await showEvents(0)}else{console.log(error)}}
function showFilter(){var filterPanel=document.getElementById("filter-panel");if(filterPanel){filterPanel.style.display="block";var searchTag=document.getElementById("search");searchTag.style.display="inline";var noResultsTag=document.getElementById("no-results");noResultsTag.style.display="none";showLastUpdate()}}
function showLastUpdate(){var lastUpdateTag=document.getElementById("last-update");var now=new Date().toLocaleString();lastUpdateTag.innerHTML=`- Updated to: ${now}`}
function hideFilterSearch(){var filterPanelSearch=document.getElementById("search");if(filterPanelSearch){filterPanelSearch.style.display="none"}}
function showEmptyMessage(){var filterPanel=document.getElementById("filter-panel");if(filterPanel){filterPanel.style.display="block";var searchTag=document.getElementById("search");searchTag.style.display="none";var noResultsTag=document.getElementById("no-results");noResultsTag.style.display="inline";showLastUpdate()}}
function filterAuctionById(){var flipId=$("#fliter-id").val();$(".row").hide();if(flipId){$(".flip-"+flipId).show()}else{$(".row").show()}}
fetchAuctions(0);console.log('Loaded not optimized file');setTimeout(function(){console.log('Getting new data from chain...');web3.eth.subscribe('newBlockHeaders',newBlock)},5000)