import { useEffect, useState } from "react";
import styles from "../../../styles/Game.module.css";
import Door from "../../../components/Door";
import { attDoors, createDoors } from "../../../functions/TheDoors";
import Link from "next/link";
import { useRouter } from "next/router";
import MakeDoors from "../../../model/MakeDoors";

export default function Game() {
  const router = useRouter();
  const [doors, setDoors] = useState<MakeDoors[]>([]);
  const [isOk, setIsOk] = useState(false);

  useEffect(() => {
    const doorQtd = Number(router?.query.doors);
    const hasGift = Number(router?.query?.hasGift);
    const qtdOkDoors = doorQtd >= 3 && doorQtd <= 100;
    const hasGiftOk = hasGift >= 1 && hasGift <= doorQtd;
    setIsOk(qtdOkDoors && hasGiftOk);
  }, [isOk, router.query.doors, router.query.hasGift]);

  useEffect(() => {
    const doorQtd = Number(router?.query.doors);
    const hasGift = Number(router?.query?.hasGift);
    setDoors(createDoors(doorQtd, hasGift));
  }, [isOk, router.query.doors, router.query.hasGift]);

  function renderDoors() {
    return (
      isOk &&
      doors.map((door: MakeDoors, i: number) => {
        return (
          <Door
            key={i}
            value={door}
            onChange={(newDoor) => setDoors(attDoors(doors, newDoor))}
          />
        );
      })
    );
  }

  return (
    <div className={styles.game}>
      <div className={styles.allDoors}>
        {isOk ? renderDoors() : <h2>Valore Inválidos</h2>}
      </div>
      <div className={styles.buttons}>
        <Link href="/" className={styles.restartBtn}>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
