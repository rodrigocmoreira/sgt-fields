const sgtFields = (() => {
 const get = (object, key) => {
   const keys = key.split('.');
   return keys.reduce((previous, current) => {
     if (previous && current) {
       return previous[current];
     }
     return undefined;
   }, object);
 };

 return {
   get
 };
})();

module.exports = sgtFields;