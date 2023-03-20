import Card from "../components/Card";
import styles from "../styles/Form.module.css";
import Link from "next/link";
import EntryNumber from "../components/EntryNumber";
import { useState } from "react";

export default function GameForm() {
  const [doorQtd, setDoorQtd] = useState(3);
  const [doorWithGift, setDoorWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <EntryNumber
            value={doorQtd}
            text={"Quantidade de portas?"}
            onChange={(newWtd) => setDoorQtd(newWtd)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <EntryNumber
            value={doorWithGift}
            text={"Porta com presente?"}
            onChange={(hasGift) => setDoorWithGift(hasGift)}
          />
        </Card>
        <Card bgColor="#28a085">
          <Link
            className={styles.link}
            href={`/game/${doorQtd}/${doorWithGift}`}
          >
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
