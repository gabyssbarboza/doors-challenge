import MakeDoors from "../model/MakeDoors";
import styles from "../styles/Door.module.css";
import Gift from "./Gift";

interface DoorProps {
  value: MakeDoors;
  onChange: (newDoor: MakeDoors) => void;
}

const Door = (props: DoorProps) => {
  // this value below is the door on index
  const door = props.value;
  const isSelectedDoor =
    door.selected && !door.opened ? styles.doorSelected : "";

  function changeSelected(e: any) {
    return props.onChange(door.changeSelection());
  }

  function openTheDoor(e: any) {
    e.stopPropagation();
    console.log(e, "e");
    props.onChange(door.changeOpened());
  }

  return (
    <div className={styles.doorContainer} onClick={changeSelected}>
      <div className={`${styles.doorFrame} ${isSelectedDoor}`}>
        {door.closed ? (
          <div className={styles.door}>
            <div className={styles.doorNumber}>{door.number}</div>
            <div className={styles.doorPush} onClick={openTheDoor}></div>
          </div>
        ) : door.hasGift ? (
          <Gift />
        ) : (
          false
        )}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
