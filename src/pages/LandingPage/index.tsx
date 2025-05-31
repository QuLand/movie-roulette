import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/index";
import styles from "./Form.module.scss";

const cardImages = [
  "https://kinopoisk-ru.clstorage.net/prc158200/51014eboJ/1xqqGtYya8UpqQ1MK-ejxubNLt0yn7VVpYXw-rPqjojTQBaKB4poPwyN5nOA8_u01zzLbRRAdxPFXw7cmZCLJOYSqwOfTiOhDaB0fF6-2pr38Ur0e4fYdPyVhLfGh_I0E-DeL88SlJ-MPGN-jc-OyaJRymxtLDJq5R4bFSXcz3XfKpLWnqoqaTkhqOBzK3v-GqS6cSKWte0BdCzu1-am8IdwOpNbksgbUNjv_mka_mGeDZKwQSw-Yw3GX1novKMxyxZOhnoensW93WS4S7-rkjLwpjW-ZimhcdygFp9ymqiPsApnPzJws7BI30ptWpZV7lnqHPEsOgs1wmfNdBS_ORde_qqa4sKdAR3sxNMjL0bmlEpViv7tDdW0oOYf-lJEK_zWCyf24KtAWBOaxSouSe55xmRtJCbz4TYHOQy0j3WTpiJuAjK6SSW9KHB_5x8GFkz2-bYKBeGh_KyWO-aibDOgAjcnnkCHlKSztoGqOtUyuVrw5cxuIzXC79FEhCuVBwI-UgpeluEhWeQwW_PP2kq0skm2QpnFnejs4s9ablR3cIafg2pQWwTYz7oZOnphOrEejFXQPsM5-u-9sBwLqWsepk5qvqLVIQEYOMs_yz7auEI1coKhVen4gIoPilIsX0Tqaxt2zJ_IpGNCVYaSKU69RnS1lCbzPY6vpXD8V7Fz4qpagvbiSdWRXEyL64-2fpgysXZmnZn5nHiKWxIGAMvYeguLakgTyHwPhgWmltkWZW54iazaJ5mSGzF02MO5h356kspqeil5jRDomwersraIItF26tWppUSAWoNuCihjSLp_H-rE93hU5x7lAj4NKlkmyHUArsNJxvNtaNg_FZuq6q72yrLd9Y0oqOuzL_JSgNotvnrp6elcJOorzgZcj2CWF9f20GNU-FMK-bLq9QoxemixIFZrSXoDIcxIX2G7bpqKgppqcaUZEExbfy9yljyCsX5i7Y1VnJzaB2IK0McAvh_zCnQTmMhzQg3yaoXu0ZJ8RWjG71ESy_X8hC89Hwbm6uK-6qlNsSjIQ7dXfrZgLlEG8in5AYz85vN2Flxz2Fb3g36QGzD4gwJdrm7hPomSsBlgtguNypf51ISPdbN-HqIyEg6thWGoeA9TO2a2_FJJ_sKd1eHc3IJ_hu6sq6DWD6uOxHdUVGc6uZ5m4VJlrrCBODZfFWr3pbBoF7mPxkaubiZOwdUpkHjjA5eO3nAGsTrSsa2NmPyaU7YS_FfEype3fkyfhFhHnsXOit3auco4zSRqcznqg2U8mMM9u4aOHp7KfrF1gYCkC9cP0nqwHmmSJjnZadD8yhNu6mi_uHa7c3YUd3hIz0J1Bno52k0yDIXU2vvxBt9x4Bgr4WeKPo66SjL1ITHkuNfzF5rumKbRnpJZdTkYgL5fBuYA24wShzd-DBOElBNK1VJmYdqpxkz1AKbf4bZj3TCMY4nnCpJWmu4G-U0l0CSv3wce7pzavS6qVYVxyCyWu34iiPskwsfTfgTvoLg_SoW2rrGeSSLEDchC_9XuS-2cQAsVw0YmKmKactEp6ZikX8NfAn4Mfn3O9uGdObxwCjNaJvzXvJqD6-Z0qwg4G645Cua1YiXOBHW0Tl9VkvtZ6ESrvcdWeip6Jm65TQGE3KsLj5b2-Mbp_mZB9RmUVD6f8ibA87AC5yPixG_QDLvybSomrS51ukwBICon-W5bpTzMS6VbGr7eZp6qPd2JUGDnvy_yVszWceb-tQVRNIgaU3qaeLOwjm_TZpgbhADLLlmy4rkiST4QDczST7VOQ3WMmG8Jj16iLhoa-uU9BSiwa4vTFhYQMvUeioWFjRzUNkt-4vA_7E6fg5LIH5Rwbxp51nYtvjUiEGmQOnvNZm_VnJQnMc-GBiI6vnaVdZkAuGvbf_LS-FoxdgJtjQ0Q1GpXVj7M-6QCEycW8Bv4cFcm4V66QRZNegQNkHKTQRKLQewYj5FryiJCamYW8RlZ4KSHcytCNmw2tZbGHZnxcHR2i4p6bOtoch__jhx3VKTfClmG7v3K9W5EebDer2Wy1wHg4G_RG2Y-rsqexmERPYTEd0en2uYIGsUGZt0tcYyIfseK4lTH_H4zi-7oKzC803bBzpZdysFmTEmonqO9ShcxVDxLqZsCetKe7rbt3TEEIB_vKzbKNHYlxgrJ5VEY7IqvlqZ8cwyCq_e2GA_IuMeC6aoGAcYxIoydvGpngc4fyQiMG1Ebdp7a3trilQG9GLQv-69S7sQaTbLeQVkpnOCKV1oOBCPo8ufrJsD3IET_fu36Ik1KAeo82dBq2_HyC2XoPI-hu07mWuJKYl0JoZRc8wM_NrYkilniHkERKUBIUlcWGlwzdF7r5_bM48Sg_7a1Dqr1rtkuIAFMppOdjvtZOMCfCdeKiqJqopJJlaF4TAejO0K-jH5x6tKRQRHs2LafVtLcx2yycwuanHOA_JsCQba6dUqBSsRZWMbn6UofZUBUp72zmkbGjm4ORcnR2EAvd0P61rzKtZpKwXVhbGiy8xaS6NdwupfrluBn0MTDpkUqCjmSjeoo9ZymQxnq523smAtpb576frYe9i0ZpZhcb_9ThqZgLu3-kg1hrYzowoN-ZmA3AJYraw64oxQQB6b91h7dIvm2IIUM3g_Nkm_JdGy_KfMSppoGdjohkRVwzGNvX05q_Nr5ntrB-TWUFH7bgnZEqzDGm1eWCC94AEOKBa4SLSY5OgzlmCJLae7ryWwIL1WbpiJq4qJiyV1ZzPjvJ7My1rDefRZy6a0ZXPwyt1ZmhDMs8mvjAliz2EB7Ro1ert1mDeqg5Zhyyx1q1-2c-J_hw44eBgr-fiX9ASgs88f7thqEDg2G8rVhaejsWlPehpT3IDITe6oUb1RMl2r5lroBUn0ykJEgasuV4m_9BGxbvdtmis5m2hptKS1oFB-LD-KaeFZtdoJF2dFIDI5LNnaMh6wWq5vy1O_wOHOCmZqGbdrhNvydbC5nHY6k",
  "https://i.pinimg.com/736x/ff/66/d6/ff66d614da6a24e9edb2e692dc67583b.jpg",
  "https://i.pinimg.com/736x/cb/0a/9f/cb0a9fe10baa99b932d1939bf461363d.jpg",
  "https://i.pinimg.com/736x/b3/93/33/b393334531cb90edda14dcb49c7dcbf5.jpg",
];

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
        <div className={styles.cards}>
          {cardImages.map((src, index) => (
            <Card key={index} imgSrc={src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
