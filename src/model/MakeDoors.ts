export default class MakeDoors {
  #number: number;
  #hasGift: boolean;
  #selected: boolean;
  #opened: boolean;

  constructor(
    number: number,
    hasGift = false,
    selected = false,
    opened = false
  ) {
    this.#hasGift = hasGift;
    this.#selected = selected;
    this.#opened = opened;
    this.#number = number;
  }

  get number() {
    return this.#number;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get selected() {
    return this.#selected;
  }

  get opened() {
    return this.#opened;
  }

  get closed() {
    return !this.#opened;
  }

  unselected() {
    const isSelected = false;

    return new MakeDoors(this.number, this.hasGift, isSelected, this.opened);
  }

  changeSelection() {
    const isSelected = !this.selected;

    return new MakeDoors(this.number, this.hasGift, isSelected, this.opened);
  }

  changeOpened() {
    const isOpen = true;

    // error da porta: eu tinha passado o argumento errado
    return new MakeDoors(this.number, this.hasGift, this.selected, isOpen);
  }
}
