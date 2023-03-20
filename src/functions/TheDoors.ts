import MakeDoors from "../model/MakeDoors";

export function createDoors(qtd: number, doorWithGift: number): MakeDoors[] {
  return Array.from({ length: qtd }, (_, i) => {
    const num = i + 1;
    const hasGift = num === doorWithGift;
    return new MakeDoors(num, hasGift);
  });
}

export function attDoors(
  doors: MakeDoors[],
  modifided: MakeDoors
): MakeDoors[] {
  return doors.map((actualDoor) => {
    const isEqual = actualDoor.number === modifided.number;

    if (isEqual) {
      return modifided;
    } else {
      return modifided.opened ? actualDoor : actualDoor.unselected();
    }
  });
}
