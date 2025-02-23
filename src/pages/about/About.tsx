import classNames from "classnames/bind"
import styles from "./About.module.scss"
const cx = classNames.bind(styles)
const About = () => {
  return (
    <div className={cx("container")}>
      <span className={cx("textRed")}>Đây là about123</span>
    </div>
  )
}

export default About
