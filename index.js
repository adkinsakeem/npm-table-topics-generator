const TableTopicsJSON = require("./tableTopics.json");

let categoriesArray = [];
let Table_Topics = [];
let count = 0;
let message = "We were able to produce your requested table topics";

function RandomTableTopics(...args){
	for(let x=0;x<args.length;x++){
		if(typeof args[x] == "number"){
			count = args[x];
		}else{
			categoriesArray.push(args[x]);
		}
	}

	const tableTopicsJSONFile = TableTopicsJSON;
	let tempTopics = [];
	let tempCount = [];
	if (count == 0){
		message = "You need to provide the amount of table topics you would like to generate.";
	}else{
		for(var x=0;x<TableTopicsJSON.All_Topics.length;x++){
			let tempArray = TableTopicsJSON.All_Topics[x].Categories
			if(categoriesArray.every(r=> tempArray.includes(r))){
				tempTopics.push(tableTopicsJSONFile.All_Topics[x]);
			}
		}

		if(count > tempTopics.length){
			message = "Your query did not produce enough table topics. You requested "+ count +" Table Topics, but your requested categories only could produce "+ tempTopics.length +" Table Topics.";
			count = tempTopics.length;
		}

		let arr = [];
		while(arr.length < count){
			const r = Math.floor(Math.random() * tempTopics.length);
			if(arr.indexOf(r) === -1) arr.push(r);
		}

		for(let x=0; x<count;x++){
			Table_Topics.push(tempTopics[arr[x]].Table_Topic);
		}

		let returnJSONObject = {Message: message, Table_Topics: Table_Topics};
	}
}
module.exports.RandomTableTopics = RandomTableTopics;