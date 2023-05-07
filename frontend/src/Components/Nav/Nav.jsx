import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">
                <div className="nav__logo">
                    <svg width="133" height="63" viewBox="0 0 133 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6989 44.7407C8.82772 44.7407 7.0996 44.5095 5.51457 44.0472C3.95156 43.5629 2.60869 42.9025 1.48596 42.066L2.80682 38.7308C3.5553 39.2591 4.33681 39.7104 5.15134 40.0847C5.96586 40.4369 6.83543 40.7121 7.76002 40.9102C8.68462 41.0863 9.66426 41.1744 10.6989 41.1744C12.4381 41.1744 13.6929 40.8882 14.4634 40.3158C15.2339 39.7435 15.6191 38.995 15.6191 38.0704C15.6191 37.2558 15.3549 36.6394 14.8266 36.2212C14.2983 35.7809 13.3516 35.4177 11.9868 35.1315L8.25534 34.372C6.11996 33.9317 4.52393 33.1942 3.46724 32.1595C2.41056 31.1249 1.88222 29.738 1.88222 27.9989C1.88222 26.5459 2.26747 25.2801 3.03797 24.2014C3.80847 23.1227 4.88716 22.2862 6.27406 21.6918C7.66096 21.0974 9.27901 20.8002 11.1282 20.8002C12.7793 20.8002 14.3093 21.0423 15.7182 21.5267C17.1271 21.989 18.3049 22.6604 19.2515 23.541L17.9306 26.711C16.984 25.9185 15.9493 25.3351 14.8266 24.9609C13.7039 24.5646 12.4491 24.3665 11.0622 24.3665C9.49915 24.3665 8.27736 24.6747 7.39679 25.2911C6.53823 25.8855 6.10895 26.711 6.10895 27.7677C6.10895 28.5822 6.37313 29.2316 6.90147 29.716C7.45182 30.2003 8.37642 30.5745 9.67526 30.8387L13.3737 31.5652C15.5751 32.0054 17.2041 32.7319 18.2608 33.7446C19.3175 34.7352 19.8458 36.0781 19.8458 37.7732C19.8458 39.1601 19.4716 40.3819 18.7231 41.4386C17.9746 42.4732 16.918 43.2877 15.5531 43.8821C14.1882 44.4545 12.5701 44.7407 10.6989 44.7407ZM33.858 44.4105L23.4893 21.1304H28.0793L36.4337 40.6791H35.0468L43.4012 21.1304H47.826L37.4573 44.4105H33.858ZM53.0171 44.4105V21.1304H57.2769V44.4105H53.0171ZM70.772 44.4105V24.6307H63.0781V21.1304H82.7258V24.6307H75.0318V44.4105H70.772ZM88.6247 44.4105V21.1304H92.8845V40.8111H103.848V44.4105H88.6247ZM107.975 32.7539C107.975 30.3103 108.415 28.197 109.296 26.4138C110.198 24.6307 111.486 23.2548 113.159 22.2862C114.832 21.2955 116.824 20.8002 119.136 20.8002C121.425 20.8002 123.407 21.2955 125.08 22.2862C126.753 23.2548 128.041 24.6307 128.943 26.4138C129.868 28.197 130.33 30.2993 130.33 32.7209C130.33 35.1645 129.868 37.2889 128.943 39.094C128.041 40.8772 126.753 42.2641 125.08 43.2547C123.407 44.2454 121.425 44.7407 119.136 44.7407C116.824 44.7407 114.832 44.2454 113.159 43.2547C111.508 42.2641 110.231 40.8772 109.329 39.094C108.426 37.2889 107.975 35.1755 107.975 32.7539ZM112.433 32.7539C112.433 35.3736 112.994 37.421 114.117 38.8959C115.239 40.3709 116.913 41.1083 119.136 41.1083C121.293 41.1083 122.955 40.3709 124.122 38.8959C125.289 37.421 125.872 35.3736 125.872 32.7539C125.872 30.1122 125.289 28.0649 124.122 26.612C122.977 25.159 121.315 24.4325 119.136 24.4325C116.913 24.4325 115.239 25.159 114.117 26.612C112.994 28.0649 112.433 30.1122 112.433 32.7539Z" fill="#FFFDFB"/>
                        <path d="M93.7669 58.5724C93.0795 58.5724 92.4811 58.4834 91.9716 58.3055C91.4621 58.1195 91.0052 57.8526 90.6009 57.5049L90.8556 57.0682C91.1548 57.3027 91.4419 57.4968 91.7169 57.6505C91.9918 57.796 92.291 57.9052 92.6145 57.978C92.9461 58.0427 93.3261 58.075 93.7547 58.075C94.5473 58.075 95.1457 57.9173 95.55 57.6019C95.9625 57.2785 96.1687 56.8499 96.1687 56.3161C96.1687 55.8633 96.0231 55.5155 95.732 55.2729C95.4489 55.0303 94.9597 54.8403 94.2642 54.7028L93.0633 54.4602C92.2789 54.2984 91.6966 54.0437 91.3166 53.696C90.9365 53.3482 90.7464 52.8671 90.7464 52.2525C90.7464 51.7673 90.8718 51.3427 91.1225 50.9788C91.3732 50.6149 91.7209 50.3318 92.1657 50.1297C92.6105 49.9275 93.128 49.8264 93.7184 49.8264C94.3168 49.8264 94.8626 49.9194 95.3559 50.1054C95.8492 50.2914 96.2738 50.5704 96.6296 50.9424L96.387 51.3791C95.9908 50.999 95.5824 50.7281 95.1619 50.5664C94.7413 50.4046 94.2602 50.3237 93.7184 50.3237C92.9744 50.3237 92.38 50.4976 91.9352 50.8454C91.4985 51.1931 91.2802 51.6621 91.2802 52.2525C91.2802 52.7296 91.4217 53.1016 91.7047 53.3685C91.9878 53.6272 92.4447 53.8213 93.0755 53.9507L94.2885 54.1933C95.1295 54.3631 95.7401 54.6098 96.1202 54.9333C96.5083 55.2487 96.7024 55.7056 96.7024 56.304C96.7024 56.7488 96.5852 57.145 96.3506 57.4928C96.1161 57.8324 95.7765 58.0993 95.3317 58.2934C94.895 58.4794 94.3734 58.5724 93.7669 58.5724ZM99.529 58.4753V49.9234H102.719C103.585 49.9234 104.256 50.1297 104.733 50.5421C105.21 50.9545 105.449 51.5327 105.449 52.2767C105.449 53.0126 105.21 53.5908 104.733 54.0114C104.256 54.4238 103.585 54.63 102.719 54.63H100.038V58.4753H99.529ZM100.038 54.1569H102.707C103.427 54.1569 103.973 53.9952 104.345 53.6717C104.717 53.3401 104.903 52.8752 104.903 52.2767C104.903 51.6783 104.717 51.2173 104.345 50.8939C103.973 50.5623 103.427 50.3965 102.707 50.3965H100.038V54.1569ZM106.709 58.4753L110.384 49.9234H110.882L114.63 58.4753H114.072L112.992 56.0007L113.271 56.1099H107.97L108.31 56.0007L107.255 58.4753H106.709ZM110.615 50.6027L108.443 55.7096L108.176 55.6368H113.065L112.871 55.7096L110.639 50.6027H110.615ZM120.652 58.5724C119.827 58.5724 119.127 58.3985 118.553 58.0508C117.987 57.6949 117.554 57.1895 117.255 56.5345C116.956 55.8794 116.806 55.099 116.806 54.1933C116.806 53.2876 116.956 52.5112 117.255 51.8643C117.554 51.2093 117.987 50.7079 118.553 50.3601C119.127 50.0043 119.827 49.8264 120.652 49.8264C121.274 49.8264 121.82 49.9275 122.289 50.1297C122.766 50.3237 123.187 50.6108 123.551 50.9909L123.284 51.4155C122.888 51.0354 122.483 50.7604 122.071 50.5906C121.667 50.4127 121.189 50.3237 120.64 50.3237C119.564 50.3237 118.747 50.6634 118.189 51.3427C117.631 52.0139 117.352 52.9641 117.352 54.1933C117.352 55.4225 117.631 56.3768 118.189 57.0561C118.747 57.7354 119.564 58.075 120.64 58.075C121.189 58.075 121.667 57.9901 122.071 57.8203C122.483 57.6424 122.888 57.3634 123.284 56.9833L123.551 57.4078C123.187 57.7879 122.766 58.0791 122.289 58.2812C121.812 58.4753 121.266 58.5724 120.652 58.5724ZM126.512 58.4753V49.9234H131.704V50.3965H127.021V53.9022H131.437V54.3753H127.021V58.0022H131.704V58.4753H126.512Z" fill="#FFFBFB"/>
                        <mask id="path-3-inside-1_1069_3909" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd" d="M59.6369 4.27177C59.6416 5.57966 59.0374 6.75246 58.082 7.53948L57.2542 9.85201L56.8813 11.0253L53.5628 11.0373L53.1438 9.86677L52.2673 7.47219C51.3666 6.69356 50.7982 5.56323 50.7937 4.30352C50.7852 1.9443 52.758 0.0246609 55.2 0.0158929C57.642 0.00712493 59.6285 1.91255 59.6369 4.27177ZM53.4375 11.0387C53.3133 11.0392 53.213 11.1402 53.2135 11.2644L53.214 11.4143C53.2144 11.5385 53.3155 11.6388 53.4396 11.6384L56.9624 11.6257C57.0865 11.6253 57.1868 11.5242 57.1864 11.4001L57.1858 11.2501C57.1854 11.126 57.0844 11.0257 56.9602 11.0261L53.4375 11.0387ZM53.2426 11.8642C53.2497 11.7402 53.3558 11.6454 53.4798 11.6524L56.9969 11.8514C57.1209 11.8584 57.2157 11.9646 57.2087 12.0886L57.2002 12.2383C57.1932 12.3623 57.087 12.4571 56.9631 12.4501L53.4459 12.251C53.322 12.244 53.2271 12.1378 53.2342 12.0139L53.2426 11.8642ZM53.5005 12.3343C53.3769 12.3224 53.2671 12.413 53.2552 12.5366L53.2409 12.6859C53.229 12.8095 53.3196 12.9193 53.4432 12.9311L56.9499 13.2676C57.0735 13.2794 57.1833 13.1888 57.1952 13.0652L57.2095 12.916C57.2213 12.7924 57.1307 12.6825 57.0071 12.6707L53.5005 12.3343ZM53.1805 13.2873C53.1924 13.1637 53.3022 13.0731 53.4258 13.085L56.9324 13.4214C57.056 13.4332 57.1466 13.5431 57.1348 13.6667L57.1204 13.8159C57.1086 13.9395 56.9988 14.0301 56.8752 14.0183L53.3685 13.6819C53.2449 13.67 53.1543 13.5602 53.1662 13.4366L53.1805 13.2873ZM53.3512 13.9076C53.2275 13.8967 53.1184 13.9882 53.1075 14.1119L53.0944 14.2612C53.0835 14.3849 53.1749 14.494 53.2986 14.5049L56.8078 14.8141C56.9314 14.825 57.0406 14.7336 57.0515 14.6099L57.0646 14.4605C57.0755 14.3368 56.9841 14.2277 56.8604 14.2168L53.3512 13.9076ZM53.5488 14.7857L56.621 14.8572L55.8168 15.5882L55.7785 15.5873C55.7788 15.5921 55.779 15.5969 55.779 15.6018C55.7798 15.8295 55.4297 16.1278 55.1813 16.1287C54.9329 16.1295 54.5806 15.8338 54.5798 15.6062C54.5798 15.5898 54.5815 15.5743 54.5849 15.5595L54.468 15.5568L53.5488 14.7857Z"/>
                        </mask>
                        <path d="M58.082 7.53948L57.5821 6.93261L57.4148 7.07043L57.3417 7.27452L58.082 7.53948ZM57.2542 9.85201L56.514 9.58706L56.5092 9.60038L56.5049 9.61388L57.2542 9.85201ZM56.8813 11.0253L56.8842 11.8116L57.4571 11.8095L57.6306 11.2635L56.8813 11.0253ZM53.5628 11.0373L52.8226 11.3023L53.0099 11.8255L53.5657 11.8235L53.5628 11.0373ZM53.1438 9.86677L53.8841 9.60177L53.8821 9.5965L53.1438 9.86677ZM52.2673 7.47219L53.0056 7.20192L52.9356 7.01064L52.7815 6.87741L52.2673 7.47219ZM53.4375 11.0387L53.4403 11.825L53.4375 11.0387ZM56.9602 11.0261L56.9574 10.2399L56.9602 11.0261ZM53.4798 11.6524L53.4354 12.4374L53.4354 12.4374L53.4798 11.6524ZM53.2426 11.8642L54.0276 11.9086L54.0276 11.9086L53.2426 11.8642ZM56.9969 11.8514L57.0414 11.0664L57.0414 11.0664L56.9969 11.8514ZM57.2087 12.0886L57.9937 12.133L57.9937 12.133L57.2087 12.0886ZM57.2002 12.2383L57.9852 12.2827L57.9852 12.2827L57.2002 12.2383ZM56.9631 12.4501L57.0075 11.6651L57.0075 11.6651L56.9631 12.4501ZM53.4459 12.251L53.4015 13.036L53.4015 13.036L53.4459 12.251ZM53.2342 12.0139L52.4492 11.9694L52.4492 11.9694L53.2342 12.0139ZM53.2552 12.5366L54.0379 12.6117L53.2552 12.5366ZM53.5005 12.3343L53.4254 13.1169L53.4254 13.1169L53.5005 12.3343ZM53.2409 12.6859L54.0235 12.761L54.0235 12.761L53.2409 12.6859ZM53.4432 12.9311L53.5183 12.1485L53.5183 12.1485L53.4432 12.9311ZM56.9499 13.2676L57.025 12.4849L57.025 12.4849L56.9499 13.2676ZM57.1952 13.0652L56.4125 12.9901L56.4125 12.9901L57.1952 13.0652ZM57.2095 12.916L57.9921 12.991L57.9921 12.991L57.2095 12.916ZM57.0071 12.6707L57.0822 11.888L57.0822 11.888L57.0071 12.6707ZM53.4258 13.085L53.3507 13.8676L53.3507 13.8676L53.4258 13.085ZM53.1805 13.2873L53.9632 13.3624L53.1805 13.2873ZM56.9324 13.4214L57.0075 12.6387L57.0075 12.6387L56.9324 13.4214ZM57.1348 13.6667L57.9174 13.7417L57.9174 13.7417L57.1348 13.6667ZM57.1204 13.8159L56.3378 13.7408L56.3378 13.7408L57.1204 13.8159ZM56.8752 14.0183L56.9503 13.2356L56.9503 13.2356L56.8752 14.0183ZM53.3685 13.6819L53.4436 12.8992L53.4436 12.8992L53.3685 13.6819ZM53.1662 13.4366L53.9488 13.5117L53.9488 13.5117L53.1662 13.4366ZM53.1075 14.1119L53.8907 14.1809L53.8907 14.1809L53.1075 14.1119ZM53.3512 13.9076L53.4202 13.1244L53.4202 13.1244L53.3512 13.9076ZM53.0944 14.2612L53.8776 14.3303L53.0944 14.2612ZM53.2986 14.5049L53.2296 15.2881L53.2296 15.2881L53.2986 14.5049ZM56.8078 14.8141L56.8768 14.0309L56.8768 14.0309L56.8078 14.8141ZM57.0515 14.6099L57.8347 14.6789L57.8347 14.6789L57.0515 14.6099ZM57.0646 14.4605L57.8478 14.5295L57.0646 14.4605ZM56.8604 14.2168L56.9294 13.4336L56.9294 13.4336L56.8604 14.2168ZM56.621 14.8572L57.1498 15.439L58.6044 14.1169L56.6393 14.0712L56.621 14.8572ZM53.5488 14.7857L53.5671 13.9996L51.3264 13.9475L53.0435 15.388L53.5488 14.7857ZM55.8168 15.5882L55.7985 16.3742L56.1129 16.3815L56.3456 16.17L55.8168 15.5882ZM55.7785 15.5873L55.7968 14.8013L54.9327 14.7812L54.9942 15.6433L55.7785 15.5873ZM54.5849 15.5595L55.3512 15.7356L55.5671 14.7959L54.6032 14.7735L54.5849 15.5595ZM54.468 15.5568L53.9627 16.1591L54.174 16.3364L54.4497 16.3428L54.468 15.5568ZM58.5818 8.14635C59.7071 7.21944 60.4288 5.82817 60.4232 4.26895L58.8507 4.27459C58.8545 5.33116 58.3677 6.28547 57.5821 6.93261L58.5818 8.14635ZM57.9945 10.117L58.8222 7.80444L57.3417 7.27452L56.514 9.58706L57.9945 10.117ZM57.6306 11.2635L58.0035 10.0901L56.5049 9.61388L56.132 10.7872L57.6306 11.2635ZM53.5657 11.8235L56.8842 11.8116L56.8785 10.2391L53.56 10.251L53.5657 11.8235ZM52.4036 10.1318L52.8226 11.3023L54.3031 10.7723L53.8841 9.60178L52.4036 10.1318ZM51.5289 7.74246L52.4055 10.137L53.8821 9.5965L53.0056 7.20192L51.5289 7.74246ZM50.0074 4.30635C50.0128 5.80785 50.6917 7.14934 51.7531 8.06697L52.7815 6.87741C52.0416 6.23778 51.5835 5.31861 51.5799 4.3007L50.0074 4.30635ZM55.1971 -0.770342C52.3467 -0.760107 49.9973 1.48756 50.0074 4.30635L51.5799 4.3007C51.5731 2.40104 53.1692 0.809429 55.2028 0.802128L55.1971 -0.770342ZM60.4232 4.26895C60.4131 1.45016 58.0476 -0.780576 55.1971 -0.770342L55.2028 0.802128C57.2363 0.794826 58.8439 2.37493 58.8507 4.27459L60.4232 4.26895ZM53.9997 11.2616C54.0008 11.5716 53.7504 11.8239 53.4403 11.825L53.4347 10.2525C52.8763 10.2545 52.4252 10.7088 52.4272 11.2672L53.9997 11.2616ZM54.0002 11.4115L53.9997 11.2616L52.4272 11.2672L52.4278 11.4172L54.0002 11.4115ZM53.4368 10.8521C53.7469 10.851 53.9991 11.1015 54.0002 11.4115L52.4278 11.4172C52.4298 11.9756 52.8841 12.4266 53.4425 12.4246L53.4368 10.8521ZM56.9595 10.8395L53.4368 10.8521L53.4425 12.4246L56.9652 12.4119L56.9595 10.8395ZM56.4001 11.4029C56.399 11.0928 56.6495 10.8406 56.9595 10.8395L56.9652 12.4119C57.5236 12.4099 57.9746 11.9556 57.9726 11.3972L56.4001 11.4029ZM56.3996 11.2529L56.4001 11.4029L57.9726 11.3972L57.9721 11.2473L56.3996 11.2529ZM56.963 11.8123C56.653 11.8134 56.4007 11.563 56.3996 11.2529L57.9721 11.2473C57.9701 10.6889 57.5158 10.2379 56.9574 10.2399L56.963 11.8123ZM53.4403 11.825L56.963 11.8123L56.9574 10.2399L53.4347 10.2525L53.4403 11.825ZM53.5242 10.8674C52.9667 10.8359 52.4892 11.2622 52.4577 11.8197L54.0276 11.9086C54.0101 12.2181 53.7449 12.4549 53.4354 12.4374L53.5242 10.8674ZM57.0414 11.0664L53.5242 10.8674L53.4354 12.4374L56.9525 12.6364L57.0414 11.0664ZM57.9937 12.133C58.0252 11.5755 57.5989 11.098 57.0414 11.0664L56.9525 12.6364C56.6429 12.6189 56.4062 12.3537 56.4237 12.0442L57.9937 12.133ZM57.9852 12.2827L57.9937 12.133L56.4237 12.0442L56.4152 12.1939L57.9852 12.2827ZM56.9186 13.235C57.4761 13.2666 57.9537 12.8402 57.9852 12.2827L56.4152 12.1939C56.4328 11.8843 56.6979 11.6476 57.0075 11.6651L56.9186 13.235ZM53.4015 13.036L56.9186 13.235L57.0075 11.6651L53.4904 11.4661L53.4015 13.036ZM52.4492 11.9694C52.4176 12.5269 52.844 13.0045 53.4015 13.036L53.4904 11.4661C53.7999 11.4836 54.0367 11.7487 54.0191 12.0583L52.4492 11.9694ZM52.4577 11.8197L52.4492 11.9694L54.0191 12.0583L54.0276 11.9086L52.4577 11.8197ZM54.0379 12.6117C54.0083 12.9203 53.734 13.1465 53.4254 13.1169L53.5756 11.5516C53.0197 11.4983 52.5259 11.9057 52.4726 12.4615L54.0379 12.6117ZM54.0235 12.761L54.0379 12.6117L52.4726 12.4615L52.4582 12.6108L54.0235 12.761ZM53.5183 12.1485C53.827 12.1781 54.0531 12.4523 54.0235 12.761L52.4582 12.6108C52.4049 13.1666 52.8123 13.6605 53.3682 13.7138L53.5183 12.1485ZM57.025 12.4849L53.5183 12.1485L53.3681 13.7138L56.8748 14.0502L57.025 12.4849ZM56.4125 12.9901C56.4421 12.6815 56.7163 12.4553 57.025 12.4849L56.8748 14.0502C57.4306 14.1035 57.9245 13.6961 57.9778 13.1403L56.4125 12.9901ZM56.4268 12.8409L56.4125 12.9901L57.9778 13.1403L57.9921 12.991L56.4268 12.8409ZM56.9321 13.4533C56.6234 13.4237 56.3972 13.1495 56.4268 12.8409L57.9921 12.991C58.0454 12.4352 57.6381 11.9414 57.0822 11.888L56.9321 13.4533ZM53.4254 13.1169L56.9321 13.4533L57.0822 11.888L53.5756 11.5516L53.4254 13.1169ZM53.5009 12.3023C52.945 12.249 52.4512 12.6564 52.3979 13.2122L53.9632 13.3624C53.9335 13.671 53.6593 13.8972 53.3507 13.8676L53.5009 12.3023ZM57.0075 12.6387L53.5009 12.3023L53.3507 13.8676L56.8573 14.204L57.0075 12.6387ZM57.9174 13.7417C57.9707 13.1859 57.5634 12.6921 57.0075 12.6387L56.8573 14.204C56.5487 14.1744 56.3225 13.9002 56.3521 13.5916L57.9174 13.7417ZM57.9031 13.891L57.9174 13.7417L56.3521 13.5916L56.3378 13.7408L57.9031 13.891ZM56.8001 14.8009C57.3559 14.8542 57.8498 14.4469 57.9031 13.891L56.3378 13.7408C56.3674 13.4322 56.6416 13.206 56.9503 13.2356L56.8001 14.8009ZM53.2934 14.4645L56.8001 14.8009L56.9503 13.2356L53.4436 12.8992L53.2934 14.4645ZM52.3835 13.3615C52.3302 13.9173 52.7376 14.4112 53.2934 14.4645L53.4436 12.8992C53.7522 12.9288 53.9784 13.203 53.9488 13.5117L52.3835 13.3615ZM52.3979 13.2122L52.3835 13.3615L53.9488 13.5117L53.9632 13.3624L52.3979 13.2122ZM53.8907 14.1809C53.8635 14.4897 53.5911 14.7181 53.2822 14.6909L53.4202 13.1244C52.864 13.0754 52.3733 13.4866 52.3243 14.0429L53.8907 14.1809ZM53.8776 14.3303L53.8907 14.1809L52.3243 14.0429L52.3112 14.1922L53.8776 14.3303ZM53.3676 13.7217C53.6765 13.749 53.9048 14.0214 53.8776 14.3303L52.3112 14.1922C52.2622 14.7485 52.6733 15.2391 53.2296 15.2881L53.3676 13.7217ZM56.8768 14.0309L53.3676 13.7217L53.2296 15.2881L56.7387 15.5973L56.8768 14.0309ZM56.2682 14.5409C56.2955 14.232 56.5679 14.0037 56.8768 14.0309L56.7387 15.5973C57.295 15.6464 57.7856 15.2352 57.8347 14.6789L56.2682 14.5409ZM56.2814 14.3915L56.2682 14.5409L57.8347 14.6789L57.8478 14.5295L56.2814 14.3915ZM56.7914 15C56.4825 14.9728 56.2542 14.7004 56.2814 14.3915L57.8478 14.5295C57.8968 13.9733 57.4856 13.4826 56.9294 13.4336L56.7914 15ZM53.2822 14.6909L56.7914 15L56.9294 13.4336L53.4202 13.1244L53.2822 14.6909ZM56.6393 14.0712L53.5671 13.9996L53.5305 15.5717L56.6027 15.6432L56.6393 14.0712ZM56.3456 16.17L57.1498 15.439L56.0922 14.2754L55.2879 15.0064L56.3456 16.17ZM55.7602 16.3733L55.7985 16.3742L55.8351 14.8022L55.7968 14.8013L55.7602 16.3733ZM54.9942 15.6433C54.9933 15.6301 54.9928 15.6172 54.9928 15.6047L56.5653 15.599C56.5652 15.5766 56.5644 15.554 56.5627 15.5313L54.9942 15.6433ZM54.9928 15.6047C54.9923 15.4668 55.0412 15.3845 55.0497 15.3706C55.0624 15.3498 55.0675 15.3484 55.0574 15.3572C55.0482 15.3653 55.0421 15.3678 55.0468 15.3656C55.05 15.3641 55.0611 15.3592 55.0801 15.3542C55.0988 15.3494 55.1324 15.3426 55.1785 15.3424L55.1841 16.9149C55.5743 16.9135 55.9006 16.708 56.0898 16.5433C56.1982 16.449 56.3062 16.3304 56.3921 16.1895C56.4738 16.0556 56.5662 15.8507 56.5653 15.599L54.9928 15.6047ZM55.1785 15.3424C55.2246 15.3423 55.2583 15.3488 55.2769 15.3535C55.296 15.3584 55.3071 15.3632 55.3103 15.3647C55.315 15.3668 55.3089 15.3643 55.2997 15.3564C55.2895 15.3476 55.2946 15.349 55.3075 15.3697C55.3161 15.3836 55.3656 15.4655 55.3661 15.6033L53.7936 15.609C53.7945 15.8607 53.8883 16.0649 53.971 16.1982C54.0579 16.3384 54.1668 16.4563 54.2758 16.5499C54.4661 16.7131 54.794 16.9163 55.1841 16.9149L55.1785 15.3424ZM55.3661 15.6033C55.3662 15.6455 55.3616 15.6901 55.3512 15.7356L53.8186 15.3834C53.8014 15.4585 53.7933 15.5341 53.7936 15.609L55.3661 15.6033ZM54.4497 16.3428L54.5666 16.3455L54.6032 14.7735L54.4863 14.7708L54.4497 16.3428ZM53.0435 15.388L53.9627 16.1591L54.9733 14.9544L54.0542 14.1833L53.0435 15.388Z" fill="#FFFDFB" mask="url(#path-3-inside-1_1069_3909)"/>
                    </svg>
                </div>
                <div className="nav__menu">
                    <Link to={`/`}>Головна</Link>
                    <a href="#">Послуги</a>
                    <Link to={`/events`}>Івенти</Link>
                    <Link to={`/about`}>Про нас</Link>
                    <a href="#">Контакти</a>
                </div>
                <div className="nav__services">
                    <div className="nav__services-language">
                        <p>UA</p>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.23764L6 6.23764L11 1.23764" stroke="white"/>
                        </svg>
                    </div>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1069_3904)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.7849 5.33022C14.7849 7.67425 12.8073 9.62279 10.3071 9.62279C7.80689 9.62279 5.8293 7.67425 5.8293 5.33022C5.8293 2.98619 7.80689 1.03764 10.3071 1.03764C12.8073 1.03764 14.7849 2.98619 14.7849 5.33022ZM15.5849 5.33022C15.5849 8.14277 13.2219 10.4228 10.3071 10.4228C7.39224 10.4228 5.0293 8.14277 5.0293 5.33022C5.0293 2.51766 7.39224 0.23764 10.3071 0.23764C13.2219 0.23764 15.5849 2.51766 15.5849 5.33022ZM19.2004 15.6081C19.2004 16.4094 18.5094 17.3624 16.8674 18.1626C15.2793 18.9365 13.0293 19.4377 10.5004 19.4377C7.97148 19.4377 5.7214 18.9365 4.13331 18.1626C2.49134 17.3624 1.80037 16.4094 1.80037 15.6081C1.80037 14.8768 2.39494 14.1352 4.04893 13.5519C5.64619 12.9885 7.91864 12.7044 10.5004 12.7044C13.0821 12.7044 15.3545 12.9885 16.9518 13.5519C18.6058 14.1352 19.2004 14.8768 19.2004 15.6081ZM20.0004 15.6081C20.0004 18.1649 15.7471 20.2377 10.5004 20.2377C5.25366 20.2377 1.00037 18.1649 1.00037 15.6081C1.00037 13.0512 5.25366 11.9044 10.5004 11.9044C15.7471 11.9044 20.0004 13.0512 20.0004 15.6081Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1069_3904">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.23764)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
    )
}
export default Nav
