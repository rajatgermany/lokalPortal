export const generateId = () => {
  // Seeding algo convert it to base 36 (numbers + letters), and grab the first 9 character after the decimal.
   return  '_' + Math.random().toString(36).substr(2, 9);
} 