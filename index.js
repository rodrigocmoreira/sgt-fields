const sgtFields = (() => {
 const get = (object, key) => {
   if (!key || typeof key !== 'string') {
     return undefined;
   }
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
