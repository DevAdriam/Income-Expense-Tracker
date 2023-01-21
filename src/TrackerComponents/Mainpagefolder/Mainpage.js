import React from "react";
import styles from "./Mainpage.module.css";
import Balance from "../Balance/Balance";
import { FaUserCircle } from "react-icons/fa";
import Incexp from "../Income&Expense/Incexp";
import Transitionlist from "../TransitionList/Transitionlist";
import { useNavigate } from "react-router-dom";

function Mainpage() {
	const navigate = useNavigate();
	return (
		<>
			<div className={styles.maincontainer}>
				<div className={styles.top_row}>
					<button className={styles.backBtn} onClick={() => navigate("/")}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25">
							<g id="_01_align_center" data-name="01 align center">
								<path d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z" />
							</g>
						</svg>
						Back
					</button>
					<h3>Dashboard</h3>
					<h1 className={styles.userprofile} onClick={() => navigate("/developer-contact")}>
						<FaUserCircle />
					</h1>
				</div>
				<Balance />
				<Incexp />
				<Transitionlist />
				<button
					style={{
						borderRadius: "50%",
						background: "rgb(15, 148, 130)",
						border: "none",
						outline: "none",
						color: "#fff",
						fontSize: "40px",
						width: "50px",
						height: "50px",
						margin: "auto",
						lineHeight: "30px",

						position: "fixed",
						bottom: "20px",
						right: "20px",
					}}
					onClick={() => navigate("/addtransition")}
				>
					+
				</button>
			</div>
		</>
	);
}

export default Mainpage;
