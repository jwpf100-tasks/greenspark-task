interface ILogo {
  color: String;
}
interface ILogoImage {
  color: String;
}
interface ILogoName {
  color: String;
}

const Logo = ({ color }: ILogo) => {
  return (
    <>
      <LogoImage color={color} />
      <LogoName color={color} />
    </>
  );
};

const LogoImage = ({ color }: ILogoImage) => {
  console.log(color, "color in Ilogo");
  return (
    <svg
      className={["logo", `logo--${color}`].join(" ")}
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.7594 0.296997C7.85226 0.296997 0.631592 7.51767 0.631592 16.4248C0.631592 25.332 7.85226 32.5526 16.7594 32.5526C25.6666 32.5526 32.8872 25.332 32.8872 16.4248C32.8872 7.51767 25.6666 0.296997 16.7594 0.296997ZM17.7055 27.199C11.0821 27.647 5.98988 15.3899 8.37926 13.009C10.5591 10.837 11.4244 11.6134 11.8337 13.4321C12.0624 14.4477 11.8927 15.6938 11.7398 16.8168C11.6069 17.7927 11.4866 18.6756 11.6515 19.2334C12.0061 20.4331 12.6146 21.3839 13.3152 21.3164C14.0159 21.2489 15.1022 19.3642 12.7643 12.1573C11.0417 6.84704 15.6649 5.01134 16.0884 6.11656C16.2796 6.6155 16.0174 7.43242 15.7094 8.39211C15.3352 9.55832 14.8933 10.9354 15.115 12.2088C15.2964 13.251 15.4695 13.8299 15.6241 14.3469C15.8139 14.9814 15.9758 15.5226 16.0909 16.7129C16.1397 17.2168 16.1162 17.8618 16.0913 18.5473C16.0284 20.2787 15.956 22.2693 17.0136 22.9027C18.4899 23.7869 19.1374 19.4874 17.7159 11.7192C16.4394 4.74359 21.0207 6.89465 21.1415 9.00927C21.2624 11.1239 21.1284 14.3007 20.2738 18.7428C19.4193 23.185 20.0408 23.5508 21.1415 22.4336C22.2423 21.3164 22.3038 20.5267 21.6661 16.1227C21.2314 13.1211 25.9298 11.5922 25.4232 15.5363C24.9132 19.5063 22.6049 26.8676 17.7055 27.199Z" />
    </svg>
  );
};

const LogoName = ({ color }: ILogoName) => {
  return (
    <svg
      className={["logoName", `logoName--${color}`].join(" ")}
      width="41"
      height="10"
      viewBox="0 0 41 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.99764 9.70144C2.36168 9.70144 1.85472 9.58235 1.47675 9.34418C1.09878 9.11211 0.90979 8.79454 0.90979 8.39148C0.90979 7.95177 1.15277 7.59146 1.63874 7.31053C1.37476 7.14564 1.24277 6.92884 1.24277 6.66013C1.24277 6.51967 1.28176 6.39448 1.35976 6.28455C1.44375 6.17462 1.55474 6.08607 1.69273 6.01889C1.46475 5.854 1.29076 5.64331 1.17077 5.38681C1.05678 5.13032 0.999783 4.84939 0.999783 4.54404C0.999783 4.20815 1.07178 3.9028 1.21577 3.62798C1.35976 3.34706 1.56974 3.12721 1.84572 2.96842C2.1217 2.80353 2.44868 2.72109 2.82665 2.72109C3.22262 2.72109 3.5646 2.8188 3.85257 3.01423C3.95457 2.95926 4.08956 2.91346 4.25754 2.87682C4.43153 2.83407 4.61752 2.81269 4.8155 2.81269H5.03149L4.98656 3.25863C4.97119 3.41114 4.84282 3.52722 4.68955 3.52722H4.62652C4.52453 3.52722 4.44053 3.53027 4.37454 3.53638C4.55452 3.8173 4.64452 4.15319 4.64452 4.54404C4.64452 4.87993 4.57252 5.18834 4.42853 5.46926C4.29054 5.74408 4.08356 5.96393 3.80758 6.12882C3.5316 6.2876 3.20462 6.36699 2.82665 6.36699C2.68866 6.36699 2.52967 6.34562 2.34968 6.30287C2.28369 6.33341 2.25069 6.38226 2.25069 6.44944C2.25069 6.52883 2.29569 6.59296 2.38568 6.64181C2.48167 6.68456 2.64066 6.7212 2.86265 6.75174L3.63659 6.8525C4.66851 6.99297 5.18448 7.43573 5.18448 8.18079C5.18448 8.64492 4.98949 9.0144 4.59952 9.28922C4.21555 9.56403 3.68159 9.70144 2.99764 9.70144ZM2.82665 5.52422C3.08463 5.52422 3.28262 5.43872 3.42061 5.26773C3.5646 5.09062 3.63659 4.84939 3.63659 4.54404C3.63659 4.23869 3.5646 4.00051 3.42061 3.82952C3.28262 3.65241 3.08463 3.56386 2.82665 3.56386C2.56267 3.56386 2.35868 3.65241 2.21469 3.82952C2.0767 4.00051 2.00771 4.23869 2.00771 4.54404C2.00771 4.84939 2.0767 5.09062 2.21469 5.26773C2.35868 5.43872 2.56267 5.52422 2.82665 5.52422ZM3.04263 8.84035C3.81058 8.84035 4.19455 8.64798 4.19455 8.26323C4.19455 8.09224 4.12855 7.96399 3.99656 7.87849C3.86457 7.7991 3.64559 7.73497 3.33961 7.68612L2.34968 7.53955C2.00771 7.68001 1.83672 7.89376 1.83672 8.18079C1.83672 8.40064 1.94171 8.56553 2.1517 8.67546C2.36168 8.78538 2.65866 8.84035 3.04263 8.84035Z" />
      <path d="M5.45425 2.81269H6.49817L6.52517 3.2982C6.65716 3.14553 6.82515 3.01117 7.02913 2.89514C7.23912 2.77911 7.4581 2.72109 7.68608 2.72109C7.75808 2.72109 7.82407 2.7272 7.88407 2.73941L7.80307 3.857C7.68908 3.82646 7.56009 3.8112 7.4161 3.8112C7.23012 3.8112 7.05913 3.857 6.90314 3.9486C6.74715 4.0341 6.63616 4.14098 6.57016 4.26922V7.39298H5.45425V2.81269Z" />
      <path d="M10.2336 7.48458C9.71164 7.48458 9.26467 7.37771 8.8927 7.16396C8.52672 6.94411 8.25074 6.65403 8.06476 6.29371C7.88477 5.92729 7.79478 5.52117 7.79478 5.07535C7.79478 4.64786 7.88177 4.25701 8.05576 3.9028C8.22975 3.54859 8.48173 3.26767 8.8117 3.06003C9.14168 2.84628 9.53465 2.73941 9.99062 2.73941C10.4106 2.73941 10.7646 2.82796 11.0525 3.00507C11.3465 3.18217 11.5655 3.42035 11.7095 3.71959C11.8595 4.01884 11.9345 4.35472 11.9345 4.72725C11.9345 4.91046 11.9105 5.1181 11.8625 5.35017H8.95569C9.01569 5.75324 9.17168 6.05554 9.42366 6.25707C9.67564 6.45249 9.97862 6.55021 10.3326 6.55021C10.8186 6.55021 11.2685 6.42501 11.6825 6.17462L11.7365 7.13648C11.5445 7.2403 11.3195 7.3258 11.0615 7.39298C10.8096 7.45405 10.5336 7.48458 10.2336 7.48458ZM10.8006 4.58068C10.8006 4.34251 10.7346 4.13182 10.6026 3.9486C10.4706 3.76539 10.2666 3.67379 9.99062 3.67379C9.71464 3.67379 9.49265 3.75623 9.32467 3.92112C9.15668 4.08601 9.04269 4.30587 8.98269 4.58068H10.8006Z" />
      <path d="M14.6851 7.48458C14.1631 7.48458 13.7162 7.37771 13.3442 7.16396C12.9782 6.94411 12.7023 6.65403 12.5163 6.29371C12.3363 5.92729 12.2463 5.52117 12.2463 5.07535C12.2463 4.64786 12.3333 4.25701 12.5073 3.9028C12.6813 3.54859 12.9332 3.26767 13.2632 3.06003C13.5932 2.84628 13.9862 2.73941 14.4421 2.73941C14.8621 2.73941 15.2161 2.82796 15.504 3.00507C15.798 3.18217 16.017 3.42035 16.161 3.71959C16.311 4.01884 16.386 4.35472 16.386 4.72725C16.386 4.91046 16.362 5.1181 16.314 5.35017H13.4072C13.4672 5.75324 13.6232 6.05554 13.8752 6.25707C14.1271 6.45249 14.4301 6.55021 14.7841 6.55021C15.2701 6.55021 15.72 6.42501 16.134 6.17462L16.188 7.13648C15.996 7.2403 15.771 7.3258 15.513 7.39298C15.2611 7.45405 14.9851 7.48458 14.6851 7.48458ZM15.2521 4.58068C15.2521 4.34251 15.1861 4.13182 15.0541 3.9486C14.9221 3.76539 14.7181 3.67379 14.4421 3.67379C14.1661 3.67379 13.9442 3.75623 13.7762 3.92112C13.6082 4.08601 13.4942 4.30587 13.4342 4.58068H15.2521Z" />
      <path d="M19.0556 2.73941C19.6136 2.73941 20.0366 2.92873 20.3245 3.30737C20.6125 3.686 20.7565 4.19594 20.7565 4.83718V7.39298H19.6406V4.92879C19.6406 4.50129 19.5686 4.18678 19.4246 3.98525C19.2866 3.77761 19.0616 3.67379 18.7496 3.67379C18.4077 3.67379 18.1257 3.80509 17.9037 4.06769V7.39298H16.7878V2.81269H17.8317L17.8497 3.13331C18.2277 2.87071 18.6297 2.73941 19.0556 2.73941Z" />
      <path d="M22.6712 7.48458C22.3832 7.48458 22.1192 7.4571 21.8792 7.40214C21.6453 7.34717 21.4023 7.26168 21.1503 7.14564L21.2493 6.17462C21.5013 6.3273 21.7352 6.44333 21.9512 6.52272C22.1732 6.59601 22.4012 6.63265 22.6352 6.63265C23.0911 6.63265 23.3191 6.47997 23.3191 6.17462C23.3191 6.00973 23.2591 5.88454 23.1391 5.79904C23.0192 5.70743 22.8032 5.60056 22.4912 5.47842C22.0472 5.31353 21.7202 5.12726 21.5103 4.91962C21.3003 4.70588 21.1953 4.41885 21.1953 4.05853C21.1953 3.66157 21.3453 3.34095 21.6453 3.09667C21.9452 2.84628 22.3502 2.72109 22.8602 2.72109C23.3701 2.72109 23.8351 2.84018 24.2551 3.07835L24.1561 4.04937C23.9281 3.89059 23.7121 3.76845 23.5081 3.68295C23.3101 3.59745 23.1001 3.5547 22.8782 3.5547C22.6862 3.5547 22.5362 3.5944 22.4282 3.67379C22.3262 3.75318 22.2752 3.86616 22.2752 4.01273C22.2752 4.12876 22.3052 4.22342 22.3652 4.29671C22.4312 4.36999 22.5212 4.43717 22.6352 4.49824C22.7492 4.5532 22.9382 4.63259 23.2021 4.73641C23.6401 4.90741 23.9551 5.09673 24.1471 5.30437C24.3391 5.5059 24.4351 5.77766 24.4351 6.11966C24.4351 6.55326 24.2821 6.88915 23.9761 7.12732C23.6701 7.3655 23.2351 7.48458 22.6712 7.48458Z" />
      <path d="M27.1875 2.73941C27.6135 2.73941 27.9795 2.84628 28.2854 3.06003C28.5914 3.27378 28.8224 3.56081 28.9784 3.92112C29.1344 4.28144 29.2124 4.6784 29.2124 5.112C29.2124 5.5456 29.1344 5.94255 28.9784 6.30287C28.8224 6.66319 28.5914 6.95022 28.2854 7.16396C27.9795 7.37771 27.6135 7.48458 27.1875 7.48458C26.9175 7.48458 26.6865 7.45405 26.4946 7.39298C26.3086 7.33801 26.1286 7.24641 25.9546 7.11816V9.21178V9.703H25.585C25.1728 9.703 24.8387 9.36889 24.8387 8.95673V2.81269H25.7386L25.8556 3.23408C26.0476 3.06919 26.2486 2.94705 26.4586 2.86766C26.6686 2.78216 26.9115 2.73941 27.1875 2.73941ZM27.0165 6.55021C27.3465 6.55021 27.6045 6.4189 27.7905 6.1563C27.9765 5.8937 28.0694 5.5456 28.0694 5.112C28.0694 4.6784 27.9765 4.33029 27.7905 4.06769C27.6045 3.80509 27.3465 3.67379 27.0165 3.67379C26.6446 3.67379 26.3656 3.80204 26.1796 4.05853C25.9936 4.31503 25.9006 4.66618 25.9006 5.112C25.9006 5.55781 25.9936 5.90897 26.1796 6.16546C26.3656 6.42196 26.6446 6.55021 27.0165 6.55021Z" />
      <path d="M30.7806 7.48458C30.4087 7.48458 30.0967 7.36244 29.8447 7.11816C29.5987 6.86777 29.4757 6.53188 29.4757 6.1105C29.4757 5.71354 29.6167 5.39597 29.8987 5.1578C30.1807 4.91352 30.5137 4.74252 30.8976 4.64481C31.2816 4.54099 31.6506 4.48297 32.0046 4.47076C31.9926 4.20205 31.9236 4.00968 31.7976 3.89364C31.6776 3.77761 31.4766 3.71959 31.1946 3.71959C30.9966 3.71959 30.8016 3.74707 30.6097 3.80204C30.4237 3.857 30.2077 3.94555 29.9617 4.06769L29.8627 3.14247C30.4087 2.87376 30.9546 2.73941 31.5006 2.73941C32.0285 2.73941 32.4305 2.88598 32.7065 3.17912C32.9885 3.47226 33.1295 3.93944 33.1295 4.58068V5.81736C33.1295 6.04943 33.1385 6.21737 33.1565 6.32119C33.1805 6.4189 33.2165 6.48303 33.2645 6.51356C33.3185 6.53799 33.4054 6.55021 33.5254 6.55021H33.6694L33.5704 7.48458H33.1655C32.9195 7.48458 32.7125 7.43878 32.5445 7.34718C32.3765 7.24946 32.2475 7.11816 32.1575 6.95327C32.0135 7.11816 31.8156 7.24946 31.5636 7.34718C31.3176 7.43878 31.0566 7.48458 30.7806 7.48458ZM31.2486 6.61433C31.3626 6.61433 31.4916 6.58685 31.6356 6.53188C31.7796 6.47081 31.9056 6.38837 32.0135 6.28455V5.24024C31.6536 5.25857 31.3356 5.33796 31.0596 5.47842C30.7836 5.61888 30.6456 5.81431 30.6456 6.0647C30.6456 6.25401 30.6936 6.39448 30.7896 6.48608C30.8856 6.57158 31.0386 6.61433 31.2486 6.61433Z" />
      <path d="M34.0208 2.81269H35.0647L35.0917 3.2982C35.2237 3.14553 35.3917 3.01117 35.5957 2.89514C35.8057 2.77911 36.0247 2.72109 36.2527 2.72109C36.3247 2.72109 36.3906 2.7272 36.4506 2.73941L36.3696 3.857C36.2557 3.82646 36.1267 3.8112 35.9827 3.8112C35.7967 3.8112 35.6257 3.857 35.4697 3.9486C35.3137 4.0341 35.2027 4.14098 35.1367 4.26922V7.39298H34.0208V2.81269Z" />
      <path d="M36.8023 0.522552H37.9182V4.69061L39.3131 2.81269H40.573L38.9352 5.01123L40.609 7.39298H39.3491L37.9182 5.35933V7.39298H36.8023V0.522552Z" />
    </svg>
  );
};

export { Logo, LogoName };