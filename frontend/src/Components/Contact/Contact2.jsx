import React from 'react'
import './Contact2.css'
import image1 from "../../Assets/image 3.3.jpg"
import image3 from "../../Assets/image 2.3.jpg"
import image2 from "../../Assets/image 1.3.jpg"
import SecondaryButton from "../Button/SecondaryButton";
import PrimaryButton from "../Button/PrimaryButton";

const Contact2 = () => {
    return (
        <div className="contact">
            <section className="contact__container">
                <div className="contact__media">
                    <div className="contact__media-image">
                        <img src={image1} alt="building"/>
                    </div>
                    <div className="contact__media-bottom">
                        <div className="contact__media-button">
                            <div className="contact__media-button-image">
                                <img src={image2} alt="door"/>
                            </div>
                            <SecondaryButton text="пОКАЗАТИ БІЛЬШЕ"/>
                        </div>
                        <div className="contact__media-bottom-image">
                            <img src={image3} alt="sofa"/>
                        </div>
                    </div>
                </div>
                <div className="contact__info">
                    <div className="contact__info-title">
                        <svg width="133" height="63" viewBox="0 0 133 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6989 44.7407C8.82772 44.7407 7.0996 44.5095 5.51457 44.0472C3.95156 43.5629 2.60869 42.9025 1.48596 42.066L2.80682 38.7308C3.5553 39.2591 4.33681 39.7104 5.15134 40.0847C5.96586 40.4369 6.83543 40.7121 7.76002 40.9102C8.68462 41.0863 9.66426 41.1744 10.6989 41.1744C12.4381 41.1744 13.6929 40.8882 14.4634 40.3158C15.2339 39.7435 15.6191 38.995 15.6191 38.0704C15.6191 37.2558 15.3549 36.6394 14.8266 36.2212C14.2983 35.7809 13.3516 35.4177 11.9868 35.1315L8.25534 34.372C6.11996 33.9317 4.52393 33.1942 3.46724 32.1595C2.41056 31.1249 1.88222 29.738 1.88222 27.9989C1.88222 26.5459 2.26747 25.2801 3.03797 24.2014C3.80847 23.1227 4.88716 22.2862 6.27406 21.6918C7.66096 21.0974 9.27901 20.8002 11.1282 20.8002C12.7793 20.8002 14.3093 21.0423 15.7182 21.5267C17.1271 21.989 18.3049 22.6604 19.2515 23.541L17.9306 26.711C16.984 25.9185 15.9493 25.3351 14.8266 24.9609C13.7039 24.5646 12.4491 24.3665 11.0622 24.3665C9.49915 24.3665 8.27736 24.6747 7.39679 25.2911C6.53823 25.8855 6.10895 26.711 6.10895 27.7677C6.10895 28.5822 6.37313 29.2316 6.90147 29.716C7.45182 30.2003 8.37642 30.5745 9.67526 30.8387L13.3737 31.5652C15.5751 32.0054 17.2041 32.7319 18.2608 33.7446C19.3175 34.7352 19.8458 36.0781 19.8458 37.7732C19.8458 39.1601 19.4716 40.3819 18.7231 41.4386C17.9746 42.4732 16.918 43.2877 15.5531 43.8821C14.1882 44.4545 12.5701 44.7407 10.6989 44.7407ZM33.858 44.4105L23.4893 21.1304H28.0793L36.4337 40.6791H35.0468L43.4012 21.1304H47.826L37.4573 44.4105H33.858ZM53.0171 44.4105V21.1304H57.2769V44.4105H53.0171ZM70.772 44.4105V24.6307H63.0781V21.1304H82.7258V24.6307H75.0318V44.4105H70.772ZM88.6247 44.4105V21.1304H92.8845V40.8111H103.848V44.4105H88.6247ZM107.975 32.7539C107.975 30.3103 108.415 28.197 109.296 26.4138C110.198 24.6307 111.486 23.2548 113.159 22.2862C114.832 21.2955 116.824 20.8002 119.136 20.8002C121.425 20.8002 123.407 21.2955 125.08 22.2862C126.753 23.2548 128.041 24.6307 128.943 26.4138C129.868 28.197 130.33 30.2993 130.33 32.7209C130.33 35.1645 129.868 37.2889 128.943 39.094C128.041 40.8772 126.753 42.2641 125.08 43.2547C123.407 44.2454 121.425 44.7407 119.136 44.7407C116.824 44.7407 114.832 44.2454 113.159 43.2547C111.508 42.2641 110.231 40.8772 109.329 39.094C108.426 37.2889 107.975 35.1755 107.975 32.7539ZM112.433 32.7539C112.433 35.3736 112.994 37.421 114.117 38.8959C115.239 40.3709 116.913 41.1083 119.136 41.1083C121.293 41.1083 122.955 40.3709 124.122 38.8959C125.289 37.421 125.872 35.3736 125.872 32.7539C125.872 30.1122 125.289 28.0649 124.122 26.612C122.977 25.159 121.315 24.4325 119.136 24.4325C116.913 24.4325 115.239 25.159 114.117 26.612C112.994 28.0649 112.433 30.1122 112.433 32.7539Z" fill="#FFFDFB"/>
                            <path d="M93.7669 58.5724C93.0795 58.5724 92.4811 58.4834 91.9716 58.3055C91.4621 58.1195 91.0052 57.8526 90.6009 57.5049L90.8556 57.0682C91.1548 57.3027 91.4419 57.4968 91.7169 57.6505C91.9918 57.796 92.291 57.9052 92.6145 57.978C92.9461 58.0427 93.3261 58.075 93.7547 58.075C94.5473 58.075 95.1457 57.9173 95.55 57.6019C95.9625 57.2785 96.1687 56.8499 96.1687 56.3161C96.1687 55.8633 96.0231 55.5155 95.732 55.2729C95.4489 55.0303 94.9597 54.8403 94.2642 54.7028L93.0633 54.4602C92.2789 54.2984 91.6966 54.0437 91.3166 53.696C90.9365 53.3482 90.7464 52.8671 90.7464 52.2525C90.7464 51.7673 90.8718 51.3427 91.1225 50.9788C91.3732 50.6149 91.7209 50.3318 92.1657 50.1297C92.6105 49.9275 93.128 49.8264 93.7184 49.8264C94.3168 49.8264 94.8626 49.9194 95.3559 50.1054C95.8492 50.2914 96.2738 50.5704 96.6296 50.9424L96.387 51.3791C95.9908 50.999 95.5824 50.7281 95.1619 50.5664C94.7413 50.4046 94.2602 50.3237 93.7184 50.3237C92.9744 50.3237 92.38 50.4976 91.9352 50.8454C91.4985 51.1931 91.2802 51.6621 91.2802 52.2525C91.2802 52.7296 91.4217 53.1016 91.7047 53.3685C91.9878 53.6272 92.4447 53.8213 93.0755 53.9507L94.2885 54.1933C95.1295 54.3631 95.7401 54.6098 96.1202 54.9333C96.5083 55.2487 96.7024 55.7056 96.7024 56.304C96.7024 56.7488 96.5852 57.145 96.3506 57.4928C96.1161 57.8324 95.7765 58.0993 95.3317 58.2934C94.895 58.4794 94.3734 58.5724 93.7669 58.5724ZM99.529 58.4753V49.9234H102.719C103.585 49.9234 104.256 50.1297 104.733 50.5421C105.21 50.9545 105.449 51.5327 105.449 52.2767C105.449 53.0126 105.21 53.5908 104.733 54.0114C104.256 54.4238 103.585 54.63 102.719 54.63H100.038V58.4753H99.529ZM100.038 54.1569H102.707C103.427 54.1569 103.973 53.9952 104.345 53.6717C104.717 53.3401 104.903 52.8752 104.903 52.2767C104.903 51.6783 104.717 51.2173 104.345 50.8939C103.973 50.5623 103.427 50.3965 102.707 50.3965H100.038V54.1569ZM106.709 58.4753L110.384 49.9234H110.882L114.63 58.4753H114.072L112.992 56.0007L113.271 56.1099H107.97L108.31 56.0007L107.255 58.4753H106.709ZM110.615 50.6027L108.443 55.7096L108.176 55.6368H113.065L112.871 55.7096L110.639 50.6027H110.615ZM120.652 58.5724C119.827 58.5724 119.127 58.3985 118.553 58.0508C117.987 57.6949 117.554 57.1895 117.255 56.5345C116.956 55.8794 116.806 55.099 116.806 54.1933C116.806 53.2876 116.956 52.5112 117.255 51.8643C117.554 51.2093 117.987 50.7079 118.553 50.3601C119.127 50.0043 119.827 49.8264 120.652 49.8264C121.274 49.8264 121.82 49.9275 122.289 50.1297C122.766 50.3237 123.187 50.6108 123.551 50.9909L123.284 51.4155C122.888 51.0354 122.483 50.7604 122.071 50.5906C121.667 50.4127 121.189 50.3237 120.64 50.3237C119.564 50.3237 118.747 50.6634 118.189 51.3427C117.631 52.0139 117.352 52.9641 117.352 54.1933C117.352 55.4225 117.631 56.3768 118.189 57.0561C118.747 57.7354 119.564 58.075 120.64 58.075C121.189 58.075 121.667 57.9901 122.071 57.8203C122.483 57.6424 122.888 57.3634 123.284 56.9833L123.551 57.4078C123.187 57.7879 122.766 58.0791 122.289 58.2812C121.812 58.4753 121.266 58.5724 120.652 58.5724ZM126.512 58.4753V49.9234H131.704V50.3965H127.021V53.9022H131.437V54.3753H127.021V58.0022H131.704V58.4753H126.512Z" fill="#FFFBFB"/>
                            <mask id="path-3-inside-1_1069_3909" fill="white">
                                <path fillRule="evenodd" clipRule="evenodd" d="M59.6369 4.27177C59.6416 5.57966 59.0374 6.75246 58.082 7.53948L57.2542 9.85201L56.8813 11.0253L53.5628 11.0373L53.1438 9.86677L52.2673 7.47219C51.3666 6.69356 50.7982 5.56323 50.7937 4.30352C50.7852 1.9443 52.758 0.0246609 55.2 0.0158929C57.642 0.00712493 59.6285 1.91255 59.6369 4.27177ZM53.4375 11.0387C53.3133 11.0392 53.213 11.1402 53.2135 11.2644L53.214 11.4143C53.2144 11.5385 53.3155 11.6388 53.4396 11.6384L56.9624 11.6257C57.0865 11.6253 57.1868 11.5242 57.1864 11.4001L57.1858 11.2501C57.1854 11.126 57.0844 11.0257 56.9602 11.0261L53.4375 11.0387ZM53.2426 11.8642C53.2497 11.7402 53.3558 11.6454 53.4798 11.6524L56.9969 11.8514C57.1209 11.8584 57.2157 11.9646 57.2087 12.0886L57.2002 12.2383C57.1932 12.3623 57.087 12.4571 56.9631 12.4501L53.4459 12.251C53.322 12.244 53.2271 12.1378 53.2342 12.0139L53.2426 11.8642ZM53.5005 12.3343C53.3769 12.3224 53.2671 12.413 53.2552 12.5366L53.2409 12.6859C53.229 12.8095 53.3196 12.9193 53.4432 12.9311L56.9499 13.2676C57.0735 13.2794 57.1833 13.1888 57.1952 13.0652L57.2095 12.916C57.2213 12.7924 57.1307 12.6825 57.0071 12.6707L53.5005 12.3343ZM53.1805 13.2873C53.1924 13.1637 53.3022 13.0731 53.4258 13.085L56.9324 13.4214C57.056 13.4332 57.1466 13.5431 57.1348 13.6667L57.1204 13.8159C57.1086 13.9395 56.9988 14.0301 56.8752 14.0183L53.3685 13.6819C53.2449 13.67 53.1543 13.5602 53.1662 13.4366L53.1805 13.2873ZM53.3512 13.9076C53.2275 13.8967 53.1184 13.9882 53.1075 14.1119L53.0944 14.2612C53.0835 14.3849 53.1749 14.494 53.2986 14.5049L56.8078 14.8141C56.9314 14.825 57.0406 14.7336 57.0515 14.6099L57.0646 14.4605C57.0755 14.3368 56.9841 14.2277 56.8604 14.2168L53.3512 13.9076ZM53.5488 14.7857L56.621 14.8572L55.8168 15.5882L55.7785 15.5873C55.7788 15.5921 55.779 15.5969 55.779 15.6018C55.7798 15.8295 55.4297 16.1278 55.1813 16.1287C54.9329 16.1295 54.5806 15.8338 54.5798 15.6062C54.5798 15.5898 54.5815 15.5743 54.5849 15.5595L54.468 15.5568L53.5488 14.7857Z"/>
                            </mask>
                            <path d="M58.082 7.53948L57.5821 6.93261L57.4148 7.07043L57.3417 7.27452L58.082 7.53948ZM57.2542 9.85201L56.514 9.58706L56.5092 9.60038L56.5049 9.61388L57.2542 9.85201ZM56.8813 11.0253L56.8842 11.8116L57.4571 11.8095L57.6306 11.2635L56.8813 11.0253ZM53.5628 11.0373L52.8226 11.3023L53.0099 11.8255L53.5657 11.8235L53.5628 11.0373ZM53.1438 9.86677L53.8841 9.60177L53.8821 9.5965L53.1438 9.86677ZM52.2673 7.47219L53.0056 7.20192L52.9356 7.01064L52.7815 6.87741L52.2673 7.47219ZM53.4375 11.0387L53.4403 11.825L53.4375 11.0387ZM56.9602 11.0261L56.9574 10.2399L56.9602 11.0261ZM53.4798 11.6524L53.4354 12.4374L53.4354 12.4374L53.4798 11.6524ZM53.2426 11.8642L54.0276 11.9086L54.0276 11.9086L53.2426 11.8642ZM56.9969 11.8514L57.0414 11.0664L57.0414 11.0664L56.9969 11.8514ZM57.2087 12.0886L57.9937 12.133L57.9937 12.133L57.2087 12.0886ZM57.2002 12.2383L57.9852 12.2827L57.9852 12.2827L57.2002 12.2383ZM56.9631 12.4501L57.0075 11.6651L57.0075 11.6651L56.9631 12.4501ZM53.4459 12.251L53.4015 13.036L53.4015 13.036L53.4459 12.251ZM53.2342 12.0139L52.4492 11.9694L52.4492 11.9694L53.2342 12.0139ZM53.2552 12.5366L54.0379 12.6117L53.2552 12.5366ZM53.5005 12.3343L53.4254 13.1169L53.4254 13.1169L53.5005 12.3343ZM53.2409 12.6859L54.0235 12.761L54.0235 12.761L53.2409 12.6859ZM53.4432 12.9311L53.5183 12.1485L53.5183 12.1485L53.4432 12.9311ZM56.9499 13.2676L57.025 12.4849L57.025 12.4849L56.9499 13.2676ZM57.1952 13.0652L56.4125 12.9901L56.4125 12.9901L57.1952 13.0652ZM57.2095 12.916L57.9921 12.991L57.9921 12.991L57.2095 12.916ZM57.0071 12.6707L57.0822 11.888L57.0822 11.888L57.0071 12.6707ZM53.4258 13.085L53.3507 13.8676L53.3507 13.8676L53.4258 13.085ZM53.1805 13.2873L53.9632 13.3624L53.1805 13.2873ZM56.9324 13.4214L57.0075 12.6387L57.0075 12.6387L56.9324 13.4214ZM57.1348 13.6667L57.9174 13.7417L57.9174 13.7417L57.1348 13.6667ZM57.1204 13.8159L56.3378 13.7408L56.3378 13.7408L57.1204 13.8159ZM56.8752 14.0183L56.9503 13.2356L56.9503 13.2356L56.8752 14.0183ZM53.3685 13.6819L53.4436 12.8992L53.4436 12.8992L53.3685 13.6819ZM53.1662 13.4366L53.9488 13.5117L53.9488 13.5117L53.1662 13.4366ZM53.1075 14.1119L53.8907 14.1809L53.8907 14.1809L53.1075 14.1119ZM53.3512 13.9076L53.4202 13.1244L53.4202 13.1244L53.3512 13.9076ZM53.0944 14.2612L53.8776 14.3303L53.0944 14.2612ZM53.2986 14.5049L53.2296 15.2881L53.2296 15.2881L53.2986 14.5049ZM56.8078 14.8141L56.8768 14.0309L56.8768 14.0309L56.8078 14.8141ZM57.0515 14.6099L57.8347 14.6789L57.8347 14.6789L57.0515 14.6099ZM57.0646 14.4605L57.8478 14.5295L57.0646 14.4605ZM56.8604 14.2168L56.9294 13.4336L56.9294 13.4336L56.8604 14.2168ZM56.621 14.8572L57.1498 15.439L58.6044 14.1169L56.6393 14.0712L56.621 14.8572ZM53.5488 14.7857L53.5671 13.9996L51.3264 13.9475L53.0435 15.388L53.5488 14.7857ZM55.8168 15.5882L55.7985 16.3742L56.1129 16.3815L56.3456 16.17L55.8168 15.5882ZM55.7785 15.5873L55.7968 14.8013L54.9327 14.7812L54.9942 15.6433L55.7785 15.5873ZM54.5849 15.5595L55.3512 15.7356L55.5671 14.7959L54.6032 14.7735L54.5849 15.5595ZM54.468 15.5568L53.9627 16.1591L54.174 16.3364L54.4497 16.3428L54.468 15.5568ZM58.5818 8.14635C59.7071 7.21944 60.4288 5.82817 60.4232 4.26895L58.8507 4.27459C58.8545 5.33116 58.3677 6.28547 57.5821 6.93261L58.5818 8.14635ZM57.9945 10.117L58.8222 7.80444L57.3417 7.27452L56.514 9.58706L57.9945 10.117ZM57.6306 11.2635L58.0035 10.0901L56.5049 9.61388L56.132 10.7872L57.6306 11.2635ZM53.5657 11.8235L56.8842 11.8116L56.8785 10.2391L53.56 10.251L53.5657 11.8235ZM52.4036 10.1318L52.8226 11.3023L54.3031 10.7723L53.8841 9.60178L52.4036 10.1318ZM51.5289 7.74246L52.4055 10.137L53.8821 9.5965L53.0056 7.20192L51.5289 7.74246ZM50.0074 4.30635C50.0128 5.80785 50.6917 7.14934 51.7531 8.06697L52.7815 6.87741C52.0416 6.23778 51.5835 5.31861 51.5799 4.3007L50.0074 4.30635ZM55.1971 -0.770342C52.3467 -0.760107 49.9973 1.48756 50.0074 4.30635L51.5799 4.3007C51.5731 2.40104 53.1692 0.809429 55.2028 0.802128L55.1971 -0.770342ZM60.4232 4.26895C60.4131 1.45016 58.0476 -0.780576 55.1971 -0.770342L55.2028 0.802128C57.2363 0.794826 58.8439 2.37493 58.8507 4.27459L60.4232 4.26895ZM53.9997 11.2616C54.0008 11.5716 53.7504 11.8239 53.4403 11.825L53.4347 10.2525C52.8763 10.2545 52.4252 10.7088 52.4272 11.2672L53.9997 11.2616ZM54.0002 11.4115L53.9997 11.2616L52.4272 11.2672L52.4278 11.4172L54.0002 11.4115ZM53.4368 10.8521C53.7469 10.851 53.9991 11.1015 54.0002 11.4115L52.4278 11.4172C52.4298 11.9756 52.8841 12.4266 53.4425 12.4246L53.4368 10.8521ZM56.9595 10.8395L53.4368 10.8521L53.4425 12.4246L56.9652 12.4119L56.9595 10.8395ZM56.4001 11.4029C56.399 11.0928 56.6495 10.8406 56.9595 10.8395L56.9652 12.4119C57.5236 12.4099 57.9746 11.9556 57.9726 11.3972L56.4001 11.4029ZM56.3996 11.2529L56.4001 11.4029L57.9726 11.3972L57.9721 11.2473L56.3996 11.2529ZM56.963 11.8123C56.653 11.8134 56.4007 11.563 56.3996 11.2529L57.9721 11.2473C57.9701 10.6889 57.5158 10.2379 56.9574 10.2399L56.963 11.8123ZM53.4403 11.825L56.963 11.8123L56.9574 10.2399L53.4347 10.2525L53.4403 11.825ZM53.5242 10.8674C52.9667 10.8359 52.4892 11.2622 52.4577 11.8197L54.0276 11.9086C54.0101 12.2181 53.7449 12.4549 53.4354 12.4374L53.5242 10.8674ZM57.0414 11.0664L53.5242 10.8674L53.4354 12.4374L56.9525 12.6364L57.0414 11.0664ZM57.9937 12.133C58.0252 11.5755 57.5989 11.098 57.0414 11.0664L56.9525 12.6364C56.6429 12.6189 56.4062 12.3537 56.4237 12.0442L57.9937 12.133ZM57.9852 12.2827L57.9937 12.133L56.4237 12.0442L56.4152 12.1939L57.9852 12.2827ZM56.9186 13.235C57.4761 13.2666 57.9537 12.8402 57.9852 12.2827L56.4152 12.1939C56.4328 11.8843 56.6979 11.6476 57.0075 11.6651L56.9186 13.235ZM53.4015 13.036L56.9186 13.235L57.0075 11.6651L53.4904 11.4661L53.4015 13.036ZM52.4492 11.9694C52.4176 12.5269 52.844 13.0045 53.4015 13.036L53.4904 11.4661C53.7999 11.4836 54.0367 11.7487 54.0191 12.0583L52.4492 11.9694ZM52.4577 11.8197L52.4492 11.9694L54.0191 12.0583L54.0276 11.9086L52.4577 11.8197ZM54.0379 12.6117C54.0083 12.9203 53.734 13.1465 53.4254 13.1169L53.5756 11.5516C53.0197 11.4983 52.5259 11.9057 52.4726 12.4615L54.0379 12.6117ZM54.0235 12.761L54.0379 12.6117L52.4726 12.4615L52.4582 12.6108L54.0235 12.761ZM53.5183 12.1485C53.827 12.1781 54.0531 12.4523 54.0235 12.761L52.4582 12.6108C52.4049 13.1666 52.8123 13.6605 53.3682 13.7138L53.5183 12.1485ZM57.025 12.4849L53.5183 12.1485L53.3681 13.7138L56.8748 14.0502L57.025 12.4849ZM56.4125 12.9901C56.4421 12.6815 56.7163 12.4553 57.025 12.4849L56.8748 14.0502C57.4306 14.1035 57.9245 13.6961 57.9778 13.1403L56.4125 12.9901ZM56.4268 12.8409L56.4125 12.9901L57.9778 13.1403L57.9921 12.991L56.4268 12.8409ZM56.9321 13.4533C56.6234 13.4237 56.3972 13.1495 56.4268 12.8409L57.9921 12.991C58.0454 12.4352 57.6381 11.9414 57.0822 11.888L56.9321 13.4533ZM53.4254 13.1169L56.9321 13.4533L57.0822 11.888L53.5756 11.5516L53.4254 13.1169ZM53.5009 12.3023C52.945 12.249 52.4512 12.6564 52.3979 13.2122L53.9632 13.3624C53.9335 13.671 53.6593 13.8972 53.3507 13.8676L53.5009 12.3023ZM57.0075 12.6387L53.5009 12.3023L53.3507 13.8676L56.8573 14.204L57.0075 12.6387ZM57.9174 13.7417C57.9707 13.1859 57.5634 12.6921 57.0075 12.6387L56.8573 14.204C56.5487 14.1744 56.3225 13.9002 56.3521 13.5916L57.9174 13.7417ZM57.9031 13.891L57.9174 13.7417L56.3521 13.5916L56.3378 13.7408L57.9031 13.891ZM56.8001 14.8009C57.3559 14.8542 57.8498 14.4469 57.9031 13.891L56.3378 13.7408C56.3674 13.4322 56.6416 13.206 56.9503 13.2356L56.8001 14.8009ZM53.2934 14.4645L56.8001 14.8009L56.9503 13.2356L53.4436 12.8992L53.2934 14.4645ZM52.3835 13.3615C52.3302 13.9173 52.7376 14.4112 53.2934 14.4645L53.4436 12.8992C53.7522 12.9288 53.9784 13.203 53.9488 13.5117L52.3835 13.3615ZM52.3979 13.2122L52.3835 13.3615L53.9488 13.5117L53.9632 13.3624L52.3979 13.2122ZM53.8907 14.1809C53.8635 14.4897 53.5911 14.7181 53.2822 14.6909L53.4202 13.1244C52.864 13.0754 52.3733 13.4866 52.3243 14.0429L53.8907 14.1809ZM53.8776 14.3303L53.8907 14.1809L52.3243 14.0429L52.3112 14.1922L53.8776 14.3303ZM53.3676 13.7217C53.6765 13.749 53.9048 14.0214 53.8776 14.3303L52.3112 14.1922C52.2622 14.7485 52.6733 15.2391 53.2296 15.2881L53.3676 13.7217ZM56.8768 14.0309L53.3676 13.7217L53.2296 15.2881L56.7387 15.5973L56.8768 14.0309ZM56.2682 14.5409C56.2955 14.232 56.5679 14.0037 56.8768 14.0309L56.7387 15.5973C57.295 15.6464 57.7856 15.2352 57.8347 14.6789L56.2682 14.5409ZM56.2814 14.3915L56.2682 14.5409L57.8347 14.6789L57.8478 14.5295L56.2814 14.3915ZM56.7914 15C56.4825 14.9728 56.2542 14.7004 56.2814 14.3915L57.8478 14.5295C57.8968 13.9733 57.4856 13.4826 56.9294 13.4336L56.7914 15ZM53.2822 14.6909L56.7914 15L56.9294 13.4336L53.4202 13.1244L53.2822 14.6909ZM56.6393 14.0712L53.5671 13.9996L53.5305 15.5717L56.6027 15.6432L56.6393 14.0712ZM56.3456 16.17L57.1498 15.439L56.0922 14.2754L55.2879 15.0064L56.3456 16.17ZM55.7602 16.3733L55.7985 16.3742L55.8351 14.8022L55.7968 14.8013L55.7602 16.3733ZM54.9942 15.6433C54.9933 15.6301 54.9928 15.6172 54.9928 15.6047L56.5653 15.599C56.5652 15.5766 56.5644 15.554 56.5627 15.5313L54.9942 15.6433ZM54.9928 15.6047C54.9923 15.4668 55.0412 15.3845 55.0497 15.3706C55.0624 15.3498 55.0675 15.3484 55.0574 15.3572C55.0482 15.3653 55.0421 15.3678 55.0468 15.3656C55.05 15.3641 55.0611 15.3592 55.0801 15.3542C55.0988 15.3494 55.1324 15.3426 55.1785 15.3424L55.1841 16.9149C55.5743 16.9135 55.9006 16.708 56.0898 16.5433C56.1982 16.449 56.3062 16.3304 56.3921 16.1895C56.4738 16.0556 56.5662 15.8507 56.5653 15.599L54.9928 15.6047ZM55.1785 15.3424C55.2246 15.3423 55.2583 15.3488 55.2769 15.3535C55.296 15.3584 55.3071 15.3632 55.3103 15.3647C55.315 15.3668 55.3089 15.3643 55.2997 15.3564C55.2895 15.3476 55.2946 15.349 55.3075 15.3697C55.3161 15.3836 55.3656 15.4655 55.3661 15.6033L53.7936 15.609C53.7945 15.8607 53.8883 16.0649 53.971 16.1982C54.0579 16.3384 54.1668 16.4563 54.2758 16.5499C54.4661 16.7131 54.794 16.9163 55.1841 16.9149L55.1785 15.3424ZM55.3661 15.6033C55.3662 15.6455 55.3616 15.6901 55.3512 15.7356L53.8186 15.3834C53.8014 15.4585 53.7933 15.5341 53.7936 15.609L55.3661 15.6033ZM54.4497 16.3428L54.5666 16.3455L54.6032 14.7735L54.4863 14.7708L54.4497 16.3428ZM53.0435 15.388L53.9627 16.1591L54.9733 14.9544L54.0542 14.1833L53.0435 15.388Z" fill="#FFFDFB" mask="url(#path-3-inside-1_1069_3909)"/>
                        </svg>
                    </div>
                    <div className="contact__info-content">
                        <div className="contact__info-services">
                            <article>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_1069_3945" fill="white">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.18247 4.4356C9.18247 5.79028 8.55388 7.00312 7.56311 7.81672L6.69283 10.2209L6.30126 11.4378H2.85548L2.42476 10.2209L1.52595 7.7379C0.58925 6.92583 0 5.7472 0 4.4356C0 1.98589 2.05557 0 4.59124 0C7.12691 0 9.18247 1.98589 9.18247 4.4356ZM2.7197 11.507C2.59077 11.507 2.48625 11.6115 2.48625 11.7404V11.8961C2.48625 12.0251 2.59077 12.1296 2.7197 12.1296H6.37755C6.50648 12.1296 6.611 12.0251 6.611 11.8961V11.7404C6.611 11.6115 6.50648 11.507 6.37755 11.507H2.7197ZM2.51722 12.4047C2.52497 12.276 2.63558 12.178 2.76428 12.1857L6.41552 12.4055C6.54422 12.4133 6.64227 12.5239 6.63452 12.6526L6.62517 12.808C6.61742 12.9367 6.50681 13.0347 6.37811 13.027L2.72687 12.8072C2.59817 12.7995 2.50012 12.6889 2.50787 12.5602L2.51722 12.4047ZM2.78605 13.106C2.65776 13.0932 2.5434 13.1869 2.53062 13.3152L2.5152 13.4701C2.50242 13.5984 2.59608 13.7128 2.72437 13.7255L6.36422 14.0879C6.49252 14.1007 6.60688 14.007 6.61966 13.8787L6.63508 13.7238C6.64785 13.5955 6.5542 13.4811 6.4259 13.4684L2.78605 13.106ZM2.45187 14.386C2.46465 14.2577 2.57901 14.1641 2.7073 14.1769L6.34715 14.5392C6.47545 14.552 6.5691 14.6664 6.55633 14.7947L6.54091 14.9496C6.52813 15.0779 6.41377 15.1715 6.28547 15.1588L2.64562 14.7964C2.51733 14.7836 2.42367 14.6693 2.43645 14.541L2.45187 14.386ZM2.62873 15.2457C2.50033 15.234 2.3867 15.3285 2.37492 15.4569L2.3607 15.6119C2.34892 15.7403 2.44346 15.854 2.57185 15.8657L6.21441 16.1999C6.3428 16.2117 6.45643 16.1171 6.46821 15.9887L6.48243 15.8337C6.49421 15.7053 6.39967 15.5917 6.27128 15.5799L2.62873 15.2457ZM2.835 16.2584L6.02469 16.3442L5.18691 17.1002L3.78655 17.0626L2.835 16.2584ZM4.52073 18C4.77862 18 5.14333 17.6916 5.14333 17.4552C5.14333 17.2188 4.77862 17.1439 4.52073 17.1439C4.26284 17.1439 3.89812 17.2188 3.89812 17.4552C3.89812 17.6916 4.26284 18 4.52073 18Z"/>
                                    </mask>
                                    <path d="M7.56311 7.81672L7.35386 7.56191L7.28389 7.61937L7.25307 7.7045L7.56311 7.81672ZM6.69283 10.2209L6.38259 10.1086L6.37896 10.1199L6.69283 10.2209ZM6.30126 11.4378V11.7676H6.54154L6.61514 11.5388L6.30126 11.4378ZM2.85548 11.4378L2.54465 11.5478L2.62242 11.7676H2.85548V11.4378ZM2.42476 10.2209L2.73559 10.1109L2.73479 10.1087L2.42476 10.2209ZM1.52595 7.7379L1.83598 7.62567L1.80677 7.54498L1.74193 7.48876L1.52595 7.7379ZM2.76428 12.1857L2.74447 12.5149H2.74447L2.76428 12.1857ZM2.51722 12.4047L2.84635 12.4245L2.51722 12.4047ZM6.41552 12.4055L6.39571 12.7346H6.39571L6.41552 12.4055ZM6.63452 12.6526L6.96365 12.6724V12.6724L6.63452 12.6526ZM6.62517 12.808L6.29604 12.7882V12.7882L6.62517 12.808ZM6.37811 13.027L6.3583 13.3561H6.3583L6.37811 13.027ZM2.72687 12.8072L2.70706 13.1363H2.70706L2.72687 12.8072ZM2.50787 12.5602L2.17874 12.5403V12.5403L2.50787 12.5602ZM2.53062 13.3152L2.20252 13.2825L2.53062 13.3152ZM2.78605 13.106L2.81872 12.7779H2.81872L2.78605 13.106ZM2.5152 13.4701L2.1871 13.4374V13.4374L2.5152 13.4701ZM2.72437 13.7255L2.75704 13.3974H2.75704L2.72437 13.7255ZM6.36422 14.0879L6.39689 13.7598H6.39689L6.36422 14.0879ZM6.61966 13.8787L6.94776 13.9114L6.61966 13.8787ZM6.63508 13.7238L6.30698 13.6911L6.63508 13.7238ZM6.4259 13.4684L6.45857 13.1403H6.45857L6.4259 13.4684ZM2.7073 14.1769L2.73997 13.8488H2.73997L2.7073 14.1769ZM2.45187 14.386L2.12377 14.3534L2.45187 14.386ZM6.34715 14.5392L6.37982 14.2111H6.37982L6.34715 14.5392ZM6.55633 14.7947L6.22823 14.762L6.55633 14.7947ZM6.54091 14.9496L6.86901 14.9823L6.54091 14.9496ZM6.28547 15.1588L6.31814 14.8307H6.31814L6.28547 15.1588ZM2.64562 14.7964L2.67829 14.4683H2.67829L2.64562 14.7964ZM2.43645 14.541L2.10835 14.5083V14.5083L2.43645 14.541ZM2.37492 15.4569L2.04658 15.4268H2.04658L2.37492 15.4569ZM2.62873 15.2457L2.59861 15.5741H2.59861L2.62873 15.2457ZM2.3607 15.6119L2.68905 15.6421H2.68905L2.3607 15.6119ZM2.57185 15.8657L2.60197 15.5374H2.60197L2.57185 15.8657ZM6.21441 16.1999L6.24453 15.8715H6.24453L6.21441 16.1999ZM6.46821 15.9887L6.79655 16.0188L6.46821 15.9887ZM6.48243 15.8337L6.81077 15.8638L6.48243 15.8337ZM6.27128 15.5799L6.3014 15.2515H6.3014L6.27128 15.5799ZM6.02469 16.3442L6.24559 16.589L6.85756 16.0367L6.03355 16.0146L6.02469 16.3442ZM2.835 16.2584L2.84386 15.9288L1.90423 15.9036L2.62218 16.5103L2.835 16.2584ZM5.18691 17.1002L5.17805 17.4298L5.30989 17.4334L5.4078 17.345L5.18691 17.1002ZM3.78655 17.0626L3.57373 17.3144L3.66208 17.3891L3.77769 17.3922L3.78655 17.0626ZM7.77236 8.07154C8.83427 7.19951 9.5122 5.89541 9.5122 4.4356H8.85275C8.85275 5.68515 8.27348 6.80672 7.35386 7.56191L7.77236 8.07154ZM7.00287 10.3331L7.87314 7.92895L7.25307 7.7045L6.3828 10.1087L7.00287 10.3331ZM6.61514 11.5388L7.0067 10.3219L6.37896 10.1199L5.98739 11.3368L6.61514 11.5388ZM2.85548 11.7676H6.30126V11.1081H2.85548V11.7676ZM2.11393 10.3309L2.54465 11.5478L3.16631 11.3278L2.73559 10.1109L2.11393 10.3309ZM1.21591 7.85012L2.11472 10.3331L2.73479 10.1087L1.83598 7.62567L1.21591 7.85012ZM-0.329722 4.4356C-0.329722 5.84888 0.305751 7.11643 1.30996 7.98703L1.74193 7.48876C0.872749 6.73523 0.329722 5.64551 0.329722 4.4356H-0.329722ZM4.59124 -0.329722C1.88428 -0.329722 -0.329722 1.79316 -0.329722 4.4356H0.329722C0.329722 2.17861 2.22686 0.329722 4.59124 0.329722V-0.329722ZM9.5122 4.4356C9.5122 1.79316 7.2982 -0.329722 4.59124 -0.329722V0.329722C6.95562 0.329722 8.85275 2.17861 8.85275 4.4356H9.5122ZM2.81597 11.7404C2.81597 11.7936 2.77287 11.8367 2.7197 11.8367V11.1773C2.40867 11.1773 2.15653 11.4294 2.15653 11.7404H2.81597ZM2.81597 11.8961V11.7404H2.15653V11.8961H2.81597ZM2.7197 11.7999C2.77287 11.7999 2.81597 11.843 2.81597 11.8961H2.15653C2.15653 12.2072 2.40867 12.4593 2.7197 12.4593V11.7999ZM6.37755 11.7999H2.7197V12.4593H6.37755V11.7999ZM6.28128 11.8961C6.28128 11.843 6.32438 11.7999 6.37755 11.7999V12.4593C6.68858 12.4593 6.94072 12.2072 6.94072 11.8961H6.28128ZM6.28128 11.7404V11.8961H6.94072V11.7404H6.28128ZM6.37755 11.8367C6.32438 11.8367 6.28128 11.7936 6.28128 11.7404H6.94072C6.94072 11.4294 6.68858 11.1773 6.37755 11.1773V11.8367ZM2.7197 11.8367H6.37755V11.1773H2.7197V11.8367ZM2.78409 11.8566C2.47362 11.8379 2.20678 12.0745 2.1881 12.3849L2.84635 12.4245C2.84316 12.4776 2.79754 12.5181 2.74447 12.5149L2.78409 11.8566ZM6.43533 12.0764L2.78409 11.8566L2.74447 12.5149L6.39571 12.7346L6.43533 12.0764ZM6.96365 12.6724C6.98234 12.3619 6.7458 12.0951 6.43533 12.0764L6.39571 12.7346C6.34263 12.7314 6.3022 12.6858 6.3054 12.6328L6.96365 12.6724ZM6.95429 12.8278L6.96365 12.6724L6.3054 12.6328L6.29604 12.7882L6.95429 12.8278ZM6.3583 13.3561C6.66877 13.3748 6.93561 13.1383 6.95429 12.8278L6.29604 12.7882C6.29924 12.7351 6.34485 12.6947 6.39792 12.6979L6.3583 13.3561ZM2.70706 13.1363L6.3583 13.3561L6.39792 12.6979L2.74668 12.4781L2.70706 13.1363ZM2.17874 12.5403C2.16006 12.8508 2.39659 13.1177 2.70706 13.1363L2.74668 12.4781C2.79976 12.4813 2.84019 12.5269 2.837 12.58L2.17874 12.5403ZM2.1881 12.3849L2.17874 12.5403L2.837 12.58L2.84635 12.4245L2.1881 12.3849ZM2.85872 13.3478C2.85345 13.4007 2.80629 13.4394 2.75339 13.4341L2.81872 12.7779C2.50922 12.7471 2.23334 12.973 2.20252 13.2825L2.85872 13.3478ZM2.8433 13.5028L2.85872 13.3478L2.20252 13.2825L2.1871 13.4374L2.8433 13.5028ZM2.75704 13.3974C2.80995 13.4027 2.84856 13.4499 2.8433 13.5028L2.1871 13.4374C2.15628 13.7469 2.38221 14.0228 2.69171 14.0536L2.75704 13.3974ZM6.39689 13.7598L2.75704 13.3974L2.69171 14.0536L6.33156 14.416L6.39689 13.7598ZM6.29156 13.8461C6.29682 13.7932 6.34398 13.7545 6.39689 13.7598L6.33156 14.416C6.64106 14.4468 6.91694 14.2209 6.94776 13.9114L6.29156 13.8461ZM6.30698 13.6911L6.29156 13.8461L6.94776 13.9114L6.96318 13.7565L6.30698 13.6911ZM6.39324 13.7965C6.34033 13.7912 6.30171 13.744 6.30698 13.6911L6.96318 13.7565C6.99399 13.447 6.76807 13.1711 6.45857 13.1403L6.39324 13.7965ZM2.75339 13.4341L6.39324 13.7965L6.45857 13.1403L2.81872 12.7779L2.75339 13.4341ZM2.73997 13.8488C2.43047 13.8179 2.15459 14.0439 2.12377 14.3534L2.77997 14.4187C2.7747 14.4716 2.72754 14.5102 2.67464 14.505L2.73997 13.8488ZM6.37982 14.2111L2.73997 13.8488L2.67464 14.505L6.31449 14.8673L6.37982 14.2111ZM6.88443 14.8273C6.91524 14.5178 6.68932 14.2419 6.37982 14.2111L6.31449 14.8673C6.26158 14.8621 6.22296 14.8149 6.22823 14.762L6.88443 14.8273ZM6.86901 14.9823L6.88443 14.8273L6.22823 14.762L6.21281 14.9169L6.86901 14.9823ZM6.25281 15.4869C6.56231 15.5177 6.83819 15.2918 6.86901 14.9823L6.21281 14.9169C6.21807 14.864 6.26523 14.8254 6.31814 14.8307L6.25281 15.4869ZM2.61296 15.1245L6.25281 15.4869L6.31814 14.8307L2.67829 14.4683L2.61296 15.1245ZM2.10835 14.5083C2.07753 14.8178 2.30345 15.0937 2.61296 15.1245L2.67829 14.4683C2.7312 14.4736 2.76981 14.5207 2.76455 14.5736L2.10835 14.5083ZM2.12377 14.3534L2.10835 14.5083L2.76455 14.5736L2.77997 14.4187L2.12377 14.3534ZM2.70327 15.487C2.69841 15.54 2.65155 15.5789 2.59861 15.5741L2.65885 14.9174C2.34911 14.889 2.07499 15.117 2.04658 15.4268L2.70327 15.487ZM2.68905 15.6421L2.70327 15.487L2.04658 15.4268L2.03236 15.5818L2.68905 15.6421ZM2.60197 15.5374C2.65492 15.5423 2.6939 15.5891 2.68905 15.6421L2.03236 15.5818C2.00395 15.8915 2.232 16.1657 2.54174 16.1941L2.60197 15.5374ZM6.24453 15.8715L2.60197 15.5374L2.54173 16.1941L6.18429 16.5282L6.24453 15.8715ZM6.13986 15.9586C6.14472 15.9057 6.19158 15.8667 6.24453 15.8715L6.18429 16.5282C6.49402 16.5566 6.76814 16.3286 6.79655 16.0188L6.13986 15.9586ZM6.15409 15.8036L6.13986 15.9586L6.79655 16.0188L6.81077 15.8638L6.15409 15.8036ZM6.24116 15.9082C6.18821 15.9034 6.14923 15.8565 6.15409 15.8036L6.81077 15.8638C6.83919 15.5541 6.61113 15.2799 6.3014 15.2515L6.24116 15.9082ZM2.59861 15.5741L6.24116 15.9082L6.3014 15.2515L2.65885 14.9174L2.59861 15.5741ZM6.03355 16.0146L2.84386 15.9288L2.82614 16.588L6.01583 16.6738L6.03355 16.0146ZM5.4078 17.345L6.24559 16.589L5.8038 16.0994L4.96601 16.8554L5.4078 17.345ZM3.77769 17.3922L5.17805 17.4298L5.19577 16.7706L3.79541 16.733L3.77769 17.3922ZM2.62218 16.5103L3.57373 17.3144L3.99937 16.8107L3.04782 16.0066L2.62218 16.5103ZM4.81361 17.4552C4.81361 17.4327 4.82066 17.4362 4.80145 17.4674C4.78403 17.4957 4.7542 17.5313 4.71316 17.5668C4.6725 17.6019 4.62836 17.6304 4.58834 17.6489C4.56868 17.658 4.5522 17.6637 4.53956 17.6669C4.52671 17.6702 4.52062 17.6703 4.52073 17.6703V18.3297C4.76122 18.3297 4.99118 18.1981 5.14432 18.0658C5.22669 17.9946 5.30416 17.9088 5.36318 17.8128C5.42042 17.7197 5.47306 17.596 5.47306 17.4552H4.81361ZM4.52073 17.4737C4.62595 17.4737 4.73688 17.4899 4.80863 17.518C4.84391 17.5318 4.84975 17.5408 4.84318 17.5339C4.83056 17.5206 4.81361 17.4907 4.81361 17.4552H5.47306C5.47306 17.1263 5.2102 16.967 5.04885 16.9039C4.87377 16.8354 4.6734 16.8142 4.52073 16.8142V17.4737ZM4.22785 17.4552C4.22785 17.4907 4.2109 17.5206 4.19828 17.5339C4.19171 17.5408 4.19755 17.5318 4.23283 17.518C4.30457 17.4899 4.41551 17.4737 4.52073 17.4737V16.8142C4.36806 16.8142 4.16769 16.8354 3.9926 16.9039C3.83126 16.967 3.5684 17.1263 3.5684 17.4552H4.22785ZM4.52073 17.6703C4.52084 17.6703 4.51475 17.6702 4.5019 17.6669C4.48926 17.6637 4.47278 17.658 4.45312 17.6489C4.41309 17.6304 4.36896 17.6019 4.3283 17.5668C4.28726 17.5313 4.25743 17.4957 4.24001 17.4674C4.2208 17.4362 4.22785 17.4327 4.22785 17.4552H3.5684C3.5684 17.596 3.62104 17.7197 3.67828 17.8128C3.7373 17.9088 3.81477 17.9946 3.89714 18.0658C4.05028 18.1981 4.28024 18.3297 4.52073 18.3297V17.6703Z" fill="#474E54" mask="url(#path-1-inside-1_1069_3945)"/>
                                </svg>
                                <p>Безперебійне світло</p>
                            </article>
                            <article>
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1069_3965)">
                                        <path d="M12.75 6.16663H13.4583C14.2098 6.16663 14.9304 6.46514 15.4618 6.99649C15.9932 7.52784 16.2917 8.24851 16.2917 8.99996C16.2917 9.75141 15.9932 10.4721 15.4618 11.0034C14.9304 11.5348 14.2098 11.8333 13.4583 11.8333H12.75" stroke="#474E54" strokeWidth="0.708333" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M1.41669 6.16663H12.75V12.5416C12.75 13.2931 12.4515 14.0137 11.9202 14.5451C11.3888 15.0764 10.6681 15.375 9.91669 15.375H4.25002C3.49857 15.375 2.7779 15.0764 2.24655 14.5451C1.7152 14.0137 1.41669 13.2931 1.41669 12.5416V6.16663Z" stroke="#474E54" strokeWidth="0.708333" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M4.25 1.20837V3.33337" stroke="#474E54" strokeWidth="0.708333" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7.08331 1.20837V3.33337" stroke="#474E54" strokeWidth="0.708333" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.91669 1.20837V3.33337" stroke="#474E54" strokeWidth="0.708333" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1069_3965">
                                            <rect width="17" height="17" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>Кава, чай, смаколики</p>
                            </article>
                            <article>
                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.95834 10.4354C5.52312 9.13206 7.4952 8.41833 9.53168 8.41833C11.5682 8.41833 13.5402 9.13206 15.105 10.4354" stroke="#474E54" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1.12415 7.62502C3.43773 5.58566 6.41588 4.46045 9.49998 4.46045C12.5841 4.46045 15.5622 5.58566 17.8758 7.62502" stroke="#474E54" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6.75293 13.2537C7.55663 12.6827 8.51809 12.376 9.50397 12.376C10.4899 12.376 11.4513 12.6827 12.255 13.2537" stroke="#474E54" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9.5 16.3334H9.50792" stroke="#474E54" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Стабільний інтернет</p>
                            </article>
                            <article>
                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.125 6.87496L8.5 1.91663L14.875 6.87496V14.6666C14.875 15.0423 14.7257 15.4027 14.4601 15.6684C14.1944 15.934 13.8341 16.0833 13.4583 16.0833H3.54167C3.16594 16.0833 2.80561 15.934 2.53993 15.6684C2.27426 15.4027 2.125 15.0423 2.125 14.6666V6.87496Z" stroke="#474E54" strokeWidth="0.708333" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6.375 16.0833V9H10.625V16.0833" stroke="#474E54" strokeWidth="0.708333" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Бомбосховище</p>
                            </article>
                            <article>
                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1069_3961)">
                                        <path d="M10.5738 3.00913L2.75406 10.8369L9.10317 11.4108L7.88758 16.9907L15.7074 9.16292L9.35824 8.58902L10.5738 3.00913Z" stroke="#474E54" strokeWidth="0.708333" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1069_3961">
                                            <rect width="17" height="17" fill="white" transform="translate(1.5304 0.769287) rotate(5.16497)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>Starlink</p>
                            </article>
                            <article>
                                <svg width="19" height="20" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4583 8.29163H3.54167C2.75926 8.29163 2.125 8.92589 2.125 9.70829V14.6666C2.125 15.449 2.75926 16.0833 3.54167 16.0833H13.4583C14.2407 16.0833 14.875 15.449 14.875 14.6666V9.70829C14.875 8.92589 14.2407 8.29163 13.4583 8.29163Z" stroke="#474E54" strokeWidth="0.708333" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.95831 8.29163V5.45829C4.95831 4.51898 5.33145 3.61815 5.99564 2.95396C6.65983 2.28976 7.56067 1.91663 8.49998 1.91663C9.43929 1.91663 10.3401 2.28976 11.0043 2.95396C11.6685 3.61815 12.0416 4.51898 12.0416 5.45829V8.29163" stroke="#474E54" strokeWidth="0.708333" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Конфідеційність
                                    особистих даних</p>
                            </article>
                        </div>
                        <div className="contact__info-buttons">
                            <PrimaryButton text="Забронювати місце"/>
                            <SecondaryButton text="Забронювати Екскурсію"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact2
