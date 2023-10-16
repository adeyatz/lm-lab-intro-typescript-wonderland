import { endAdventure, haveAdventures } from "../..";
import { askQuestion, clear, print } from "../ui/console";
import { visitPigs } from "../chapter_7/chaper_7_pigs";

// ⚠️ This is a very unusual type setup. It's not a great idea in the real world
// to nest so many properties with the exact same name.
// But in Wonderland, this sort of thing is normal,
// so we've just got to find a way through it...

interface WakeUp {
  wake?: WakeUpFromDream;
}
interface WakeUpFromDream {
  wake?: WakeUpFromREMSleep;
}
interface WakeUpFromREMSleep {
  wake?: WakeUpFromDeepSleep;
}
interface WakeUpFromDeepSleep {
  canWake?: string;
}

export function wakeUp(): void {
  clear(true);
  print("Wait... was this all a dream?");

  const awoken = tryToWakeUp();

  // optional parameters can be accessed safely with the ?. operator
  // this will only return if every parameter in the whole chain is properly set...
  if (awoken.wake?.wake?.wake?.canWake === "Yes") {
    print("You have awoken in your bed 🛏 What a lovely dream.");
    print("Although...❓❓❓");
    print("What are these tarts doing here?! 🥧🥧🥧🥧🥧🥧 🤔");

    return askQuestion(
      "Press ENTER to continue to visit the 3 little pigs! oink oink 🐷 ",
      visitPigs
    );
    //    return askQuestion("Press ENTER to re-enter Wonderland! ", haveAdventures);
  } else {
    print("You are unable to wake up! 😱");
    return endAdventure();
  }
}

function tryToWakeUp(): WakeUp {
  return {
    wake: {
      wake: {
        wake: {
          canWake: "Yes",
        },
      },
    },
  };
}
