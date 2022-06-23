var fs=require('fs');
var myReadStream=fs.createReadStream(__dirname + '/readMe.txt','utf8');
//var myWriteStream=fs.createWriteStream(__dirname + '/writeMeMe.txt');

myReadStream.on('data',function(chunk){
    console.log('new chunk received:');
   // myWriteStream.write(chunk);
   console.log(chunk);
});

Output:

new chunk created
A flower, sometimes known as a bloom or blossom,
 is the reproductive structure found in flowering 
 plants (plants of the division Angiospermae). 
 The biological function of a flower is to facilitate reproduction, 
 usually by providing a mechanism for the union of sperm with eggs.
  Flowers may facilitate outcrossing (fusion of sperm and eggs from different individuals in a population)
   resulting from cross-pollination or allow selfing (fusion of sperm and egg from the same flower) 
   when self-pollination occurs.

The two types of pollination are: self-pollination and cross-pollination. 
Self-pollination happens when the pollen from the anther is deposited on the stigma of the same flower, 
or another flower on the same plant. Cross-pollination is the transfer of pollen from the anther of one
 flower to the stigma of another flower on a different individual of the same species. Self-pollination
  happens in flowers where the stamen and carpel mature at the same time, and are positioned so that the 
  pollen can land on the flower's stigma. This pollination does not require an investment from the plant 
  to provide nectar and pollen as f
ood for pollinators.[1]