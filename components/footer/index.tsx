import Instagram from "@/svgs/instagram";
import styles from "./styles.module.css";
import Image from "next/image";
import Tiktok from "@/svgs/tiktok";
import YouTube from "@/svgs/youtube";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.colOne}>
          <Image src="/assets/Logo.png" width={182} height={48} alt="logo2" />
          <p>
            The storytelling navigation app. Experience every place like
            you&apos;ve always known it.
          </p>
          <div className={styles.IconLists}>
            <Link
              href="https://www.instagram.com/usegeotela?igsh=MThoZWtxaWJwYWJ4Zw=="
              target="_blank"
            >
              {" "}
              <Instagram />{" "}
            </Link>
            <Link
              href="https://www.tiktok.com/@usegeotela?_r=1&_t=ZS-96Nd4adKLSS"
              target="_blank"
            >
              {" "}
              <Tiktok />
            </Link>
            <Link
              href="https://youtube.com/@geotela?si=ANq3aWN_zsvfCfH4"
              target="_blank"
            >
              {" "}
              <YouTube />
            </Link>
          </div>
        </div>
        <div className={styles.colTwo}>
          <h2>Join the GeoTela community</h2>
          <p>
            Get early access drops, verified intelligence, and the stories worth
            knowing before you arrive.
          </p>
          <br />
          <br />
          <Link href="https://whatsapp.com/channel/0029VbC7a4O0LKZC3ldxkn1s">
            Join Commmunity
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
