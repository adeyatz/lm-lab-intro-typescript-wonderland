import { endAdventure, haveAdventures } from "../..";
import { askQuestion, clear, print } from "../ui/console";
import { parseHouseInput } from "../ui/parse_input";
import { House_Types, HOUSE_TYPES } from "./chapter_7_types";

export function visitPigs(): void {
  clear(true);

  print(
    "You see a number of different houses, can you pick one to find the 3 little pigs 🐷🐖 and avoid the wolf? 🐺🐺: "
  );
  HOUSE_TYPES.forEach((h, i) => print(`   ${i} - ${h}`));
  askQuestion("Which house will you choose?", chooseHouse);
}

function chooseHouse(input: string) {
  const house = parseHouseInput(input);

  if (house === undefined) {
    print(`😮`);
    print(`${input} is an invalid input 😭`);
    return endAdventure();
  }

  return enterHouse(house);
}

export function enterHouse(house: House_Types): void {
  clear(true);

  if (house === "Bricks") {
    print(
      "✅ Well Done! You successfully made it through to visit the 3 little pigs 🐷 🐷 🐷 and avoided the big bad wolf 🐺"
    );

    print("*** That concludes your journey through Wonderland! 🥳 ***");

    return askQuestion("Press ENTER to re-enter Wonderland! ", haveAdventures);
  } else {
    print(
      "❌ Oh No!! You are unable to visit the 3 little pigs, the Wolf has eaten you!  🐺 "
    );
    return endAdventure();
  }
}
