import { useNavigate } from "react-router-dom";
import { MainCard } from "../../components/MainCard";
import { Filter } from "../../components/Filter";

import styles from "./Form.module.scss";

const cardProps = {
  title: "Берсерк",
  description:
    "Через предательство и кровь к власти пришел новый король. Его демоны-подручные чинят несправедливости до тех пор, пока в город однажды ночью не приходит тяжело вооруженный воин. Весь покрытый оружием, броней и шрамами он называет себя Чёрным Мечником. Размеры его меча могут сравниться только с его ненавистью к королю и его демонам.",
  imageSrc:
    "https://kinopoisk-ru.clstorage.net/G1d6K4120/71d817jJUlmc/NSICNKn6SPuAwZyCETyUPNkPhhDdGqQprrc11f7JIdlMUPL6jv9B4KglBs_9Co6K6zhGR5rtCYmKuwdJDZaduQRHF8W4D6iOYXAph_R5Va1Zz7I0aZ_AaH-C4GAMOiNabsfQmXx9Qya8MVK-CP8bfuotI9O6bO29rZjDHk3g-d00sME0r0g56uaBLsNybZb6WM32Rk9bV38eVtaWb7kDqU73ERrcPYGWnTDzWFqt-9yKvcLiWbjevGwJ5y0tc-gtZpCStgw7y5g2sJ5R01_H-Mm9JeV8CbffTDWFRV07gTtfxnNKbG4zVD9Rczlp3TocaA0TAQp5PhyOu8ZvXID6rVaBshbd2jhJxREO0DOv9_t5XLe1T-vFvR1lx-auWVEKTEcRyNyPATX9AuNL6v65PwnvIhAaW0xdjUh3fGzRa8yEcMK0reo7qORgLqAxzBWZmN1U945qhf2vZ_UHnVqSKR6VURl_fWAWb5NTa4q_G72KDkBCG1lerW6Zxk-_kOgcFLEThj4KGFh2gT3Tg94n6svNlva-CueufsXktJ7L87g-ZqHqb9-jRG5hA4vJPfifWH6RYJgKjZ9v6xfvriEYzUVzETYeWogKZhMssOEe96jJrocG7Tm3Tny29CR8iUG4zJWze1-foTRNAlK7yl_ZjGuecFEaOp-uf3q2bszja77m4bGnjHi4eIWCrzOhj8b6KyzEZD0L5z0vZ8UFfwjj-T62oynM3BEm3yMRuYkd600Z32HDmKjs3Fz7hA9vw8vNpJFRt316igqGcD4j8Py1Kum9pUR_uiRdDNUHJA0awiqdtbPI_i1Axi4RcdjLXJivC89DYLv7rL1dK0ctLVN5nMYyMAdPuop4hkBMcoO89BiJHoT03zhGL681B6R-WwLqneSimt6cU6cOAWDqGG157unvYaMo-r6u7pqknC7RK81FMEJFT3m7GMRyXjHzrofJWp-m9N4oBw2tBPS1j5qiSG1FMCosr8N1TyCwy7rv6V45D7BQaqjfH66rda9NcXitVyDQVQ-7uPqWw5_ywG1VOWvOViYNmbf_XiSEFH8bwjpsd2BZHJ5wtT2REblKP2ivGx1gcFpKf67taqRvLLLrjBUBseQMCKnadvE8wCIcp0iLnxY1PGvkbC-F5bQMurE4zXWCWk7cARRtglDKWCyYD0ovoyPoCG8-LWh0Lt2TGX51UUK3figoWISSvaBB7tTquL6Edr9Z9Pw8JMfUTxqgSW6nExksXrPlzSFhivruCo-IjlPRqfpd_NyZh51uMcjuFyABB8-q6zjGAtxyUiz3y3ve9BbuWZeuP5fEB635Aen9tHHL3b_gtE_gMYmYzfgOeD8ToPhqTr-8u6Y9HxNJ74UDYSWNSjsrFQB_sDJt1tla_QR1vinWzvxn1FZe63JYLhQy2Q3_0cUsAvDoaO07Hjt-Q2Ca6Fz_3PmmHbyCO-w1IlGWzcsKS6Zg_KJQDWY4KmzG1K3K1d1Mhyf3v9jh-IzW03g97nKm7mCTa6k8mDxKD-GzCKtMbo1qRjwM0mgNRVEyB0wJmmuVg32Tw53nOJtMd9Vtq1d93HcGde2JEXhcpIMbLBxwpR4SYkvZfMlMqhxTwSrLfwzsWXXtHPArf3SSAIVtirp750GeEFGNtdp535Xmzzp3Lj4ml0VuilJZDsWxC_2PkXa_YoDoiU3YrEpdkkBIKn5-Ltt3bZ9A6_yEEqFF7Si4qaWyvgLTnqf7aM5XxR3KVC_OV7UlrTtjmL20YFodT0IWTxJhuMgPCYzYPzAh-LpvzZx55j0-0Pl-lBBxJw2p-5nlEj-woD1lS1kdZGTN6JQ9LDWFd2z64Oge1nA5_ZxDRB3AckuZb8kNam5DMnm67Zy-eiWOTZLKrEVCcFXta4vZ90EMIOO_VTrbzLcFTjg1vR9XF9ePCoMJfkQwq1xOIyYec4Lpim_anWmt4jLbSCz-nwlFDU4BaL5l8rNl_8gaOHcw_QGx7uUZe21G9V14tiwvp-RGDKswSk_GUDierXCUfkFxqAt-CsxZTkMw69pvjhzbZk9f8Du-NqMz5r5rGfmkYN-ggD-EyXtPRmQdmMQdTtSEV70I8nnv9KM4rW2Tx02BEZuI3Zs9CUzh0SrJbdzOCAScD-N5_nSCoWa-CTrqRnOMAMB-VwlqnkWWfuhWfj-kp5f8msGrbFSieDxNYvTO4jP7uU-5PVsdgGH4mM68zcoFDA-xeK1mUvIVzDiq2MSAvdGw7Nco6H8npv7Jdw-tVTekXYijqj6kEoq9_pA0rRMhiYsMu_5J7KPTGBrevM6LdY08opnfFUJzly64-4pmQq5SYh30yAsPlkc_ecev7vYmtDxqczhPR6DIPayhRc9ycbo6Hqjcy_0BgfgITv7OSpQPHoNob0SBg5S_SDvJJIJ88kOtxfirDPd037ulDR7m9wQuWrDo3cYyyh-_stVf8YOoqF0q34vtoWMqGo4unppV75zS6A9WUIIE7YnoG8UynvOjr_X4uZ83hUwq5kw_hyX17ZnDyg3G4zic3LE0v-MQiCoOK404XbEhidhOXG0LFe2tI0g9ZlEjt_2KutrmQk-SgwyWmGpvtwTtOqdf7QUEJ-674Eneh0B67Uxypn2wkRgab8qfW6-AQigZXL6M2KYvLzNKrDZA0_U9mHm6RSJuYCOs5SppPObXDztWf453dgSOupN5HFeB6fwesad9YUCJ-M6YDLu8wGBp-x4_nMmlfa2A2N4WUoJH3_iriFSQHRLCLJSLO9yVByxYZ159BiUmLxpS2kwVQQjcLdCGjuGhmMp8y11aP4EAmqrt3i_pdo5fM-pMdRAiN_yZqKs2ws2SEZ1UOlhtNFWsKGXsHHTER48IcCjvhEL5P44BJMwQoKr7zplua36wcfv47oxuCQdPvTFYLsSgAmfNygqJJbBOwOJtZWhI_oTEnnhEDmzGhkXO64DaLNQD6kx98CccA3JraHzpbCm9UHDLiUysM",
};

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.layoutContent}>
        <div className={styles.contentHeader}>
          <div className={styles.logo}>
            <svg
              className={styles.logoIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M8 3.5V20.5"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M16 3.5V20.5"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M21 12L4 12"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M8 8H4"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M8 16H4"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M20 8H16"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M20 16H16"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M3 10.7904C3 4.37501 4.37501 3 10.7904 3H13.2096C19.625 3 21 4.37501 21 10.7904V13.2096C21 19.625 19.625 21 13.2096 21H10.7904C4.37501 21 3 19.625 3 13.2096V10.7904Z"
                  stroke="#ffffff"
                  stroke-width="2"
                ></path>{" "}
              </g>
            </svg>
            <h1 onClick={() => navigate(0)} className={styles.headerTitle}>
              Movie-roulette
            </h1>
          </div>
          <div className={styles.headerButtons}>
            <button
              type="button"
              className={styles.buttonProfile}
              onClick={() => navigate("/profile")}
            >
              <img
                src="https://img.icons8.com/?size=100&id=ywULFSPkh4kI&format=png&color=FFFFFF"
                alt=""
                className={styles.profileLogo}
              />
            </button>
            <button
              type="button"
              className={styles.buttonLogout}
              onClick={() => navigate("/")}
            >
              <svg
                className={styles.logoutLogo}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.splitLine}></div>
        <div className={styles.mainCard}>
          <MainCard {...cardProps} />
        </div>
        <div className={styles.Filter}>
          <Filter />
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
