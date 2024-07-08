export default function swapTokens() {
    return <>

        <div className="container mx-auto mt-[4.375rem] mb-20 px-4 2xl:max-w-[1280px] bg-black">
            <div className="tableCard p-10">
                <div className="flex w-full justify-between items-center">
                    <h2 className="text-white font-semibold text-xl">SWAP TOKENS</h2>
                    <button>
                        {settingBtn}
                    </button>
                </div>

                <div className="mt-[3.125rem]">

                    <div className="relative flex gap-1 items-center flex-col lg:flex-row ">


                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                            {exchange}
                        </button>

                        <div className="bg-[#1E1E1E] py-5 px-[3.125rem] w-full rounded-tl-lg rounded-bl-lg flex items-center justify-between ">

                            <div className="flex flex-col gap-1">
                                <h4 className="text-[#FAFAFA] text-[3.125rem] font-semibold">0.00</h4>
                                <p className="text-[#666666] font-mediums">$0.00</p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="bg-black px-3 py-2 h-fit flex items-center gap-2 ">
                                    <div className="ms-2F">
                                        {btc}
                                    </div>
                                    <h5 className="text-[#868686] text-xl flex items-center gap-2" >BTC {rightArrow}</h5>
                                </div>
                                <p className="text-sm text-[#fafafa]">Balance: <span className="text-[#3980FF]">24,240</span></p>
                            </div>
                        </div>

                        <div className="bg-[#1E1E1E] py-5 px-[3.125rem] w-full rounded-tr-lg rounded-br-lg flex items-center justify-between ">
                            <div className="flex flex-col gap-1">
                                <h4 className="text-[#FAFAFA] text-[3.125rem] font-semibold">0.00</h4>
                                <p className="text-[#666666] font-mediums">$0.00</p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="bg-black px-3 py-2 h-fit flex items-center gap-2 ">
                                    <div className="ms-2F">
                                        {bnb}
                                    </div>
                                    <h5 className="text-[#868686] text-xl flex items-center gap-2" >BNB {rightArrow}</h5>
                                </div>
                                <p className="text-sm text-[#fafafa]">Balance: <span className="text-[#3980FF]">24,240</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="mx-auto flex justify-center mt-8 bg-[#9945FF] text-white text-base font-medium rounded-tl-lg rounded-br-lg py-4 text-center w-[250px]">SWOP TOKENS</button>

                <div className="flex justify-between items-center mt-5">
                    <div>
                        <h6 className="text-[#FAFAFA] text-sm"> 1 BTC = 32.4039 ETH</h6>
                        <p className="text-[#3980FF] text-sm">Free exchage</p>
                    </div>

                    <p className="text-sm text-[#666666]">Updates in 4s</p>
                </div>

            </div>
        </div>
    </>
}

const settingBtn = [
    <>
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9996 0.97998C12.1223 0.97998 11.3596 1.54131 9.83561 2.66531L7.54095 4.35731C7.30095 4.53465 7.18094 4.62265 7.05161 4.69731C6.92228 4.77198 6.78495 4.83065 6.51161 4.95065L3.89961 6.09198C2.16361 6.85198 1.29561 7.23065 0.856944 7.98931C0.419611 8.74931 0.523611 9.69065 0.735611 11.5733L1.05294 14.4066C1.08628 14.7026 1.10228 14.8506 1.10228 15C1.10228 15.1493 1.08628 15.2973 1.05294 15.5933L0.735611 18.4266C0.524945 20.3093 0.419611 21.2506 0.856944 22.0106C1.29694 22.7706 2.16361 23.1493 3.89961 23.908L6.51295 25.0493C6.78495 25.1693 6.92228 25.228 7.05161 25.3026C7.17961 25.3773 7.30095 25.4653 7.54095 25.6426L9.83428 27.3346C11.3609 28.4586 12.1236 29.02 12.9996 29.02C13.8756 29.02 14.6396 28.4586 16.1636 27.3346L18.4583 25.6426C18.6983 25.4653 18.8183 25.3773 18.9476 25.3026C19.0769 25.228 19.2143 25.1693 19.4876 25.0493L22.0996 23.908C23.8356 23.148 24.7036 22.7693 25.1423 22.0106C25.5796 21.2506 25.4756 20.3093 25.2623 18.4266L24.9463 15.5933C24.9129 15.2973 24.8956 15.1493 24.8956 15C24.8956 14.8506 24.9129 14.7026 24.9463 14.4066L25.2636 11.5733C25.4743 9.69065 25.5796 8.74931 25.1423 7.98931C24.7023 7.22931 23.8356 6.85065 22.0996 6.09198L19.4863 4.95065C19.3023 4.87598 19.1225 4.79141 18.9476 4.69731C18.7785 4.59289 18.6151 4.47939 18.4583 4.35731L16.1649 2.66531C14.6369 1.54131 13.8743 0.97998 12.9996 0.97998ZM12.9996 20.3333C14.4141 20.3333 15.7707 19.7714 16.7708 18.7712C17.771 17.771 18.3329 16.4145 18.3329 15C18.3329 13.5855 17.771 12.2289 16.7708 11.2287C15.7707 10.2285 14.4141 9.66665 12.9996 9.66665C11.5851 9.66665 10.2286 10.2285 9.22838 11.2287C8.22818 12.2289 7.66628 13.5855 7.66628 15C7.66628 16.4145 8.22818 17.771 9.22838 18.7712C10.2286 19.7714 11.5851 20.3333 12.9996 20.3333Z" fill="#FAFAFA" />
        </svg>

    </>
]

const rightArrow = [
    <>

        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-1.19768e-07 0.817271L0.892353 2.94568e-07L5.75277 4.45412C5.83112 4.5255 5.8933 4.61037 5.93573 4.70385C5.97816 4.79734 6 4.89759 6 4.99884C6 5.1001 5.97816 5.20035 5.93573 5.29384C5.8933 5.38732 5.83112 5.47219 5.75277 5.54356L0.892353 10L0.000840868 9.18273L4.56269 5L-1.19768e-07 0.817271Z" fill="#868686" />
        </svg>
    </>
]

const btc = [
    <>

        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.135 14.3075C23.7748 13.5285 24.2081 12.6009 24.3948 11.6103C24.5815 10.6197 24.5156 9.59802 24.2032 8.6396C23.8908 7.68118 23.3419 6.81692 22.6073 6.12663C21.8727 5.43633 20.976 4.94225 20 4.69V3C20 2.60218 19.842 2.22064 19.5607 1.93934C19.2794 1.65804 18.8978 1.5 18.5 1.5C18.1022 1.5 17.7206 1.65804 17.4393 1.93934C17.158 2.22064 17 2.60218 17 3V4.5H15V3C15 2.60218 14.842 2.22064 14.5607 1.93934C14.2794 1.65804 13.8978 1.5 13.5 1.5C13.1022 1.5 12.7206 1.65804 12.4393 1.93934C12.158 2.22064 12 2.60218 12 3V4.5H9C8.60218 4.5 8.22064 4.65804 7.93934 4.93934C7.65804 5.22064 7.5 5.60218 7.5 6C7.5 6.39782 7.65804 6.77936 7.93934 7.06066C8.22064 7.34196 8.60218 7.5 9 7.5H9.5V23.5H9C8.60218 23.5 8.22064 23.658 7.93934 23.9393C7.65804 24.2206 7.5 24.6022 7.5 25C7.5 25.3978 7.65804 25.7794 7.93934 26.0607C8.22064 26.342 8.60218 26.5 9 26.5H12V28C12 28.3978 12.158 28.7794 12.4393 29.0607C12.7206 29.342 13.1022 29.5 13.5 29.5C13.8978 29.5 14.2794 29.342 14.5607 29.0607C14.842 28.7794 15 28.3978 15 28V26.5H17V28C17 28.3978 17.158 28.7794 17.4393 29.0607C17.7206 29.342 18.1022 29.5 18.5 29.5C18.8978 29.5 19.2794 29.342 19.5607 29.0607C19.842 28.7794 20 28.3978 20 28V26.5C21.4417 26.4994 22.8422 26.0195 23.9813 25.1359C25.1205 24.2522 25.9335 23.0149 26.2925 21.6187C26.6515 20.2224 26.5361 18.7464 25.9645 17.4229C25.393 16.0994 24.3976 15.0034 23.135 14.3075ZM21.5 10.5C21.5 11.2956 21.1839 12.0587 20.6213 12.6213C20.0587 13.1839 19.2956 13.5 18.5 13.5H12.5V7.5H18.5C19.2956 7.5 20.0587 7.81607 20.6213 8.37868C21.1839 8.94129 21.5 9.70435 21.5 10.5ZM20 23.5H12.5V16.5H20C20.9283 16.5 21.8185 16.8687 22.4749 17.5251C23.1313 18.1815 23.5 19.0717 23.5 20C23.5 20.9283 23.1313 21.8185 22.4749 22.4749C21.8185 23.1313 20.9283 23.5 20 23.5Z" fill="white" />
        </svg>

    </>
]

const exchange = [
    <>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="25" fill="black" />
            <path d="M21.0257 20.9998C20.8895 19.2341 21.2975 17.4691 22.1948 15.9423C23.0921 14.4155 24.4356 13.2002 26.0445 12.4601C27.6534 11.7199 29.4504 11.4904 31.1936 11.8024C32.9369 12.1144 34.5427 12.953 35.7949 14.2052C37.0472 15.4575 37.8858 17.0633 38.1978 18.8066C38.5098 20.5498 38.2803 22.3468 37.5401 23.9557C36.7999 25.5645 35.5847 26.908 34.0579 27.8053C32.5311 28.7026 30.766 29.1107 29.0003 28.9745" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M38.3337 31.6665C38.3337 32.7274 37.9122 33.7448 37.1621 34.4949C36.4119 35.2451 35.3945 35.6665 34.3337 35.6665H31.667M31.667 35.6665L34.3337 32.9998M31.667 35.6665L34.3337 38.3332M11.667 18.3332C11.667 17.2723 12.0884 16.2549 12.8386 15.5047C13.5887 14.7546 14.6061 14.3332 15.667 14.3332H18.3337M18.3337 14.3332L15.667 16.9998M18.3337 14.3332L15.667 11.6665M20.3337 38.3332C18.0351 38.3332 15.8307 37.4201 14.2054 35.7948C12.5801 34.1694 11.667 31.965 11.667 29.6665C11.667 27.368 12.5801 25.1636 14.2054 23.5382C15.8307 21.9129 18.0351 20.9998 20.3337 20.9998C22.6322 20.9998 24.8366 21.9129 26.4619 23.5382C28.0872 25.1636 29.0003 27.368 29.0003 29.6665C29.0003 31.965 28.0872 34.1694 26.4619 35.7948C24.8366 37.4201 22.6322 38.3332 20.3337 38.3332Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    </>
]

const bnb = [
    <>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2006_189)">
                <path d="M19.8213 25.7933C19.9981 26.0996 20.0461 26.4635 19.9545 26.8051C19.863 27.1466 19.6396 27.4379 19.3333 27.6147L17.6667 28.5773C17.1599 28.8699 16.5851 29.0239 16 29.0239C15.4149 29.0239 14.8401 28.8699 14.3333 28.5773L12.6667 27.6133C12.3629 27.4353 12.142 27.1443 12.052 26.8039C11.962 26.4635 12.0103 26.1013 12.1863 25.7964C12.3624 25.4915 12.6519 25.2686 12.9917 25.1763C13.3314 25.0841 13.6939 25.13 14 25.304L15.6667 26.2667C15.768 26.3252 15.883 26.356 16 26.356C16.117 26.356 16.232 26.3252 16.3333 26.2667L18 25.304C18.3063 25.1272 18.6702 25.0793 19.0117 25.1708C19.3533 25.2623 19.6445 25.4871 19.8213 25.7933ZM26.392 14.8253C26.7456 14.8253 27.0848 14.9658 27.3348 15.2159C27.5849 15.4659 27.7253 15.805 27.7253 16.1587V20.8453C27.7253 21.4304 27.5713 22.0052 27.2787 22.512C26.9862 23.0187 26.5654 23.4394 26.0587 23.732L22 26.076C21.8483 26.1635 21.6808 26.2204 21.5071 26.2432C21.3335 26.266 21.157 26.2544 20.9878 26.209C20.8186 26.1636 20.66 26.0854 20.5211 25.9787C20.3821 25.872 20.2656 25.7391 20.178 25.5873C20.0905 25.4356 20.0337 25.2681 20.0108 25.0945C19.988 24.9208 19.9996 24.7443 20.045 24.5751C20.0904 24.4059 20.1686 24.2473 20.2753 24.1084C20.382 23.9695 20.515 23.8529 20.6667 23.7653L24.7253 21.4227C24.8267 21.3642 24.9108 21.28 24.9694 21.1787C25.0279 21.0773 25.0587 20.9624 25.0587 20.8453V16.1587C25.0587 15.805 25.1992 15.4659 25.4492 15.2159C25.6993 14.9658 26.0384 14.8253 26.392 14.8253ZM5.60801 14.8253C5.96163 14.8253 6.30077 14.9658 6.55082 15.2159C6.80087 15.4659 6.94135 15.805 6.94135 16.1587V20.8453C6.94135 20.9624 6.97216 21.0773 7.03067 21.1787C7.08918 21.28 7.17334 21.3642 7.27468 21.4227L11.3333 23.7653C11.6371 23.9434 11.8581 24.2344 11.9481 24.5748C12.0381 24.9152 11.9898 25.2773 11.8137 25.5823C11.6377 25.8872 11.3482 26.1101 11.0084 26.2023C10.6686 26.2946 10.3061 26.2487 10 26.0747L5.94135 23.7333C5.43463 23.4408 5.01384 23.02 4.72128 22.5133C4.42872 22.0066 4.27469 21.4318 4.27468 20.8467V16.16C4.27468 15.8064 4.41516 15.4672 4.6652 15.2172C4.91525 14.9671 5.25439 14.8253 5.60801 14.8253ZM20.8333 9.952L20.9907 10.0293L23.0093 11.1733C23.1923 11.2772 23.3481 11.423 23.464 11.5986C23.5799 11.7743 23.6525 11.9749 23.676 12.184L23.684 12.344L23.6667 14.664C23.6649 14.8696 23.6156 15.0721 23.5226 15.2555C23.4297 15.4389 23.2955 15.5984 23.1307 15.7213L23 15.808L19.3333 17.924V22.16C19.3332 22.366 19.2853 22.5691 19.1935 22.7535C19.1016 22.9379 18.9683 23.0985 18.804 23.2227L18.6747 23.3107L16.6747 24.484C16.4962 24.5887 16.2959 24.6504 16.0895 24.6643C15.883 24.6782 15.6762 24.6439 15.4853 24.564L15.3253 24.484L13.3253 23.3107C13.1476 23.2063 12.9965 23.0622 12.8838 22.8896C12.7711 22.7171 12.7 22.5207 12.676 22.316L12.6667 22.16V17.924L9.00001 15.808C8.82169 15.705 8.66966 15.562 8.55584 15.3904C8.44203 15.2187 8.36952 15.023 8.34401 14.8187L8.33335 14.6627L8.31601 12.3427C8.31464 12.1325 8.36297 11.925 8.45704 11.7371C8.55112 11.5492 8.68828 11.3862 8.85735 11.2613L8.99068 11.1733L11.008 10.0293C11.1843 9.92909 11.3811 9.87038 11.5835 9.85767C11.7859 9.84496 11.9886 9.87859 12.176 9.956L12.3333 10.0333L16 12.1507L19.6667 10.0333C19.8423 9.93223 20.0386 9.87247 20.2408 9.85861C20.4429 9.84475 20.6456 9.87714 20.8333 9.95333V9.952ZM20.34 12.7253L16.6667 14.8453C16.49 14.9475 16.2922 15.0077 16.0885 15.0213C15.8848 15.035 15.6808 15.0017 15.492 14.924L15.332 14.844L11.6613 12.724L10.988 13.1067L10.9947 13.88L14.6667 16C14.8463 16.1037 14.9992 16.2478 15.1133 16.4209C15.2274 16.5941 15.2995 16.7914 15.324 16.9973L15.3333 17.1547V21.396L16 21.788L16.6667 21.396V17.1547C16.6666 16.9473 16.7149 16.7429 16.8077 16.5575C16.9006 16.3721 17.0353 16.2109 17.2013 16.0867L17.3333 16L21.0053 13.88L21.012 13.1067L20.3387 12.7253H20.34ZM23.496 17.604L23.5053 17.6933V19.5627C23.5056 19.7702 23.4574 19.975 23.3646 20.1606C23.2718 20.3463 23.1369 20.5077 22.9707 20.632L22.8387 20.7187L21.2187 21.6533C21.1644 21.6848 21.1035 21.703 21.0409 21.7066C20.9783 21.7102 20.9158 21.699 20.8583 21.674C20.8008 21.649 20.75 21.6107 20.71 21.5625C20.67 21.5142 20.6419 21.4571 20.628 21.396L20.6187 21.3067V19.436C20.6188 19.2289 20.6672 19.0247 20.76 18.8395C20.8528 18.6544 20.9875 18.4934 21.1533 18.3693L21.2867 18.2813L22.9053 17.3467C22.9596 17.3152 23.0205 17.297 23.0831 17.2934C23.1457 17.2898 23.2083 17.301 23.2657 17.326C23.3232 17.3511 23.374 17.3893 23.414 17.4375C23.454 17.4858 23.4821 17.5429 23.496 17.604ZM9.09335 17.3467L10.7133 18.2813C10.916 18.3984 11.0843 18.5667 11.2014 18.7694C11.3184 18.972 11.38 19.202 11.38 19.436V21.3067C11.3801 21.3769 11.3616 21.4459 11.3265 21.5068C11.2914 21.5676 11.2409 21.6181 11.1801 21.6533C11.1193 21.6884 11.0503 21.7069 10.9801 21.7069C10.9098 21.7069 10.8408 21.6885 10.78 21.6533L9.16001 20.72C8.95713 20.6029 8.78869 20.4343 8.67165 20.2314C8.55462 20.0285 8.49312 19.7983 8.49335 19.564V17.6933C8.4933 17.6231 8.51175 17.5541 8.54684 17.4932C8.58193 17.4324 8.63242 17.3819 8.69323 17.3467C8.75405 17.3116 8.82305 17.2931 8.89328 17.2931C8.96352 17.2931 9.03252 17.3116 9.09335 17.3467ZM24.3307 7.27067L26.0573 8.268C26.5641 8.56056 26.9848 8.98133 27.2774 9.48805C27.57 9.99476 27.724 10.5696 27.724 11.1547V13.0787C27.724 13.4323 27.5835 13.7714 27.3335 14.0215C27.0834 14.2715 26.7443 14.412 26.3907 14.412C26.0371 14.412 25.6979 14.2715 25.4479 14.0215C25.1978 13.7714 25.0573 13.4323 25.0573 13.0787V11.1547C25.0573 11.0376 25.0265 10.9227 24.968 10.8213C24.9095 10.72 24.8254 10.6358 24.724 10.5773L22.9973 9.58C22.6936 9.40193 22.4726 9.11095 22.3826 8.77056C22.2926 8.43016 22.3409 8.06799 22.517 7.76308C22.693 7.45816 22.9825 7.23525 23.3223 7.143C23.6621 7.05075 24.0246 7.09665 24.3307 7.27067ZM9.42801 7.79333C9.60482 8.09957 9.65273 8.4635 9.56121 8.80507C9.46969 9.14663 9.24624 9.43785 8.94001 9.61467L7.27335 10.5773C7.172 10.6358 7.08785 10.72 7.02933 10.8213C6.97082 10.9227 6.94002 11.0376 6.94001 11.1547V13.0787C6.94001 13.4323 6.79954 13.7714 6.54949 14.0215C6.29944 14.2715 5.9603 14.412 5.60668 14.412C5.25306 14.412 4.91392 14.2715 4.66387 14.0215C4.41382 13.7714 4.27335 13.4323 4.27335 13.0787V11.1547C4.27326 10.5692 4.42738 9.99404 4.72019 9.48706C5.01301 8.98008 5.43418 8.55917 5.94135 8.26667L7.60801 7.304C7.91425 7.1272 8.27818 7.07929 8.61974 7.1708C8.96131 7.26232 9.25253 7.48577 9.42935 7.792L9.42801 7.79333ZM16.6667 7.72L18.2867 8.65467C18.3476 8.68974 18.3982 8.74025 18.4334 8.80111C18.4686 8.86197 18.4871 8.93103 18.4871 9.00133C18.4871 9.07164 18.4686 9.1407 18.4334 9.20156C18.3982 9.26242 18.3476 9.31293 18.2867 9.348L16.6667 10.28C16.464 10.397 16.2341 10.4586 16 10.4586C15.766 10.4586 15.536 10.397 15.3333 10.28L13.7133 9.34533C13.6524 9.31026 13.6018 9.25975 13.5666 9.19889C13.5314 9.13803 13.5129 9.06897 13.5129 8.99867C13.5129 8.92837 13.5314 8.85931 13.5666 8.79845C13.6018 8.73759 13.6524 8.68707 13.7133 8.652L15.3333 7.72C15.536 7.60298 15.766 7.54137 16 7.54137C16.2341 7.54137 16.464 7.60298 16.6667 7.72ZM17.6667 3.424L21.7253 5.76667C22.0318 5.94348 22.2554 6.23477 22.347 6.57646C22.4387 6.91815 22.3908 7.28225 22.214 7.58867C22.0372 7.89508 21.7459 8.11871 21.4042 8.21035C21.0625 8.30199 20.6984 8.25415 20.392 8.07733L16.3333 5.732C16.232 5.67349 16.117 5.64268 16 5.64268C15.883 5.64268 15.768 5.67349 15.6667 5.732L11.608 8.07467C11.4563 8.1636 11.2885 8.22164 11.1143 8.24547C10.9401 8.26929 10.7629 8.25841 10.5929 8.21347C10.4229 8.16852 10.2635 8.09039 10.1238 7.98358C9.98409 7.87677 9.86692 7.74339 9.779 7.5911C9.69107 7.43882 9.63414 7.27066 9.61148 7.09628C9.58881 6.92191 9.60086 6.74478 9.64693 6.57508C9.693 6.40538 9.77219 6.24647 9.87992 6.1075C9.98766 5.96853 10.1218 5.85224 10.2747 5.76533L14.3333 3.42267C14.8401 3.13011 15.4149 2.97609 16 2.97609C16.5851 2.97609 17.1599 3.13011 17.6667 3.42267V3.424Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_2006_189">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    </>
]