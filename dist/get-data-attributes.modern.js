var t=getDataAttributes=t=>Object.keys(t.dataset).reduce((e,a)=>{let r=t.dataset[a];try{e[a]=JSON.parse(r)}catch(t){e[a]=r}return e},{});export default t;
