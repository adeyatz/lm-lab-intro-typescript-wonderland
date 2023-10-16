export const HOUSE_TYPES = [
  "Straw",
  "Sticks",
  "Cheesy Wotsits",
  "Bricks",
] as const;

// ⚠️ It can be very useful to make a custom type based on the contents of an array

// 👉 Hover 'Hole' in the below line and see that it's defined as
// 		the union of whatever is in the 'HOLES' array
export type House_Types = (typeof HOUSE_TYPES)[number];
// 💡 This is because of the `as const` declaration above - that says that the *contents*
//     of the HOLES array are not allowed to change, so TypeScript can safely create a type
//     based on the contents of HOLES
