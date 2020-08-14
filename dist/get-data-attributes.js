var t=getDataAttributes=function(t){return Object.keys(t.dataset).reduce(function(e,r){var a=t.dataset[r];try{e[r]=JSON.parse(a)}catch(t){e[r]=a}return e},{})};module.exports=t;
