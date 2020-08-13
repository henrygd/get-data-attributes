var t=getDataAttributes=function(t){return Object.keys(t.dataset).reduce(function(e,a){var r=t.dataset[a];try{e[a]=JSON.parse(r)}catch(t){e[a]=r}return e},{})};export default t;
