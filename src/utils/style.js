// export const classnames = (args) => {
//     return args.concat(' ')
//   }

// export const classnames = (...args: string[]) => {
//     return args.join(' ')
//   }
  
export const classnames = (...args) => {
  // return Array.from(args).join(' ');
  return args.join(' ');
};

// export const classnames = function(...args) {
//   console.log('classnames function called');
//   const result = Array.from(args).join(' ');
//   console.log(result); 
//   return result;
// };
