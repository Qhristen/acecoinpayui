import Layout from "@/components/layout";
import Image from "next/image";
import { MdModeEdit , MdPayment} from "react-icons/md";

export default function Home() {
  return (
    <Layout>
      <div className="header">
        <div className="logo">
          <span className="logo-circle">  <MdPayment size={"1.3em"} color="#ffff" /></span>
          <h1>
            AceCoin<span className="lean">Pay</span>
          </h1>
        </div>
        <div className="timer">
          <span className="timer-box">0</span>
          <span className="timer-box">1</span>
          <span className="timer-divider">:</span>
          <span className="timer-box">1</span>
          <span className="timer-box">9</span>
        </div>
      </div>

      <form action="">
        <div className="input-group">
          <div className="label">
            <div className="description">
              <h2 className="title">card number</h2>
              <p className="desc">Enter the 15-digit card number on the card</p>
            </div>
            <button className="edit">
              <MdModeEdit size={"1em"} />
              <span className="btn-desc">Edit</span>
            </button>
          </div>
          <div className="main">
            <Image
              width={100}
              height={100}
              src="assets/mc_symbol.svg"
              alt=""
              className="leading-icon"
            />
            <input
              type="number"
              placeholder="2412   -   7512   -   3412   -   3456"
            />
            <Image
              src="assets/verified-badge.svg"
              alt=""
              className="trailing-icon"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="input-group __col">
          <div className="label">
            <div className="description">
              <h2 className="title">CVV number</h2>
              <p className="desc">Enter the 3 or 4 digit number on the card</p>
            </div>
          </div>
          <div className="main">
            <input type="number" placeholder="327" />
            <Image
              width={100}
              height={100}
              src="assets/dots.svg"
              alt=""
              className="trailing-icon"
            />
          </div>
        </div>
        <div className="input-group __col">
          <div className="label">
            <div className="description">
              <h2 className="title">expiry date</h2>
              <p className="desc">Enter the expiration date of the card</p>
            </div>
          </div>
          <div className="grp">
            <div className="main __date">
              <input type="number" placeholder="09" />
            </div>
            <span className="divider">/</span>
            <div className="main __date">
              <input type="number" placeholder="22" />
            </div>
          </div>
        </div>
        <div className="input-group __col">
          <div className="label">
            <div className="description">
              <h2 className="title">password</h2>
              <p className="desc">Enter your Dynamic password</p>
            </div>
          </div>
          <div className="main">
            <input type="password" placeholder="******" />
            <Image
              width={100}
              height={100}
              src="assets/dots.svg"
              alt=""
              className="trailing-icon"
            />
          </div>
        </div>
        <button type="submit" className="btn-submit">
          pay now
        </button>
      </form>
    </Layout>
  );
}
