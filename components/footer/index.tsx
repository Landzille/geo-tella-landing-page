import Instagram from "@/svgs/instagram";
import styles from "./styles.module.css";
import Image from "next/image";
import Tiktok from "@/svgs/tiktok";
import YouTube from "@/svgs/youtube";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.colOne}>
          <Image src="/assets/Logo2.png" width={182} height={48} alt="logo2" />
          <p>Every Place Has a Story. Let’s Explore It Together.</p>
          <div className={styles.IconLists}>
            <Instagram />
            <Tiktok />
            <YouTube />
          </div>
        </div>
        <div className={styles.colTwo}>
          <h2>Join the Geotela Explorer Community</h2>
          <p>
            Get updates, behind-the-scenes development drops, exclusive
            insights, and launch announcements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
