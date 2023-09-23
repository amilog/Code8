import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBehance = (props) => (
  <Svg
    width={56}
    height={48}
    viewBox="0 0 56 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M23.2763 5.34998C23.9153 5.34998 24.5063 5.39998 25.0463 5.54798C25.5873 5.64698 26.0303 5.84498 26.4233 6.09198C26.8173 6.33998 27.1123 6.68598 27.3083 7.13098C27.5053 7.57598 27.6043 8.12098 27.6043 8.71398C27.6043 9.40698 27.4563 9.99998 27.1123 10.445C26.8173 10.891 26.3253 11.286 25.7353 11.583C26.5713 11.831 27.2103 12.276 27.6043 12.87C27.9973 13.463 28.2433 14.205 28.2433 15.046C28.2433 15.739 28.0953 16.332 27.8493 16.827C27.6043 17.322 27.2103 17.767 26.7673 18.064C26.286 18.3823 25.7541 18.6163 25.1943 18.756C24.6043 18.905 24.0143 19.004 23.4243 19.004H16.8333V5.34998H23.2763ZM22.8823 10.89C23.4233 10.89 23.8663 10.742 24.2103 10.495C24.5543 10.248 24.7023 9.80198 24.7023 9.25798C24.7023 8.96098 24.6523 8.66498 24.5543 8.46698C24.4563 8.26898 24.3083 8.11998 24.1123 7.97198C23.9153 7.87298 23.7183 7.77398 23.4723 7.72498C23.2263 7.67498 22.9813 7.67498 22.6853 7.67498H19.8333V10.891H22.8833L22.8823 10.89ZM23.0303 16.728C23.3253 16.728 23.6203 16.678 23.8663 16.629C24.1123 16.579 24.3583 16.481 24.5543 16.332C24.7546 16.1872 24.9223 16.0018 25.0463 15.788C25.1443 15.541 25.2433 15.244 25.2433 14.898C25.2433 14.205 25.0463 13.71 24.6533 13.364C24.2593 13.067 23.7183 12.919 23.0793 12.919H19.8333V16.729L23.0303 16.728ZM32.5223 16.678C32.9153 17.074 33.5053 17.272 34.2923 17.272C34.8333 17.272 35.3253 17.124 35.7183 16.877C36.1123 16.58 36.3583 16.283 36.4563 15.987H38.8663C38.4723 17.173 37.8823 18.014 37.0963 18.559C36.3083 19.053 35.3743 19.35 34.2433 19.35C33.5196 19.3522 32.8021 19.2179 32.1283 18.954C31.5219 18.7266 30.9812 18.3528 30.5543 17.866C30.0975 17.4106 29.76 16.8497 29.5713 16.233C29.3253 15.59 29.2263 14.898 29.2263 14.106C29.2263 13.364 29.3253 12.672 29.5713 12.028C29.8082 11.4083 30.1585 10.8383 30.6043 10.347C31.0534 9.88582 31.5875 9.51601 32.1773 9.25798C32.834 8.99404 33.5355 8.85957 34.2433 8.86198C35.0793 8.86198 35.8173 9.01098 36.4563 9.35698C37.0963 9.70298 37.5873 10.099 37.9803 10.693C38.3743 11.237 38.6703 11.88 38.8663 12.573C38.9643 13.265 39.0133 13.958 38.9643 14.749H31.8333C31.8333 15.541 32.1283 16.283 32.5223 16.679V16.678ZM35.6203 11.484C35.2763 11.138 34.7353 10.94 34.0953 10.94C33.6533 10.94 33.3083 11.04 33.0133 11.188C32.7183 11.336 32.5223 11.534 32.3253 11.732C32.1439 11.9231 32.0238 12.1641 31.9803 12.424C31.9313 12.672 31.8823 12.87 31.8823 13.067H36.3083C36.2103 12.325 35.9643 11.831 35.6203 11.484ZM31.2923 6.28998H36.8003V7.62598H31.2933V6.28998H31.2923Z"
      fill="#006BFF"
    />
    <Path
      d="M5.13189 38.502H2.59575L2.58208 37.251H4.79692C5.17062 37.251 5.48735 37.1963 5.74712 37.0869C6.01144 36.973 6.21196 36.8112 6.34868 36.6016C6.4854 36.3874 6.55376 36.1299 6.55376 35.8291C6.55376 35.4964 6.48996 35.2253 6.36235 35.0156C6.23475 34.806 6.03879 34.6533 5.77446 34.5576C5.5147 34.4619 5.18202 34.4141 4.77642 34.4141H3.11528V43H1.39946V33.0469H4.77642C5.32329 33.0469 5.81092 33.0993 6.23931 33.2041C6.67225 33.3089 7.03911 33.473 7.33989 33.6963C7.64523 33.915 7.87538 34.193 8.03032 34.5303C8.18983 34.8675 8.26958 35.2686 8.26958 35.7334C8.26958 36.1436 8.1716 36.5195 7.97564 36.8613C7.77967 37.1986 7.49028 37.4743 7.10747 37.6885C6.72466 37.9027 6.24842 38.0303 5.67876 38.0713L5.13189 38.502ZM5.05669 43H2.05571L2.82817 41.6396H5.05669C5.44406 41.6396 5.76763 41.5758 6.02739 41.4482C6.28716 41.3161 6.48084 41.1361 6.60845 40.9082C6.74061 40.6758 6.80669 40.4046 6.80669 40.0947C6.80669 39.7712 6.74972 39.4909 6.63579 39.2539C6.52186 39.0124 6.34185 38.8278 6.09575 38.7002C5.84966 38.568 5.52837 38.502 5.13189 38.502H3.20415L3.21782 37.251H5.72661L6.11626 37.7227C6.66314 37.7409 7.11203 37.8617 7.46294 38.085C7.81841 38.3083 8.08273 38.5977 8.25591 38.9531C8.42909 39.3086 8.51567 39.6914 8.51567 40.1016C8.51567 40.735 8.37668 41.266 8.09868 41.6943C7.82524 42.1227 7.43104 42.4486 6.91607 42.6719C6.40109 42.8906 5.7813 43 5.05669 43ZM13.4418 43.1367C12.895 43.1367 12.4005 43.0479 11.9584 42.8701C11.5209 42.6878 11.1473 42.4349 10.8374 42.1113C10.532 41.7878 10.2973 41.4072 10.1333 40.9697C9.96919 40.5322 9.88716 40.0605 9.88716 39.5547V39.2812C9.88716 38.7025 9.97147 38.1784 10.1401 37.709C10.3087 37.2396 10.5434 36.8385 10.8442 36.5059C11.145 36.1686 11.5004 35.9111 11.9106 35.7334C12.3208 35.5557 12.7651 35.4668 13.2436 35.4668C13.7723 35.4668 14.2348 35.5557 14.6313 35.7334C15.0278 35.9111 15.3559 36.1618 15.6157 36.4854C15.88 36.8044 16.076 37.1849 16.2036 37.627C16.3357 38.069 16.4018 38.5566 16.4018 39.0898V39.7939H10.687V38.6113H14.7749V38.4814C14.7657 38.1852 14.7065 37.9072 14.5971 37.6475C14.4923 37.3877 14.3305 37.1781 14.1118 37.0186C13.893 36.859 13.6014 36.7793 13.2368 36.7793C12.9633 36.7793 12.7195 36.8385 12.5053 36.957C12.2957 37.071 12.1202 37.2373 11.979 37.4561C11.8377 37.6748 11.7283 37.9391 11.6508 38.249C11.5779 38.5544 11.5415 38.8984 11.5415 39.2812V39.5547C11.5415 39.8783 11.5848 40.179 11.6713 40.457C11.7625 40.7305 11.8946 40.9697 12.0678 41.1748C12.241 41.3799 12.4506 41.5417 12.6967 41.6602C12.9428 41.7741 13.2231 41.8311 13.5375 41.8311C13.934 41.8311 14.2872 41.7513 14.5971 41.5918C14.907 41.4323 15.1759 41.2067 15.4038 40.915L16.2719 41.7559C16.1124 41.9883 15.9051 42.2116 15.6499 42.4258C15.3946 42.6354 15.0825 42.8063 14.7133 42.9385C14.3487 43.0706 13.9249 43.1367 13.4418 43.1367ZM19.4139 32.5V43H17.7733V32.5H19.4139ZM19.1268 39.0283L18.5936 39.0215C18.5982 38.5111 18.6688 38.0394 18.8055 37.6064C18.9468 37.1735 19.1428 36.7975 19.3934 36.4785C19.6486 36.1549 19.954 35.9066 20.3094 35.7334C20.6649 35.5557 21.0591 35.4668 21.492 35.4668C21.8566 35.4668 22.1848 35.5169 22.4764 35.6172C22.7726 35.7174 23.0278 35.8792 23.242 36.1025C23.4562 36.3213 23.618 36.6084 23.7274 36.9639C23.8413 37.3148 23.8983 37.7432 23.8983 38.249V43H22.244V38.2354C22.244 37.8799 22.1916 37.5973 22.0868 37.3877C21.9865 37.1781 21.8384 37.0277 21.6424 36.9365C21.4465 36.8408 21.2072 36.793 20.9247 36.793C20.6284 36.793 20.3664 36.8522 20.1385 36.9707C19.9152 37.0892 19.7284 37.251 19.578 37.4561C19.4276 37.6611 19.3137 37.8981 19.2362 38.167C19.1633 38.4359 19.1268 38.723 19.1268 39.0283ZM29.8362 41.5166V37.9893C29.8362 37.7249 29.7883 37.4971 29.6926 37.3057C29.5969 37.1143 29.4511 36.9661 29.2551 36.8613C29.0637 36.7565 28.8222 36.7041 28.5305 36.7041C28.2616 36.7041 28.0292 36.7497 27.8333 36.8408C27.6373 36.932 27.4846 37.055 27.3752 37.21C27.2659 37.3649 27.2112 37.5404 27.2112 37.7363H25.5706C25.5706 37.4447 25.6412 37.1621 25.7825 36.8887C25.9237 36.6152 26.1288 36.3714 26.3977 36.1572C26.6666 35.943 26.9879 35.7744 27.3616 35.6514C27.7353 35.5283 28.1545 35.4668 28.6194 35.4668C29.1754 35.4668 29.6676 35.5602 30.0959 35.7471C30.5289 35.9339 30.8684 36.2165 31.1145 36.5947C31.3652 36.9684 31.4905 37.4378 31.4905 38.0029V41.291C31.4905 41.6283 31.5133 41.9313 31.5588 42.2002C31.609 42.4645 31.6796 42.6947 31.7708 42.8906V43H30.0823C30.0048 42.8223 29.9433 42.5967 29.8977 42.3232C29.8567 42.0452 29.8362 41.7764 29.8362 41.5166ZM30.0754 38.502L30.0891 39.5205H28.9065C28.6012 39.5205 28.3323 39.5501 28.0999 39.6094C27.8674 39.6641 27.6737 39.7461 27.5188 39.8555C27.3639 39.9648 27.2476 40.097 27.1702 40.252C27.0927 40.4069 27.054 40.5824 27.054 40.7783C27.054 40.9743 27.0995 41.1543 27.1907 41.3184C27.2818 41.4779 27.414 41.6032 27.5872 41.6943C27.7649 41.7855 27.9791 41.8311 28.2297 41.8311C28.567 41.8311 28.8609 41.7627 29.1116 41.626C29.3668 41.4847 29.5673 41.3138 29.7131 41.1133C29.859 40.9082 29.9364 40.7145 29.9456 40.5322L30.4788 41.2637C30.4241 41.4505 30.3306 41.651 30.1985 41.8652C30.0663 42.0794 29.8931 42.2845 29.679 42.4805C29.4693 42.6719 29.2164 42.8291 28.9202 42.9521C28.6285 43.0752 28.2913 43.1367 27.9084 43.1367C27.4254 43.1367 26.9947 43.041 26.6165 42.8496C26.2382 42.6536 25.942 42.3916 25.7278 42.0635C25.5136 41.7308 25.4065 41.3548 25.4065 40.9355C25.4065 40.5436 25.4794 40.1973 25.6252 39.8965C25.7756 39.5911 25.9944 39.3359 26.2815 39.1309C26.5732 38.9258 26.9286 38.7708 27.3479 38.666C27.7672 38.5566 28.2457 38.502 28.7834 38.502H30.0754ZM34.9469 37.1826V43H33.2995V35.6035H34.8512L34.9469 37.1826ZM34.653 39.0283L34.1198 39.0215C34.1243 38.4974 34.1973 38.0166 34.3385 37.5791C34.4844 37.1416 34.6849 36.7656 34.9401 36.4512C35.1999 36.1367 35.5098 35.8952 35.8698 35.7266C36.2298 35.5534 36.6308 35.4668 37.0729 35.4668C37.4284 35.4668 37.7497 35.5169 38.0368 35.6172C38.3284 35.7129 38.5768 35.8701 38.7819 36.0889C38.9915 36.3076 39.151 36.5924 39.2604 36.9434C39.3698 37.2897 39.4245 37.7158 39.4245 38.2217V43H37.7702V38.2148C37.7702 37.8594 37.7178 37.5791 37.6129 37.374C37.5127 37.1644 37.3646 37.0163 37.1686 36.9297C36.9772 36.8385 36.7379 36.793 36.4508 36.793C36.1683 36.793 35.9154 36.8522 35.692 36.9707C35.4687 37.0892 35.2796 37.251 35.1247 37.4561C34.9743 37.6611 34.8581 37.8981 34.776 38.167C34.694 38.4359 34.653 38.723 34.653 39.0283ZM44.2276 41.8242C44.4965 41.8242 44.738 41.7718 44.9522 41.667C45.1709 41.5576 45.3464 41.4072 45.4786 41.2158C45.6153 41.0244 45.6905 40.8034 45.7042 40.5527H47.2559C47.2468 41.0312 47.1055 41.4665 46.8321 41.8584C46.5586 42.2503 46.1963 42.5625 45.7452 42.7949C45.294 43.0228 44.795 43.1367 44.2481 43.1367C43.683 43.1367 43.1908 43.041 42.7715 42.8496C42.3523 42.6536 42.0036 42.3848 41.7256 42.043C41.4476 41.7012 41.238 41.307 41.0967 40.8604C40.96 40.4137 40.8917 39.9352 40.8917 39.4248V39.1855C40.8917 38.6751 40.96 38.1966 41.0967 37.75C41.238 37.2988 41.4476 36.9023 41.7256 36.5605C42.0036 36.2188 42.3523 35.9521 42.7715 35.7607C43.1908 35.5648 43.6807 35.4668 44.2413 35.4668C44.8337 35.4668 45.3532 35.5853 45.7999 35.8223C46.2465 36.0547 46.5974 36.3805 46.8526 36.7998C47.1124 37.2145 47.2468 37.6976 47.2559 38.249H45.7042C45.6905 37.9756 45.6221 37.7295 45.4991 37.5107C45.3806 37.2874 45.212 37.1097 44.9932 36.9775C44.779 36.8454 44.5215 36.7793 44.2208 36.7793C43.8881 36.7793 43.6124 36.8477 43.3936 36.9844C43.1749 37.1165 43.004 37.2988 42.8809 37.5312C42.7579 37.7591 42.669 38.0166 42.6143 38.3037C42.5642 38.5863 42.5391 38.8802 42.5391 39.1855V39.4248C42.5391 39.7301 42.5642 40.0264 42.6143 40.3135C42.6644 40.6006 42.751 40.8581 42.8741 41.0859C43.0017 41.3092 43.1749 41.4893 43.3936 41.626C43.6124 41.7581 43.8903 41.8242 44.2276 41.8242ZM51.8813 43.1367C51.3344 43.1367 50.84 43.0479 50.3979 42.8701C49.9604 42.6878 49.5867 42.4349 49.2768 42.1113C48.9715 41.7878 48.7368 41.4072 48.5727 40.9697C48.4086 40.5322 48.3266 40.0605 48.3266 39.5547V39.2812C48.3266 38.7025 48.4109 38.1784 48.5795 37.709C48.7482 37.2396 48.9829 36.8385 49.2836 36.5059C49.5844 36.1686 49.9399 35.9111 50.35 35.7334C50.7602 35.5557 51.2045 35.4668 51.6831 35.4668C52.2117 35.4668 52.6743 35.5557 53.0708 35.7334C53.4672 35.9111 53.7954 36.1618 54.0551 36.4854C54.3194 36.8044 54.5154 37.1849 54.643 37.627C54.7752 38.069 54.8413 38.5566 54.8413 39.0898V39.7939H49.1264V38.6113H53.2143V38.4814C53.2052 38.1852 53.1459 37.9072 53.0366 37.6475C52.9318 37.3877 52.77 37.1781 52.5512 37.0186C52.3325 36.859 52.0408 36.7793 51.6762 36.7793C51.4028 36.7793 51.159 36.8385 50.9448 36.957C50.7351 37.071 50.5597 37.2373 50.4184 37.4561C50.2771 37.6748 50.1678 37.9391 50.0903 38.249C50.0174 38.5544 49.9809 38.8984 49.9809 39.2812V39.5547C49.9809 39.8783 50.0242 40.179 50.1108 40.457C50.2019 40.7305 50.3341 40.9697 50.5073 41.1748C50.6805 41.3799 50.8901 41.5417 51.1362 41.6602C51.3823 41.7741 51.6625 41.8311 51.977 41.8311C52.3735 41.8311 52.7267 41.7513 53.0366 41.5918C53.3465 41.4323 53.6153 41.2067 53.8432 40.915L54.7114 41.7559C54.5519 41.9883 54.3445 42.2116 54.0893 42.4258C53.8341 42.6354 53.5219 42.8063 53.1528 42.9385C52.7882 43.0706 52.3644 43.1367 51.8813 43.1367Z"
      fill="#5E5E5E"
    />
  </Svg>
);
export default SvgBehance;
