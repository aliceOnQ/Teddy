import styles from "./icons.module.css"

export function CartIcon({ color }) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         className={styles.headerIcon}
         viewBox="0 0 32 32"
      >
         <path fill="none" stroke={color} strokeLinecap="square" strokeWidth="1.5" d="M20,4 L24,16 M12,4 L8,16 M3,12 L29,12 C28.3333333,22 26.3333333,27 23,27 C18,27 14,27 9,27 C5.66666667,27 3.66666667,22 3,12 Z" />
      </svg>
   );
}

export function Basket({ color }) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 28.138 25.265"
         className={styles.icon}
      >
         <path fill="none" stroke={color} strokeLinecap="square" strokeWidth="1" strokeMiterlimit="10" d="M18.069 1.265l4 12M10.069 1.265l-4 12M1.069 9.265h26s-1 15-6 15h-14c-5 0-6-15-6-15z"></path>
      </svg>
   );
}

export function Sun({ color }) {
   return (
      <svg xmlns="http://www.w3.org/2000/svg"
         className={styles.floatIcon}
         viewBox="0 0 24 24"
      >
         <path fill={color} d="M12 15.5C12.9667 15.5 13.7917 15.1583 14.475 14.475C15.1583 13.7917 15.5 12.9667 15.5 12C15.5 11.0333 15.1583 10.2083 14.475 9.525C13.7917 8.84167 12.9667 8.5 12 8.5C11.0333 8.5 10.2083 8.84167 9.525 9.525C8.84167 10.2083 8.5 11.0333 8.5 12C8.5 12.9667 8.84167 13.7917 9.525 14.475C10.2083 15.1583 11.0333 15.5 12 15.5ZM12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM1.75 12.75C1.53333 12.75 1.35417 12.6792 1.2125 12.5375C1.07083 12.3958 1 12.2167 1 12C1 11.7833 1.07083 11.6042 1.2125 11.4625C1.35417 11.3208 1.53333 11.25 1.75 11.25H4.25C4.46667 11.25 4.64583 11.3208 4.7875 11.4625C4.92917 11.6042 5 11.7833 5 12C5 12.2167 4.92917 12.3958 4.7875 12.5375C4.64583 12.6792 4.46667 12.75 4.25 12.75H1.75ZM19.75 12.75C19.5333 12.75 19.3542 12.6792 19.2125 12.5375C19.0708 12.3958 19 12.2167 19 12C19 11.7833 19.0708 11.6042 19.2125 11.4625C19.3542 11.3208 19.5333 11.25 19.75 11.25H22.25C22.4667 11.25 22.6458 11.3208 22.7875 11.4625C22.9292 11.6042 23 11.7833 23 12C23 12.2167 22.9292 12.3958 22.7875 12.5375C22.6458 12.6792 22.4667 12.75 22.25 12.75H19.75ZM12 5C11.7833 5 11.6042 4.92917 11.4625 4.7875C11.3208 4.64583 11.25 4.46667 11.25 4.25V1.75C11.25 1.53333 11.3208 1.35417 11.4625 1.2125C11.6042 1.07083 11.7833 1 12 1C12.2167 1 12.3958 1.07083 12.5375 1.2125C12.6792 1.35417 12.75 1.53333 12.75 1.75V4.25C12.75 4.46667 12.6792 4.64583 12.5375 4.7875C12.3958 4.92917 12.2167 5 12 5ZM12 23C11.7833 23 11.6042 22.9292 11.4625 22.7875C11.3208 22.6458 11.25 22.4667 11.25 22.25V19.75C11.25 19.5333 11.3208 19.3542 11.4625 19.2125C11.6042 19.0708 11.7833 19 12 19C12.2167 19 12.3958 19.0708 12.5375 19.2125C12.6792 19.3542 12.75 19.5333 12.75 19.75V22.25C12.75 22.4667 12.6792 22.6458 12.5375 22.7875C12.3958 22.9292 12.2167 23 12 23ZM6 7.05L4.575 5.65C4.425 5.5 4.35417 5.32083 4.3625 5.1125C4.37083 4.90417 4.44167 4.725 4.575 4.575C4.725 4.425 4.90417 4.35 5.1125 4.35C5.32083 4.35 5.5 4.425 5.65 4.575L7.05 6C7.18333 6.15 7.25 6.325 7.25 6.525C7.25 6.725 7.18333 6.89167 7.05 7.025C6.91667 7.175 6.74583 7.25 6.5375 7.25C6.32917 7.25 6.15 7.18333 6 7.05ZM18.35 19.425L16.95 18C16.8167 17.85 16.75 17.6708 16.75 17.4625C16.75 17.2542 16.825 17.0833 16.975 16.95C17.1083 16.8 17.275 16.725 17.475 16.725C17.675 16.725 17.85 16.8 18 16.95L19.425 18.35C19.575 18.5 19.6458 18.6792 19.6375 18.8875C19.6292 19.0958 19.5583 19.275 19.425 19.425C19.275 19.575 19.0958 19.65 18.8875 19.65C18.6792 19.65 18.5 19.575 18.35 19.425ZM16.95 7.05C16.8 6.9 16.725 6.725 16.725 6.525C16.725 6.325 16.8 6.15 16.95 6L18.35 4.575C18.5 4.425 18.6792 4.35417 18.8875 4.3625C19.0958 4.37083 19.275 4.44167 19.425 4.575C19.575 4.725 19.65 4.90417 19.65 5.1125C19.65 5.32083 19.575 5.5 19.425 5.65L18 7.05C17.8667 7.18333 17.6958 7.25 17.4875 7.25C17.2792 7.25 17.1 7.18333 16.95 7.05ZM4.575 19.425C4.425 19.275 4.35 19.0958 4.35 18.8875C4.35 18.6792 4.425 18.5 4.575 18.35L6 16.95C6.15 16.8 6.325 16.725 6.525 16.725C6.725 16.725 6.9 16.8 7.05 16.95C7.2 17.1 7.275 17.275 7.275 17.475C7.275 17.675 7.2 17.85 7.05 18L5.65 19.425C5.5 19.575 5.32083 19.6458 5.1125 19.6375C4.90417 19.6292 4.725 19.5583 4.575 19.425Z" />
      </svg>
   );
}

export function Moon({ color }) {
   return (
      <svg xmlns="http://www.w3.org/2000/svg"
         className={styles.floatIcon}
         viewBox="0 0 24 24"
      >
         <path fill={color} d="M12 21.0001C9.5 21.0001 7.375 20.1251 5.625 18.3751C3.875 16.6251 3 14.5001 3 12.0001C3 9.75011 3.6625 7.84178 4.9875 6.27511C6.3125 4.70844 8.05 3.70011 10.2 3.25011C10.8833 3.11678 11.35 3.23344 11.6 3.60011C11.85 3.96678 11.8417 4.46678 11.575 5.10011C11.425 5.48344 11.3083 5.87511 11.225 6.27511C11.1417 6.67511 11.1 7.08344 11.1 7.50011C11.1 9.00011 11.625 10.2751 12.675 11.3251C13.725 12.3751 15 12.9001 16.5 12.9001C16.9167 12.9001 17.3208 12.8626 17.7125 12.7876C18.1042 12.7126 18.4833 12.6084 18.85 12.4751C19.5667 12.2084 20.1 12.2209 20.45 12.5126C20.8 12.8043 20.8917 13.3001 20.725 14.0001C20.275 16.0168 19.2667 17.6876 17.7 19.0126C16.1333 20.3376 14.2333 21.0001 12 21.0001ZM12 19.5001C13.8167 19.5001 15.4 18.9376 16.75 17.8126C18.1 16.6876 18.9417 15.3668 19.275 13.8501C18.8583 14.0334 18.4125 14.1709 17.9375 14.2626C17.4625 14.3543 16.9833 14.4001 16.5 14.4001C14.5833 14.4001 12.9542 13.7293 11.6125 12.3876C10.2708 11.0459 9.6 9.41678 9.6 7.50011C9.6 7.10011 9.64167 6.67094 9.725 6.21261C9.80833 5.75428 9.95833 5.23344 10.175 4.65011C8.54167 5.10011 7.1875 6.01261 6.1125 7.38761C5.0375 8.76261 4.5 10.3001 4.5 12.0001C4.5 14.0834 5.22917 15.8543 6.6875 17.3126C8.14583 18.7709 9.91667 19.5001 12 19.5001Z" />
      </svg>
   );
}

export function FavIcon({ color }) {
   return (
      <svg fill={color} height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 471.701 471.701" xmlSpace="preserve">
         <g>
            <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
		c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
		l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
		C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
		s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
		c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
		C444.801,187.101,434.001,213.101,414.401,232.701z"/>
         </g>
      </svg>

   );

}

export function FavoriteIcon({ color }) {
   return (
      
      <svg className={styles.headerFavIcon} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-heart-circle" width="48" height="48" viewBox="0 0 24 24">
         <path fill={color} d="M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M9.75,7.82C10.62,7.82 11.45,8.23 12,8.87C12.55,8.23 13.38,7.82 14.25,7.82C15.79,7.82 17,9.03 17,10.57C17,12.46 15.3,14 12.72,16.34L12,17L11.28,16.34C8.7,14 7,12.46 7,10.57C7,9.03 8.21,7.82 9.75,7.82Z" />
      </svg>
   );
}

export function UserIcon({color}){
   return(
      <svg className={styles.headerUserIcon} fill={color} id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1021.33 1021.34">
         <defs><style><div className="cls-1"></div></style></defs>
         <g id="圖層_8" data-name="圖層 8">
            <path className="cls-1" d="M513.33,2.66C231.3,2.66,2.67,231.29,2.67,513.33a510.67,510.67,0,1,0,1021.33,0C1024,231.29,795.37,2.66,513.33,2.66Zm8.27,227.11A171.57,171.57,0,1,1,350,401.33,171.57,171.57,0,0,1,521.6,229.77Zm-1.07,693.78a409.07,409.07,0,0,1-297.81-128.1c41.1-76.88,102.33-136.88,174.8-169.38a302.26,302.26,0,0,1,249.39,0c71.75,32.17,132.48,91.31,173.57,167.09A409.06,409.06,0,0,1,520.53,923.55Z" transform="translate(-2.67 -2.66)"/></g>
      </svg>
   );
}